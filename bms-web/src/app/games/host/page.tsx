'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import {
    ChevronLeft, ArrowRight, Check,
    Calendar, Clock, ShieldCheck, Zap,
    Users, MapPin, Globe, Lock,
    Trophy, Info, Loader2,
    CalendarCheck, UserCircle2, Settings,
    LayoutDashboard, Megaphone
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const steps = ["Game Basics", "Arena & Time", "Squad Rules", "Visibility & Launch"];

export default function HostGamePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [isLaunching, setIsLaunching] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [visibility, setVisibility] = useState<'public' | 'private'>('public');

    const handleLaunch = () => {
        setIsLaunching(true);
        setTimeout(() => {
            setIsLaunching(false);
            setIsSuccess(true);
        }, 3000);
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
                <Navbar />
                <div className="max-w-3xl mx-auto py-24 px-6 text-center space-y-10 animate-in zoom-in-95 duration-700">
                    <div className="space-y-4">
                        <div className="w-24 h-24 bg-neon-accent rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(57,255,20,0.4)]">
                            <Megaphone size={40} className="text-black" />
                        </div>
                        <h1 className="text-5xl font-black uppercase italic tracking-tighter">Match <span className="text-neon-accent">Broadcasted!</span></h1>
                        <p className="text-muted-foreground font-medium text-lg uppercase tracking-widest leading-loose">
                            Auto-posted to <Link href="/community" className="text-neon-accent underline underline-offset-4">Community Hub</Link> & <Link href="/games" className="text-neon-accent underline underline-offset-4">Games Grid</Link>
                        </p>
                    </div>

                    <div className="glass-card p-10 rounded-[3.5rem] border-neon-accent/20 shadow-2xl relative overflow-hidden text-left space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-neon-accent tracking-[0.2em] leading-none mb-1">Live Match Pass</p>
                                <h3 className="text-3xl font-black uppercase italic tracking-tight">5v5 Sunday Football Rush</h3>
                            </div>
                            <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase italic flex items-center gap-2 border ${visibility === 'public' ? 'bg-neon-accent/10 border-neon-accent/20 text-neon-accent' : 'bg-white/5 border-white/10 text-muted-foreground'}`}>
                                {visibility === 'public' ? <Globe size={12} /> : <Lock size={12} />}
                                {visibility}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-white/5">
                            <div className="space-y-1">
                                <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest opacity-60">Venue</p>
                                <div className="flex items-center gap-2 font-bold text-xs">
                                    <MapPin size={14} className="text-neon-accent" /> Greenfield Sports Arena
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest opacity-60">Kick-off</p>
                                <div className="flex items-center gap-2 font-bold text-xs uppercase italic">
                                    <Calendar size={14} className="text-neon-accent" /> Mar 22 • 07:00 PM
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest text-center italic">Syndication Status</p>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-1">
                                    <p className="text-[9px] font-black uppercase text-neon-accent">Games Page</p>
                                    <p className="text-xs font-bold italic">LIVE NOW</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-1">
                                    <p className="text-[9px] font-black uppercase text-neon-accent">Community Feed</p>
                                    <p className="text-xs font-bold italic">POSTED</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link href="/games">
                            <button className="w-full sm:w-auto px-12 py-5 glass-card bg-foreground/5 hover:bg-foreground/10 rounded-2xl font-black uppercase italic tracking-widest text-[11px] transition-all border-foreground/5">
                                View On Games Page
                            </button>
                        </Link>
                        <Link href="/dashboard">
                            <button className="w-full sm:w-auto px-12 py-5 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Go to Match Center
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500 pb-20">
            <Navbar />

            <div className="max-w-4xl mx-auto py-12 px-6 space-y-12">
                {/* Stepper */}
                <div className="flex items-center justify-between relative px-10">
                    <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-0.5 bg-foreground/5 z-0"></div>
                    {steps.map((s, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border-2
                                ${currentStep > i + 1 ? 'bg-neon-accent border-neon-accent text-black' :
                                    currentStep === i + 1 ? 'bg-background border-neon-accent text-neon-accent shadow-glow scale-110' :
                                        'bg-background border-foreground/10 text-muted-foreground opacity-40'}`}>
                                {currentStep > i + 1 ? <Check size={18} /> : <span className="text-xs font-black">{i + 1}</span>}
                            </div>
                            <span className={`text-[8px] font-black uppercase tracking-widest transition-opacity
                                ${currentStep === i + 1 ? 'opacity-100 text-neon-accent' : 'opacity-40'}`}>
                                {s}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="glass-card p-12 rounded-[3.5rem] border-foreground/5 shadow-3xl min-h-[600px] flex flex-col relative overflow-hidden">

                    {currentStep === 1 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neon-accent">Game Basics</h2>
                                <p className="text-muted-foreground font-medium">What discipline are we playing today?</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {["Football", "Cricket", "Badminton", "Tennis"].map((sport) => (
                                    <button key={sport} className={`p-6 rounded-3xl border-2 flex flex-col items-center gap-4 transition-all duration-300 ${sport === 'Football' ? 'border-neon-accent bg-neon-accent/5' : 'border-foreground/5 hover:border-foreground/10 bg-foreground/5'}`}>
                                        <Trophy size={20} className={sport === 'Football' ? 'text-neon-accent' : 'text-muted-foreground'} />
                                        <span className="text-[10px] font-black uppercase italic tracking-widest">{sport}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1 opacity-60 italic">Match Title</label>
                                <input
                                    type="text"
                                    defaultValue="5v5 Sunday Football Rush"
                                    className="w-full p-6 bg-foreground/5 border-2 border-transparent focus:border-neon-accent/20 rounded-3xl outline-none text-xl font-black uppercase italic tracking-tight"
                                    placeholder="Enter match name..."
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neon-accent">Arena & Time</h2>
                                <p className="text-muted-foreground font-medium">Lock in the venue coordinates and schedule.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="p-8 bg-foreground/5 rounded-[2.5rem] border border-foreground/10 flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-neon-accent flex items-center justify-center text-black">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <p className="text-lg font-black uppercase italic tracking-tight leading-none">Greenfield Sports Arena</p>
                                            <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Andheri West, Mumbai</p>
                                        </div>
                                    </div>
                                    <button className="text-[10px] font-black uppercase text-neon-accent border-b border-neon-accent italic">Change</button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 glass-card border-foreground/10 rounded-3xl space-y-1">
                                        <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Selected Date</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-black uppercase italic tracking-tighter">Sun, Mar 22, 2026</span>
                                            <Calendar size={20} className="text-neon-accent" />
                                        </div>
                                    </div>
                                    <div className="p-6 glass-card border-foreground/10 rounded-3xl space-y-1">
                                        <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Kick-off Time</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-black uppercase italic tracking-tighter">07:00 PM onwards</span>
                                            <Clock size={20} className="text-neon-accent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neon-accent">Squad Rules</h2>
                                <p className="text-muted-foreground font-medium">Define the team size and entry split.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="glass-card p-8 rounded-3xl text-center space-y-4">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic">Total Players</p>
                                    <div className="flex items-center justify-center gap-6">
                                        <button className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center hover:bg-foreground/10">-</button>
                                        <span className="text-4xl font-black italic">10</span>
                                        <button className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center hover:bg-foreground/10">+</button>
                                    </div>
                                </div>
                                <div className="glass-card p-8 rounded-3xl text-center space-y-4">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic">Entry Split</p>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-3xl font-black italic">₹300</span>
                                        <span className="text-[8px] font-black uppercase text-muted-foreground">/Head</span>
                                    </div>
                                </div>
                                <div className="glass-card p-8 rounded-3xl text-center space-y-4">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic">Skill Level</p>
                                    <select className="bg-transparent text-lg font-black uppercase italic text-neon-accent outline-none text-center w-full">
                                        <option>INTERMEDIATE</option>
                                        <option>PRO</option>
                                        <option>BEGINNER</option>
                                    </select>
                                </div>
                            </div>

                            <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 flex items-center gap-4">
                                <Zap size={20} className="text-neon-accent" />
                                <p className="text-[10px] font-bold text-muted-foreground uppercase leading-relaxed tracking-widest">
                                    BMS smart-calculates the per-head split based on the total ground booking fee (₹3,000) for 10 players.
                                </p>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neon-accent">Visibility & Launch</h2>
                                <p className="text-muted-foreground font-medium">Control who can see and join your game.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <button
                                    onClick={() => setVisibility('public')}
                                    className={`p-10 rounded-[2.5rem] border-2 text-left space-y-4 transition-all duration-500 overflow-hidden relative group
                                        ${visibility === 'public' ? 'border-neon-accent bg-neon-accent/5' : 'border-white/5 bg-foreground/5 opacity-60'}`}
                                >
                                    <Globe size={32} className={visibility === 'public' ? 'text-neon-accent' : 'text-muted-foreground'} />
                                    <div>
                                        <p className="text-2xl font-black uppercase italic tracking-tight">Public Match</p>
                                        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mt-1">Discoverable by all app users</p>
                                    </div>
                                    {visibility === 'public' && <Check size={24} className="absolute top-6 right-6 text-neon-accent" />}
                                </button>

                                <button
                                    onClick={() => setVisibility('private')}
                                    className={`p-10 rounded-[2.5rem] border-2 text-left space-y-4 transition-all duration-500 overflow-hidden relative group
                                        ${visibility === 'private' ? 'border-blue-400 bg-blue-400/5' : 'border-white/5 bg-foreground/5 opacity-60'}`}
                                >
                                    <Lock size={32} className={visibility === 'private' ? 'text-blue-400' : 'text-muted-foreground'} />
                                    <div>
                                        <p className="text-2xl font-black uppercase italic tracking-tight">Private Match</p>
                                        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mt-1">Join via sharable link only</p>
                                    </div>
                                    {visibility === 'private' && <Check size={24} className="absolute top-6 right-6 text-blue-400" />}
                                </button>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border-neon-accent/20 bg-gradient-to-br from-neon-accent/10 to-transparent flex items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <p className="text-xl font-black uppercase italic tracking-tight">Launch Match Sequence</p>
                                    <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest opacity-60">Auto-generation of community post and games listing.</p>
                                </div>
                                <button
                                    onClick={handleLaunch}
                                    disabled={isLaunching}
                                    className="px-12 py-6 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-sm shadow-[0_20px_50px_rgba(57,255,20,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                                >
                                    {isLaunching ? <Loader2 className="animate-spin" size={20} /> : "Launch Now"}
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-auto pt-10 flex gap-4">
                        {!isLaunching && (
                            <>
                                <button
                                    onClick={() => currentStep === 1 ? router.back() : setCurrentStep(prev => prev - 1)}
                                    className="px-10 py-6 glass-card rounded-2xl text-[11px] font-black uppercase italic tracking-widest border-foreground/5 hover:bg-foreground/5 transition-all"
                                >
                                    {currentStep === 1 ? "Cancel" : "Back"}
                                </button>
                                {currentStep < 4 && (
                                    <button
                                        onClick={() => setCurrentStep(prev => prev + 1)}
                                        className="flex-1 py-6 bg-neon-accent text-black rounded-2xl flex items-center justify-center gap-3 text-sm font-black uppercase italic tracking-widest shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all"
                                    >
                                        Next Step
                                        <ArrowRight size={18} />
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
