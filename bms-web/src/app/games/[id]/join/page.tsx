'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import {
    ChevronLeft, ArrowRight, UserCircle2,
    ShieldCheck, Check, Info, LayoutGrid,
    Target, Shield, HelpCircle, Zap
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const steps = [
    { title: "Select Position", icon: <Target size={18} /> },
    { title: "BMS Linking", icon: <UserCircle2 size={18} /> },
    { title: "Review", icon: <LayoutGrid size={18} /> }
];

const positions = [
    { id: 'fwd', label: "Forward", icon: <Zap size={20} />, desc: "Striker / Winger" },
    { id: 'mid', label: "Midfielder", icon: <Target size={20} />, desc: "Playmaker / Box-to-Box" },
    { id: 'def', label: "Defender", icon: <Shield size={20} />, desc: "Center Back / Fullback" },
    { id: 'gk', label: "Goalkeeper", icon: <LayoutGrid size={20} />, desc: "Shot Stopper" },
];

export default function GameJoinPage() {
    const params = useParams();
    const router = useRouter();
    const id = typeof params?.id === 'string' ? params.id : '1';

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedPos, setSelectedPos] = useState('');

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="max-w-4xl mx-auto py-12 px-6 space-y-12">
                {/* Enterprise Progress Bar */}
                <div className="flex items-center justify-between relative px-10">
                    <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-0.5 bg-foreground/10 z-0"></div>
                    {steps.map((s, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border-2
                                ${currentStep > i + 1 ? 'bg-neon-accent border-neon-accent text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]' :
                                    currentStep === i + 1 ? 'bg-background border-neon-accent text-neon-accent shadow-xl scale-110' :
                                        'bg-background border-foreground/10 text-muted-foreground opacity-40'}`}>
                                {currentStep > i + 1 ? <Check size={24} /> : s.icon}
                            </div>
                            <span className={`text-[10px] font-black uppercase tracking-widest transition-opacity
                                ${currentStep === i + 1 ? 'opacity-100 text-neon-accent' : 'opacity-40'}`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="glass-card p-12 rounded-[3rem] border-foreground/5 shadow-3xl bg-gradient-to-br from-white/[0.02] to-transparent min-h-[500px] flex flex-col">

                    {currentStep === 1 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Choose your <span className="text-neon-accent">Role</span></h2>
                                <p className="text-muted-foreground font-medium">Select your preferred playing position for this match.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {positions.map((box) => (
                                    <button
                                        key={box.id}
                                        onClick={() => setSelectedPos(box.id)}
                                        className={`p-8 rounded-[2rem] border-2 text-left transition-all group flex items-start gap-6
                                            ${selectedPos === box.id ? 'bg-neon-accent/10 border-neon-accent shadow-2xl scale-[1.02]' :
                                                'bg-foreground/5 border-transparent hover:border-foreground/10'}`}
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors
                                            ${selectedPos === box.id ? 'bg-neon-accent text-black' : 'bg-foreground/5 text-muted-foreground group-hover:text-neon-accent'}`}>
                                            {box.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <p className={`font-black uppercase italic tracking-widest text-sm ${selectedPos === box.id ? 'text-neon-accent' : ''}`}>{box.label}</p>
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60 tracking-wider font-mono">{box.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Account <span className="text-neon-accent">Linking</span></h2>
                                <p className="text-muted-foreground font-medium">Verify your profile to build trust in the community.</p>
                            </div>

                            <div className="p-8 bg-neon-accent/5 rounded-3xl border border-neon-accent/20 flex items-center gap-8">
                                <div className="w-20 h-20 rounded-full bg-neon-accent text-black flex items-center justify-center shadow-2xl">
                                    <UserCircle2 size={40} />
                                </div>
                                <div className="space-y-1 flex-1">
                                    <p className="text-lg font-black uppercase italic tracking-tight">John Doe (You)</p>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-neon-accent" />
                                        <span className="text-[10px] font-black uppercase text-neon-accent tracking-widest leading-none">Athlete Level: Pro</span>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-foreground/5 rounded-xl border border-foreground/10 text-[9px] font-black uppercase tracking-widest opacity-60 italic">
                                    Active Link
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: "Phone Verification", val: "Verified", icon: <Check size={14} className="text-neon-accent" /> },
                                    { label: "KYC Compliance", val: "Tier 1", icon: <Check size={14} className="text-neon-accent" /> },
                                    { label: "Community Rep", val: "4.9/5", icon: <Star size={10} className="fill-neon-accent text-neon-accent mb-0.5" /> },
                                    { label: "No-Show History", val: "0.5%", icon: <Check size={14} className="text-neon-accent" /> }
                                ].map((item, i) => (
                                    <div key={i} className="px-6 py-4 glass-card border-foreground/5 rounded-2xl flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                                        <div className="flex items-center gap-2">
                                            {item.icon}
                                            <span className="text-[11px] font-black italic">{item.val}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Match <span className="text-neon-accent">Summary</span></h2>
                                <p className="text-muted-foreground font-medium">Review your request before proceeding to payment.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="p-8 glass-card border-foreground/5 rounded-3xl space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Match Directives</p>
                                            <p className="text-2xl font-black uppercase italic tracking-tighter">5v5 Sunday Football Rush</p>
                                        </div>
                                        <div className="px-5 py-2 bg-neon-accent/10 border border-neon-accent/20 rounded-xl">
                                            <span className="text-[10px] font-black italic text-neon-accent uppercase tracking-widest">₹300 Per Head</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 pt-4 border-t border-foreground/5">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Venue</p>
                                            <p className="text-xs font-bold uppercase tracking-tight">Greenfield Sports Arena</p>
                                        </div>
                                        <div className="space-y-1 text-right">
                                            <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Assigned Role</p>
                                            <p className="text-xs font-black text-neon-accent uppercase italic tracking-widest">{selectedPos || 'Unassigned'}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 px-8 py-6 bg-amber-500/5 rounded-[2rem] border border-amber-500/10">
                                    <HelpCircle size={20} className="text-amber-500 shrink-0" />
                                    <p className="text-[10px] font-bold text-amber-500/80 uppercase tracking-widest italic flex-1">
                                        Cancellation policy: Full refund if match is cancelled by host. 50% refund if cancelled by you before 24h.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Button Group */}
                    <div className="mt-auto pt-12 flex gap-4">
                        {currentStep > 1 && (
                            <button
                                onClick={prevStep}
                                className="px-10 py-6 glass-card rounded-2xl text-[11px] font-black uppercase italic tracking-widest border-foreground/5 hover:bg-foreground/5 transition-all"
                            >
                                Back
                            </button>
                        )}
                        <button
                            disabled={currentStep === 1 && !selectedPos}
                            onClick={() => {
                                if (currentStep === 3) {
                                    router.push(`/games/${id}/payment`);
                                } else {
                                    nextStep();
                                }
                            }}
                            className={`flex-1 py-6 rounded-2xl flex items-center justify-center gap-3 text-sm font-black uppercase italic tracking-widest transition-all
                                ${currentStep === 1 && !selectedPos ? 'bg-foreground/10 text-muted-foreground cursor-not-allowed opacity-50' :
                                    'bg-neon-accent text-black shadow-[0_20px_50px_rgba(57,255,20,0.3)] hover:scale-[1.02] active:scale-[0.98]'}`}
                        >
                            {currentStep === 3 ? "Proceed to Payment" : "Continue"}
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <Link href={`/games/${id}`} className="block text-center text-muted-foreground hover:text-neon-accent transition-colors">
                    <button className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100">
                        Cancel Joining Flow
                    </button>
                </Link>
            </div>
        </main>
    );
}

// Minimal Star icon replacement helper
function Star({ size, className }: { size: number, className: string }) {
    return (
        <svg
            width={size} height={size} viewBox="0 0 24 24"
            fill="currentColor" stroke="none" className={className}
        >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    );
}
