import React from 'react';

export function TimelineSection() {
    return (
        <section id="timeline-section" className="pt-10 pb-20 bg-white px-4 md:px-8 overflow-hidden relative">
            <div className="w-full mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#28436F] mb-6 font-lora">
                        Healthy Weight Loss Proven Results
                    </h2>
                    <p className="text-3xl text-[#28436F] max-w-5xl mx-auto font-medium">
                        Real Data Showing the Expected Percentage of Body Weight Loss Over Time with Our Doctor-Guided Programs.
                    </p>
                </div>

                {/* Chart Image Container */}
                <div className="relative w-full max-w-6xl mx-auto mt-8">
                    <div className="w-full p-4 md:p-8">
                        <BarGraph />
                    </div>
                </div>
            </div>
        </section>
    );
}

const getBlocks = (val, preferredSize) => {
    if (val <= 0) return [];

    const size = preferredSize || 5;
    const count = Math.floor(val / size);
    const rem = val % size;
    const blocks = Array(count).fill(size);
    if (rem > 0) blocks.push(rem);
    return blocks;
};

const AnimatedBlockBar = ({ value, maxScale = 30, color, isVisible, delay = 0, blockSize, animationKey }) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        if (!isVisible) {
            setProgress(0);
            return;
        }

        // Reset progress when animationKey changes
        setProgress(0);

        let start;
        const duration = 2000; // Slightly faster for repetition
        const frame = (ts) => {
            if (!start) start = ts;
            const elapsed = ts - start;
            if (elapsed < delay) {
                requestAnimationFrame(frame);
                return;
            }
            const p = Math.min((elapsed - delay) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 4); // Quartic ease out for smoother feel
            setProgress(ease);
            if (p < 1) requestAnimationFrame(frame);
        };
        const handle = requestAnimationFrame(frame);
        return () => cancelAnimationFrame(handle);
    }, [isVisible, delay, animationKey]);

    const blocks = React.useMemo(() => getBlocks(value, blockSize), [value, blockSize]);
    const finalHeight = (value / maxScale) * 100;
    const currentHeight = finalHeight * progress;

    return (
        <div className="relative w-full h-full flex flex-col justify-end items-center">
            {/* Label */}
            <div
                className="absolute text-[#28436F] font-bold text-xl md:text-2xl mb-2 whitespace-nowrap"
                style={{
                    bottom: `${currentHeight}%`,
                    opacity: progress > 0 ? 1 : 0
                }}
            >
                {Math.round(value * progress)}%
            </div>

            {/* Mask Container - Grows from bottom */}
            <div
                className="w-full relative overflow-hidden flex flex-col-reverse"
                style={{ height: `${currentHeight}%` }}
            >
                {/* Inner Content - Stays full size relative to final height */}
                <div
                    className="w-full h-full flex flex-col-reverse absolute bottom-0 left-0 right-0"
                    style={{ height: progress > 0 ? `${(1 / progress) * 100}%` : '100%' }}
                >
                    {blocks.map((blockVal, i) => (
                        <div key={i}
                            className={`w-full relative overflow-hidden border-[#d0e8ec] ${i !== blocks.length - 1 ? 'border-t-[0.01px] border-t-[#28436F]' : 'border-[0.2px]'}`}
                            style={{
                                flexGrow: blockVal,
                                backgroundColor: color,
                                // Subtle shadow to add depth
                                boxShadow: i !== blocks.length - 1 ? 'none' : 'inset 0 -1px 0 0 rgba(40, 67, 111, 0.1)'
                            }}
                        >
                            {/* Subtle shine effect */}
                            <div className="absolute inset-0 bg-white/20 translate-y-full animate-[shimmer_2s_infinite]" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BarGraph = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [animationKey, setAnimationKey] = React.useState(0);
    const graphRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (graphRef.current) {
            observer.observe(graphRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Repeat animation every 5 seconds when visible
    React.useEffect(() => {
        let interval;
        if (isVisible) {
            interval = setInterval(() => {
                setAnimationKey(prev => prev + 1);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isVisible]);

    const data = [
        { label: '3 Months', min: 6, max: 12, blockSize: 3 },
        { label: '6 Months', min: 10, max: 20, blockSize: 5 },
        { label: '12 Months', min: 15, max: 30, blockSize: 5 },
    ];

    const yAxisTicks = [0, 5, 10, 15, 20, 25, 30];

    return (
        <div ref={graphRef} className="w-full font-sans">
            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-15 text-2xl md:text-3xl">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#CCE3ED]"></div>
                    <span className="text-[#28436F] font-medium">Minimum Expected Loss (%)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#D5EDED]"></div>
                    <span className="text-[#28436F] font-medium">Maximum Expected Loss (%)</span>
                </div>
            </div>

            {/* Graph Area */}
            <div className="relative h-[400px] md:h-[500px] w-full pl-20 pb-12">

                {/* Y-Axis Line */}
                <div className="absolute left-0 top-0 bottom-8 w-[3px] bg-[#28436F]"></div>

                {/* X-Axis Line */}
                <div className="absolute left-0 right-0 bottom-8 h-[3px] bg-[#28436F] z-20"></div>

                {/* Y-Axis Label */}
                <div className="absolute -left-80 top-1/2 -translate-y-1/2 -rotate-90 text-2xl md:text-3xl font-bold text-[#28436F] whitespace-nowrap">
                    Percentage of Body Weight Lost
                </div>

                {/* Bars Container */}
                <div className="absolute inset-0 pl-4 md:pl-12 pb-8 flex items-end justify-between md:justify-around text-[#28436F] z-10">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-1/4 md:w-1/5 h-full justify-end relative group">

                            {/* Bar Group */}
                            <div className="flex items-end justify-center w-full gap-0 h-full relative">

                                {/* Min Bar */}
                                <div className="w-full max-w-[80px] md:max-w-[120px] h-full">
                                    <AnimatedBlockBar
                                        value={item.min}
                                        color="#CCE3ED"
                                        isVisible={isVisible}
                                        delay={index * 200 + 200}
                                        blockSize={item.blockSize}
                                        animationKey={animationKey}
                                    />
                                </div>

                                {/* Max Bar */}
                                <div className="w-full max-w-[80px] md:max-w-[120px] h-full">
                                    <AnimatedBlockBar
                                        value={item.max}
                                        color="#cceeeeff"
                                        isVisible={isVisible}
                                        delay={index * 200 + 600}
                                        blockSize={item.blockSize}
                                        animationKey={animationKey}
                                    />
                                </div>
                            </div>

                            {/* X-Axis Label */}
                            <div className="absolute -bottom-10 text-base md:text-xl font-bold whitespace-nowrap">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Y-Axis Grid & Labels */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 z-0">
                    {yAxisTicks.reverse().map((tick) => (
                        <div key={tick} className="relative w-full h-px flex items-center">
                            <span className="absolute -left-8 text-sm md:text-base text-[#28436F] font-bold w-6 text-right">
                                {tick}
                            </span>
                        </div>
                    ))}
                </div>

                {/* X-Axis Title */}
                <div className="absolute bottom-[-3.7rem] left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-bold text-[#28436F] whitespace-nowrap">
                    Time Duration
                </div>
            </div>
        </div>
    );
}
