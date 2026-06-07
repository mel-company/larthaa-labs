import { projects, projectCategories, type Project, type ProjectCategory } from "@/data/projects"
import { AltArrowRight } from "@solar-icons/react"
import { motion, AnimatePresence } from "motion/react"
import { useMemo, useState } from "react"

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

const ProjectPreview = ({
    project,
    large,
}: {
    project: Project
    large?: boolean
}) => (
    <div
        className={`overflow-hidden rounded-2xl border border-[#93C1F5]/30 bg-white shadow-sm ${large ? "h-full min-h-[280px]" : "h-52"}`}
    >
        <div className="flex items-center gap-2 border-b border-[#EEF6FC] bg-[#F8FBFF] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#06D6A0]/80" />
            <span className="me-auto max-w-[55%] truncate text-xs text-[#414673]/60">
                {project.url.replace(/^https?:\/\//, "")}
            </span>
        </div>
        {project.image ? (
            <div
                className={`overflow-hidden bg-[#070C39] ${large ? "h-[calc(100%-44px)] min-h-[236px]" : "h-[calc(100%-44px)]"}`}
            >
                <img
                    src={project.image}
                    alt={`معاينة ${project.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>
        ) : (
            <div
                className={`relative bg-linear-to-br ${project.gradient} ${large ? "h-[calc(100%-44px)] min-h-[236px]" : "h-[calc(100%-44px)]"}`}
            >
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-6 top-6 h-3 w-32 rounded-full bg-white/60" />
                    <div className="absolute left-6 top-14 h-2 w-48 rounded-full bg-white/40" />
                    <div className="absolute left-6 top-20 h-2 w-36 rounded-full bg-white/30" />
                </div>
                {large && (
                    <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="h-20 rounded-xl bg-white/15 backdrop-blur-sm"
                            />
                        ))}
                    </div>
                )}
                {!large && (
                    <div className="absolute bottom-4 left-4 right-4 h-16 rounded-xl bg-white/15 backdrop-blur-sm" />
                )}
            </div>
        )}
    </div>
)

const ProjectCard = ({
    project,
    index,
    featured,
}: {
    project: Project
    index: number
    featured?: boolean
}) => (
    <motion.article
        layout
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        className={`group relative ${featured ? "lg:col-span-2" : ""}`}
    >
        <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-[#03B0FF]/20 to-[#1B53E2]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#93C1F5]/40 bg-white shadow-[0_20px_60px_-24px_rgba(27,83,226,0.25)] transition-transform duration-300 group-hover:-translate-y-1">
            <div className={featured ? "p-5 pb-0" : "p-4 pb-0"}>
                <ProjectPreview project={project} large={featured} />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                    <span
                        className="rounded-full px-3 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: project.accent }}
                    >
                        {project.categoryLabel}
                    </span>
                    {project.featured && (
                        <span className="rounded-full bg-[#EEF6FC] px-3 py-1 text-xs font-bold text-[#1B53E2]">
                            مميز
                        </span>
                    )}
                </div>

                <div>
                    <h3 className="text-xl font-bold text-[#070C39] sm:text-2xl">
                        {featured ? (
                            <span className="linear">{project.title}</span>
                        ) : (
                            project.title
                        )}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-[#414673]">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                        <span
                            key={highlight}
                            className="rounded-lg bg-[#EEF6FC] px-3 py-1 text-xs font-medium text-[#1B53E2]"
                        >
                            {highlight}
                        </span>
                    ))}
                </div>

                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-2 text-sm font-bold text-[#1B53E2] transition-colors hover:text-[#17B6C4]"
                >
                    عرض المشروع
                    <AltArrowRight
                        weight="Outline"
                        size={18}
                        className="transition-transform group-hover:-translate-x-1"
                    />
                </a>
            </div>
        </div>
    </motion.article>
)

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] =
        useState<ProjectCategory>("all")

    const filtered = useMemo(
        () =>
            activeCategory === "all"
                ? projects
                : projects.filter((p) => p.category === activeCategory),
        [activeCategory]
    )

    const sorted = [...filtered].sort(
        (a, b) => Number(b.featured) - Number(a.featured)
    )

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-linear-to-b from-white via-[#F8FBFF] to-white px-4 pt-14 pb-20 sm:px-6 sm:pt-16 sm:pb-28"
        >
            <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#03B0FF]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#1B53E2]/8 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center"
            >
                <h2 className="text-3xl font-serif font-bold sm:text-4xl md:text-6xl">
                    <span className="linear">مشاريعنا</span>
                </h2>
                <Diamonds />
                <p className="max-w-3xl text-base leading-relaxed text-[#414673] sm:text-lg md:text-xl">
                    نبني منتجات رقمية حقيقية تُحدث أثراً تشغيلياً ملموساً — منصات
                    وأنظمة تُدار آلاف العمليات عبرها يومياً، وتمنح الشركات رؤية
                    أوضح، قرارات أسرع، وكفاءة أعلى
                </p>
            </motion.div>

            <div className="relative mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-3">
                {projectCategories.map((cat) => (
                    <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={`rounded-2xl px-4 py-2 text-sm font-bold transition-all sm:px-6 sm:py-2.5 ${
                            activeCategory === cat.id
                                ? "bg-[#1B53E2] text-white shadow-lg shadow-[#1B53E2]/25"
                                : "bg-white text-[#414673] ring-1 ring-[#93C1F5]/50 hover:bg-[#EEF6FC] hover:text-[#1B53E2]"
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="relative mx-auto mt-14 max-w-6xl">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeCategory}
                        className="grid gap-6 sm:gap-8 md:grid-cols-2"
                    >
                        {sorted.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                featured={project.featured}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <p className="py-20 text-center text-lg text-[#414673]">
                        لا توجد مشاريع في هذا التصنيف حالياً
                    </p>
                )}
            </div>
        </section>
    )
}

export default ProjectsSection
