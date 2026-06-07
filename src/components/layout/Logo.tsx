
const Logo = ({ className = "h-9 w-9", text }: { className?: string; text?: boolean }) => {
    return (
        <img
            src={text ? "/logo-text.svg" : "/logo.svg"}
            alt="لارثا لابس"
            className={`object-contain ${className}`}

        />
    )
}

export default Logo
