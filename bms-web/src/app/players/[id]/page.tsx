'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    MapPin, Star, ShieldCheck, Zap,
    Share2, Heart, ChevronLeft, ArrowRight,
    Trophy, Activity, History, MessageSquare,
    CheckCircle2, Info, Users, Calendar
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const playersData = {
    1: {
        name: "Arjun Mehta",
        location: "Andheri West, Mumbai",
        distance: "1.2 km",
        rating: 4.9,
        reviews: 58,
        skill: "Professional",
        karma: 95,
        sports: ["Football", "Cricket", "Tennis"],
        matches: 124,
        winRate: "72%",
        bio: "Former state-level football player now coaching and playing competitive matches across Mumbai. Specializing in central midfield and rapid counter-attacks. Always looking for high-intensity sessions.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        stats: [
            { label: "Goals Scored", val: "450+", icon: <Zap size={16} /> },
            { label: "MVPs", val: "32", icon: <Trophy size={16} /> },
            { label: "Reliability", val: "99%", icon: <ShieldCheck size={16} /> }
        ],
        recentMatches: [
            { opponent: "Red Devils FC", result: "W", score: "4-2", sport: "Football", date: "2 days ago" },
            { opponent: "Elite Strikers", result: "W", score: "2-0", sport: "Football", date: "1 week ago" },
            { opponent: "The Titans", result: "L", score: "1-3", sport: "Football", date: "2 weeks ago" }
        ]
    }
};

export default function PlayerProfilePage() {
    const params = useParams();
    const router = useRouter();
    const idStr = typeof params?.id === 'string' ? params.id : '1';
    const player = playersData[idStr as unknown as keyof typeof playersData] || playersData[1];

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500 pb-20">
            <Navbar />

            <div className="max-w-[90%] mx-auto py-10 space-y-12">
                {/* Back Button & Action Bar */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-[10px] font-black uppercase text-muted-foreground hover:text-neon-accent transition-all tracking-widest"
                    >
                        <ChevronLeft size={16} /> Back to Network
                    </button>
                    <div className="flex items-center gap-3">
                        <button className="p-4 glass-card rounded-2xl hover:bg-neon-accent hover:text-black transition-all border-foreground/5 shadow-xl">
                            <Share2 size={20} />
                        </button>
                        <button className="p-4 glass-card rounded-2xl hover:text-neon-accent border-foreground/5 shadow-xl transition-all group">
                            <Heart size={20} className="group-hover:fill-current" />
                        </button>
                    </div>
                </div>

                {/* Profile Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 space-y-8">
                        <div className="relative group">
                            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 border-neon-accent/20 p-2 shadow-3xl">
                                <img src={player.image} className="w-full h-full object-cover rounded-[3rem]" alt="Athlete Profile" />
                            </div>
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] glass-card p-6 rounded-3xl border-neon-accent/30 shadow-2xl flex justify-between items-center bg-black/60 backdrop-blur-xl">
                                <div className="text-center flex-1 border-r border-white/10">
                                    <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest leading-none">Karma</p>
                                    <p className="text-2xl font-black italic text-white">{player.karma}</p>
                                </div>
                                <div className="text-center flex-1">
                                    <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest leading-none">Global Rank</p>
                                    <p className="text-2xl font-black italic text-white">#142</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h1 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-none">
                                {player.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-1.5 text-neon-accent bg-neon-accent/10 px-3 py-1.5 rounded-xl border border-neon-accent/20">
                                    <Star size={14} className="fill-neon-accent" />
                                    <span className="text-xs font-black italic">{player.rating}</span>
                                </div>
                                <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                                    {player.reviews} Endorsements
                                </div>
                            </div>
                            <p className="flex items-center gap-2 text-muted-foreground text-sm font-bold uppercase tracking-tight">
                                <MapPin size={16} className="text-neon-accent" />
                                {player.location} • {player.distance} Away
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-12">
                        {/* Elite Analytics Bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {player.stats.map((stat, i) => (
                                <div key={i} className="glass-card p-8 rounded-[2.5rem] border-neon-accent/10 text-center space-y-3 bg-gradient-to-b from-neon-accent/[0.03] to-transparent">
                                    <div className="w-12 h-12 rounded-full bg-neon-accent/10 flex items-center justify-center mx-auto text-neon-accent">
                                        {stat.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-black italic text-foreground leading-none">{stat.val}</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bio & Directives */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-l-4 border-neon-accent pl-6">
                                <h3 className="text-2xl font-black uppercase italic tracking-tight">Athelete Bio</h3>
                            </div>
                            <p className="text-xl text-muted-foreground leading-relaxed font-medium italic opacity-90">
                                "{player.bio}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Sports & Skills */}
                            <div className="space-y-8">
                                <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                                    <Activity size={20} className="text-neon-accent" /> Combat & Sports Specialties
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {player.sports.map((s, i) => (
                                        <div key={i} className="p-5 glass-card rounded-2xl flex items-center justify-between group hover:bg-neon-accent/5 transition-all cursor-default">
                                            <div className="flex items-center gap-4">
                                                <div className="w-2 h-2 rounded-full bg-neon-accent shadow-glow"></div>
                                                <span className="text-xs font-black uppercase tracking-[0.2em]">{s}</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-neon-accent uppercase italic">{player.skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Performance */}
                            <div className="space-y-8">
                                <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                                    <History size={20} className="text-neon-accent" /> Match Feed
                                </h3>
                                <div className="space-y-3">
                                    {player.recentMatches.map((m, i) => (
                                        <div key={i} className="px-6 py-4 glass-card rounded-2xl flex justify-between items-center border-l-4 border-l-neon-accent/60">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest leading-none">{m.opponent}</p>
                                                <p className="text-[8px] font-bold text-muted-foreground uppercase">{m.sport} • {m.date}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className={`text-sm font-black italic ${m.result === 'W' ? 'text-neon-accent' : 'text-foreground/40'}`}>
                                                    {m.result} ({m.score})
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Interaction Control */}
                        <div className="glass-card p-10 rounded-[3rem] border-neon-accent/20 bg-gradient-to-r from-neon-accent/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="space-y-2 text-center md:text-left">
                                <h4 className="text-3xl font-black uppercase italic tracking-tight leading-none">Ready to Challenge?</h4>
                                <p className="text-sm font-medium text-muted-foreground">Send an invite to {player.name.split(' ')[0]} for your next session.</p>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <Link href={`/players/${idStr}/invite`} className="flex-1 md:flex-none">
                                    <button className="w-full px-10 py-6 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-sm shadow-[0_20px_50px_rgba(57,255,20,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                                        Invite to Play <ArrowRight size={20} />
                                    </button>
                                </Link>
                                <button className="p-6 glass-card rounded-2xl hover:bg-foreground/5 transition-all text-neon-accent border-foreground/5">
                                    <MessageSquare size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <MainFooter />
            </div>
        </main>
    );
}

// Minimal Glow Helper
function Glow() {
    return <div className="absolute inset-0 bg-neon-accent/20 blur-[100px] -z-10 rounded-full"></div>
}
