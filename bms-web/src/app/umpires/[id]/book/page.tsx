'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import {
    ChevronLeft, ArrowRight, Check,
    Calendar, Clock, ShieldCheck, Zap,
    Gavel, Trophy, Info, Loader2,
    CalendarCheck, User, MapPin, Scale
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const steps = ["Match Details", "Logistics", "Booking Review"];

export default function UmpireBookingPage() {
    const params = useParams();
    const router = useRouter();
    const id = typeof params?.id === 'string' ? params.id : '1';

    const [currentStep, setCurrentStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleBooking = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2200);
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
                <Navbar />
                <div className="max-w-2xl mx-auto py-24 px-6 text-center space-y-10 animate-in zoom-in-95 duration-700">
                    <div className="space-y-4">
                        <div className="w-24 h-24 bg-neon-accent rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(57,255,20,0.4)]">
                            <Check size={48} className="text-black" />
                        </div>
                        <h1 className="text-5xl font-black uppercase italic tracking-tighter">Official <span className="text-neon-accent">Booked!</span></h1>
                        <p className="text-muted-foreground font-medium text-lg uppercase tracking-widest">Match coordinates dispatched</p>
                    </div>

                    <div className="glass-card p-10 rounded-[3rem] border-neon-accent/20 shadow-2xl relative overflow-hidden text-left space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full border-2 border-neon-accent/30 p-1">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80" className="w-full h-full rounded-full object-cover" alt="Official" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest leading-none">BMS Certified Official</p>
                                <p className="text-xl font-black uppercase italic tracking-tight">Official Nitin Menon</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 space-y-4 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                            <div className="flex justify-between">
                                <span>Game Type</span>
                                <span className="text-foreground italic">Elite Cricket League (T20)</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Schedule</span>
                                <span className="text-foreground italic">Mar 22 • 06:00 PM onwards</span>
                            </div>
                            <div className="flex justify-between border-t border-white/5 pt-4">
                                <span className="text-neon-accent">Match Pass</span>
                                <span className="text-foreground">REF-ID-{Math.floor(Math.random() * 100000)}</span>
                            </div>
                        </div>

                        <p className="text-[9px] font-black uppercase text-muted-foreground text-center tracking-[0.2em] pt-4 opacity-40 italic">Guidelines for the referee and crew sent via BMS messenger.</p>
                    </div>

                    <div className="pt-8">
                        <Link href="/dashboard">
                            <button className="px-10 py-5 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
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

                <div className="glass-card p-12 rounded-[3.5rem] border-foreground/5 shadow-3xl min-h-[550px] flex flex-col relative overflow-hidden">

                    {currentStep === 1 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neon-accent">Match Details</h2>
                                <p className="text-muted-foreground font-medium">Specify the league or game requirements.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1 opacity-60 italic">Sport Discipline</label>
                                    <div className="p-4 bg-foreground/5 rounded-xl border border-foreground/10 text-xs font-black text-white italic">CRICKET</div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1 opacity-60 italic">Match Format</label>
                                    <select className="w-full p-4 bg-foreground/10 rounded-xl border border-transparent focus:border-neon-accent/30 outline-none text-xs font-black uppercase italic">
                                        <option>T20 Professional</option>
                                        <option>Knockout Tournament</option>
                                        <option>Private Friendly</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1 opacity-60 italic">League Name (Optional)</label>
                                <input type="text" placeholder="e.g. Mumbai Corporate Cup" className="w-full p-5 bg-foreground/5 border-2 border-transparent focus:border-neon-accent/20 rounded-2xl outline-none text-xs font-bold uppercase tracking-widest" />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-neon-accent">Match Logistics</h2>
                                <p className="text-muted-foreground font-medium">When and where is the official required?</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic ml-1">Proposed Date</p>
                                    <div className="p-5 glass-card border-foreground/10 rounded-2xl flex items-center justify-between">
                                        <span className="text-xs font-black uppercase italic">Mar 22, 2026</span>
                                        <Calendar size={18} className="text-neon-accent" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic ml-1">Report Time</p>
                                    <div className="p-5 glass-card border-foreground/10 rounded-2xl flex items-center justify-between">
                                        <span className="text-xs font-black uppercase italic">05:30 PM (Pre-match)</span>
                                        <Clock size={18} className="text-neon-accent" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic ml-1">Venue Coordinates</p>
                                <div className="p-6 bg-foreground/5 rounded-3xl border border-foreground/10 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-neon-accent text-black flex items-center justify-center">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase italic tracking-tight leading-none">Greenfield Sports Arena</p>
                                        <p className="text-[9px] font-bold text-muted-foreground uppercase mt-1">Andheri West, Mumbai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Final <span className="text-neon-accent">Confirmation</span></h2>
                                <p className="text-muted-foreground font-medium">Review your officiating request for Nitin Menon.</p>
                            </div>

                            <div className="p-10 glass-card border-neon-accent/30 rounded-[3.5rem] bg-gradient-to-br from-neon-accent/[0.05] to-transparent space-y-8">
                                <div className="flex justify-between items-start border-b border-white/5 pb-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-neon-accent uppercase tracking-widest mb-1 italic">Master Official Ready</p>
                                        <p className="text-2xl font-black uppercase italic tracking-tight leading-none">Official Nitin Menon</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-black italic text-white leading-none">₹2,500</p>
                                        <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Officiating Fee</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8 pt-2">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
                                            <ShieldCheck size={16} className="text-neon-accent" /> Neutrality Guaranteed
                                        </div>
                                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
                                            <Scale size={16} className="text-neon-accent" /> DRS Protocols Incl.
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <div className="p-6 bg-black/60 rounded-3xl border border-white/10 text-center shadow-xl">
                                            <p className="text-[8px] font-black text-neon-accent uppercase tracking-[0.2em] mb-1 opacity-70">Decision Time</p>
                                            <p className="text-xs font-black text-white italic uppercase tracking-wider">BY TONIGHT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-auto pt-10 flex gap-4">
                        {!isProcessing && (
                            <>
                                {currentStep > 1 && (
                                    <button
                                        onClick={() => setCurrentStep(prev => prev - 1)}
                                        className="px-10 py-6 glass-card rounded-2xl text-[11px] font-black uppercase italic tracking-widest border-foreground/5 hover:bg-foreground/5 transition-all outline-none border-none"
                                    >
                                        Back
                                    </button>
                                )}
                                <button
                                    onClick={() => {
                                        if (currentStep === 3) {
                                            handleBooking();
                                        } else {
                                            setCurrentStep(prev => prev + 1);
                                        }
                                    }}
                                    className="flex-1 py-6 bg-neon-accent text-black rounded-2xl flex items-center justify-center gap-3 text-sm font-black uppercase italic tracking-widest shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all outline-none border-none"
                                >
                                    {isProcessing ? <Loader2 className="animate-spin" size={20} /> : currentStep === 3 ? "Verify & Book Official" : "Proceed to Coordination"}
                                    <ArrowRight size={18} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
