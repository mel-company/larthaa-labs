import { Global, Smartphone, Widget } from "@solar-icons/react"
import BorderGlow from "@/components/reactbits/BorderGlow"
import { FadeIn } from "@/components/animation"

const services = [
    {
        title: "تطوير المواقع الالكترونية",
        description:
            "نبني مواقع تفاعلية وسريعة تعكس هوية علامتك التجارية وتزيد من تفاعل عملائك",
        icon: Global,
    },
    {
        title: "تطوير تطبيقات الموبايل",
        description:
            "تطبيقات موبايل ذكية وسهلة الاستخدام لنظام iOS و Android توفر تجربة مستخدم استثنائية",
        icon: Smartphone,
    },
    {
        title: "أنظمة مخصصة للشركات",
        description:
            "حلول برمجية متكاملة لإدارة عملياتك الداخلية وزيادة كفاءة فريق العمل",
        icon: Widget,
    },
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

const ServiceCard = ({
    title,
    description,
    icon: Icon,
    index,
}: {
    title: string
    description: string
    icon: typeof Global
    index: number
}) => (
    <FadeIn delay={index * 200} className="group">
        <div
            className=" relative transition-transform duration-300 hover:-translate-y-2 h-full"
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="relative overflow-hidden rounded-3xl p-[3px] shadow-[0_24px_48px_-20px_rgba(27,83,226,0.35)] h-full">
                <div
                    className="absolute inset-[-150%] z-0"
                    style={{
                        background: 'conic-gradient(from 0deg, #20C3CD, #40E0FF, #03B0FF, #1B53E2, #03B0FF, #40E0FF, #20C3CD)',
                        animation: 'gradient-rotate 3s linear infinite',
                        willChange: 'transform',
                    }}
                />
                <div className="relative z-10 flex h-full flex-col gap-5 rounded-[20px] bg-white p-6 text-right sm:gap-6 sm:p-8">

                    <div className="flex justify-start">
                        <div className="rounded-2xl bg-[#EEF6FC] p-3 text-[#1B53E2] transition-colors group-hover:bg-[#1B53E2] group-hover:text-white">
                            <Icon weight="Outline" size={28} />
                        </div>
                    </div>
                    <h3 className="text-4xl font-bold leading-normal">
                        <span className="linear">{title}</span>
                    </h3>
                    <p className="text-base leading-relaxed text-[#414673] sm:text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </FadeIn>
)

const ServicesSection = () => {
    return (
        <section id="services" className="relative overflow-hidden bg-white px-4 pt-12 pb-20 sm:px-6 sm:pb-24">
            <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#03B0FF]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#1B53E2]/8 blur-3xl" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h3 className="text-2xl font-bold text-[#070C39] sm:text-3xl">خدماتنا</h3>
                    <Diamonds />
                    <p className="max-w-2xl text-base text-[#414673] sm:text-xl">
                        نقدم مجموعة من الخدمات البرمجية لتلبية احتياجاتك الرقمية
                    </p>
                </div>

                <div className="grid w-full gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
