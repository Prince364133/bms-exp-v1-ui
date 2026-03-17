'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Star, ShieldCheck, Zap, Share2, Heart,
    ChevronLeft, ArrowRight, Award, Clock,
    History, CheckCircle2, MessageSquare,
    Info, Calendar, Gavel, Scale, PlayCircle
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const umpireData = {
    1: {
        name: "Official Nitin Menon",
        sport: "Cricket",
        rating: 5.0,
        reviews: 210,
        experience: "15 Years",
        matches: "210+",
        level: "ICC Elite Panel",
        bio: "Senior ICC Elite Panel umpire with a background in professional cricket. Expert in Decision Review System (DRS) protocols and match management for international T20 and ODI formats.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
        certifications: ["ICC Elite Panel Membership", "BCCI Level 3 Certified", "MCC Laws Expert"],
        highlights: [
            { label: "Fair Play Rating", val: "100%", icon: <Scale size={16} /> },
            { label: "DRS Accuracy", val: "94%", icon: <Zap size={16} /> },
            { label: "Finals Officiated", val: "14", icon: <Award size={16} /> }
        ],
        matchHistory: [
            { event: "IPL 2025 Final", role: "On-field Umpire", result: "Verified", date: "May 2025" },
            { event: "Corporate T20 League", role: "Match Referee", result: "Verified", date: "Jan 2026" },
            { event: "State Trophy Knockout", role: "Third Umpire", result: "Verified", date: "Feb 2026" }
        ],
        matchRate: "₹2,500"
    }
};

export default function UmpireProfilePage() {
    const params = useParams();
    const router = useRouter();
    const idStr = typeof params?.id === 'string' ? params.id : '1';
    const official = umpireData[idStr as unknown as keyof typeof umpireData] || umpireData[1];

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
                        <ChevronLeft size={16} /> Back to Officials
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Media & Certs */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="relative group">
                            <div className="aspect-square rounded-[3.5rem] overflow-hidden border-2 border-neon-accent/20 p-2 shadow-3xl">
                                <img src={official.image} className="w-full h-full object-cover rounded-[3rem]" alt="Official Profile" />
                            </div>
                            <div className="absolute top-8 left-8 flex flex-col gap-2">
                                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                                    <Star size={14} className="text-neon-accent fill-neon-accent" />
                                    <span className="text-xs font-black text-white italic">{official.rating}</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] glass-card p-4 rounded-2xl border-neon-accent/30 text-center bg-black/80 backdrop-blur-xl">
                                <p className="text-[9px] font-black uppercase text-neon-accent tracking-widest mb-1 leading-none">Status</p>
                                <p className="text-lg font-black italic uppercase leading-tight">Elite Panel Active</p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6">
                            <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                                <ShieldCheck size={22} className="text-neon-accent" /> Official Accreditations
                            </h3>
                            <div className="space-y-3">
                                {official.certifications.map((cert, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 glass-card rounded-2xl border-foreground/5">
                                        <div className="w-10 h-10 rounded-full bg-neon-accent/10 flex items-center justify-center text-neon-accent border border-neon-accent/20">
                                            <Award size={18} />
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 glass-card rounded-[3.5rem] border-neon-accent/10 relative overflow-hidden bg-gradient-to-br from-white/[0.01] to-transparent">
                            <div className="space-y-6 relative z-10">
                                <h4 className="text-xl font-black uppercase italic tracking-tight">Fair Play Gallery</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-square bg-foreground/10 rounded-2xl border border-white/5 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?w=400&q=80" className="w-full h-full object-cover opacity-50" />
                                    </div>
                                    <div className="aspect-square bg-foreground/10 rounded-2xl border border-white/5 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=400&q=80" className="w-full h-full object-cover opacity-50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info & Booking */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-accent/10 rounded-lg border border-neon-accent/20 text-neon-accent text-[9px] font-black uppercase tracking-widest">
                                    <Gavel size={12} /> Certified Master Official
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                                    {official.name}
                                </h1>
                            </div>
                            <p className="text-2xl text-muted-foreground leading-relaxed font-medium italic opacity-90 border-l-4 border-neon-accent pl-8">
                                "{official.bio}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {official.highlights.map((h, i) => (
                                <div key={i} className="glass-card p-8 rounded-[2.5rem] border-foreground/5 text-center space-y-2">
                                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center mx-auto text-neon-accent opacity-60">
                                        {h.icon}
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black italic">{h.val}</p>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{h.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Performance Feed */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                                <History size={20} className="text-neon-accent" /> Officiating Feed
                            </h3>
                            <div className="space-y-3">
                                {official.matchHistory.map((m, i) => (
                                    <div key={i} className="px-6 py-5 glass-card rounded-2xl flex justify-between items-center border-l-4 border-l-neon-accent/60">
                                        <div className="space-y-1">
                                            <p className="text-xs font-black uppercase tracking-widest leading-none">{m.event}</p>
                                            <p className="text-[9px] font-bold text-muted-foreground uppercase">{m.role} • {m.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black italic text-neon-accent uppercase tracking-widest">
                                                {m.result}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interaction Control */}
                        <div className="glass-card p-10 rounded-[3rem] border-neon-accent/20 bg-gradient-to-r from-neon-accent/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="space-y-2 text-center md:text-left">
                                <h4 className="text-3xl font-black uppercase italic tracking-tight leading-none leading-none">Book Official</h4>
                                <p className="text-sm font-medium text-muted-foreground">Request {official.name.split(' ')[2]} for your next private league or tournament.</p>
                            </div>
                            <div className="flex flex-col gap-4 w-full md:w-auto items-end">
                                <div className="text-right pr-4">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1 opacity-60">Officiating Rate</p>
                                    <p className="text-3xl font-black italic leading-none">{official.matchRate}<span className="text-xs text-muted-foreground ml-1">/match</span></p>
                                </div>
                                <div className="flex gap-4 w-full">
                                    <Link href={`/umpires/${idStr}/book`} className="flex-1 md:flex-none">
                                        <button className="w-full px-12 py-6 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-sm shadow-[0_20px_50px_rgba(57,255,20,0.3)] hover:scale-105 active:scale-95 transition-all outline-none border-none">
                                            Request Official
                                        </button>
                                    </Link>
                                    <button className="p-6 glass-card rounded-2xl hover:bg-foreground/5 transition-all text-neon-accent border-foreground/5">
                                        <MessageSquare size={24} />
                                    </button>
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
