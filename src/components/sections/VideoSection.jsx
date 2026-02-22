import React, { useRef, useState, useCallback, useEffect } from 'react'
import { Volume2, VolumeX, Mic, Video, PhoneOff } from 'lucide-react'
import v1 from '../../videos/1.mp4'
import v2 from '../../videos/2.mp4'
import v3 from '../../videos/3.mp4'
import v4 from '../../videos/4.mp4'
import imgTablet from '../../assets/7f01018859caf81f97f96641a370d4856ae31904.png'

/*
  VideoSection
  ─ 4 videos play sequentially on 2 tablets: Left (1) -> Right (2) -> Left (3) -> Right (4).
  ─ Videos pause when section scrolls out of view.
  ─ Starts muted (browser autoplay policy); user can unmute via button.
*/

const CallButton = ({ Icon, color = 'rgba(255,255,255,0.2)', active = true }) => (
    <div style={{
        width: 'clamp(24px, 4vw, 36px)',
        height: 'clamp(24px, 4vw, 36px)',
        borderRadius: '50%',
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255,255,255,0.3)',
        color: active ? 'white' : 'rgba(255,255,255,0.5)',
        transition: 'all 0.2s ease',
    }}>
        <Icon size={'clamp(12px, 2vw, 18px)'} />
    </div>
)

const Tablet = ({ videoSrc, label, flip, isActive, videoRef, onEnded, isMuted }) => (
    <div
        style={{
            perspective: '2000px',
            position: 'relative',
            width: 'clamp(600px, 49vw, 1000px)',
        }}
    >
        <div
            style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '950/525',
                transform: flip ? 'scaleX(-1)' : 'none',
            }}
        >
            {/* Tablet frame on top — multiply blend lets video shine through white screen */}
            <img
                src={imgTablet}
                alt=""
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    zIndex: 2,
                    mixBlendMode: 'multiply',
                }}
            />

            {/* Video layer — positioned over the screen area */}
            <video
                ref={videoRef}
                src={videoSrc}
                onEnded={onEnded}
                playsInline
                muted={isMuted}
                style={{
                    position: 'absolute',
                    top: '13%',
                    left: '26%',
                    width: '52%',
                    height: '69%',
                    objectFit: 'cover',
                    borderRadius: '2px',
                    zIndex: 1,
                    /* Perspective tilt to match the tablet's viewing angle */
                    transform: 'perspective(5000px) rotateY(30deg) rotateX(32deg)',
                    transformOrigin: '50% 65%',
                }}
            />

            {/* Call UI Overlay — Perspective tilt must match video */}
            <div style={{
                position: 'absolute',
                top: '13%',
                left: '26%',
                width: '52%',
                height: '69%',
                zIndex: 3,
                pointerEvents: 'none',
                transform: 'perspective(5000px) rotateY(30deg) rotateX(32deg)',
                transformOrigin: '50% 65%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: '5%',
                transition: 'opacity 0.5s ease',
            }}>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    pointerEvents: 'auto',
                }}>
                    <CallButton Icon={isMuted ? VolumeX : Volume2} active={!isMuted} color="rgba(0,0,0,0.8)" />
                    <CallButton Icon={Mic} color="rgba(0,0,0,0.8)" />
                    <CallButton Icon={Video} color="rgba(0,0,0,0.8)" />
                    <CallButton Icon={PhoneOff} color="#ff4b4b" />
                </div>
            </div>
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
    const leftSrc = (activeIndex <= 2) ? v1 : v3
    const rightSrc = (activeIndex >= 2 && activeIndex <= 3) ? v2 : v4

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
        setActiveIndex(prev => (prev % 4) + 1)
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

                {/* Tablets */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    flexWrap: 'nowrap',
                    maxWidth: '2200px',
                    margin: '0 auto'
                }}>
                    <Tablet
                        videoSrc={leftSrc}
                        flip={false}
                        isActive={activeIndex === 1 || activeIndex === 3}
                        videoRef={leftRef}
                        onEnded={handleNext}
                        isMuted={isMuted}
                    />

                    <Tablet
                        videoSrc={rightSrc}
                        flip={true}
                        isActive={activeIndex === 2 || activeIndex === 4}
                        videoRef={rightRef}
                        onEnded={handleNext}
                        isMuted={isMuted}
                    />
                </div>

                {/* Combined Labels & Mute Icon Row */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 'clamp(100px, 20vw, 500px)',
                    marginTop: '-30px',
                    position: 'relative',
                    zIndex: 200
                }}>
                    {/* Patient Label */}
                    <div style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: (activeIndex === 1 || activeIndex === 3) ? '#28436F' : '#999',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'color 0.5s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}>
                        Patient
                        {(activeIndex === 1 || activeIndex === 3) && (
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

                    {/* Compact Audio Toggle Icon */}
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

                    {/* Doctor Label */}
                    <div style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: (activeIndex === 2 || activeIndex === 4) ? '#28436F' : '#999',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'color 0.5s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}>
                        Doctor
                        {(activeIndex === 2 || activeIndex === 4) && (
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
            </section>
        </>
    )
}
