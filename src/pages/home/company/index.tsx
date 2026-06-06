import Logo from "@/components/layout/Logo"

const tags = [
    { label: "تصميم وتطوير المواقع", rotate: "rotate-[6deg]", x: "translate-x-4" },
    { label: "إنشاء التطبيقات", rotate: "-rotate-[4deg]", x: "-translate-x-1" },
    { label: "أي نظام ببالك", rotate: "rotate-[5deg]", x: "translate-x-6" },
]

const Diamonds = () => (
    <div className="flex items-center gap-2">
        {[0.3, 0.65, 1].map((opacity) => (
            <span
                key={opacity}
                className="h-2 w-2 rotate-45 bg-[#1B53E2]"
                style={{ opacity }}
            />
        ))}
    </div>
)

const Tag = ({
    label,
    rotate,
    x,
}: {
    label: string
    rotate: string
    x: string
}) => (
    <div
        className={`whitespace-nowrap rounded-2xl border border-[#93C1F5]/60 bg-[#EEF6FC] px-6 py-3 text-lg font-medium text-[#070C39] ${rotate} ${x}`}
    >
        {label}
    </div>
)

const CompanySection = () => {
    return (
        <section
            id="about"
            className="relative bg-linear-to-b from-[#E8F4FC] via-white to-white px-6 pt-24 pb-16"
        >
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 text-center">
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-3xl font-bold text-[#070C39]">من نحن</h3>
                    <Diamonds />
                </div>

                <h2 className="text-6xl font-serif font-bold leading-tight text-[#070C39] md:text-7xl">
                    <span className="linear">شركة برمجيات</span>{" "}
                    <span>متخصصة في</span>
                </h2>

                <div dir="ltr" className="relative mx-auto h-72 w-full max-w-5xl">
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
                        {tags.map((tag) => (
                            <Tag key={tag.label} {...tag} />
                        ))}
                    </div>

                    <div className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rotate-12 md:right-0 lg:-right-6">
                        <div className="absolute inset-0 rounded-2xl bg-[#17B6C4]/20 blur-xl" />
                        <div className="relative flex items-center gap-3 rounded-2xl border border-white/80 bg-white/45 px-5 py-3 shadow-lg shadow-[#1B53E2]/15 backdrop-blur-2xl">
                            <Logo className="h-12 w-12 shrink-0" />
                            <span className="text-lg font-bold tracking-wide text-[#17B6C4]">
                                LARTHA LABS
                            </span>
                        </div>
                    </div>
                </div>

                <p className="max-w-4xl text-xl leading-relaxed text-[#070C39]">
                    نساعد الشركات على تحويل أفكارها إلى حلول تقنية عملية، سهلة
                    الاستخدام، وقابلة للتوسع. نركز على فهم احتياج العميل أولاً،
                    ثم نبني حلولاً تجمع بين الأداء، التصميم، الأمان، وتجربة
                    المستخدم.
                </p>
            </div>
        </section>
    )
}

export default CompanySection
