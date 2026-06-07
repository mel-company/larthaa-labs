import { BtnPrimary, GlassIcon } from "@/components/ui/button"
import { usePointerPosition } from "@/hooks/position"
import { AltArrowRight } from "@solar-icons/react"
import { useState, useEffect } from "react"

const HeroSection = () => {

    return (
        <header className="flex items-center justify-center relative h-screen w-screen overflow-visible">
            <Content />
            <GlassLens />
            <BG />
        </header>)
}

export default HeroSection


const BG = () => {
    return (
        <div dir="ltr" className="flex -z-10 items-center h-[140vh] justify-center w-screen absolute top-0 left-0 overflow-hidden">
            <div className="h-full w-full absolute top-0 left-0 bg-linear-to-b from-white via-white/0 to-white z-10" />
            <Rows />
            <div className="w-full translate-y-1/4 scale-150 aspect-square bg-[#1B53E2] rounded-full blur-[6rem]" />
            <div className="w-full translate-y-1/3 scale-200 aspect-square bg-[#00EFFE] rounded-full blur-[6rem] translate-x-1/2" />
            <div className="w-full translate-y-1/2 scale-150 aspect-square bg-[#1B53E2] rounded-full blur-[6rem] translate-x-1/2" />
        </div>
    )

}

const AnimatedWord = ({ text, delay, className = "" }: { text: string, delay: number, className?: string }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, delay)
        return () => clearTimeout(timer)
    }, [delay])

    return (
        <span
            className={`inline-block transition-all duration-1000 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? 'blur(0px)' : 'blur(10px)',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
        >
            {text}{" "}
        </span>
    )
}

const FadeIn = ({ children, delay, className = "" }: { children: React.ReactNode, delay: number, className?: string }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, delay)
        return () => clearTimeout(timer)
    }, [delay])

    return (
        <div
            className={`transition-all duration-1000 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
        >
            {children}
        </div>
    )
}

const Content = () => {
    return <div className="flex flex-col relative mt-16 items-center justify-center gap-8 z-20 text-center text-[#070C39]">
        <FadeIn delay={1200} className="z-20">
            <Badge />
        </FadeIn>
        <h1 className="text-8xl font-serif leading-snug font-bold">

            <span className="font-normal">
                <AnimatedWord text="حلـــــول" delay={0} />{" "}
                <AnimatedWord text="برمجية" delay={200} />
            </span><br />
            <AnimatedWord text="تَصنع" delay={400} />{" "}
            <AnimatedWord text="فرقـاً" delay={600} />{" "}
            <AnimatedWord text="حقيقيـاً" delay={800} className="linear" />{" "}
            <AnimatedWord text="لأعمالك" delay={1000} />
        </h1>
        <FadeIn delay={1400}>
            <p className="text-2xl text-[#414673] max-w-4xl">في لارثا لابس نصمم ونطوّر مواقع، تطبيقات، وأنظمة رقمية تساعد الشركات على العمل بذكاء، سرعة، ووضوح.</p>
        </FadeIn>
        <FadeIn delay={1600}>
            <div className="flex items-center gap-4 mt-4">
                <BtnPrimary primary>
                    <GlassIcon>
                        <AltArrowRight weight={"Outline"} size={24} color='#fff' />
                    </GlassIcon>
                    اطلب إستشــارة
                </BtnPrimary>
                <BtnPrimary>
                    أبدأ مشروعــك
                </BtnPrimary>
            </div>
        </FadeIn>
    </div>
}

const Badge = () => {
    const { x, y } = usePointerPosition()
    return (
        <div className="flex flex-col text-nowrap items-center absolute top-0 -translate-y-1/3 origin-center z-20" style={{ left: (50 + x) + '%', transform: 'translateX(-50%)', top: (y) + 'px', rotate: `calc(-${(2 + y * 2) / 3}deg` }}>
            <img src="/star-list.svg" alt="star" />
            <p className="px-5 py-2 rounded-2xl text-xl border border-[#93C1F5] bg-[#1B53E2]/5 backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded bg-[#1B53E2] inline-block me-2.5" />
                حلول برمجية مبتكرة
            </p>
        </div>
    )
}

const Rows = ({ length = 20 }) => {
    return (
        <div className="flex absolute bottom-0 left-0 w-full h-full z-10">
            {
                Array.from({ length }).map((_, i) => (
                    <div key={i} className="w-64 h-full bg-linear-to-r from-white/80 via-white/0 to-white/0 opacity-10 backdrop-blur-sm" />
                ))
            }
        </div>

    )
}

const GlassLens = () => {
    const [pos, setPos] = useState({ x: -999, y: -999 })
    const targetRef = { current: { x: -999, y: -999 } }

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMove)
        return () => window.removeEventListener('mousemove', handleMove)
    }, [])

    useEffect(() => {
        let raf: number
        const animate = () => {
            setPos(prev => ({
                x: prev.x + (targetRef.current.x - prev.x) * 0.08,
                y: prev.y + (targetRef.current.y - prev.y) * 0.08,
            }))
            raf = requestAnimationFrame(animate)
        }
        raf = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(raf)
    }, [])

    const size = 280
    const half = size / 2

    return (
        <div
            className="fixed pointer-events-none z-15 rounded-full"
            style={{
                left: pos.x - half,
                top: pos.y - half,
                width: size,
                height: size,
                background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 70%)',
                boxShadow: 'inset 0 0 40px rgba(255,255,255,0.15), 0 0 60px rgba(255,255,255,0.1)',
                backdropFilter: 'blur(24px) saturate(140%)',
                WebkitBackdropFilter: 'blur(24px) saturate(140%)',
                border: '1px solid rgba(255,255,255,0.25)',
            }}
        >
            <div
                className="absolute rounded-full"
                style={{
                    inset: '12%',
                    background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
                    filter: 'blur(8px)',
                }}
            />
            <div
                className="absolute rounded-full border border-white/20"
                style={{
                    inset: '18%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)',
                }}
            />
        </div>
    )
}