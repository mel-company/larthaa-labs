import logoSrc from "@/assets/Group.png"

const Logo = ({ className = "h-9 w-9" }: { className?: string }) => {
    return (
        <img
            src={logoSrc}
            alt="لارثا لابس"
            className={`object-contain ${className}`}

        />
    )
}

export default Logo
