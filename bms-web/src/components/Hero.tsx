'use client';

import React from 'react';
import { MapPin, Users, Calendar, Store, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

const heroImages = [
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/159515/football-football-player-sport-action-159515.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    };

    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-12 lg:py-20 gap-8 h-full min-h-[85vh] overflow-hidden">
            {/* Background Watermark Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.02]">
                <h2 className="text-[250px] font-black italic tracking-tighter uppercase leading-none">ATHLETICS</h2>
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.02]">
                <h2 className="text-[200px] font-black italic tracking-tighter uppercase leading-none">STADIUM</h2>
            </div>

            {/* Left Content (45%) */}
            <div className="z-20 flex-1 space-y-10 w-full lg:max-w-[45%]">
                {/* Main Heading */}
                <div className="relative space-y-4">
                    <h1 className="text-6xl lg:text-[100px] font-black leading-[0.9] tracking-tighter text-foreground uppercase italic">
                        More Than
                    </h1>
                    <h1 className="text-6xl lg:text-[100px] font-black leading-[0.9] tracking-tighter gradient-text uppercase italic">
                        Bookings
                    </h1>
                </div>

                {/* Description */}
                <div className="space-y-6">
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl opacity-90" style={{ color: 'var(--text-muted)' }}>
                        Experience the future of sports. Where players log, book grounds, join matches, and build the ultimate community — all in one unified platform.
                    </p>

                    {/* Stats Row */}
                    <div className="flex gap-8 border-l-4 border-neon-accent pl-6 py-2">
                        <div>
                            <div className="text-2xl font-black text-foreground">500+</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-neon-accent">Venues</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-foreground">10K+</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-neon-accent">Players</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-foreground">4.9/5</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-neon-accent">Rating</div>
                        </div>
                    </div>
                </div>

                {/* Action Pills */}
                <div className="flex xl:flex-nowrap flex-wrap gap-3 pt-4 overflow-x-visible">
                    {[
                        { icon: MapPin, label: "Venues" },
                        { icon: Users, label: "Players" },
                        { icon: Calendar, label: "Host" },
                        { icon: Store, label: "Market" }
                    ].map((btn, i) => (
                        <button key={i} className="glass-card px-6 py-4 flex flex-1 items-center justify-center gap-2.5 hover:scale-105 hover:bg-neon-accent hover:text-black dark:hover:text-black transition-all group border-foreground/10 duration-300 min-w-fit">
                            <btn.icon size={18} className="text-neon-accent group-hover:text-inherit transition-colors" />
                            <span className="font-bold text-xs uppercase tracking-wider italic whitespace-nowrap">{btn.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Content (Image Carousel - 55%) */}
            <div className="z-20 flex-[1.2] relative w-full lg:w-[55%] aspect-video flex items-center justify-center lg:ml-12 text-foreground">
                {/* Seamless Image Container */}
                <div className="relative w-full h-full group">
                    {/* Ground Marking Decoration */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-neon-accent/30 rounded-tr-[4rem] pointer-events-none"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-neon-accent/30 rounded-bl-[4rem] pointer-events-none"></div>

                    {/* Dynamic Ambient Glow */}
                    <div className="absolute inset-0 bg-neon-accent/5 blur-[80px] rounded-full group-hover:scale-110 transition-all duration-1000"></div>

                    {/* The Image with soft edges for seamless blending */}
                    <div className="relative w-full h-full overflow-hidden transition-all duration-700 rounded-3xl">
                        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_50px_25px_var(--background)] lg:shadow-[inset_0_0_80px_40px_var(--background)]"></div>

                        {heroImages.map((src, i) => (
                            <Image
                                key={src}
                                src={src}
                                alt="Premium Sports Image"
                                fill
                                className={`object-cover transition-all duration-1000 group-hover:scale-110 ${i === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{
                                    maskImage: 'radial-gradient(circle, black 50%, transparent 85%)',
                                    WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 85%)'
                                }}
                                priority={i === 0}
                            />
                        ))}

                        {/* Interactive Overlay Elements */}
                        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handlePrev}
                                    className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 flex items-center justify-center hover:bg-neon-accent hover:text-background transition-all"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 flex items-center justify-center hover:bg-neon-accent hover:text-background transition-all"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* Modern Carousel Indicators */}
                            <div className="flex gap-2.5">
                                {heroImages.map((_, i) => (
                                    <div key={i} className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-8 bg-neon-accent shadow-[0_0_15px_var(--glow-color)]' : 'w-1 bg-foreground/20'}`}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
