import { FadeIn } from '../animation'

const SectionTitle = ({ text }: { text: string }) => {
    return (
        <FadeIn delay={100}>
            <p className="text-xl font-normal text-slate-800 sm:text-3xl">
                {text}
            </p>
        </FadeIn>
    )
}

export default SectionTitle