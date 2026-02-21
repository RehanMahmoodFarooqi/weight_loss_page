import React, { useRef, useState, useCallback, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import patientVideo from '../../videos/patient.mp4'
import doctorVideo from '../../videos/doctor.mp4'

/*
  VideoSection
  ─ Patient video plays first when section enters viewport.
  ─ On patient end → doctor starts.
  ─ On doctor end  → loops back to patient.
  ─ Videos pause when section scrolls out of view.
  ─ Starts muted (browser autoplay policy); user can unmute
    via the 🔇/🔊 button.
*/

const Tablet = ({ videoSrc, label, flip, isActive, videoRef, onEnded, isMuted }) => (
    <div
        style={{
            perspective: '900px',
            perspectiveOrigin: '50% 40%',
            transition: 'opacity 0.6s ease',
            opacity: isActive ? 1 : 0.50,
        }}
    >
        <div
            style={{
                transform: flip
                    ? 'rotateY(-30deg) rotateX(10deg) rotateZ(-3deg)'
                    : 'rotateY(30deg) rotateX(10deg) rotateZ(3deg)',
                transformStyle: 'preserve-3d',
                display: 'inline-block',
                borderRadius: '16px',
                background: 'linear-gradient(160deg, #3a3a3a 0%, #1c1c1c 40%, #111 100%)',
                padding: '10px 10px 16px 10px',
                boxShadow: flip
                    ? '12px 24px 50px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.07)'
                    : '-12px 24px 50px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.07)',
                position: 'relative',
                width: '480px',
                maxWidth: '88vw',
            }}
        >
            {/* Camera notch */}
            <div style={{
                position: 'absolute', top: '5px', left: '50%',
                transform: 'translateX(-50%)', width: '30px',
                height: '5px', borderRadius: '3px', background: '#2a2a2a',
            }} />

            {/* Screen */}
            <div style={{
                borderRadius: '8px', overflow: 'hidden',
                background: '#000', aspectRatio: '4/3', width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
            }}>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    onEnded={onEnded}
                    playsInline
                    muted={isMuted}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
            </div>

            {/* Home bar */}
            <div style={{
                position: 'absolute', bottom: '5px', left: '50%',
                transform: 'translateX(-50%)', width: '44px',
                height: '3px', borderRadius: '2px', background: '#2a2a2a',
            }} />
        </div>

        {/* Cast shadow */}
        <div style={{
            width: '85%', height: '24px', margin: '-10px auto 0',
            background: flip
                ? 'radial-gradient(ellipse at 60% 50%, rgba(0,0,0,0.22) 0%, transparent 70%)'
                : 'radial-gradient(ellipse at 40% 50%, rgba(0,0,0,0.22) 0%, transparent 70%)',
            filter: 'blur(8px)',
            transform: flip ? 'scaleX(1.1) translateX(6px)' : 'scaleX(1.1) translateX(-6px)',
        }} />

        {/* Label */}
        <p style={{
            textAlign: 'center', marginTop: '20px', fontSize: '12px',
            fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
            color: isActive ? '#28436F' : '#bbb', fontFamily: 'Inter, sans-serif',
            transition: 'color 0.5s ease', display: 'flex',
            alignItems: 'center', justifyContent: 'center', gap: '8px',
        }}>
            {label}
            {isActive && (
                <span style={{
                    display: 'inline-block', width: '6px', height: '6px',
                    borderRadius: '50%', background: '#28436F',
                    animation: 'pulse-dot 1.2s infinite',
                }} />
            )}
        </p>
    </div>
)

export const VideoSection = () => {
    const [activeVideo, setActiveVideo] = useState('patient')
    const [isMuted, setIsMuted] = useState(true)

    const activeVideoRef = useRef('patient')
    const patientRef = useRef(null)
    const doctorRef = useRef(null)
    const sectionRef = useRef(null)


    /* Keep ref in sync with state so IO callback reads fresh value */
    const setActive = (val) => {
        activeVideoRef.current = val
        setActiveVideo(val)
    }

    /* IntersectionObserver — play when visible, pause when not */
    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const el = activeVideoRef.current === 'patient'
                        ? patientRef.current
                        : doctorRef.current
                    if (el) {
                        el.play()
                            .catch(() => { })
                    }
                } else {
                    if (patientRef.current) patientRef.current.pause()
                    if (doctorRef.current) doctorRef.current.pause()
                }
            },
            { threshold: 0.15 }   // fire when 15% of section is visible
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    /* Patient ends → play doctor */
    const handlePatientEnded = useCallback(() => {
        setActive('doctor')
        if (doctorRef.current) {
            doctorRef.current.play().catch(() => { })
        }
    }, [])

    /* Doctor ends → loop back to patient */
    const handleDoctorEnded = useCallback(() => {
        setActive('patient')
        if (patientRef.current) {
            patientRef.current.currentTime = 0
            patientRef.current.play().catch(() => { })
        }
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
                    padding: '60px 24px 100px',
                    textAlign: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                {/* Heading */}
                <div style={{ marginBottom: '64px' }}>
                    {/* <h2 style={{
                        fontSize: '60px', letterSpacing: '3px',
                        textTransform: 'uppercase', color: '#28436F',
                        fontFamily: 'Inter, sans-serif', fontWeight: 900,
                        marginBottom: '12px',
                    }}>
                        FAQ's
                    </h2> */}
                    <h1 style={{
                        fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800,
                        color: '#1a1a1a', fontFamily: 'Lora, serif',
                        lineHeight: 1.15, margin: 0,
                        marginBottom: '25px',
                    }}>

                        <span style={{ color: '#28436F' }}>Hear It From, Those Who Know</span>
                    </h1>
                    {/* <p style={{
                        marginTop: '16px', fontSize: '25px', color: '#28436F',
                        fontFamily: 'Inter, sans-serif', maxWidth: '820px',
                        marginInline: 'auto', lineHeight: 1.6,
                    }}>
                        A patient's real questions answered by a licensed physician — honest, clear, and medically sound.
                    </p> */}
                </div>

                {/* Tablets */}
                <div style={{
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'flex-end', gap: '80px', flexWrap: 'wrap',
                }}>
                    {/* Patient — left */}
                    <Tablet
                        videoSrc={patientVideo}
                        label="Patient"
                        flip={false}
                        isActive={activeVideo === 'patient'}
                        videoRef={patientRef}
                        onEnded={handlePatientEnded}
                        isMuted={isMuted}
                    />

                    {/* Doctor — right */}
                    <Tablet
                        videoSrc={doctorVideo}
                        label="Doctor"
                        flip={true}
                        isActive={activeVideo === 'doctor'}
                        videoRef={doctorRef}
                        onEnded={handleDoctorEnded}
                        isMuted={isMuted}
                    />
                </div>

                {/* Audio Toggle Button */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 50,
                }}>
                    <button
                        onClick={() => setIsMuted(prev => !prev)}
                        style={{
                            background: isMuted ? '#28436F' : 'white',
                            color: isMuted ? 'white' : '#28436F',
                            border: '2px solid #28436F',
                            borderRadius: '50px',
                            padding: '12px 36px',
                            fontSize: '16px',
                            fontWeight: '800',
                            letterSpacing: '2px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            fontFamily: 'Inter, sans-serif',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 6px 25px rgba(40, 67, 111, 0.25)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                        }}
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            <span>{isMuted ? 'Mute' : 'Unmute'}</span>
                        </div>
                    </button>
                </div>

            </section>
        </>
    )
}
