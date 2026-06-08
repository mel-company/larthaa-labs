import Logo from "./Logo"
import classNames from "classnames"
import { StaggeredMenu } from "../reactbits/StaggeredMenu"
import { useState } from "react"
import { useMenu } from "@/hooks/menu"
import { AnimatedWord } from "../animation"
import { CloseSquare, HamburgerMenu } from "@solar-icons/react"

const navLinks = [
    { label: "من نحن", link: "#about" },
    { label: "خدماتنا", link: "#services" },
    { label: "مشاريعنا", link: "#projects" },
    { label: "تواصل معنا", link: "#contact" },
]

const Navbar = () => {
    const rightLinks = navLinks.slice(0, 2)
    const leftLinks = navLinks.slice(2)

    const [open, setOpen] = useState(false)


    return (
        <>
            <Menu open={open} setOpen={setOpen} />
            <nav
                className={classNames(
                    "fixed top-3 z-50 left-1/2 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-slate-100 bg-white/30 backdrop-blur-lg md:top-4 md:w-auto"
                )}
            >
                <div className="flex items-center justify-between p-3">

                    <button onClick={() => setOpen(!open)}>
                        <HamburgerMenu weight={"Outline"} size={40} color='#0f4159' />
                    </button>
                    <Logo />
                </div>


                <div className="mx-auto hidden items-center justify-center gap-6 px-6 py-1 md:flex md:gap-8 md:px-8">
                    {rightLinks.map((item) => (
                        <a
                            key={item.link}
                            href={item.link}
                            className="text-lg text-slate-900 transition-colors hover:text-[#17B6C4]"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="/"
                        className="flex h-14 w-14 items-center justify-center"
                        aria-label="الرئيسية"
                    >
                        <Logo className="h-8 w-8" />
                    </a>

                    {leftLinks.map((item) => (
                        <a
                            key={item.link}
                            href={item.link}
                            className="text-lg text-slate-900 transition-colors hover:text-[#17B6C4]"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar


const Menu = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {


    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];

    return (
        <aside className={classNames("w-screen h-screen ease-in-out max-h-screen overflow-hidden duration-700 transition-all bg-white/50 backdrop-blur-md z-500 flex items-center justify-center fixed top-0 right-0", {
            "translate-x-full": !open,
            "translate-x-0": open
        })}>
            <div className="w-full h-full absolute top-0 left-0 pointer-events-none" />
            <button onClick={() => setOpen(false)}>
                <CloseSquare className="absolute top-6 right-6 text-slate-800" weight={"Broken"} size={40} />
            </button>

            <ul className="space-y-6">
                {navLinks?.map((item, index) =>
                    <li key={item.link}>
                        <h5>
                            <a href={item.link} className="text-5xl font-bold">
                                <AnimatedWord text={item.label} delay={200 * index + 500} />
                            </a>
                        </h5>
                    </li>
                )}
            </ul>

        </aside>
    )
}