import React, { useState } from 'react';
import { Calendar, MessageCircle, Menu, ChevronDown, X, Globe, Headset, Search } from 'lucide-react';
import LogoImage from '../../assets/logo.jpg';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50 border-b-[8px] border-[#d0e8ec] shadow-sm">

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
                            <a href="#weight-loss" className="hover:text-[#0181F5] transition whitespace-nowrap tracking-wide cursor-pointer font-bold text-[18px] text-[rgb(0,119,181)]">Weight Loss</a>
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
                            className="flex items-center justify-center gap-2 bg-[#28436F] text-white hover:bg-[#000000E6] transition-all cursor-pointer btn-blink-nav rounded-lg animate-pulse-zoom"
                            style={{ padding: '8px 16px', height: '42px', fontSize: '13px', fontWeight: 600, marginRight: '14px' }}
                        >
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="tracking-wide">Book Appointment</span>
                        </button>

                        <button
                            className="flex items-center justify-center gap-2 border-2 border-[#28436F] text-[#28436F] transition-all cursor-pointer rounded-lg"
                            style={{ padding: '8px 10px', height: '36px', fontSize: '13px', fontWeight: 600, color: 'rgb(40, 67, 111)', marginRight: '24px' }}
                        >
                            <MessageCircle className="w-3.5 h-3.5 text-[#28436F]" />
                            <span className="tracking-wide">Messages</span>
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
