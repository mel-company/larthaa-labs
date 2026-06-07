import { FadeIn } from '../animation'

const SectionTitle = ({ text }: { text: string }) => {
    return (
        <FadeIn delay={100}>
            <p className="text-3xl font-bold text-[#070C39]">
                {text}
            </p>
        </FadeIn>
    )
}

export default SectionTitle