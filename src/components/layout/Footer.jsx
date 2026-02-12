import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#2f3339] text-white relative z-50">
            <div className="px-2 md:px-4 lg:px-4 p-[22px]">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-[2.5rem]">

                    {/* Column 1: Brand & QR */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0">
                                <span className="tracking-tight font-medium text-2xl text-[rgb(1,87,140)]">T</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="leading-tight tracking-tight font-medium text-[20px]">Tele Health</span>
                                <span className="font-[200] text-[12px] text-[rgb(208,232,236)]">Healthcare on Demand</span>
                            </div>
                        </div>
                        <p className="text-[#9d9a9aff] mb-6 leading-relaxed text-[16px]">
                            Your trusted partner in virtual healthcare. Access quality medical consultations from the comfort of your home, anytime, anywhere.
                        </p>
                        <div className="mt-4 ml-[26px]">
                            <div className="bg-white p-3 w-32 h-32 inline-block">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://telehealthyou.com"
                                    alt="QR Code - Scan to visit"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Company & Resources */}
                    <div>
                        <h4 className="mb-4 font-serif text-[20px] font-semibold text-white" style={{ fontFamily: 'Lora, serif' }}>Company & Resources</h4>
                        <ul className="space-y-2 text-[16px]">
                            <li><a href="#privacy" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Privacy Policy</a></li>
                            <li><a href="#about" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">About us</a></li>
                            <li><a href="#contact" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Contact us</a></li>
                            <li><a href="#blogs" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Help Blogs</a></li>
                            <li><a href="#terms" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Terms & Conditions</a></li>
                            <li><a href="#message" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Message</a></li>
                            <li><a href="#faq" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">FAQ's</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="mb-4 font-serif text-[20px] font-semibold text-white" style={{ fontFamily: 'Lora, serif' }}>Services</h4>
                        <ul className="space-y-2 text-[16px]">
                            <li><a href="#urgent-care" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Urgent care</a></li>
                            <li><a href="#weight-loss" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Weight loss</a></li>
                            <li><a href="#hair-loss" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Hair loss</a></li>
                            <li><a href="#skin-care" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Skin Care</a></li>
                            <li><a href="#mens-health" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Men's Health</a></li>
                            <li><a href="#womens-health" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">Women's Health</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Additional Services */}
                    <div>
                        <h4 className="mb-4 font-serif text-[20px] font-semibold text-white" style={{ fontFamily: 'Lora, serif' }}>Additional Services</h4>
                        <ul className="space-y-2 text-[16px]">
                            <li><span className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer font-bold">Prescription Refill</span></li>
                            <li><span className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer font-bold">Longevity</span></li>
                            <li><a href="#mental-health" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer pl-4">Mental Health</a></li>
                            <li><a href="#sexual-health" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer pl-4">Sexual Health</a></li>
                            <li><a href="#hormonal-treatment" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer pl-4">Hormonal Treatment</a></li>
                            <li><a href="#anxiety" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer pl-4">Anxiety</a></li>
                            <li><a href="#sleep-treatment" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer pl-4">Sleep Treatment</a></li>
                            <li><a href="#anti-aging" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer pl-4">Anti-Aging</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact & Socials */}
                    <div>
                        <h4 className="mb-4 font-serif text-[20px] font-semibold text-white" style={{ fontFamily: 'Lora, serif' }}>Get In Touch</h4>
                        <ul className="space-y-3 mb-6 text-[16px] text-[#9d9a9aff]">
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-[#9d9a9aff] mt-1 shrink-0" />
                                <div>
                                    <div className="text-[#9d9a9aff]">Call Us</div>
                                    <a href="tel:1-800-TELEHEALTHYOU" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">1-800-TELEHEALTH-YOU</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-[#9d9a9aff] mt-1 shrink-0" />
                                <div>
                                    <div className="text-[#9d9a9aff]">Email Us</div>
                                    <a href="mailto:support@telehealthyou.com" className="text-[rgb(157,154,154)] hover:text-[#d0e8ec] transition cursor-pointer">support@telehealthyou.com</a>
                                </div>
                            </li>
                        </ul>

                        <h4 className="mb-3 font-serif text-[20px] font-semibold text-white" style={{ fontFamily: 'Lora, serif' }}>Follow us on:</h4>
                        <div className="flex items-center gap-3 mb-10">
                            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#d0e8ec] hover:text-[#2f3339] transition flex items-center justify-center cursor-pointer">
                                <Facebook className="w-[18px] h-[18px]" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#d0e8ec] hover:text-[#2f3339] transition flex items-center justify-center cursor-pointer">
                                <Twitter className="w-[18px] h-[18px]" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#d0e8ec] hover:text-[#2f3339] transition flex items-center justify-center cursor-pointer">
                                <Instagram className="w-[18px] h-[18px]" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#d0e8ec] hover:text-[#2f3339] transition flex items-center justify-center cursor-pointer">
                                <Linkedin className="w-[18px] h-[18px]" />
                            </a>
                        </div>
                    </div> {/* End Column 5 */}
                </div> {/* End Grid */}

                {/* Certifications Row - Aligned Right as per image */}
                <div className="flex justify-end gap-4 mt-8">
                    <div className="bg-white p-2 w-36 h-16 flex items-center justify-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUsaNxTkfNOBHSy86d-qEiDpyvEIzFNFilA&s" alt="HIPAA Compliant" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-white p-2 w-36 h-16 flex items-center justify-center">
                        <img src="https://spectra-group.co.uk/wp-content/uploads/2017/01/iso-27001-logo.gif" alt="ISO 27001" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-white p-2 w-36 h-16 flex items-center justify-center">
                        <img src="https://logowik.com/content/uploads/images/aicpa-soc-2-type-ii-certified2471.jpg" alt="SOC 2" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div> {/* End Inner Wrapper line 7 */}

            {/* Copyright Bar */}
            <div className="border-t border-white/5">
                <div className="px-4 md:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-center text-[#9d9a9aff] text-[14px]">
                        <div>© Tele Health. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
