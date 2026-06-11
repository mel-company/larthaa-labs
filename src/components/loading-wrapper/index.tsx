import classNames from "classnames"
import { AnimatedWord } from "../animation"
import NumberTicker from "../fancy/text/basic-number-ticker"
import { useEffect, } from "react"

const LoadingPage = ({ done, setDone, children }: { done: boolean, setDone: (done: boolean) => void, children: React.ReactNode }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setDone(true)
        }, 4000);
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className={classNames('w-screen transition-all duration-1000 ease-in-out flex flex-col h-svh gap-1 items-center justify-center max-h-screen bg-linear-to-b from-black to-blue-950 fixed top-0 left-0 overflow-hidden pointer-events-none z-500', {
                "-translate-y-full": done,
                "translate-y-0": !done
            })} >
                <img src='/star-list.svg' className="animate-pulse" />
                <p>
                    <AnimatedWord text="جاري الابداع ..." className="text-xl md:text-2xl pb-1 linear font-medium animate-bounce opacity-60" />
                </p>
                <div className="flex items-center justify-between w-full absolute bottom-0 p-4">
                    <h6 className=" text-9xl linear">
                        <span className="text-6xl">%</span>
                        <NumberTicker
                            from={0}
                            target={100}
                            autoStart={true}
                            transition={{ duration: 3.5, type: "tween", ease: "easeInOut" }}
                            onComplete={() => console.log("complete")}
                            onStart={() => console.log("start")}
                        />

                    </h6>
                </div>
            </div>
            {done && children}
        </>
    )
}

export default LoadingPage