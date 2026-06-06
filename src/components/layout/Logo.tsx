import logoSrc from "@/assets/Group.png"

const Logo = ({ className = "h-9 w-9" }: { className?: string }) => {
    return (
        <img
            src={logoSrc}
            alt="لارثا لابس"
            className={`object-contain ${className}`}
            style={{
                filter:
                    "brightness(0) saturate(100%) invert(67%) sepia(45%) saturate(1200%) hue-rotate(145deg) brightness(95%) contrast(95%)",
            }}
        />
    )
}

export default Logo
