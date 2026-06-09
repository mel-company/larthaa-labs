import { AnimatedWord, FadeIn } from "@/components/animation"
import { BtnPrimary, GlassIcon } from "@/components/ui/button"
import { usePointerPosition } from "@/hooks/position"
import { AltArrowRight } from "@solar-icons/react"
import PixelTrail from "@/components/fancy/background/pixel-trail"

const HeroSection = () => {

    return (
        <header className="relative flex min-h-dvh w-full items-center justify-center px-4 pt-24 pb-12 sm:px-6">
            <Content />
            <PixelTrail
                pixelSize={80}
                fadeDuration={500}
                pixelClassName="bg-white"
            />
            <BG />
        </header>
    )
}

export default HeroSection

const BG = () => {
    return (
        <div
            dir="ltr"
            className="absolute no-scrollbar top-0 left-0 -z-10 flex h-[140vh] w-full items-center justify-center overflow-x-hidden"
        >
            <div className="absolute top-0 left-0 z-10 h-full w-full bg-linear-to-b from-white via-white/0 to-white" />
            <Rows />
            <div className="aspect-square w-full translate-y-1/4 scale-150 rounded-full bg-[#1B53E2] blur-[2rem] md:blur-[6rem]" />
            <div className="aspect-square w-full translate-x-1/2 translate-y-1/3 scale-200 rounded-full bg-[#00EFFE] blur-[3rem] md:blur-[6rem]" />
            <div className="aspect-square w-full translate-x-1/2 translate-y-1/2 scale-150 rounded-full bg-[#1B53E2] blur-[6rem]" />
        </div>
    )
}

const Content = () => {
    const { x, y } = usePointerPosition()
    return (
        <div
            style={{ transform: `translateX(${x * 2}px) translateY(${y * 2}px)` }}
            className="relative transition-all duration-75 ease-in-out pointer-events-none z-20 flex w-full max-w-5xl md:max-w-6xl flex-col items-center justify-center gap-4 text-center text-[#070C39] sm:gap-6 md:mt-8 md:gap-8"
        >
            <FadeIn delay={1200} className="z-20 w-full">
                <Badge />
            </FadeIn>
            <h1 className="text-5xl font-serif font-bold leading-snug sm:text-5xl md:text-6xl lg:text-8xl">
                <span className="font-normal">
                    <AnimatedWord text="حلـــــول" delay={0} />{" "}
                    <AnimatedWord text="برمجية" delay={200} />
                </span>
                <br />
                <AnimatedWord text="تَصنع" delay={400} />{" "}
                <AnimatedWord text="فرقـاً" delay={600} />{" "}
                <AnimatedWord text="حقيقيـاً" delay={800} className="linear" />{" "}
                <AnimatedWord text="لأعمالك" delay={1000} />
            </h1>
            <FadeIn delay={1400}>
                <p className="max-w-4xl px-1 text-base leading-relaxed text-[#414673] sm:text-lg md:text-2xl">
                    في لارثا لابس نصمم ونطوّر مواقع، تطبيقات، وأنظمة رقمية تساعد
                    الشركات على العمل بذكاء، سرعة، ووضوح.
                </p>
            </FadeIn>
            <FadeIn delay={1600}>
                <div className="mt-2 pointer-events-auto flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                    <a href="#contact" className="w-full sm:w-auto">
                        <BtnPrimary primary className="w-full sm:w-auto">
                            <GlassIcon>
                                <AltArrowRight
                                    weight={"Outline"}
                                    size={24}
                                    color="#fff"
                                />
                            </GlassIcon>
                            اطلب إستشــارة
                        </BtnPrimary>
                    </a>
                    <a href="#contact" className="w-full sm:w-auto">
                        <BtnPrimary className="w-full sm:w-auto">
                            أبدأ مشروعــك
                        </BtnPrimary>
                    </a>
                </div>
            </FadeIn>
        </div>
    )
}

const Badge = () => {
    const { x, y } = usePointerPosition()

    return (
        <>
            <div className="mx-auto flex w-fit flex-col items-center sm:hidden">
                <img src="/star-list.svg" alt="" className="h-7 w-auto" />
                <p className="mt-2 rounded-2xl border border-[#93C1F5] bg-[#1B53E2]/5 px-4 py-2 text-base backdrop-blur-sm">
                    <span className="me-2 inline-block h-2.5 w-2.5 rounded bg-[#1B53E2]" />
                    حلول برمجية مبتكرة
                </p>
            </div>

            <div
                className="absolute top-0 z-20 hidden origin-center flex-col items-center text-nowrap sm:flex"
                style={{
                    left: `${50 + x}%`,
                    transform: "translateX(-50%)",
                    top: `${y}px`,
                    rotate: `calc(-${(2 + y * 2) / 3}deg)`,
                }}
            >
                <img src="/star-list.svg" alt="" />
                <p className="rounded-2xl border border-[#93C1F5] bg-[#1B53E2]/5 px-5 py-2 text-xl backdrop-blur-sm">
                    <span className="me-2.5 inline-block h-2.5 w-2.5 rounded bg-[#1B53E2]" />
                    حلول برمجية مبتكرة
                </p>
            </div>
        </>
    )
}

const Rows = () => {
    const isMobile = window.innerWidth < 640
    return (
        <div className="absolute bottom-0 left-0 z-10 flex h-full w-full">
            {Array.from({ length: isMobile ? 15 : 20 }).map((_, i) => (
                <div
                    key={i}
                    className="h-full w-64 bg-linear-to-r from-white/80 via-white/0 to-white/0 opacity-10 backdrop-blur-sm"
                />
            ))}
        </div>
    )
}
