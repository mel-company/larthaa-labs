import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useFBO, useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ lensProps = {} }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }} style={{ width: '100%', height: '100%' }}>
        <Lens modeProps={lensProps} />
      </Canvas>
    </div>
  );
}

const Lens = memo(function Lens({ modeProps = {} }) {
  const ref = useRef();
  const { nodes } = useGLTF('/assets/3d/lens.glb');
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const geoWidthRef = useRef(1);

  useEffect(() => {
    const geo = nodes['Cylinder']?.geometry;
    if (geo) {
      geo.computeBoundingBox();
      geoWidthRef.current = geo.boundingBox.max.x - geo.boundingBox.min.x || 1;
    }
  }, [nodes]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = (pointer.x * v.width) / 2;
    const destY = (pointer.y * v.height) / 2;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.setClearColor(0x000000, 0);
    gl.render(state.scene, camera);
    gl.setRenderTarget(null);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      <mesh position={[0, 0, -5]} scale={[vp.width * 2, vp.height * 2, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#1B53E2" />
      </mesh>
      <mesh ref={ref} scale={scale ?? 0.15} rotation-x={Math.PI / 2} geometry={nodes['Cylinder']?.geometry}>
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});
