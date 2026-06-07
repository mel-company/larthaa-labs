import { useEffect, useRef, useState } from "react"

export const AnimatedWord = ({ text, delay = 200, className = "" }: { text: string, delay?: number, className?: string }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => setIsVisible(true), delay)
                    observer.unobserve(el)
                    return () => clearTimeout(timer)
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    return (
        <span
            ref={ref}
            className={`inline-block transition-all duration-700 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? 'blur(0px)' : 'blur(10px)',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
        >
            {text}{" "}
        </span>
    )
}

export const FadeIn = ({ children, delay, className = "" }: { children: React.ReactNode, delay: number, className?: string }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => setIsVisible(true), delay)
                    observer.unobserve(el)
                    return () => clearTimeout(timer)
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
        >
            {children}
        </div>
    )
}
