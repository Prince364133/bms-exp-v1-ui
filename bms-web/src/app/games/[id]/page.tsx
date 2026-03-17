'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    MapPin, Calendar, Clock, Users,
    ShieldCheck, Star, Share2, Heart,
    ChevronLeft, ArrowRight, UserCircle2,
    Check, Zap, Info, MessageSquare, Plus
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const gamesData = {
    1: {
        title: "5v5 Sunday Football Rush",
        venue: "Greenfield Sports Arena",
        location: "Andheri West, Mumbai",
        date: "Sunday, March 22, 2026",
        time: "07:00 PM - 09:00 PM",
        sport: "Football",
        hostedBy: "Captain Rahul",
        hostImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        hostStats: { games: 45, rating: 4.8, reliability: "98%" },
        joined: 7,
        total: 10,
        skillLevel: "Intermediate",
        pricePerHead: 300,
        totalVenuePrice: 1500,
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
        about: "Looking for competitive yet friendly football enthusiasts for a high-intensity 5v5 session. We usually play technical possession football. Bibs and water will be provided. Please arrive 15 minutes early for warm-ups.",
        squad: [
            { name: "Rahul (C)", pos: "Midfielder", verified: true },
            { name: "Sameer", pos: "Forward", verified: true },
            { name: "Mike", pos: "Goalkeeper", verified: false },
            { name: "Aditi", pos: "Defender", verified: true },
            { name: "Vikram", pos: "Forward", verified: false },
            { name: "Sonia", pos: "Midfielder", verified: true },
            { name: "Kevin", pos: "Defender", verified: false }
        ]
    }
};

export default function GameDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const idStr = typeof params?.id === 'string' ? params.id : '1';
    const game = gamesData[idStr as unknown as keyof typeof gamesData] || gamesData[1];

    const spotsLeft = game.total - game.joined;

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="max-w-[90%] mx-auto py-10 space-y-10">
                {/* Immersive Hybrid Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-[10px] font-black uppercase text-muted-foreground hover:text-neon-accent transition-all tracking-widest"
                        >
                            <ChevronLeft size={16} /> Explore Games
                        </button>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-neon-accent text-black text-[9px] font-black uppercase tracking-widest rounded-md italic">
                                    {game.sport}
                                </span>
                                <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{game.skillLevel} Level</span>
                            </div>
                            <h1 className="text-4xl lg:text-7xl font-black uppercase italic tracking-tighter">
                                {game.title}
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-4 glass-card rounded-2xl hover:bg-neon-accent hover:text-black transition-all border-foreground/5 shadow-xl">
                            <Share2 size={20} />
                        </button>
                        <button className="px-6 py-4 glass-card rounded-2xl border-neon-accent/40 text-neon-accent font-black uppercase italic text-xs tracking-widest flex items-center gap-3 hover:bg-neon-accent hover:text-black transition-all">
                            <MessageSquare size={16} /> Contact Host
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left content: Match Info & Squad */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Featured Hero */}
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-3xl">
                            <img src={game.image} className="w-full h-full object-cover" alt="Match background" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 flex items-center gap-6">
                                <div className="flex items-center gap-3 text-white">
                                    <Calendar size={20} className="text-neon-accent" />
                                    <span className="font-black italic uppercase text-lg">{game.date}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white">
                                    <Clock size={20} className="text-neon-accent" />
                                    <span className="font-black italic uppercase text-lg">{game.time}</span>
                                </div>
                            </div>
                        </div>

                        {/* Host Profile Card */}
                        <div className="glass-card p-10 rounded-[2.5rem] border-foreground/5 flex flex-col md:flex-row gap-10 items-center">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full border-4 border-neon-accent/20 p-1">
                                    <img src={game.hostImage} className="w-full h-full rounded-full object-cover" alt="Host" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-neon-accent text-black p-1.5 rounded-lg border-4 border-background">
                                    <ShieldCheck size={16} />
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left space-y-2">
                                <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest">Match Organizer</p>
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter">{game.hostedBy}</h3>
                                <p className="text-muted-foreground text-sm font-bold uppercase tracking-tight">Verified Athlete • BMS Premium Host</p>
                            </div>
                            <div className="flex gap-8 border-l border-white/5 pl-10 h-full">
                                {[
                                    { label: "Matches", val: game.hostStats.games },
                                    { label: "Rating", val: game.hostStats.rating, icon: <Star size={12} className="fill-neon-accent inline ml-1 mb-1" /> },
                                    { label: "Reliability", val: game.hostStats.reliability }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-xl font-black italic text-foreground leading-none">{stat.val}{stat.icon}</p>
                                        <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground pt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* About Match */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black uppercase italic tracking-tight border-l-4 border-neon-accent pl-6">Match Directives</h3>
                                <div className="flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-xl border border-foreground/10">
                                    <Info size={14} className="text-neon-accent" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Read Carefully</span>
                                </div>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                {game.about}
                            </p>
                        </div>

                        {/* Current Squad Visualization */}
                        <div className="space-y-8">
                            <div className="flex items-end justify-between">
                                <h3 className="text-2xl font-black uppercase italic tracking-tight">Current Squad ({game.joined}/{game.total})</h3>
                                <p className="text-xs font-black text-neon-accent uppercase tracking-widest italic">{spotsLeft} Vacancies</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {game.squad.map((player, i) => (
                                    <div key={i} className="glass-card p-6 rounded-2xl border-foreground/5 space-y-4 hover:bg-foreground/5 transition-all">
                                        <div className="flex justify-between items-start">
                                            <div className="w-10 h-10 rounded-full bg-neon-accent/10 flex items-center justify-center text-neon-accent">
                                                <UserCircle2 size={24} />
                                            </div>
                                            {player.verified && <ShieldCheck size={12} className="text-neon-accent" />}
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] font-black uppercase leading-none">{player.name}</p>
                                            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{player.pos}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* Empty Spot placeholder */}
                                {[...Array(spotsLeft)].map((_, i) => (
                                    <div key={i} className="border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 py-6 opacity-30 grayscale hover:opacity-60 transition-all cursor-pointer">
                                        <Plus size={20} />
                                        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Open Spot</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right content: Split Module & Join CTA */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <div className="glass-card p-10 rounded-[3rem] border-neon-accent/20 shadow-[0_40px_80px_rgba(0,0,0,0.5)] bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-accent/10 blur-[60px] rounded-full"></div>

                                <div className="space-y-8 relative">
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest text-center">Transparent Splitting</p>
                                        <div className="text-center">
                                            <p className="text-6xl font-black text-foreground italic flex items-baseline justify-center gap-2">
                                                ₹{game.pricePerHead} <span className="text-sm text-muted-foreground not-italic font-bold">/pp</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 border-y border-white/5 py-8">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-muted-foreground uppercase font-black tracking-widest">Total Venue Cost</span>
                                                <span className="font-black italic">₹{game.totalVenuePrice}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-muted-foreground uppercase font-black tracking-widest">Community Cut</span>
                                                <span className="font-black italic text-neon-accent">1 / {game.total} Players</span>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-foreground/5 rounded-2xl flex items-center gap-4 border border-foreground/10">
                                            <MapPin size={18} className="text-neon-accent" />
                                            <div className="flex-1 truncate">
                                                <p className="text-[9px] font-black uppercase text-muted-foreground">Location</p>
                                                <p className="text-[10px] font-bold text-foreground truncate">{game.venue}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-foreground/70">
                                            <Check size={14} className="text-neon-accent" /> Includes Turf & Equipment
                                        </div>
                                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-foreground/70">
                                            <Check size={14} className="text-neon-accent" /> Verified Community Only
                                        </div>
                                    </div>

                                    <Link href={`/games/${idStr}/join`}>
                                        <button className="w-full py-6 bg-neon-accent text-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm font-black uppercase italic tracking-widest shadow-[0_20px_50px_rgba(57,255,20,0.35)] mt-4 group">
                                            Request to Join Squad
                                            <ArrowRight size={18} className="inline ml-3 group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </Link>

                                    <div className="flex items-center justify-center gap-2 pt-2 grayscale opacity-40">
                                        <Zap size={14} />
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Instant Approval Tracking</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="glass-card p-6 rounded-2xl border-foreground/5 flex items-center gap-4 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <ShieldCheck size={20} className="text-neon-accent" />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest">BMS Protect</p>
                                    <p className="text-[8px] font-bold text-muted-foreground uppercase">Split protection guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MainFooter />
            </div>
        </main>
    );
}
