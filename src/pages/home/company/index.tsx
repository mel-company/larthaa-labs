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
}: {
    label: string
    rotate: string
    x: string
    delay: number
}) => (
    <FadeIn delay={delay}>

        <p
            className={`whitespace-nowrap flex  items-center justify-center gap-2 rounded-2xl border border-[#93C1F5]/60 bg-[#1B53E2]/5 backdrop-blur-sm px-5 py-3 text-4xl text-[#070C39] ${rotate} ${x}`}
        >
            {label} <div className="min-h-2.5 w-2.5 min-w-2.5 aspect-square rounded bg-[#1B53E2]" />
        </p>
    </FadeIn>
)

const CompanySection = () => {
    return (
        <section
            id="about"
            className="relative px-6 pt-24 pb-16"
        >
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 text-center">
                <div className="flex flex-col items-center gap-4">
                    <SectionTitle text="من نحن" />
                    <img src="/star-list.svg" />
                </div>

                <h2 className="text-6xl font-serif font-bold leading-tight text-[#070C39] md:text-7xl">
                    <AnimatedWord text="شركة برمجيات" className="linear" delay={300} />{" "}
                    <AnimatedWord text="متخصصة في" delay={500} />
                </h2>

                <div dir="ltr" className="relative mx-auto h-72 w-full max-w-5xl">
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
                        {tags.map((tag) => (
                            <Tag key={tag.label} {...tag} />
                        ))}
                    </div>

                    <div className="absolute blur-[1px] opacity-80 hidden md:block top-1/2 z-10 -translate-y-1/2 -rotate-12 md:-right-16">
                        <FadeIn delay={700}>
                            <div className="absolute inset-0 rounded-2xl bg-white" />
                            <div className="relative flex items-center gap-3 rounded-2xl border border-white/80 bg-white/45 px-5 py-3 shadow-lg shadow-[#1B53E2]/15 backdrop-blur-2xl">
                                <Logo className="h-10 blur-[1px]" text />
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <FadeIn delay={300}>

                    <p className="max-w-5xl text-2xl leading-relaxed text-slate-600">
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
