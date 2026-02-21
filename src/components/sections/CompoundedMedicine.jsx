import React, { useState } from 'react';

import SemaglutideImg from '../../final/Group 249.png';
import OralSemaglutideImg from '../../final/Group 250.png';
import LozengeImg from '../../final/Group 251.png';
import BackgroundImg from '../../assets/background.png';

const compoundedMeds = [
    {
        name: 'Semaglutide',
        image: SemaglutideImg,
        options: [
            '2.5 mg 2.5 mg/ml 1 ml $199',
            '2.5 mg 2.5 mg/ml 1 ml $199',
            '2.5 mg 2.5 mg/ml 1 ml $199',
        ],
    },
    {
        name: 'Oral Semaglutide',
        image: OralSemaglutideImg,
        options: [
            '2.5 mg 2.5 mg/ml 1 ml $199',
            '2.5 mg 2.5 mg/ml 1 ml $199',
            '2.5 mg 2.5 mg/ml 1 ml $199',
        ],
    },
    {
        name: 'GLP-1 Lozenge',
        image: LozengeImg,
        options: [
            '2.5 mg 2.5 mg/ml 1 ml $199',
            '2.5 mg 2.5 mg/ml 1 ml $199',
            '2.5 mg 2.5 mg/ml 1 ml $199',
        ],
    },
];

/* Each individual dosage pill: "text | Select" */
function DosageRow({ label }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            borderRadius: '20px',
            overflow: 'hidden',
            background: '#e2f2e9',
            padding: '0.5rem 0.8rem',
            width: 'fit-content',
            boxSizing: 'border-box',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            border: '2px solid #28436F',
        }}>
            <span style={{
                fontSize: '0.85rem',
                color: '#28436F',
                fontWeight: 900,
                lineHeight: 1.2,
                paddingLeft: '4px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                flexGrow: 1,
                marginRight: '8px',
            }}>
                {label}
            </span>
            <button style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#28436F',
                background: 'white',
                border: '2px solid #28436F',
                padding: '0.4rem 0.6rem',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                lineHeight: 1,
                flexShrink: 0,
                transition: 'all 0.2s ease',
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
    );
}

function CompoundedCard({ med, showLeftDosage, showRightDosage }) {
    const [hovering, setHovering] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

            {/* ── Medicine name (Primary Headline, like H&H) ── */}
            <h4 style={{
                fontSize: '35px',
                fontWeight: 900,
                color: '#28436F',
                marginBottom: '12px',
                fontFamily: 'Lora, serif',
                textAlign: 'center',
                letterSpacing: '0.01em',
            }}>
                {med.name}
            </h4>

            {/* ── Canvas container: [Dynamic width bg] with absolutely positioned overlapping pills ── */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '420/360',
                // Important: NO overflow hidden here, or strips will clip
            }}>

                {/* Left dosage column — optional overlap */}
                {showLeftDosage && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translate(-45%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.2rem',
                        zIndex: 100,
                        width: 'min(280px, 80%)',
                    }}>
                        {med.options.map((opt, i) => <DosageRow key={`L${i}`} label={opt} />)}
                    </div>
                )}

                {/* 350×280 canvas (Background only) */}
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
                    {/* Background image */}
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

                {/* Medicine image — Moved outside overflow logic to be more prominent (300×300) */}
                <div
                    className="animate-float"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: hovering ? 50 : 20,
                        pointerEvents: 'none', // Let hover pass to canvas
                    }}
                >
                    <img
                        src={med.image}
                        alt={med.name}
                        style={{
                            width: '300px',
                            height: '300px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.22))',
                            userSelect: 'none',
                            transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
                            transform: hovering ? 'scale(1.2)' : 'scale(1)',
                        }}
                    />
                </div>

                {/* Right dosage column — optional overlap */}
                {showRightDosage && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translate(45%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.2rem',
                        zIndex: 100,
                        width: 'min(280px, 80%)',
                    }}>
                        {med.options.map((opt, i) => <DosageRow key={`R${i}`} label={opt} />)}
                    </div>
                )}

            </div>

        </div>
    );
}

export function CompoundedMedicine() {
    return (
        <section style={{ background: 'white', padding: '48px 0', overflow: 'hidden' }}>
            <div style={{ width: '90%', margin: '0 auto' }}>

                {/* Section heading */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h3 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                        fontWeight: 800,
                        color: '#28436F',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        fontFamily: 'Lora, serif',
                    }}>
                        Compounded<br />GIP + GLP-1
                    </h3>
                </div>

                {/* 3-column grid of hero canvas cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '40px',
                }}>
                    {compoundedMeds.map((med, i) => (
                        <CompoundedCard
                            key={i}
                            med={med}
                            showLeftDosage={i === 0}
                            showRightDosage={true}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
