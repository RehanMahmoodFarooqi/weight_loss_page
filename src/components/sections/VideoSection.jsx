import React, { useRef, useState, useCallback, useEffect } from 'react'
import { Volume2, VolumeX, Mic, Video, Phone } from 'lucide-react'
import v1 from '../../videos/1.mp4'
import v2 from '../../videos/2.mp4'
import v3 from '../../videos/3.mp4'
import v4 from '../../videos/4.mp4'
import imgTablet from '../../assets/7f01018859caf81f97f96641a370d4856ae31904.png'

/*
  VideoSection
  ─ 2 tablets side by side, each with a main video + PIP self-view.
  ─ 4 videos play sequentially: Left (1) -> Right (2) -> Left (3) -> Right (4).
  ─ Videos pause when section scrolls out of view.
  ─ Starts muted (browser autoplay policy); user can unmute via button.
*/

const Tablet = ({ videoSrc, pipVideoSrc, flip, videoRef, onEnded, isMuted, label, isActive }) => (
    <div className="flex flex-col items-center">
        <div
            className="relative shrink-0"
            style={{
                width: 950,
                height: 525,
                transform: flip ? 'scaleX(-1)' : undefined,
            }}
        >
        {/* Main video — positioned over the screen area */}
        <video
            ref={videoRef}
            src={videoSrc}
            onEnded={onEnded}
            playsInline
            muted={isMuted}
            className="absolute object-cover rounded-md"
            style={{
                top: '13%',
                left: '26%',
                width: '52%',
                height: '69%',
                zIndex: 1,
                transform: 'perspective(5000px) rotateY(30deg) rotateX(32deg)',
                transformOrigin: '50% 65%',
            }}
        />

        {/* PIP self-view — small video in the top-right of the screen */}
        {pipVideoSrc && (
            <video
                src={pipVideoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="absolute object-cover rounded-sm"
                style={{
                    top: '24%',
                    left: '59%',
                    width: '8%',
                    height: '10%',
                    zIndex: 1,
                    transform: 'perspective(1200px) rotateY(28deg) rotateX(32deg)',
                    transformOrigin: '50% 50%',
                    borderRadius: 4,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                }}
            />
        )}

        {/* Call action buttons — positioned at bottom of screen area */}
        <div
            className="absolute flex items-center justify-center"
            style={{
                top: '69%',
                left: '29%',
                width: '52%',
                height: 'auto',
                zIndex: 3,
                transform: 'perspective(5000px) rotateY(30deg) rotateX(32deg)',
                transformOrigin: '50% 65%',
                gap: 10,
            }}
        >
            <button style={{
                width: 34, height: 34, borderRadius: '50%',
                backgroundColor: 'rgba(31,41,55,0.8)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transform: flip ? 'scaleX(-1)' : undefined,
            }}>
                <Video size={16} color="#ffffff" />
            </button>
            <button style={{
                width: 34, height: 34, borderRadius: '50%',
                backgroundColor: 'rgba(239,68,68,0.9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transform: flip ? 'scaleX(-1)' : undefined,
            }}>
                <Phone size={16} color="#ffffff" />
            </button>
            <button style={{
                width: 34, height: 34, borderRadius: '50%',
                backgroundColor: 'rgba(31,41,55,0.8)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transform: flip ? 'scaleX(-1)' : undefined,
            }}>
                <Mic size={16} color="#ffffff" />
            </button>
        </div>

        {/* Tablet frame on top — multiply blend lets video shine through white screen */}
        <img
            src={imgTablet}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            style={{ zIndex: 2, mixBlendMode: 'multiply' }}
        />
    </div>

        {/* Label below tablet */}
        <div style={{
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: isActive ? '#28436F' : '#999',
            fontFamily: 'Inter, sans-serif',
            transition: 'color 0.5s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '12px',
        }}>
            {label}
            {isActive && (
                <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#28436F',
                    animation: 'pulse-dot 1.2s infinite',
                }} />
            )}
        </div>
    </div>
)

export const VideoSection = () => {
    const [activeIndex, setActiveIndex] = useState(1) // 1, 2, 3, 4
    const [isMuted, setIsMuted] = useState(true)
    const [isIntersecting, setIsIntersecting] = useState(false)

    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const sectionRef = useRef(null)

    /* IntersectionObserver — track visibility */
    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    /* Source logic:
       IDX 1: Left=v1, Right=v4 (active: Left)
       IDX 2: Left=v1, Right=v2 (active: Right)
       IDX 3: Left=v3, Right=v2 (active: Left)
       IDX 4: Left=v3, Right=v4 (active: Right)
    */
    // Doctor videos on LEFT tablet, Patient videos on RIGHT tablet
    const leftSrc = (activeIndex <= 2) ? v2 : v4   // Doctor
    const rightSrc = (activeIndex <= 2) ? v1 : v3   // Patient

    /* Playback transition effect */
    useEffect(() => {
        if (!isIntersecting) {
            if (leftRef.current) leftRef.current.pause()
            if (rightRef.current) rightRef.current.pause()
            return
        }

        const activeRef = (activeIndex === 1 || activeIndex === 3) ? leftRef.current : rightRef.current
        const inactiveRef = (activeIndex === 2 || activeIndex === 4) ? leftRef.current : rightRef.current

        if (inactiveRef && inactiveRef !== activeRef) {
            inactiveRef.pause()
        }

        if (activeRef) {
            // Give browser a moment to register src change if needed
            activeRef.load()
            activeRef.play().catch(err => console.log("Playback blocked:", err))
        }
    }, [activeIndex, isIntersecting])

    const handleNext = useCallback(() => {
        setActiveIndex(prev => {
            if (prev >= 4) return prev // Stop after all 4 videos have played
            return prev + 1
        })
    }, [])

    return (
        <>
            <style>{`
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.4; transform: scale(0.7); }
                }
            `}</style>

            <section
                ref={sectionRef}
                style={{
                    background: '#ffffff',
                    padding: '40px 24px 80px',
                    textAlign: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                {/* Heading */}
                <div style={{ marginBottom: '40px' }}>
                    <h1 style={{
                        fontSize: 'clamp(32px, 5vw, 56px)',
                        fontWeight: 800,
                        color: '#1a1a1a',
                        fontFamily: 'Lora, serif',
                        lineHeight: 1.2,
                        margin: 0,
                        marginBottom: '20px',
                    }}>
                        <span style={{ color: '#28436F' }}>Hear It From Those Who Know</span>
                    </h1>
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 30px)',
                        color: '#666',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontFamily: 'Inter, sans-serif'
                    }}>
                        Real patient questions, medical expert answers.
                    </p>
                </div>

                {/* Tablets — responsive scaling like reference implementation */}
                <div
                    className="flex items-center justify-center gap-0 scale-[0.3] sm:scale-[0.42] md:scale-[0.55] lg:scale-[0.7] xl:scale-[0.9] 2xl:scale-100 transition-transform"
                    style={{ marginLeft: '-40px', marginRight: '-40px' }}
                >
                    <Tablet
                        videoSrc={leftSrc}
                        pipVideoSrc={rightSrc}
                        flip={false}
                        videoRef={leftRef}
                        onEnded={handleNext}
                        isMuted={isMuted}
                        label="Doctor"
                        isActive={activeIndex === 2 || activeIndex === 4}
                    />

                    <Tablet
                        videoSrc={rightSrc}
                        pipVideoSrc={leftSrc}
                        flip={true}
                        videoRef={rightRef}
                        onEnded={handleNext}
                        isMuted={isMuted}
                        label="Patient"
                        isActive={activeIndex === 1 || activeIndex === 3}
                    />
                </div>

                {/* Centered Mute Toggle */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-20px',
                    position: 'relative',
                    zIndex: 200
                }}>
                    <button
                        onClick={() => setIsMuted(prev => !prev)}
                        style={{
                            background: isMuted ? '#28436F' : 'white',
                            color: isMuted ? 'white' : '#28436F',
                            border: '2px solid #28436F',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(40, 67, 111, 0.15)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                </div>
            </section>
        </>
    )
}
