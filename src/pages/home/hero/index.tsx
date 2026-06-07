import { BtnPrimary, GlassIcon } from "@/components/ui/button"
import { usePointerPosition } from "@/hooks/position"
import { AltArrowRight } from "@solar-icons/react"
import { useState, useEffect } from "react"

const HeroSection = () => {

    return (
        <header className="flex items-center justify-center relative h-screen w-screen overflow-hidden">
            <Content />
            <BG />
        </header>)
}

export default HeroSection


const BG = () => {
    return (<div dir="ltr" className="flex items-center justify-center w-full translate-y-4/5 absolute top-0 left-0">
        <Rows />
        <div className="w-full translate-y-1/4 scale-150 aspect-square bg-[#1B53E2] rounded-full blur-[6rem]" />
        <div className="w-full translate-y-1/3 scale-200 aspect-square bg-[#00EFFE] rounded-full blur-[6rem] translate-x-1/2" />
        <div className="w-full translate-y-1/2 scale-150 aspect-square bg-[#1B53E2] rounded-full blur-[6rem] translate-x-1/2" />
    </div>)

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
    return <div className="flex flex-col relative items-center justify-center gap-8 z-20 text-center text-[#070C39]">
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

const Rows = ({ length = 16 }) => {
    return (
        <div className="flex absolute bottom-0 left-0 w-full h-full z-50 -translate-y-1/3">
            {
                Array.from({ length }).map((_, i) => (
                    <div key={i} className="w-64 h-full bg-linear-to-r from-white to-white/0 opacity-10" />
                ))
            }
        </div>

    )
}