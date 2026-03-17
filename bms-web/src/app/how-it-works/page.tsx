'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Calendar, Users, MessageCircle, Trophy,
    ChevronRight, ArrowDown, Zap, Shield,
    Star, MapPin, Target, Smartphone
} from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
    const steps = [
        {
            number: "01",
            title: "Discover & Book",
            desc: "Browse a curated network of elite sports arenas. Filter by sport, surface type, and localized distance. Secure your slot in seconds with our verified booking engine.",
            icon: <Calendar size={32} />,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            details: ["Real-time Slot Visibility", "Verified Arena Metadata", "Instant Digital Passes"]
        },
        {
            number: "02",
            title: "Join the Squad",
            desc: "Don't have a team? No problem. Browse public match invitations hosted by our community. Check skill levels, squad rules, and jump into the game with a single tap.",
            icon: <Users size={32} />,
            color: "text-neon-accent",
            bg: "bg-neon-accent/10",
            details: ["Skill-Matched Discovery", "Localized Community Matches", "Host Your Own Games"]
        },
        {
            number: "03",
            title: "Engage & Socialize",
            desc: "The game doesn't end on the field. Share your match highlights in the Community Hub, build your athlete Karma, and connect with players for future victories.",
            icon: <MessageCircle size={32} />,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            details: ["Highlight Broadcasting", "Athlete Karma Ratings", "Social Squad Building"]
        },
        {
            number: "04",
            title: "Level Up & Master",
            desc: "Track your progression with automated skill intelligence. Enroll in professional coaching packs or officiate high-stakes tournaments to dominate the BMS ecosystem.",
            icon: <Trophy size={32} />,
            color: "text-orange-400",
            bg: "bg-orange-400/10",
            details: ["Skill Intelligence Analytics", "Pro-Coach Enrollments", "Tournament Rankings"]
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground transition-all duration-500 pb-24">
            <Navbar />

            <div className="max-w-[1200px] mx-auto px-6 space-y-24 pt-12">

                {/* Hero Header */}
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                        <Zap size={14} className="text-neon-accent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">Platform Protocol</span>
                    </div>
                    <h1 className="text-6xl lg:text-9xl font-black uppercase italic tracking-tighter leading-none">
                        How BMS <span className="gradient-text">Works</span>
                    </h1>
                    <p className="text-muted-foreground font-medium text-xl lg:text-2xl uppercase tracking-widest opacity-60 leading-relaxed">
                        A seamless loop of discovery, competition, and masterclass athletics.
                    </p>
                    <div className="flex justify-center pt-8">
                        <div className="w-12 h-20 rounded-full border-2 border-foreground/5 flex items-start justify-center p-2 relative overflow-hidden">
                            <div className="w-1.5 h-1.5 bg-neon-accent rounded-full animate-bounce mt-2"></div>
                        </div>
                    </div>
                </div>

                {/* The Journey Vertical Timeline */}
                <div className="relative space-y-32">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-neon-accent to-orange-400 opacity-20 hidden lg:block"></div>

                    {steps.map((step, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-6">
                                        <span className={`text-6xl lg:text-8xl font-black opacity-10 italic ${step.color}`}>{step.number}</span>
                                        <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center shadow-2xl transition-transform hover:scale-110`}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h2 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none">
                                        {step.title}
                                    </h2>
                                    <p className="text-muted-foreground font-medium text-lg lg:text-xl leading-relaxed uppercase tracking-wide">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {step.details.map((detail, di) => (
                                        <div key={di} className="glass-card p-4 rounded-xl border-foreground/5 flex items-center gap-3 group hover:border-foreground/10 transition-all">
                                            <div className={`w-1.5 h-1.5 rounded-full ${step.color} shadow-glow`}></div>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-foreground/80">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 w-full relative group">
                                <div className={`absolute inset-0 ${step.bg} blur-[100px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000`}></div>
                                <div className="glass-card p-2 rounded-[3.5rem] border-foreground/5 overflow-hidden aspect-[4/3] bg-foreground/[0.02] relative z-10 shadow-3xl">
                                    <div className="w-full h-full bg-black/60 rounded-[3rem] overflow-hidden relative">
                                        <img
                                            src={`https://images.unsplash.com/photo-${i === 0 ? '1504450758481-7338eba7524a' : i === 1 ? '1574629810360-7efbbe195018' : i === 2 ? '1531415080293-233414a5ef35' : '1595435066359-e1a3bb8b9ea1'}?auto=format&fit=crop&w=1200&q=80`}
                                            alt={step.title}
                                            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="flex items-center gap-4">
                                                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-white italic">Live Experience Trace</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Action Footer */}
                <div className="glass-card p-16 rounded-[4rem] border-neon-accent/10 bg-gradient-to-br from-neon-accent/5 via-transparent to-transparent text-center space-y-10 relative overflow-hidden">
                    <div className="space-y-4 relative z-10">
                        <h3 className="text-4xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">Ready to <span className="text-neon-accent">Play?</span></h3>
                        <p className="text-muted-foreground font-medium text-xl lg:text-2xl uppercase tracking-[0.1em] opacity-60">Join the elite athletic movement today.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10 pt-4">
                        <Link href="/venues">
                            <button className="px-12 py-6 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all outline-none">
                                Explore Arenas
                            </button>
                        </Link>
                        <Link href="/community">
                            <button className="px-12 py-6 bg-foreground/5 hover:bg-foreground/10 border border-foreground/5 rounded-2xl font-black uppercase italic tracking-widest text-[11px] transition-all">
                                Join Community
                            </button>
                        </Link>
                    </div>

                    <div className="absolute top-10 right-10 opacity-10 rotate-12"><Smartphone size={150} className="text-neon-accent" /></div>
                    <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-neon-accent/10 blur-[80px] rounded-full"></div>
                </div>

                <MainFooter />
            </div>

            {/* Ambient Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-neon-accent/5 blur-[150px] rounded-full"></div>
            </div>
        </main>
    );
}
