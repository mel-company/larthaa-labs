export const WHATSAPP_NUMBER = "9647766608852"

export const serviceOptions = [
    "تطوير موقع إلكتروني",
    "تطبيق موبايل",
    "نظام مؤسسي",
    "استشارة تقنية",
    "أخرى",
]

export const buildWhatsAppUrl = ({
    name,
    service,
    message,
}: {
    name: string
    service: string
    message: string
}) => {
    const text = [
        "مرحباً لارثا لابس،",
        "",
        `الاسم: ${name}`,
        `نوع المشروع: ${service}`,
        "",
        "التفاصيل:",
        message,
    ].join("\n")

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
