import Logo from "./Logo"
import classNames from "classnames"

const navLinks = [
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "مشاريعنا", href: "#projects" },
    { label: "تواصل معنا", href: "#contact" },
]

const Navbar = () => {
    const rightLinks = navLinks.slice(0, 2)
    const leftLinks = navLinks.slice(2)

    return (
        <nav className={classNames("fixed top-4 z-50 left-1/2 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white/30 backdrop-blur-lg")}>
            <div className="mx-auto flex max-w-6xl items-center justify-center px-8 gap-8">
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
                    className="flex h-14 w-14 items-center justify-center "
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
    )
}

export default Navbar
