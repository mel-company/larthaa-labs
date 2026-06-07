import { AnimatedWord, FadeIn } from "@/components/animation"
import Logo from "@/components/layout/Logo"
import SectionTitle from "@/components/ui/section-title"

const tags = [
    { label: "تصميم وتطوير المواقع", rotate: "-rotate-[6deg]", x: "translate-x-4", delay: 200 },
    { label: "إنشـــــاء التـــــطبيقات", rotate: "rotate-[6deg]", x: "translate-x-16", delay: 300 },
    { label: "أي نظام أبالك", rotate: "-rotate-[8deg]", x: "-translate-x-4", delay: 400 },
]

const Tag = ({
    label,
    rotate,
    x,
    delay,
    mobile,
}: {
    label: string
    rotate: string
    x: string
    delay: number
    mobile?: boolean
}) => (
    <FadeIn delay={delay}>
        <p
            className={
                mobile
                    ? "flex items-center justify-center gap-2 rounded-2xl border border-[#93C1F5]/60 bg-[#1B53E2]/5 px-4 py-3 text-lg text-[#070C39] backdrop-blur-sm sm:text-xl"
                    : `flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-[#93C1F5]/60 bg-[#1B53E2]/5 px-5 py-3 text-4xl text-[#070C39] backdrop-blur-sm ${rotate} ${x}`
            }
        >
            {label}{" "}
            <span className="aspect-square min-h-2.5 min-w-2.5 rounded bg-[#1B53E2]" />
        </p>
    </FadeIn>
)

const CompanySection = () => {
    return (
        <section id="about" className="relative px-4 pt-20 pb-16 sm:px-6 sm:pt-24">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center sm:gap-14">
                <div className="flex flex-col items-center gap-4">
                    <SectionTitle text="من نحن" />
                    <img src="/star-list.svg" alt="" className="h-8 w-auto" />
                </div>

                <h2 className="text-3xl font-serif font-bold leading-tight text-[#070C39] sm:text-4xl md:text-6xl lg:text-7xl">
                    <AnimatedWord text="شركة برمجيات" className="linear" delay={300} />{" "}
                    <AnimatedWord text="متخصصة في" delay={500} />
                </h2>

                <div className="flex w-full flex-col items-center gap-4 md:hidden">
                    {tags.map((tag) => (
                        <Tag key={tag.label} {...tag} mobile />
                    ))}
                </div>

                <div dir="ltr" className="relative mx-auto hidden h-72 w-full max-w-5xl md:block">
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
                        {tags.map((tag) => (
                            <Tag key={tag.label} {...tag} />
                        ))}
                    </div>

                    <div className="absolute top-1/2 z-10 hidden -translate-y-1/2 -rotate-12 opacity-80 blur-[1px] md:-right-16 lg:block">
                        <FadeIn delay={700}>
                            <div className="absolute inset-0 rounded-2xl bg-white" />
                            <div className="relative flex items-center gap-3 rounded-2xl border border-white/80 bg-white/45 px-5 py-3 shadow-lg shadow-[#1B53E2]/15 backdrop-blur-2xl">
                                <Logo className="h-10 blur-[1px]" text />
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={300}>
                    <p className="max-w-5xl px-1 text-base leading-relaxed text-slate-600 sm:text-lg md:text-2xl">
                        نساعد الشركات على تحويل أفكارها إلى حلول تقنية عملية، سهلة
                        الاستخدام، وقابلة للتوسع. نركز على فهم احتياج العميل أولاً،
                        ثم نبني حلولاً تجمع بين الأداء، التصميم، الأمان، وتجربة
                        المستخدم.
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}

export default CompanySection
