import { AnimatedWord } from "@/components/animation"
import {
    ShieldCheck,
    StarShine,
    UserCheck,
} from "@solar-icons/react"
import { motion } from "motion/react"

const WAVE_PATH =
    "M0,160 C120,160 180,320 250,320 C320,320 400,0 500,0 C600,0 680,320 750,320 C820,320 880,160 1000,160"

const points = [
    {
        title: "تسليم في الموعــد",
        description:
            "نلتزم بالجداول الزمنية المحددة ونسعى دائماً لتجاوز التوقعات",
        icon: UserCheck,
        x: "25%",
        iconTop: 326,
        textTop: 130,
        textAbove: true,
        delay: 0.2,
    },
    {
        title: "التزام بالجــودة",
        description:
            "نطبق أفضل الممارسات والمعايير العالمية لضمان جودة الأكواد والتصاميم",
        icon: ShieldCheck,
        x: "50%",
        iconTop: 36,
        textTop: 210,
        textAbove: false,
        delay: 0.4,
    },
    {
        title: "خبرة واسعــة",
        description:
            "فريق متخصص من المطورين والمصممين ذوي الخبرة في أحدث التقنيات",
        icon: StarShine,
        x: "75%",
        iconTop: 326,
        textTop: 130,
        textAbove: true,
        delay: 0.6,
    },
]



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
        <div className="flex p-3 items-center justify-center backdrop-blur-xs rounded-3xl bg-white/50">
            <Icon weight="Bold" size={48} className="text-[#1B53E2]" />
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
        className="w-full max-w-sm rounded-2xl px-5 py-4 text-center sm:max-w-sm"
    >
        <h3 >
            <AnimatedWord delay={delay * 2} text={title} className="text-5xl font-bold text-[#1B53E2]" />
        </h3>
        <p className="mt-2 text-sm md:text-lg leading-relaxed text-[#414673]">
            {description}
        </p>
    </motion.div>
)

const WaveGraphic = () => (
    <svg
        className="absolute inset-x-0 top-[60px] h-[320px] w-full"
        viewBox="0 -20 1000 360"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
    >
        <motion.path
            d={WAVE_PATH}
            stroke="#1B53E2"
            strokeWidth="8"
            strokeLinecap="round"
            opacity={0.25}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.path
            d={WAVE_PATH}
            stroke="#1B53E2"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
        />

        {[
            { cx: 250, cy: 340 },
            { cx: 500, cy: 20 },
            { cx: 750, cy: 340 },
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
        <section id="why-us" className="relative overflow-hidden bg-linear-to-b from-[#EAF5FD] via-[#F8FBFF] to-white px-4 pt-14 pb-20 sm:px-6 sm:pt-16 sm:pb-28">
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
                    <AnimatedWord text="لماذا" />{" "}
                    <AnimatedWord text="لارثا" delay={400} />{" "}
                    <AnimatedWord text="لابس؟" delay={600} />
                </h2>
                <img src="/star-list.svg" />
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
            <div className="relative mx-auto mt-20 hidden h-[460px] w-full md:block">
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
