'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Search, Filter, Star, ShieldCheck,
    Gavel, ChevronDown, Award,
    Calendar, Users, MapPin, History,
    CheckCircle2, Scale
} from 'lucide-react';
import Link from 'next/link';

const umpires = [
    {
        id: 1,
        name: "Official Nitin Menon",
        sport: "Cricket",
        experience: "15 Years",
        rating: 5.0,
        matches: "210+",
        level: "ICC Elite Panel",
        specialty: "Test & ODI Specialist",
        price: "₹2,500",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        tags: ["Decision Review Expert", "Fair Play Award"]
    },
    {
        id: 2,
        name: "Referee Mark Clattenburg",
        sport: "Football",
        experience: "12 Years",
        rating: 4.8,
        students: "150+",
        level: "FIFA Certified",
        specialty: "High-Intensity Matches",
        price: "₹1,800",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        tags: ["VAR Training", "EPL Experience"]
    },
    {
        id: 3,
        name: "Umpire Ananya Sharma",
        sport: "Badminton",
        experience: "7 Years",
        rating: 4.9,
        matches: "85",
        level: "BWF Accredited",
        specialty: "Tournament Coordination",
        price: "₹1,200",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        tags: ["National Games Referee"]
    },
    {
        id: 4,
        name: "Official Javed Akhtar",
        sport: "Tennis",
        experience: "10 Years",
        rating: 4.7,
        matches: "130",
        level: "AITA Gold Badge",
        specialty: "Grand Slam Patterns",
        price: "₹2,000",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        tags: ["Quick Reflexes", "Player Mgt"]
    },
    {
        id: 5,
        name: "Referee Sarah Jenkins",
        sport: "Basketball",
        experience: "9 Years",
        rating: 4.8,
        matches: "110",
        level: "FIBA Certified",
        specialty: "Street & Pro Circuit",
        price: "₹1,500",
        image: "https://images.unsplash.com/photo-1595273670150-db0a3d39074f?auto=format&fit=crop&w=400&q=80",
        tags: ["Fairness First", "U-19 Expert"]
    },
    {
        id: 6,
        name: "Official Amit Trivedi",
        sport: "Cricket",
        experience: "6 Years",
        rating: 4.6,
        matches: "45",
        level: "State Level Certified",
        specialty: "Local T20 Leagues",
        price: "₹1,000",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        tags: ["Reliable", "Weekend Expert"]
    }
];

const UmpireCard = ({ official }: { official: typeof umpires[0] }) => {
    return (
        <Link href={`/umpires/${official.id}`} className="group block h-full">
            <div className="glass-card p-6 flex flex-col gap-6 hover:-translate-y-2 duration-500 shadow-2xl h-full border-foreground/5 relative overflow-hidden">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-foreground/10 group-hover:border-neon-accent/30 transition-all">
                    <img src={official.image} alt={official.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                        <p className="text-[9px] font-black text-neon-accent uppercase tracking-widest">{official.sport}</p>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-neon-accent text-black px-3 py-1 rounded-lg text-[10px] font-black uppercase italic shadow-xl">
                        {official.price}/match
                    </div>
                </div>

                <div className="space-y-4 flex-1">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h3 className="text-xl font-black text-foreground uppercase italic tracking-tighter group-hover:text-neon-accent transition-colors">
                                {official.name}
                            </h3>
                            <div className="flex items-center gap-2 opacity-60">
                                <ShieldCheck size={14} className="text-neon-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-tight">{official.level}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-neon-accent bg-neon-accent/10 px-2 py-1 rounded-lg border border-neon-accent/20">
                            <Star size={12} className="fill-neon-accent" />
                            <span className="text-[10px] font-black italic">{official.rating}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-foreground/5">
                        <div className="space-y-0.5">
                            <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Experience</p>
                            <div className="flex items-center gap-2">
                                <History size={12} className="text-neon-accent" />
                                <span className="text-xs font-bold">{official.experience}</span>
                            </div>
                        </div>
                        <div className="space-y-0.5 text-right">
                            <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Matches</p>
                            <div className="flex items-center gap-2 justify-end">
                                <Scale size={12} className="text-neon-accent" />
                                <span className="text-xs font-bold">{official.matches}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {official.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 bg-foreground/5 text-[8px] font-black uppercase tracking-widest rounded-md border border-foreground/5 opacity-60">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-2">
                    <button className="w-full py-4 bg-foreground text-background dark:bg-white dark:text-black text-[10px] font-black uppercase italic tracking-widest rounded-xl shadow-xl hover:bg-neon-accent hover:text-black transition-all outline-none border-none">
                        View Official Portfolio
                    </button>
                </div>

                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-accent/5 blur-[50px] rounded-full group-hover:bg-neon-accent/10 transition-all"></div>
            </div>
        </Link>
    );
};

export default function UmpiresDiscoveryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="relative z-10 max-w-[90%] mx-auto py-12 space-y-12">
                {/* Enterprise Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                            <Gavel size={14} className="text-neon-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">Certified Officiating Network</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            Find <span className="gradient-text">Umpires</span>
                        </h1>
                        <p className="text-muted-foreground font-medium text-lg lg:text-xl opacity-80 max-w-xl">
                            Ensure fair play with top-tier referees and match officials. Professional standards for every game level.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="glass-card p-6 rounded-2xl border-foreground/5 shadow-xl flex items-center gap-6">
                            <div className="text-right">
                                <p className="text-2xl font-black italic">85+</p>
                                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Active Officials</p>
                            </div>
                            <div className="w-[1px] h-10 bg-foreground/10"></div>
                            <div className="text-left">
                                <p className="text-2xl font-black italic text-neon-accent leading-none">100%</p>
                                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Fair Play Verified</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search & Filters */}
                <div className="space-y-6">
                    <div className="w-full glass-card p-2 rounded-2xl flex flex-col lg:flex-row gap-2 border-foreground/5 shadow-2xl">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neon-accent/60 transition-colors group-focus-within:text-neon-accent" size={18} />
                            <input
                                type="text"
                                placeholder="Search by name, badge level, or sport..."
                                className="w-full bg-foreground/5 hover:bg-foreground/10 focus:bg-foreground/10 border-transparent focus:border-neon-accent/20 outline-none rounded-xl pl-16 pr-6 py-5 text-sm font-bold transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="px-8 py-5 glass-card bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-xl transition-all">
                                <Filter size={16} className="text-neon-accent" />
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Officiating Type</span>
                                <ChevronDown size={14} className="opacity-40" />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        {["Sport Type", "Badge Level", "Pricing", "Day/Night availability", "Video Asst."].map((filter, i) => (
                            <button key={i} className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest italic flex items-center gap-3 transition-all whitespace-nowrap">
                                {filter}
                                <ChevronDown size={12} className="opacity-40" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Official Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {umpires.map((u) => (
                        <UmpireCard key={u.id} official={u} />
                    ))}
                </div>

                {/* Professional Trust Section */}
                <div className="glass-card p-12 rounded-[3.5rem] border-foreground/5 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-1">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black uppercase italic tracking-tight leading-none">BMS Guaranteed <br /><span className="text-neon-accent italic font-black">Integrity</span></h2>
                                <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-lg">
                                    Officiating is the backbone of competitive sports. We only onboard officials who background-checked, vetted for neutral decision-making, and possess active national or state certifications.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: "Neutral Conduct", icon: <Scale size={20} /> },
                                    { label: "Match Reports", icon: <History size={20} /> },
                                    { label: "Rulebook Mastery", icon: <Award size={20} /> },
                                    { label: "State Certified", icon: <ShieldCheck size={20} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-neon-accent/10 flex items-center justify-center text-neon-accent border border-neon-accent/20">
                                            {item.icon}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group flex justify-center">
                            <div className="w-full aspect-video max-w-sm rounded-[3rem] overflow-hidden border-2 border-white/5 relative">
                                <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Officiating" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                                    <div className="space-y-1">
                                        <p className="text-neon-accent font-black uppercase italic text-xs">Official Partner</p>
                                        <p className="text-2xl font-black uppercase italic text-white leading-none">ICC Accredited Officials</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-accent/10 blur-[50px] rounded-full"></div>
                        </div>
                    </div>
                </div>

                <MainFooter />
            </div>
        </main>
    );
}
