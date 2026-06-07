import { buildWhatsAppUrl, serviceOptions } from "@/config/contact"
import { BtnPrimary } from "@/components/ui/button"
import SectionTitle from "@/components/ui/section-title"
import { ChatRound, Pen, SendSquare, Widget } from "@solar-icons/react"
import { motion } from "motion/react"
import { useState } from "react"

const steps = [
    {
        icon: Widget,
        title: "اختر نوع مشروعك",
        description: "حدد الخدمة الأقرب لفكرتك من القائمة",
    },
    {
        icon: Pen,
        title: "اكتب التفاصيل",
        description: "شاركنا فكرتك، أهدافك، وأي متطلبات خاصة",
    },
    {
        icon: SendSquare,
        title: "أرسل عبر واتساب",
        description: "نضغط زر الإرسال ونفتح واتساب برسالة جاهزة",
    },
    {
        icon: ChatRound,
        title: "نرد عليك سريعاً",
        description: "فريقنا يراجع طلبك ويتواصل معك خلال 24 ساعة",
    },
]

const ContactSection = () => {
    const [name, setName] = useState("")
    const [service, setService] = useState(serviceOptions[0])
    const [message, setMessage] = useState("")

    const canSend = name.trim().length > 1 && message.trim().length > 5

    const handleWhatsApp = () => {
        if (!canSend) return
        window.open(
            buildWhatsAppUrl({ name: name.trim(), service, message: message.trim() }),
            "_blank",
            "noopener,noreferrer"
        )
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-linear-to-b from-white via-[#EAF5FD] to-white px-6 py-24"
        >
            <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#03B0FF]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#1B53E2]/8 blur-3xl" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
                <SectionTitle text="تواصل معنا" />
                <img src="/star-list.svg" alt="" className="h-9 w-auto" />
                <p className="max-w-2xl text-xl leading-relaxed text-[#414673]">
                    جاهز تبدأ مشروعك؟ اتبع الخطوات البسيطة وأرسل لنا طلبك
                    مباشرة عبر واتساب
                </p>
            </div>

            <div className="relative mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-3xl border border-[#93C1F5]/40 bg-white/80 p-6 text-center shadow-[0_12px_40px_rgba(27,83,226,0.08)] backdrop-blur-sm"
                    >
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF6FC] text-[#1B53E2]">
                            <step.icon weight="Outline" size={24} />
                        </div>
                        <span className="text-sm font-bold text-[#17B6C4]">
                            الخطوة {index + 1}
                        </span>
                        <h3 className="mt-2 text-lg font-bold text-[#070C39]">
                            {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#414673]">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mx-auto mt-14 max-w-2xl rounded-3xl border border-[#93C1F5]/50 bg-white p-8 shadow-[0_24px_60px_-20px_rgba(27,83,226,0.2)]"
            >
                <div className="flex flex-col gap-5 text-right">
                    <div>
                        <label className="mb-2 block text-sm font-bold text-[#070C39]">
                            الاسم
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="اسمك أو اسم شركتك"
                            className="w-full rounded-2xl border border-[#E8EEF5] bg-[#F8FBFF] px-5 py-3 text-[#070C39] outline-none transition focus:border-[#1B53E2] focus:ring-2 focus:ring-[#1B53E2]/20"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-bold text-[#070C39]">
                            نوع المشروع
                        </label>
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full rounded-2xl border border-[#E8EEF5] bg-[#F8FBFF] px-5 py-3 text-[#070C39] outline-none transition focus:border-[#1B53E2] focus:ring-2 focus:ring-[#1B53E2]/20"
                        >
                            {serviceOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-bold text-[#070C39]">
                            تفاصيل المشروع
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="صف فكرتك، الميزات المطلوبة، والجدول الزمني إن وُجد..."
                            rows={4}
                            className="w-full resize-none rounded-2xl border border-[#E8EEF5] bg-[#F8FBFF] px-5 py-3 text-[#070C39] outline-none transition focus:border-[#1B53E2] focus:ring-2 focus:ring-[#1B53E2]/20"
                        />
                    </div>

                    <BtnPrimary
                        primary
                        onClick={handleWhatsApp}
                        disabled={!canSend}
                        className="w-full disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        أرسل عبر واتساب
                    </BtnPrimary>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactSection
