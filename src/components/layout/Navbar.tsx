import Logo from "./Logo"
import classNames from "classnames"
import { useState } from "react"

const navLinks = [
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "مشاريعنا", href: "#projects" },
    { label: "تواصل معنا", href: "#contact" },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const rightLinks = navLinks.slice(0, 2)
    const leftLinks = navLinks.slice(2)

    const closeMenu = () => setOpen(false)

    return (
        <>
            <nav
                className={classNames(
                    "fixed top-3 z-50 left-1/2 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-slate-100 bg-white/30 backdrop-blur-lg md:top-4 md:w-auto"
                )}
            >
                <div className="flex items-center justify-between gap-4 px-4 py-2 md:hidden">
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
                        aria-expanded={open}
                        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl transition-colors hover:bg-white/50"
                    >
                        <span
                            className={classNames(
                                "block h-0.5 w-5 rounded-full bg-slate-900 transition-transform",
                                open && "translate-y-2 rotate-45"
                            )}
                        />
                        <span
                            className={classNames(
                                "block h-0.5 w-5 rounded-full bg-slate-900 transition-opacity",
                                open && "opacity-0"
                            )}
                        />
                        <span
                            className={classNames(
                                "block h-0.5 w-5 rounded-full bg-slate-900 transition-transform",
                                open && "-translate-y-2 -rotate-45"
                            )}
                        />
                    </button>

                    <a
                        href="/"
                        className="flex h-12 w-12 items-center justify-center"
                        aria-label="الرئيسية"
                    >
                        <Logo className="h-7 w-7" />
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="rounded-xl bg-[#1B53E2] px-3 py-2 text-sm font-bold text-white"
                    >
                        تواصل
                    </a>
                </div>

                <div className="mx-auto hidden items-center justify-center gap-6 px-6 py-1 md:flex md:gap-8 md:px-8">
                    {rightLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg text-slate-900 transition-colors hover:text-[#17B6C4]"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="/"
                        className="flex h-14 w-14 items-center justify-center"
                        aria-label="الرئيسية"
                    >
                        <Logo className="h-8 w-8" />
                    </a>

                    {leftLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg text-slate-900 transition-colors hover:text-[#17B6C4]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>

            {open && (
                <div
                    className="fixed inset-0 z-40 bg-[#070C39]/20 backdrop-blur-sm md:hidden"
                    onClick={closeMenu}
                    aria-hidden
                />
            )}

            <div
                className={classNames(
                    "fixed top-18 z-50 left-1/2 w-[calc(100%-1.5rem)] max-w-sm -translate-x-1/2 rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-xl backdrop-blur-lg transition-all duration-300 md:hidden",
                    open
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                )}
            >
                <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="rounded-xl px-4 py-3 text-lg font-medium text-slate-900 transition-colors hover:bg-[#EEF6FC] hover:text-[#1B53E2]"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}

export default Navbar
