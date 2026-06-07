export type ProjectCategory = "all" | "web" | "mobile" | "system"

export type Project = {
    id: string
    title: string
    description: string
    url: string
    category: Exclude<ProjectCategory, "all">
    categoryLabel: string
    highlights: string[]
    gradient: string
    accent: string
    image?: string
    featured?: boolean
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "الكل" },
    { id: "web", label: "منصات رقمية" },
    { id: "system", label: "أنظمة مؤسسية" },
]

export const projects: Project[] = [
    {
        id: "almajlis",
        title: "المجلـس",
        url: "https://agency.larthaa.com",
        description:
            'منصة "المَجْلِس" هي مساحة عمل رقمية متكاملة (SaaS) صُممت خصيصاً لإدارة المهام والمشاريع لفرق العمل في السوق العربي. تهدف المنصة إلى توحيد جهود الفريق في بيئة سحابية واحدة قابلة للتوسع، مما يسهل سير العمل اليومي ويضاعف الإنتاجية. تم بناء المنصة للربط بين البنية المعمارية القابلة للتطوير والميزات الذكية لإدارة البيانات، لتكون البديل المحلي الأمثل للأدوات العالمية، مع التركيز التام على تجربة المستخدم (UX) وتوافقها مع اللغة العربية.',
        category: "system",
        categoryLabel: "SaaS · إدارة فرق",
        highlights: [
            "إدارة مهام ومشاريع",
            "بيئة سحابية موحدة",
            "تجربة عربية أصيلة",
            "قابلية التوسع",
        ],
        gradient: "from-[#03B0FF] to-[#1B53E2]",
        accent: "#03B0FF",
        image: "/majlas.png",
        featured: true,
    },
    {
        id: "warshtach",
        title: "ورشتـك",
        url: "https://www.basraservices.com",
        description:
            'منصة "ورشتك" هي نظام سحابي متكامل (Multi-tenant SaaS) صُمم خصيصاً لإدارة مراكز خدمة صيانة السيارات والورش. يقدم النظام حلاً رقمياً شاملاً لأتمتة العمليات اليومية، بدءاً من استقبال العميل وتسجيل مركبته، مروراً بإدارة مهام الصيانة، وصولاً إلى الفوترة وإصدار التقارير. تم بناء المنصة ببنية برمجية قابلة للتوسع لدعم عدد كبير من الورش بشكل مستقل، مما يضمن تنظيم سير العمل وتقديم تجربة سلسة لكل من أصحاب الورش وعملائهم.',
        category: "system",
        categoryLabel: "SaaS · صيانة سيارات",
        highlights: [
            "أتمتة العمليات",
            "ورش مستقلة متعددة",
            "فوترة وتقارير",
            "تجربة سلسة",
        ],
        gradient: "from-[#22BAC4] to-[#1B53E2]",
        accent: "#22BAC4",
        featured: true,
        image: "/wharstech.png",
    },
    {
        id: "mel-iq",
        title: "مـــيل",
        url: "https://mel.iq",
        description:
            'تُعد منصة "ميل" (Mel) نظاماً سحابياً متكاملاً (B2B/B2C SaaS) يمثل البنية التحتية الرقمية الأحدث لقطاع التجارة الإلكترونية في العراق. تم تصميم المنصة لتقديم منظومة مركزية (Ecosystem) تربط المتاجر الرقمية بأنظمة التقنية المالية (FinTech) والخدمات اللوجستية، مما يمكّن رواد الأعمال والشركات من رقمنة مبيعاتهم بكفاءة وتوسيع نطاق أعمالهم بمرونة عالية.',
        category: "web",
        categoryLabel: "منظومة تجارة إلكترونية",
        highlights: [
            "FinTech ولوجستيات",
            "B2B / B2C",
            "رقمنة المبيعات",
            "توسع مرن",
        ],
        gradient: "from-[#17B6C4] to-[#03B0FF]",
        accent: "#17B6C4",
        featured: true,
        image: "/mel.jpg",
    },
]
