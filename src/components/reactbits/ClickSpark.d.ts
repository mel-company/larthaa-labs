import type { ReactNode } from "react"

declare const ClickSpark: (props: {
    children: ReactNode
    sparkColor?: string
    sparkSize?: number
    sparkRadius?: number
    sparkCount?: number
    duration?: number
    easing?: string
    extraScale?: number
}) => ReactNode

export default ClickSpark
