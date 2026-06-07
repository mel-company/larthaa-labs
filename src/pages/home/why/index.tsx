import {
    ShieldCheck,
    UserCheck,
    UsersGroupRounded,
} from "@solar-icons/react"
import { motion } from "motion/react"

const WAVE_PATH =
    "M0,100 C120,100 180,168 250,168 C320,168 400,32 500,32 C600,32 680,168 750,168 C820,168 880,100 1000,100"

const points = [
    {
        title: "تسليم في الموعد",
        description:
            "نلتزم بالجداول الزمنية المحددة ونسعى دائماً لتجاوز التوقعات",
        icon: UserCheck,
        x: "25%",
        iconTop: 240,
        textTop: 52,
        textAbove: true,
        delay: 0.2,
    },
    {
        title: "التزام بالجودة",
        description:
            "نطبق أفضل الممارسات والمعايير العالمية لضمان جودة الأكواد والتصاميم",
        icon: ShieldCheck,
        x: "50%",
        iconTop: 104,
        textTop: 196,
        textAbove: false,
        delay: 0.4,
    },
    {
        title: "خبرة واسعة",
        description:
            "فريق متخصص من المطورين والمصممين ذوي الخبرة في أحدث التقنيات",
        icon: UsersGroupRounded,
        x: "75%",
        iconTop: 240,
        textTop: 52,
        textAbove: true,
        delay: 0.6,
    },
]

const Diamonds = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex items-center gap-2.5"
    >
        {[0.3, 0.65, 1].map((opacity) => (
            <span
                key={opacity}
                className="h-2.5 w-2.5 rotate-45 rounded-sm bg-[#1B53E2]"
                style={{ opacity }}
            />
        ))}
    </motion.div>
)

const IconBadge = ({
    icon: Icon,
    delay,
}: {
    icon: (typeof points)[number]["icon"]
    delay: number
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08, y: -4 }}
        className="group relative"
    >
        <div className="absolute inset-0 scale-150 rounded-full bg-linear-to-br from-[#03B0FF]/40 to-[#1B53E2]/40 opacity-60 blur-xl transition-all duration-500 group-hover:scale-[1.7] group-hover:opacity-80" />
        <div className="absolute inset-0 animate-ping rounded-full bg-[#1B53E2]/10 opacity-0 group-hover:opacity-100" />
        <div className="relative rounded-full bg-linear-to-br from-[#03B0FF] to-[#1B53E2] p-[2px] shadow-[0_12px_40px_rgba(27,83,226,0.35)]">
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-linear-to-br from-[#EEF6FC] to-white">
                    <Icon weight="Outline" size={30} className="text-[#1B53E2]" />
                </div>
            </div>
        </div>
    </motion.div>
)

const PointText = ({
    title,
    description,
    delay,
}: {
    title: string
    description: string
    delay: number
}) => (
    <motion.div
        initial={{ opacity: 0, y: delay < 0.4 ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="w-full max-w-xs rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-center shadow-[0_8px_32px_rgba(27,83,226,0.08)] backdrop-blur-md sm:max-w-sm md:w-[250px]"
    >
        <h3 className="text-xl font-bold">
            <span className="linear">{title}</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#414673]">
            {description}
        </p>
    </motion.div>
)

const WaveGraphic = () => (
    <svg
        className="absolute inset-x-0 top-[108px] h-[200px] w-full"
        viewBox="0 0 1000 200"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
    >
        <defs>
            <linearGradient
                id="why-wave-gradient"
                x1="0"
                y1="0"
                x2="1000"
                y2="0"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0%" stopColor="#03B0FF" />
                <stop offset="50%" stopColor="#1B53E2" />
                <stop offset="100%" stopColor="#03B0FF" />
            </linearGradient>
            <filter id="why-glow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <motion.path
            d={WAVE_PATH}
            stroke="url(#why-wave-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity={0.25}
            filter="url(#why-glow)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.path
            d={WAVE_PATH}
            stroke="url(#why-wave-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
        />

        {[
            { cx: 250, cy: 168 },
            { cx: 500, cy: 32 },
            { cx: 750, cy: 168 },
        ].map((dot, i) => (
            <motion.circle
                key={dot.cx}
                cx={dot.cx}
                cy={dot.cy}
                r="5"
                fill="#1B53E2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + i * 0.15, type: "spring" }}
            />
        ))}
    </svg>
)

const WhySection = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#EAF5FD] via-[#F8FBFF] to-white px-4 pt-14 pb-20 sm:px-6 sm:pt-16 sm:pb-28">
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#03B0FF]/15 blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#1B53E2]/12 blur-[100px]"
                />
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[70%] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[#17B6C4]/8 blur-[80px]" />
            </div>

            <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden opacity-25">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-full w-20 bg-linear-to-b from-[#03B0FF]/15 via-transparent to-transparent"
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center"
            >
                <h2 className="text-3xl font-serif font-bold sm:text-4xl md:text-7xl">
                    <span className="linear">لماذا لارثا لابس؟</span>
                </h2>
                <Diamonds />
                <p className="max-w-3xl text-lg leading-relaxed text-[#414673] md:text-xl">
                    لا نكتفي بكتابة الأكواد، بل نبني شراكات استراتيجية تساعدك
                    على تحقيق أهدافك الرقمية. نجمع بين الخبرة التقنية وفهم
                    عميق لاحتياجات الأعمال لتقديم حلول مبتكرة.
                </p>
            </motion.div>

            {/* Mobile */}
            <div className="relative mx-auto mt-16 flex max-w-md flex-col gap-10 md:hidden">
                {points.map(({ title, description, icon, delay }) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay }}
                        className="flex flex-col items-center gap-6"
                    >
                        <IconBadge icon={icon} delay={delay} />
                        <PointText
                            title={title}
                            description={description}
                            delay={delay}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Desktop */}
            <div className="relative mx-auto mt-20 hidden h-[420px] w-full md:block">
                <WaveGraphic />

                {points.map((point) => (
                    <div key={point.title}>
                        <div
                            className="absolute z-10 -translate-x-1/2"
                            style={{ left: point.x, top: point.iconTop }}
                        >
                            <motion.div
                                animate={{ y: [0, point.textAbove ? 6 : -6, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: point.delay,
                                }}
                            >
                                <IconBadge icon={point.icon} delay={point.delay} />
                            </motion.div>
                        </div>
                        <div
                            className="absolute -translate-x-1/2"
                            style={{ left: point.x, top: point.textTop }}
                        >
                            <PointText
                                title={point.title}
                                description={point.description}
                                delay={point.delay + 0.15}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhySection
