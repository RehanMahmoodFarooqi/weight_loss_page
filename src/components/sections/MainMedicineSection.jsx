import React, { useState } from 'react';

import OralSemaglutideImg from '../../assets/Group-250.png';
import LozengeImg from '../../assets/Group-251.png';
import OralTirzepatideImg from '../../assets/Group-253.png';
import MicroDoseImg from '../../assets/Group-254.png';
import BackgroundImg from '../../assets/background.png';

const mainMeds = [
    {
        name: 'Oral Semaglutide',
        image: OralSemaglutideImg,
    },
    {
        name: 'GLP-1 Lozenge',
        image: LozengeImg,
    },
    {
        name: 'Oral Tirzepatide',
        image: OralTirzepatideImg,
    },
    {
        name: 'GLP-1 Micro dose',
        image: MicroDoseImg,
    },
];

function MainMedCard({ med }) {
    const [hovering, setHovering] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* Medication Name */}
            <h4 style={{
                fontSize: '30px',
                fontWeight: 900,
                color: '#28436F',
                marginBottom: '12px',
                fontFamily: 'Lora, serif',
                textAlign: 'center',
                letterSpacing: '0.01em',
            }}>
                {med.name}
            </h4>

            {/* Image Container */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '400/340',
            }}>
                {/* Background Box */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        zIndex: 10,
                        boxSizing: 'border-box',
                    }}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                >
                    <img
                        src={BackgroundImg}
                        alt=""
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            userSelect: 'none',
                            pointerEvents: 'none',
                        }}
                    />
                </div>

                {/* Floating Medication Image */}
                <div
                    className="animate-float"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: hovering ? 50 : 20,
                        pointerEvents: 'none',
                    }}
                >
                    <img
                        src={med.image}
                        alt={med.name}
                        style={{
                            width: '260px',
                            height: '260px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.22))',
                            userSelect: 'none',
                            transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
                            transform: hovering ? 'scale(1.15)' : 'scale(1)',
                            marginBottom: '40px', // Increased to push bottle up more
                        }}
                    />
                </div>

                {/* Standalone Select Button - Inside Card */}
                <div style={{
                    position: 'absolute',
                    bottom: '10px', // Lowered slightly
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 60
                }}>
                    <button style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#28436F',
                        background: 'white',
                        border: '2px solid #28436F',
                        padding: '0.5rem 2rem',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                        lineHeight: 1,
                        transition: 'all 0.2s ease',
                        marginTop: '10px',
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = '#28436F';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.color = '#28436F';
                        }}
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
}

export function MainMedicineSection() {
    return (
        <section style={{ background: 'white', padding: '60px 0', overflow: 'hidden' }}>
            <div style={{ width: '92%', margin: '0 auto' }}>
                {/* Section heading */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h3 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                        fontWeight: 800,
                        color: '#28436F',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        fontFamily: 'Lora, serif',
                    }}>
                        Compounded GIP + GLP-1
                    </h3>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                }}>
                    {mainMeds.map((med, i) => (
                        <MainMedCard key={i} med={med} />
                    ))}
                </div>
            </div>
        </section>
    );
}
