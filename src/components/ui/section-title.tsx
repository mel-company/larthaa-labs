import { FadeIn } from '../animation'

const SectionTitle = ({ text }: { text: string }) => {
    return (
        <FadeIn delay={100}>
            <p className="text-2xl font-bold text-[#070C39] sm:text-3xl">
                {text}
            </p>
        </FadeIn>
    )
}

export default SectionTitle