'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Star, ShieldCheck, Zap, Share2, Heart,
    ChevronLeft, ArrowRight, Award, Clock,
    Users, PlayCircle, CheckCircle2, MessageSquare,
    Info, Calendar, GraduationCap, Video
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const coachData = {
    1: {
        name: "Coach Rajesh Kumar",
        sport: "Cricket",
        rating: 4.9,
        reviews: 142,
        experience: "15+ Years",
        students: "500+",
        level: "BCCI Level 2 Certified",
        bio: "Veteran cricket coach with over a decade of national-level playing experience. Specializing in top-order batting mechanics and mental conditioning for professional leagues.",
        image: "https://images.unsplash.com/photo-1548433491-c84b4286506b?auto=format&fit=crop&w=800&q=80",
        certifications: ["BCCI Advanced Coaching", "ICC Global Level 1", "Sports Psychology Diploma"],
        highlights: [
            { label: "Matches Coached", val: "1,200+", icon: <PlayCircle size={16} /> },
            { label: "Win Ratio", val: "78%", icon: <Zap size={16} /> },
            { label: "Pro Students", val: "12", icon: <Award size={16} /> }
        ],
        packages: [
            { id: 1, title: "Starter Session", price: "₹1,200", duration: "1 Hour", features: ["Technical Analysis", "Drill Recommendation"] },
            { id: 2, title: "Pro Pack (5 Sessions)", price: "₹5,000", duration: "5 Hours", features: ["Video Analysis", "Strength Plan", "24/7 Support"], popular: true },
            { id: 3, title: "Elite Monthly", price: "₹12,000", duration: "12 Sessions", features: ["Personalized Roadmap", "Mental Coaching", "Venue Booking Incl."] }
        ]
    }
};

export default function CoachProfilePage() {
    const params = useParams();
    const router = useRouter();
    const idStr = typeof params?.id === 'string' ? params.id : '1';
    const coach = coachData[idStr as unknown as keyof typeof coachData] || coachData[1];

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
                        <ChevronLeft size={16} /> Back to Coaches
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
                            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 border-neon-accent/20 p-2 shadow-3xl">
                                <img src={coach.image} className="w-full h-full object-cover rounded-[3rem]" alt="Profile" />
                            </div>
                            <div className="absolute top-8 left-8 flex flex-col gap-2">
                                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                                    <Star size={14} className="text-neon-accent fill-neon-accent" />
                                    <span className="text-xs font-black text-white italic">{coach.rating}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                                <Award size={22} className="text-neon-accent" /> Verified Credentials
                            </h3>
                            <div className="space-y-3">
                                {coach.certifications.map((cert, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 glass-card rounded-2xl border-foreground/5">
                                        <div className="w-10 h-10 rounded-full bg-neon-accent/10 flex items-center justify-center text-neon-accent border border-neon-accent/20">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 glass-card rounded-[3rem] border-neon-accent/10 relative overflow-hidden bg-gradient-to-br from-neon-accent/[0.03] to-transparent">
                            <div className="space-y-4 relative z-10">
                                <h4 className="text-xl font-black uppercase italic tracking-tight">Watch Training</h4>
                                <div className="aspect-video bg-foreground/10 rounded-3xl flex items-center justify-center border-2 border-foreground/5 relative group cursor-pointer overflow-hidden">
                                    <Video size={48} className="text-neon-accent group-hover:scale-110 transition-transform duration-500" />
                                    <img src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all" />
                                </div>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase text-center tracking-[0.2em] italic">Session Teaser: Advanced Batting Drills</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info & Booking */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-accent/10 rounded-lg border border-neon-accent/20 text-neon-accent text-[9px] font-black uppercase tracking-widest">
                                    <GraduationCap size={12} /> Master Instructor
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                                    {coach.name}
                                </h1>
                            </div>
                            <p className="text-2xl text-muted-foreground leading-relaxed font-medium italic opacity-90 border-l-4 border-neon-accent pl-8">
                                "{coach.bio}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {coach.highlights.map((h, i) => (
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

                        {/* Booking Modules */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black uppercase italic tracking-tight">Select Training <span className="text-neon-accent">Package</span></h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {coach.packages.map((pkg) => (
                                    <div
                                        key={pkg.id}
                                        className={`glass-card p-8 rounded-[2.5rem] border-2 flex flex-col gap-6 relative
                                            ${pkg.popular ? 'border-neon-accent shadow-[0_20px_50px_rgba(57,255,20,0.1)]' : 'border-foreground/5 opacity-80 hover:opacity-100 transition-all'}`}
                                    >
                                        {pkg.popular && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-accent text-black px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest italic">
                                                MOST POPULAR
                                            </div>
                                        )}
                                        <div className="space-y-1">
                                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{pkg.title}</p>
                                            <p className="text-3xl font-black italic">{pkg.price}</p>
                                            <p className="text-[9px] font-bold text-neon-accent uppercase tracking-tighter opacity-60 italic">{pkg.duration} Training</p>
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            {pkg.features.map((f, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-tight text-muted-foreground leading-tight">
                                                    <div className="w-1 h-1 rounded-full bg-neon-accent"></div> {f}
                                                </div>
                                            ))}
                                        </div>
                                        <Link href={`/coaches/${idStr}/book?pkg=${pkg.id}`}>
                                            <button className={`w-full py-4 rounded-xl text-[10px] font-black uppercase italic tracking-widest transition-all
                                                ${pkg.popular ? 'bg-neon-accent text-black shadow-xl hover:scale-105 active:scale-95' : 'bg-foreground/5 text-foreground hover:bg-foreground/10'}`}>
                                                Book Session
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border-foreground/5 flex items-center justify-between gap-8 bg-black/40">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neon-accent/10 flex items-center justify-center text-neon-accent">
                                    <MessageSquare size={20} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-black uppercase italic">Need Custom Batch Training?</p>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Connect with {coach.name.split(' ')[2]} directly for group bookings.</p>
                                </div>
                            </div>
                            <button className="px-8 py-4 glass-card border-neon-accent/40 text-neon-accent rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-neon-accent hover:text-black transition-all">
                                Start Chat
                            </button>
                        </div>
                    </div>
                </div>

                <MainFooter />
            </div>
        </main>
    );
}
