'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Search, Filter, Star, ShieldCheck, Zap,
    ChevronDown, GraduationCap, Award,
    Clock, Users, MapPin, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const coaches = [
    {
        id: 1,
        name: "Coach Rajesh Kumar",
        sport: "Cricket",
        experience: "15+ Years",
        rating: 4.9,
        students: "500+",
        level: "BCCI Level 2 Certified",
        specialty: "Batting Technique",
        price: "₹1,200",
        image: "https://images.unsplash.com/photo-1548433491-c84b4286506b?auto=format&fit=crop&w=400&q=80",
        tags: ["Former State Player", "Youth Expert"]
    },
    {
        id: 2,
        name: "Sarah Williams",
        sport: "Tennis",
        experience: "8 Years",
        rating: 4.8,
        students: "210",
        level: "ITF Certified",
        specialty: "Serve & Volley",
        price: "₹1,500",
        image: "https://images.unsplash.com/photo-1595273670150-db0a3d39074f?auto=format&fit=crop&w=400&q=80",
        tags: ["High Performance", "All Ages"]
    },
    {
        id: 3,
        name: "David Chen",
        sport: "Badminton",
        experience: "12 Years",
        rating: 4.7,
        students: "340",
        level: "BWF Level 1",
        specialty: "Speed & Agility",
        price: "₹1,000",
        image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=400&q=80",
        tags: ["Tactical Expert", "Endurance"]
    },
    {
        id: 4,
        name: "Vikram Malhotra",
        sport: "Football",
        experience: "10 Years",
        rating: 4.9,
        students: "450",
        level: "AFC 'B' License",
        specialty: "Tactical Play",
        price: "₹1,100",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        tags: ["Professional scout", "U-18 Coach"]
    },
    {
        id: 5,
        name: "Anjali Gupta",
        sport: "Yoga & Fitness",
        experience: "6 Years",
        rating: 4.9,
        students: "180",
        level: "RYT 500 Certified",
        specialty: "Sports Recovery",
        price: "₹900",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        tags: ["Flexibility", "Mindset"]
    },
    {
        id: 6,
        name: "Marcus Thorne",
        sport: "Basketball",
        experience: "9 Years",
        rating: 4.6,
        students: "290",
        level: "FIBA Certified",
        specialty: "Shooting Range",
        price: "₹1,300",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        tags: ["Drill Master", "Strength"]
    }
];

const CoachCard = ({ coach }: { coach: typeof coaches[0] }) => {
    return (
        <Link href={`/coaches/${coach.id}`} className="group block h-full">
            <div className="glass-card p-6 flex flex-col gap-6 hover:-translate-y-2 duration-500 shadow-2xl h-full border-foreground/5 relative overflow-hidden">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-foreground/10 group-hover:border-neon-accent/30 transition-all">
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                        <p className="text-[9px] font-black text-neon-accent uppercase tracking-widest">{coach.sport}</p>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-neon-accent text-black px-3 py-1 rounded-lg text-[10px] font-black uppercase italic shadow-xl">
                        {coach.price}/hr
                    </div>
                </div>

                <div className="space-y-4 flex-1">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h3 className="text-xl font-black text-foreground uppercase italic tracking-tighter group-hover:text-neon-accent transition-colors">
                                {coach.name}
                            </h3>
                            <div className="flex items-center gap-2 opacity-60">
                                <Award size={14} className="text-neon-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-tight">{coach.level}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-neon-accent bg-neon-accent/10 px-2 py-1 rounded-lg border border-neon-accent/20">
                            <Star size={12} className="fill-neon-accent" />
                            <span className="text-[10px] font-black italic">{coach.rating}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-foreground/5">
                        <div className="space-y-0.5">
                            <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Experience</p>
                            <div className="flex items-center gap-2">
                                <Clock size={12} className="text-neon-accent" />
                                <span className="text-xs font-bold">{coach.experience}</span>
                            </div>
                        </div>
                        <div className="space-y-0.5 text-right">
                            <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Graduates</p>
                            <div className="flex items-center gap-2 justify-end">
                                <Users size={12} className="text-neon-accent" />
                                <span className="text-xs font-bold">{coach.students}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {coach.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 bg-foreground/5 text-[8px] font-black uppercase tracking-widest rounded-md border border-foreground/5 opacity-60">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-2">
                    <button className="w-full py-4 bg-neon-accent text-black text-[10px] font-black uppercase italic tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all outline-none">
                        View Profile & Book
                    </button>
                </div>

                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-accent/5 blur-[50px] rounded-full group-hover:bg-neon-accent/10 transition-all"></div>
            </div>
        </Link>
    );
};

export default function CoachesDiscoveryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="relative z-10 max-w-[90%] mx-auto py-12 space-y-12">
                {/* Enterprise Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                            <GraduationCap size={14} className="text-neon-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">BMS Academy Network</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            Find <span className="gradient-text">Coaches</span>
                        </h1>
                        <p className="text-muted-foreground font-medium text-lg lg:text-xl opacity-80 max-w-xl">
                            Master your game with elite, certified instructors. Personalized training across all disciplines.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="glass-card p-6 rounded-2xl border-foreground/5 shadow-xl flex items-center gap-6">
                            <div className="text-right">
                                <p className="text-2xl font-black italic">140+</p>
                                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Certified Coaches</p>
                            </div>
                            <div className="w-[1px] h-10 bg-foreground/10"></div>
                            <div className="text-left">
                                <p className="text-2xl font-black italic text-neon-accent leading-none">4.9/5</p>
                                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Avg. Session Rating</p>
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
                                placeholder="Search by name, certification, or sport..."
                                className="w-full bg-foreground/5 hover:bg-foreground/10 focus:bg-foreground/10 border-transparent focus:border-neon-accent/20 outline-none rounded-xl pl-16 pr-6 py-5 text-sm font-bold transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="px-8 py-5 glass-card bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-xl transition-all">
                                <Filter size={16} className="text-neon-accent" />
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Pro Filters</span>
                                <ChevronDown size={14} className="opacity-40" />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        {["Sport Type", "Certification Level", "Price Range", "Student Experience", "Video Analysis"].map((filter, i) => (
                            <button key={i} className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest italic flex items-center gap-3 transition-all whitespace-nowrap">
                                {filter}
                                <ChevronDown size={12} className="opacity-40" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Coach Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {coaches.map((c) => (
                        <CoachCard key={c.id} coach={c} />
                    ))}
                </div>

                {/* Academy Trust Section */}
                <div className="glass-card p-12 rounded-[3.5rem] border-foreground/5 bg-gradient-to-br from-neon-accent/5 to-transparent relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-1">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black uppercase italic tracking-tight leading-none">The BMS Professional <br /><span className="text-neon-accent italic font-black">Standard</span></h2>
                                <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-lg">
                                    Every coach in our network undergoes a rigorous background check and certification verification process. We ensure you learn from the best current and former professionals.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: "Verified Licenses", icon: <ShieldCheck size={20} /> },
                                    { label: "Skill Progression", icon: <TrendingUp size={20} /> },
                                    { label: "Trial Sessions", icon: <Award size={20} /> },
                                    { label: "Elite Arenas", icon: <MapPin size={20} /> }
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
                            <div className="w-full aspect-square max-w-sm rounded-[3rem] overflow-hidden border-2 border-white/5 relative">
                                <img src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Elite Training" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                                    <div className="space-y-1">
                                        <p className="text-neon-accent font-black uppercase italic text-xs">Training Spotlight</p>
                                        <p className="text-2xl font-black uppercase italic text-white leading-none">National Ground Training</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-accent/10 blur-[50px] rounded-full"></div>
                        </div>
                    </div>
                </div>

                <MainFooter />
            </div>
        </main>
    );
}
