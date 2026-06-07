import Logo from "./Logo"
import { buildWhatsAppUrl } from "@/config/contact"

const footerLinks = [
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "مشاريعنا", href: "#projects" },
    { label: "تواصل معنا", href: "#contact" },
]

const Footer = () => {
    const whatsappUrl = buildWhatsAppUrl({
        name: "زائر الموقع",
        service: "استشارة تقنية",
        message: "مرحباً، أود التواصل معكم بخصوص مشروع جديد.",
    })

    return (
        <footer className="relative overflow-hidden bg-[#070C39] px-4 pt-14 pb-8 text-white sm:px-6 sm:pt-16">
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#1B53E2]/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#03B0FF]/20 blur-3xl" />

            <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
                <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
                    <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-right">
                        <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0F7FA]">
                                <Logo className="h-9 w-9" />
                            </div>
                            <div>
                                <p className="text-xl font-bold">لارثا لابس</p>
                                <p className="text-sm text-[#93C1F5]">LARTHA LABS</p>
                            </div>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed text-[#93C1F5]/90">
                            نبني منتجات رقمية وأنظمة سحابية تُحدث أثراً حقيقياً
                            للشركات في العراق والمنطقة
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6 md:justify-end">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-white/80 transition-colors hover:text-[#17B6C4]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full rounded-2xl bg-[#25D366] px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#20BD5A] sm:w-auto sm:hover:scale-[1.02]"
                    >
                        تواصل عبر واتساب
                    </a>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-[#1B53E2]/50 to-transparent" />

                <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#93C1F5]/70 md:flex-row">
                    <p>© {new Date().getFullYear()} لارثا لابس — جميع الحقوق محفوظة</p>
                    <p>صُنع بشغف في العراق</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
