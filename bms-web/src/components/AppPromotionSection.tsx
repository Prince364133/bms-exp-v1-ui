'use client';

import React from 'react';
import Image from 'next/image';

const AppPromotionSection = () => {
    return (
        <section className="px-4 lg:px-8 py-16">
            <div className="relative glass-card rounded-[3rem] p-8 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center gap-12 bg-neon-accent/5">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-[50%] h-full bg-neon-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

                {/* Left Content */}
                <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase italic tracking-tighter leading-tight">
                            Get the <span className="text-neon-accent">BMS APP</span>
                        </h2>
                        <p className="text-sm lg:text-base text-muted-foreground font-medium leading-relaxed max-w-xl">
                            Your game, your way — anytime, anywhere! Explore nearby venues, book your slots instantly, discover tournaments, and connect with fellow players, Order Custom Jerseys — all from one powerful app. Download now and keep the game at your fingertips!
                        </p>
                    </div>

                    <div className="space-y-2 lg:pt-4">
                        <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest italic">
                            Copyright 2015 - 2026 saavik solutions pvt ltd. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <button className="h-14 lg:h-16 px-8 bg-black rounded-2xl border border-white/10 flex items-center gap-4 group hover:scale-105 transition-all shadow-xl shadow-black/40">
                            <div className="w-8 h-8 relative opacity-80 group-hover:opacity-100 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-left">
                                <p className="text-[8px] font-black text-white/40 uppercase leading-none">Get it on</p>
                                <p className="text-lg font-black text-white leading-none mt-1">Google Play</p>
                            </div>
                        </button>

                        <button className="h-14 lg:h-16 px-8 bg-black rounded-2xl border border-white/10 flex items-center gap-4 group hover:scale-105 transition-all shadow-xl shadow-black/40">
                            <div className="w-8 h-8 relative opacity-80 group-hover:opacity-100 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-full h-full object-contain brightness-0 invert" />
                            </div>
                            <div className="text-left">
                                <p className="text-[8px] font-black text-white/40 uppercase leading-none">Download on the</p>
                                <p className="text-lg font-black text-white leading-none mt-1">App Store</p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Phone & QR */}
                <div className="relative group perspective-1000">
                    {/* Phone Mockup Frame */}
                    <div className="relative w-[300px] aspect-[9/18.5] bg-black rounded-[3rem] border-8 border-[#222] shadow-[0_0_100px_rgba(57,255,20,0.15)] overflow-hidden transform group-hover:rotate-y-[-10deg] duration-700">
                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-white p-6 flex flex-col items-center justify-center text-center space-y-8">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-black uppercase tracking-tighter italic opacity-60">Your Game in One Scan —</p>
                                <p className="text-[12px] font-black text-black uppercase tracking-tighter">Get the BMS APP Now!</p>
                            </div>

                            {/* QR Code Simulation */}
                            <div className="relative w-44 h-44 p-4 border border-foreground/5 rounded-3xl shadow-inner">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                    alt="QR Code"
                                    className="w-full h-full object-contain grayscale brightness-90"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-lg flex items-center justify-center border-2 border-neon-accent">
                                    <span className="text-[6px] font-black text-neon-accent">BMS</span>
                                </div>

                                { /* Corner Dots - Theme Consistent */}
                                <div className="absolute top-3 left-3 w-4 h-4 bg-neon-accent rounded"></div>
                                <div className="absolute top-3 right-3 w-4 h-4 bg-neon-accent rounded"></div>
                                <div className="absolute bottom-3 left-3 w-4 h-4 bg-neon-accent rounded"></div>
                            </div>

                            {/* Phone Decorative Notch */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
                        </div>
                    </div>

                    {/* Case Accents */}
                    <div className="absolute -right-2 top-32 w-1.5 h-16 bg-neon-accent rounded-l-full shadow-lg"></div>
                    <div className="absolute -right-2 top-52 w-1.5 h-12 bg-neon-accent rounded-l-full shadow-lg"></div>
                </div>
            </div>
        </section>
    );
};

export default AppPromotionSection;
