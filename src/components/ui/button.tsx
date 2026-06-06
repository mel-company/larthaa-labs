import classNames from "classnames";
import ClickSpark from "../reactbits/ClickSpark";

export const BtnPrimary = ({ children, primary }: { children: React.ReactNode; primary?: boolean }) => {
    return (
        <BtnWrapper>
            <button className={classNames("btn text-nowrap", {
                "btn-primary": primary,
                "btn-secondary": !primary
            })}>
                {children}
            </button>
        </BtnWrapper>
    )
}

export const GlassIcon = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-px rounded-full bg-linear-to-r from-white/60 via-white/0 to-white/60 aspect-square">
            <div className="rounded-full backdrop-blur-sm p-1 aspect-square">
                {children}
            </div>
        </div>
    )
}

const BtnWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClickSpark
            sparkColor="#ffffff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            {children}
        </ClickSpark>
    )
}