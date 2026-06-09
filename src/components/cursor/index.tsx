import { useEffect, useState, useRef } from "react"

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const [isPointer, setIsPointer] = useState(false)
    const cursorRef = useRef<HTMLDivElement>(null)
    const targetPosition = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef<number | null>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetPosition.current = { x: e.clientX, y: e.clientY }
            setIsVisible(true)

            const target = e.target as HTMLElement
            const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='pointer']")
            setIsPointer(!!isInteractive)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        const animate = () => {
            setPosition(prev => ({
                x: prev.x + (targetPosition.current.x - prev.x) * 0.15,
                y: prev.y + (targetPosition.current.y - prev.y) * 0.15
            }))
            animationFrameRef.current = requestAnimationFrame(animate)
        }

        window.addEventListener("mousemove", handleMouseMove)
        document.body.addEventListener("mouseleave", handleMouseLeave)
        animationFrameRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.body.removeEventListener("mouseleave", handleMouseLeave)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [])

    if (typeof window === "undefined") return null

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none hidden md:block fixed z-9999 -translate-x-1/4 -translate-y-1/4 transition-opacity duration-100 ea se-in"
            style={{
                left: position.x,
                top: position.y,
                opacity: isVisible ? 1 : 0,
            }}
        >

            <img
                src={isPointer ? "/cursor-pointer.svg" : "/cursor.svg"}
                alt=""
                className="h-8 w-auto drop-shadow-lg transition-transform duration-150"
                style={{
                    imageRendering: "auto",
                    transform: isPointer ? "scale(1.1)" : "scale(1)"
                }}
            />
        </div>
    )
}

export default CustomCursor
