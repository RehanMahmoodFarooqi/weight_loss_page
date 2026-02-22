import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

// Importing all high-quality assets from src/final
import Group255 from '../../assets/Group-255.png';
import Group256 from '../../assets/Group-256.png';
import Group257 from '../../assets/Group-257.png';
import Group258 from '../../assets/Group-258.png';
import Group259 from '../../assets/Group-259.png';
import Group260 from '../../assets/Group-260.png';
import Group261 from '../../assets/Group-261.png';


// ─── All 18 medications ───────────────────────────────────────────────────────
const allMedications = [
    // ── Row 1 ──────────────────────────────────────────────────────────────────
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

    // ── Row 2 ──────────────────────────────────────────────────────────────────
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

    // Logic to separate Cap Tags (>9 chars AND longest on its side) from Body Tags
    const getSplitTags = (tags) => {
        if (!tags || tags.length === 0) return { cap: [], body: [] };

        // Find the index of the longest tag
        let longestIdx = 0;
        let maxLen = 0;
        tags.forEach((tag, idx) => {
            if (tag.length > maxLen) {
                maxLen = tag.length;
                longestIdx = idx;
            }
        });

        const cap = [];
        const body = [];

        tags.forEach((tag, idx) => {
            // The single longest tag ALWAYS moves up, regardless of length
            if (idx === longestIdx) {
                cap.push(tag);
            } else {
                body.push(tag);
            }
        });

        return { cap, body };
    };

    const leftSplit = getSplitTags(item.leftTags);
    const rightSplit = getSplitTags(item.rightTags);

    return (
        <div
            className="med-card-outer"
            style={{
                background: '#e4f1f4', // Specific light blue from design
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                padding: '12px 18px 12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
                overflow: 'visible',
                border: '1px solid rgba(40,67,111,0.05)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Title */}
            <div style={{ textAlign: 'center', marginBottom: '2px' }}>
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
            </div>

            {/* ── Image Area ── */}
            <div style={{
                position: 'relative',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '280px',
                marginTop: '14px',
            }}>
                {/* Product Image - Clean & Centered */}
                <img
                    src={item.image}
                    alt={item.name}
                    style={{
                        height: '280px',
                        width: 'auto',
                        objectFit: 'contain',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                        transition: 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)',
                        filter: 'drop-shadow(0 8px 16px rgba(40,67,111,0.12))',
                        zIndex: 2,
                    }}
                />

                {/* ── TAGS: BOTTLE CAP AREA (Longest > 9 characters) ── */}
                {/* Left Cap Tags */}
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '12px',
                    zIndex: 3,
                    pointerEvents: 'none',
                    width: 'auto',
                }}>
                    {leftSplit.cap.map((tag, i) => (
                        <div key={i} className="global-tag" style={{
                            transform: `translateX(-10px)`,
                            pointerEvents: 'auto',
                        }}>
                            <div className="tag-text">{tag}</div>
                        </div>
                    ))}
                </div>

                {/* Right Cap Tags */}
                <div style={{
                    position: 'absolute',
                    right: '0',
                    top: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '12px',
                    zIndex: 3,
                    pointerEvents: 'none',
                    width: 'auto',
                }}>
                    {rightSplit.cap.map((tag, i) => (
                        <div key={i} className="global-tag" style={{
                            transform: `translateX(10px)`,
                            pointerEvents: 'auto',
                        }}>
                            <div className="tag-text">{tag}</div>
                        </div>
                    ))}
                </div>


                {/* ── TAGS: BOTTLE BODY AREA (Remaining tags) ── */}
                {/* Left Body Tags */}
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '12px',
                    zIndex: 3,
                    pointerEvents: 'none',
                    width: 'auto',
                }}>
                    {leftSplit.body.map((tag, i) => (
                        <div key={i} className="global-tag" style={{
                            transform: `translateX(${i % 2 === 0 ? '-10px' : '0'})`,
                            pointerEvents: 'auto',
                        }}>
                            <div className="tag-text">{tag}</div>
                        </div>
                    ))}
                </div>

                {/* Right Body Tags */}
                <div style={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '12px',
                    zIndex: 3,
                    pointerEvents: 'none',
                    width: 'auto',
                }}>
                    {rightSplit.body.map((tag, i) => (
                        <div key={i} className="global-tag" style={{
                            transform: `translateX(${i % 2 === 0 ? '10px' : '0'})`,
                            pointerEvents: 'auto',
                        }}>
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
                            e.currentTarget.style.background = '#1a3a6b'; // Darker blue
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
    // Split into rows: 4 × 4 then 2
    const rows = [
        allMedications.slice(0, 4),   // Row 1
        allMedications.slice(4, 8),   // Row 2
        allMedications.slice(8, 12),  // Row 3
        allMedications.slice(12, 16), // Row 4
        allMedications.slice(16, 18), // Row 5 — 2 cards centered
    ];

    return (
        <section style={{ background: '#fff', padding: '60px 16px 40px' }}>
            <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
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

                {/* Rows 1–4: 4-column grid */}
                {rows.slice(0, 4).map((row, rowIdx) => (
                    <div
                        key={rowIdx}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '35px',
                            marginBottom: '16px',
                        }}
                    >
                        {row.map((item, i) => (
                            <MedCard key={i} item={item} />
                        ))}
                    </div>
                ))}

                {/* Row 5: 2 columns — centered (each card ~25% width) */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '35px',
                        marginBottom: '8px',
                    }}
                >
                    {/* Empty spacer left */}
                    <div />
                    {rows[4].map((item, i) => (
                        <MedCard key={i} item={item} />
                    ))}
                    {/* Empty spacer right */}
                    <div />
                </div>

                {/* Get Now Button - Centered at the end */}
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <button
                        className="flex items-center justify-center gap-2 bg-[#2B4C9A] text-white rounded-full hover:bg-[#000000E6] transition-all cursor-pointer btn-blink-nav animate-pulse-zoom-fast mx-auto"
                        style={{ padding: '12px 32px', height: '54px', fontSize: '20px', fontWeight: 600 }}
                    >
                        {/* <Calendar className="w-5 h-5" /> */}
                        <span className="tracking-wide">Get Now</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
