import Logo from "./Logo"

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
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-sm">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-center px-8 gap-8">
                {rightLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-lg text-slate-800 transition-colors hover:text-[#17B6C4]"
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
                        className="text-lg text-slate-800 transition-colors hover:text-[#17B6C4]"
                    >
                        {link.label}
                    </a>
                ))}

            </div>
        </nav>
    )
}

export default Navbar
