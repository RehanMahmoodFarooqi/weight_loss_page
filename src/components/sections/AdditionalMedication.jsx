import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

// Importing all high-quality assets from src/assets
import Group255 from '../../assets/Group-255.png';
import Group256 from '../../assets/Group-256.png';
import Group257 from '../../assets/Group-257.png';
import Group258 from '../../assets/Group-258.png';
import Group259 from '../../assets/Group-259.png';
import Group260 from '../../assets/Group-260.png';
import Group261 from '../../assets/Group-261.png';


// ─── All 7 medications ────────────────────────────────────────────────────────
const allMedications = [
    {
        name: 'Lipotropic (MIC) + B12',
        description: 'Fat-metabolizing injection with B12 support for enhanced fat burning.',
        price: '299',
        image: Group255,
        leftTags: ['Fat burn', 'Energy boost'],
        rightTags: ['Metabolism', 'Liver Support'],
    },
    {
        name: 'Vitamin B12',
        description: 'Essential vitamin for lasting energy and nerve health support.',
        price: '199',
        image: Group256,
        leftTags: ['Energy', 'Nerve health'],
        rightTags: ['Focus', 'RBC production'],
    },
    {
        name: 'Glutathione',
        description: 'Powerful antioxidant for detox and cellular regeneration.',
        price: '230',
        image: Group257,
        leftTags: ['Detox', 'Antioxidant'],
        rightTags: ['Immunity', 'Skin Glow'],
    },
    {
        name: 'NAD+ Injections',
        description: 'Cellular energy therapy for vitality and anti-aging repair.',
        price: '140',
        image: Group258,
        leftTags: ['Cell Energy', 'Anti-aging'],
        rightTags: ['Focus', 'Metabolism'],
    },
    {
        name: 'NAD+ Nasal Spray',
        description: 'Fast-absorbing NAD+ for brain support.',
        price: '329',
        image: Group259,
        leftTags: ['Brain boost', 'Clarity'],
        rightTags: ['Energy', 'Repair'],
    },
    {
        name: 'Peptides',
        description: 'Targeted compounds for recovery and performance.',
        price: '99',
        image: Group260,
        leftTags: ['Energy', 'Nerve health'],
        rightTags: ['Focus', 'RBC production'],
    },
    {
        name: 'Testosterone',
        description: 'Hormone therapy for strength and vitality.',
        price: '150',
        image: Group261,
        leftTags: ['Detox', 'Antioxidant'],
        rightTags: ['Immunity', 'Skin Glow'],
    },
];

// ─── Single Medication Card ───────────────────────────────────────────────────
function MedCard({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="med-card-outer"
            style={{
                background: '#e4f1f4',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px 16px 10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
                overflow: 'visible',
                border: '1px solid rgba(40,67,111,0.05)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Title + Description */}
            <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                <h4 style={{
                    fontSize: '24px',
                    fontWeight: '900',
                    color: '#28436F',
                    margin: 0,
                    lineHeight: 1.0,
                    paddingTop: '4px',
                    fontFamily: 'Lora, serif',
                }}>
                    {item.name}
                </h4>
                <p style={{
                    fontSize: '13px',
                    color: '#5a7fa8',
                    fontFamily: 'Lora, serif',
                    margin: '5px 0 0',
                    fontStyle: 'italic',
                    fontWeight: '500',
                    lineHeight: 1.3,
                }}>
                    {item.description}
                </p>
            </div>

            {/* ── Image Area with Overlapping Tags ── */}
            <div style={{
                position: 'relative',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '190px',
                marginTop: '6px',
            }}>
                {/* Product Image */}
                <img
                    src={item.image}
                    alt={item.name}
                    style={{
                        height: '180px',
                        width: 'auto',
                        objectFit: 'contain',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                        transition: 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)',
                        filter: 'drop-shadow(0 8px 16px rgba(40,67,111,0.12))',
                        zIndex: 2,
                        position: 'relative',
                    }}
                />

                {/* Left Tags — overlapping bottle */}
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '10px',
                    zIndex: 3,
                    pointerEvents: 'none',
                }}>
                    {item.leftTags.map((tag, i) => (
                        <div key={i} className="global-tag" style={{ pointerEvents: 'auto' }}>
                            <div className="tag-text">{tag}</div>
                        </div>
                    ))}
                </div>

                {/* Right Tags — overlapping bottle */}
                <div style={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '10px',
                    zIndex: 3,
                    pointerEvents: 'none',
                }}>
                    {item.rightTags.map((tag, i) => (
                        <div key={i} className="global-tag" style={{ pointerEvents: 'auto' }}>
                            <div className="tag-text">{tag}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Footer / CTA ── */}
            <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    width: '100%'
                }}>
                    <div style={{
                        flex: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#ffffff',
                        color: '#28436F',
                        border: '2px solid #28436F',
                        borderRadius: '10px',
                        fontSize: '17px',
                        fontWeight: '800',
                        padding: '10px 4px',
                        fontFamily: 'Roboto, sans-serif',
                    }}>
                        ${item.price}<span style={{ fontSize: '10px', fontWeight: '500', opacity: 0.8, marginLeft: '2px' }}>/mo</span>
                    </div>
                    <button
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            flex: '1',
                            background: '#28436F',
                            color: '#fff',
                            border: '2px solid #28436F',
                            borderRadius: '10px',
                            fontSize: '17px',
                            fontWeight: '800',
                            padding: '10px 4px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = '#1a3a6b';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = '#28436F';
                            e.currentTarget.style.color = '#fff';
                        }}
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function AdditionalMedication() {
    const rows = [
        allMedications.slice(0, 4),   // Row 1
        allMedications.slice(4, 7),   // Row 2 — 3 cards
    ];

    return (
        <section style={{ background: '#fff', padding: '60px 40px 40px' }}>
            <div style={{ maxWidth: '1900px', margin: '0 auto' }}>


                {/* Section heading */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: 'clamp(32px, 5vw, 64px)',
                        fontWeight: '900',
                        color: '#28436F',
                        fontFamily: 'Lora, Georgia, serif',
                        letterSpacing: '-0.03em',
                        margin: 0,
                        lineHeight: 1.1,
                    }}>
                        Supporting Weight Loss — Burn Bundle
                    </h2>
                </div>

                {/* Row 1: 4 cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '28px',
                    marginBottom: '28px',
                }}>
                    {rows[0].map((item, i) => (
                        <MedCard key={i} item={item} />
                    ))}
                </div>

                {/* Row 2: 3 cards — centered */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '28px',
                    marginBottom: '8px',
                }}>
                    {rows[1].map((item, i) => (
                        <MedCard key={i} item={item} />
                    ))}
                    <div /> {/* spacer on right */}
                </div>

                {/* Get Now Button */}
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <button
                        className="inline-flex items-center justify-center gap-2 bg-[#2B4C9A] text-white rounded-full hover:bg-[#000000E6] transition-all cursor-pointer btn-blink-nav animate-pulse-zoom-fast font-lora"
                        style={{ fontWeight: 600, fontSize: '24px', padding: '16px 40px' }}
                    >

                        Get Now
                    </button>
                </div>
            </div>
        </section>
    );
}