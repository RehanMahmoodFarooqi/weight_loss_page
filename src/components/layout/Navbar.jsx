import React, { useState } from 'react';
import { Calendar, MessageCircle, Menu, ChevronDown, X, Globe, Headset, Search } from 'lucide-react';
import LogoImage from '../../assets/logoo.png';

import ProductDesignImg from '../../assets/ChatGPT Image Feb 16, 2026, 08_29_45 PM.png';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-[1000] border-b-[8px] border-[#d0e8ec]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {/* Top Bar */}
            <div className="py-1" style={{ background: 'rgb(221, 235, 246)', color: 'rgb(13, 13, 13)', fontFamily: 'Inter, sans-serif' }}>
                <div className="px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-8">
                        <div className="flex items-center gap-8">
                            <div className="relative">
                                <button className="flex items-center gap-2 px-3 py-1 rounded-full transition-all hover:opacity-80" style={{ backgroundColor: 'rgb(239, 68, 68)', color: 'rgb(255, 255, 255)' }}>
                                    <Globe size={14} />
                                    <span className="text-[13px]" style={{ fontWeight: 700 }}>English</span>
                                    <ChevronDown size={12} />
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 px-4 py-1.5 rounded-full transition-all hover:opacity-80" style={{ backgroundColor: 'rgb(239, 68, 68)', color: 'rgb(255, 255, 255)' }}>
                                    <Headset size={14} />
                                </button>
                            </div>
                            <div className="hidden sm:flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(239, 68, 68)' }}></div>
                                <span className="text-[13px] tracking-wide" style={{ fontWeight: 600, color: 'rgb(7, 7, 7)' }}>24/7 Available</span>
                            </div>
                        </div>

                        {/* Search bar removed as per user request */}

                        <div className="hidden md:flex items-center gap-4">
                            <a href="/login" className="px-2 py-2 tracking-wide transition hover:opacity-80" style={{ fontWeight: 700, color: 'rgb(0, 119, 181)', fontSize: '16px' }}>Login</a>
                            <button className="px-3 py-1 rounded-full tracking-wide transition-all hover:opacity-90" style={{ fontWeight: 400, backgroundColor: 'rgb(43, 76, 154)', color: 'rgb(255, 255, 255)', border: '2px solid rgb(43, 76, 154)' }}>Get Started</button>
                            <button className="flex items-center justify-center gap-2 rounded-full transition-all cursor-pointer" style={{ border: '2px solid rgb(0, 119, 181)', padding: '8px 10px', height: '36px', fontSize: '13px', fontWeight: 600, color: 'rgb(0, 119, 181)', marginRight: '24px' }}>
                                <MessageCircle size={14} style={{ color: 'rgb(0, 119, 181)' }} />
                                <span className="tracking-wide">Messages</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub Header (Main Navigation) */}
            <div className="max-w-[1920px] mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-24 gap-2">

                    {/* Left Side: Logo + Nav Links */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-3 flex-shrink-0">
                            <img
                                src={LogoImage}
                                alt="TeleHealth Logo"
                                className="h-20 w-auto object-contain"
                            />
                        </a>

                        <div className="hidden lg:flex items-center gap-3 ml-4">
                            <a href="#urgent-care" className="hover:text-[#0181F5] transition whitespace-nowrap tracking-wide cursor-pointer font-bold text-[18px] text-[rgb(0,119,181)]">Urgent Care</a>

                            {/* Weight Loss - Mega Menu Trigger */}
                            <div className="mega-menu-trigger relative" style={{ position: 'static' }}>
                                <a
                                    href="#weight-loss"
                                    className="hover:text-[#0181F5] transition whitespace-nowrap tracking-wide cursor-pointer font-bold text-[18px] text-[rgb(0,119,181)] flex items-center gap-1 nav-link-animated"
                                    style={{ height: '96px', display: 'flex', alignItems: 'center' }}
                                >
                                    Weight Loss
                                </a>

                                {/* Mega Menu Panel */}
                                <div
                                    className="mega-menu-panel"
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        right: 0,
                                        width: '100vw',
                                        marginLeft: 'calc(-50vw + 50%)',
                                        backgroundColor: '#ffffff',
                                        borderTop: '8px solid #d0e8ec',
                                        zIndex: 100,
                                        padding: '0',
                                    }}
                                >
                                    <div style={{
                                        width: '100%',
                                        padding: '36px 60px 40px',
                                    }}>
                                        {/* 4-Column Grid */}
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr 1fr 420px',
                                            gap: '0 48px',
                                            alignItems: 'start',
                                        }}>

                                            {/* Column 1 & 2 Wrapper */}
                                            <div style={{ gridColumn: '1 / 3' }}>
                                                {/* Inner Grid for Lists */}
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                                                    {/* Column 1: Most Selling */}
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <div className="mega-menu-heading">MOST SELLING MEDICATIONS</div>
                                                        <a href="#" className="mega-menu-item">Compounded Tirzepatide <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item">Compounded Semaglutide <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item">Oral Tirzepatide <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item">Oral Semaglutide <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item">GLP-1 Lozenge <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item mega-menu-item-no-border">GLP-1 Micro Dose <span className="mega-rx">Rx</span></a>
                                                    </div>

                                                    {/* Column 2: Branded */}
                                                    <div>
                                                        <div className="mega-menu-heading">BRANDED MEDICATIONS</div>
                                                        <a href="#" className="mega-menu-item">Wegovy<sup style={{ fontSize: '9px' }}>®</sup> <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item">Ozempic<sup style={{ fontSize: '9px' }}>®</sup> <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item">Zepbound<sup style={{ fontSize: '9px' }}>®</sup> <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item">Mounjaro<sup style={{ fontSize: '9px' }}>®</sup> <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item">Saxenda<sup style={{ fontSize: '9px' }}>®</sup> <span className="mega-rx">Rx</span></a>
                                                        <a href="#" className="mega-menu-item mega-menu-item-no-border">Rybelsus (Oral)<sup style={{ fontSize: '9px' }}>®</sup> <span className="mega-rx">Rx</span></a>
                                                    </div>
                                                </div>

                                                {/* Explore Button - Now centered between Column 1 & 2 */}
                                                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
                                                    <a href="#weight-loss" className="mega-explore-btn" style={{ width: '280px' }}>
                                                        Explore Weight Loss
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Column 3: Additional Sub-A */}
                                            <div style={{ gridColumn: '3 / 4' }}>
                                                <div className="mega-menu-heading">ADDITIONAL WEIGHT LOSS – SUPPORTING MEDICATIONS</div>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <a href="#" className="mega-menu-item">Lipotropic (MIC) + B12 <span className="mega-rx">Rx</span></a>
                                                    <a href="#" className="mega-menu-item">Vitamin B12</a>
                                                    <a href="#" className="mega-menu-item">Glutathione</a>
                                                    <a href="#" className="mega-menu-item">NAD+ Injections</a>
                                                    <a href="#" className="mega-menu-item">NAD+ Nasal Spray</a>
                                                    <a href="#" className="mega-menu-item">Peptides</a>
                                                    <a href="#" className="mega-menu-item mega-menu-item-no-border">Slim Shot : Lipo(MIC)</a>
                                                </div>
                                            </div>

                                            {/* Column 4: Product Card (spans all rows) */}
                                            <div style={{ gridColumn: '4', gridRow: '1 / 3' }}>
                                                <div
                                                    className="mega-menu-card"
                                                    style={{
                                                        background: '#ffffff',
                                                        borderRadius: '16px',
                                                        overflow: 'hidden',
                                                        height: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                                                    }}
                                                >
                                                    <img
                                                        src={ProductDesignImg}
                                                        alt="Medication Products"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="#skin-care" className="hover:text-[#0181F5] transition whitespace-nowrap tracking-wide cursor-pointer font-bold text-[18px] text-[rgb(0,119,181)]">Skin Care</a>
                            <a href="#hair-loss" className="hover:text-[#0181F5] transition whitespace-nowrap tracking-wide cursor-pointer font-bold text-[18px] text-[rgb(0,119,181)]">Hair Loss</a>

                            <div className="relative group">
                                <button className="hover:text-[#0181F5] transition whitespace-nowrap tracking-wide flex items-center gap-1 font-bold text-[18px] text-[rgb(0,119,181)] h-[96px]">
                                    Longevity
                                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                {/* Dropdown placeholder if needed in future */}
                            </div>

                            <div className="relative group">
                                <button className="hover:text-[#0181F5] transition whitespace-nowrap tracking-wide flex items-center gap-1 font-bold text-[18px] text-[rgb(0,119,181)]">
                                    About Us
                                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Buttons */}
                    <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                        <button
                            className="flex items-center justify-center gap-2 bg-[#2B4C9A] text-white rounded-full hover:bg-[#000000E6] transition-all cursor-pointer btn-blink-nav animate-pulse-zoom-fast"
                            style={{ padding: '8px 16px', height: '42px', fontSize: '13px', fontWeight: 600, marginRight: '50px' }}
                        >
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="tracking-wide">Book Appointment</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[#000000E6]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        <a href="#urgent-care" className="block text-[#28436F] font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Urgent Care</a>
                        <a href="#weight-loss" className="block text-[#28436F] font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Weight Loss</a>
                        <a href="#skin-care" className="block text-[#28436F] font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Skin Care</a>
                        <a href="#hair-loss" className="block text-[#28436F] font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Hair Loss</a>
                        <a href="#longevity" className="block text-[#28436F] font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Longevity</a>
                        <a href="#about" className="block text-[#28436F] font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>

                        <div className="pt-4 space-y-3">
                            <button className="w-full flex items-center justify-center gap-2 bg-[#2B4C9A] text-white py-3 font-semibold rounded-lg">
                                <Calendar className="w-4 h-4" /> Book Appointment
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 border-2 border-[#28436F] text-[#28436F] py-3 font-semibold rounded-lg">
                                <MessageCircle className="w-4 h-4" /> Messages
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
