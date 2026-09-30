import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollVisual from "./ScrollVisual";

const stats = [
    {
        value: "58%",
        text: "Increase in pick up point use",
    },
    {
        value: "23%",
        text: "Decreased in customer phone calls",
    },
    {
        value: "27%",
        text: "Increase in pick up point use",
    },
    {
        value: "40%",
        text: "Decreased in customer phone calls",
    },
];

const letters = "WELCOME ITZFIZZ".split("");

function Hero() {
    const [progress, setProgress] = useState(0);
    const targetProgress = useRef(0);
    const animation = useRef(null);

    const handleWheel = (event) => {
        event.preventDefault();

        const direction = event.deltaY > 0 ? 1 : -1;

        targetProgress.current = Math.max(
            0,
            Math.min(1, targetProgress.current + direction * 0.035)
        );

        if (animation.current) {
            animation.current.kill();
        }

        const current = { value: progress };

        animation.current = gsap.to(current, {
            value: targetProgress.current,
            duration: 0.45,
            ease: "power2.out",

            onUpdate: () => {
                setProgress(current.value);
            },
        });
    };


    return (
        <main
            onWheel={handleWheel}
            className="fixed inset-0 h-screen w-screen overflow-hidden bg-white"
        >

            <div className="relative flex h-full w-full items-center justify-center">

                {/* Welcome ITZFIZZ track */}
                <div className="pointer-events-none absolute left-0 right-0 top-[42%] z-20 -translate-y-1/2">

                   
                    <div className="absolute left-0 right-0 top-1/2 h-[115%] -translate-y-1/2 bg-black" />

                  
                    <div
                        className="absolute left-0 top-1/2 h-[115%] -translate-y-1/2 bg-green-500"
                        style={{
                            width: `${progress * 100}%`,
                        }}
                    />

                   
                    <div className="relative flex w-full items-center justify-between px-3 sm:px-6 md:px-10">
                        {letters.map((letter, index) => {
                            const letterProgress = index / (letters.length - 1);
                            const visible = progress >= letterProgress;

                            return (
                                <span
                                    key={`${letter}-${index}`}
                                    className="text-[clamp(1.3rem,5vw,5.5rem)] font-bold tracking-[-0.02em]"
                                    style={{
                                        color: visible ? "#000000" : "#ffffff",
                                        opacity: visible ? 1 : 0,
                                        transition: "color 0.15s ease, opacity 0.15s ease",
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            );
                        })}
                    </div>

                </div>

                {/* Car */}
                <ScrollVisual progress={progress} />


                {/* Statistics */}
                <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-40 px-5">
                    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4 md:gap-10">
                        {stats.map((stat, index) => {
                            const start = 0.10 + index * 0.12;

                            const visible = Math.max(
                                0,
                                Math.min(1, (progress - start) / 0.10)
                            );

                            return (
                                <div
                                    key={stat.value}
                                    className="text-center"
                                    style={{
                                        opacity: visible,
                                        transform: `translateY(${30 - visible * 30}px)`,
                                    }}
                                >
                                    <div className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                                        {stat.value}
                                    </div>

                                    <p className="mx-auto mt-2 max-w-[180px] text-[11px] leading-4 text-gray-500 sm:text-xs">
                                        {stat.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

              
                {progress < 0.15 && (
                    <div className="absolute bottom-7 left-1/2 z-50 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-gray-400">
                        Scroll
                    </div>
                )}
            </div>
        </main>
    );
}

export default Hero;