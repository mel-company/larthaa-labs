import Logo from "./Logo"

const navLinks = [
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "عملاؤنا", href: "#clients" },
    { label: "تواصل معنا", href: "#contact" },
]

const Navbar = () => {
    const rightLinks = navLinks.slice(0, 2)
    const leftLinks = navLinks.slice(2)

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-sm">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8">
                <div className="flex items-center gap-14">
                    {rightLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-black transition-colors hover:text-[#17B6C4]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a
                    href="/"
                    className="absolute left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-[#E0F7FA] ring-2 ring-[#17B6C4]/30"
                    aria-label="الرئيسية"
                >
                    <Logo className="h-8 w-8" />
                </a>

                <div className="flex items-center gap-14">
                    {leftLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-black transition-colors hover:text-[#17B6C4]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
