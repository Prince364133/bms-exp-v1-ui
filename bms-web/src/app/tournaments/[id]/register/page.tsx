'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    ChevronLeft, ChevronRight, CheckCircle2,
    Users, Shield, FileText, ArrowRight,
    Trophy, MapPin, AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function RegistrationPage() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id || '1';

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        teamName: '',
        captainName: '',
        contact: '',
        category: 'Open',
        players: ['', '', ''],
    });

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const handlePlayerChange = (index: number, value: string) => {
        const newPlayers = [...formData.players];
        newPlayers[index] = value;
        setFormData({ ...formData, players: newPlayers });
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
                {/* Header & Progress */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="space-y-2">
                            <Link href={`/tournaments/${id}`} className="text-neon-accent flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all mb-4">
                                <ChevronLeft size={16} /> Back to Tournament
                            </Link>
                            <h1 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter">
                                Secure your <span className="text-neon-accent">Spot</span>
                            </h1>
                            <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest">
                                Tournament ID: #BMS-2026-{id}
                            </p>
                        </div>

                        {/* Visual Step Indicator */}
                        <div className="flex items-center gap-4 bg-foreground/5 p-2 rounded-2xl border border-foreground/5">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className="flex items-center gap-2">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-all ${step === s
                                            ? 'bg-neon-accent text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]'
                                            : step > s
                                                ? 'bg-foreground/20 text-foreground'
                                                : 'bg-foreground/5 text-foreground/40'
                                        }`}>
                                        {step > s ? <CheckCircle2 size={18} /> : s}
                                    </div>
                                    {s < 3 && <div className="w-8 h-0.5 bg-foreground/10 rounded-full"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="glass-card p-0 rounded-[2.5rem] border-foreground/5 overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Sidebar Info */}
                        <div className="lg:col-span-4 bg-foreground/5 p-10 space-y-10 border-r border-foreground/5">
                            <div className="space-y-6">
                                <h3 className="text-xl font-black uppercase italic tracking-tight">Summary</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="p-2.5 bg-neon-accent/10 rounded-xl text-neon-accent h-fit">
                                            <Trophy size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Event</p>
                                            <p className="text-sm font-black italic">STAND & DELIVER 11</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-2.5 bg-neon-accent/10 rounded-xl text-neon-accent h-fit">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Location</p>
                                            <p className="text-sm font-black italic">Upper Ground, Hyderabad</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase text-muted-foreground">Entry Fee</span>
                                    <span className="text-lg font-black italic">₹1,500</span>
                                </div>
                                <div className="flex justify-between items-center text-neon-accent">
                                    <span className="text-[10px] font-black uppercase">Platform Fee</span>
                                    <span className="text-lg font-black italic">FREE</span>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-xs font-black uppercase">Total</span>
                                    <span className="text-2xl font-black italic text-neon-accent">₹1,500</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="lg:col-span-8 p-10 lg:p-14 space-y-8">
                            {step === 1 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black uppercase italic tracking-tight">Team Identity</h3>
                                        <p className="text-muted-foreground text-sm font-medium">Provide basic details for your squad's registration.</p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Team Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Hyderabad Strikers"
                                                className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-2xl px-6 py-4 font-bold transition-all"
                                                value={formData.teamName}
                                                onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Captain Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-2xl px-6 py-4 font-bold transition-all"
                                                    value={formData.captainName}
                                                    onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Contact Number</label>
                                                <input
                                                    type="tel"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-2xl px-6 py-4 font-bold transition-all"
                                                    value={formData.contact}
                                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black uppercase italic tracking-tight">Roster Details</h3>
                                        <p className="text-muted-foreground text-sm font-medium">Add your lead players. You can add the full squad later.</p>
                                    </div>
                                    <div className="space-y-6">
                                        {formData.players.map((p, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="p-4 bg-foreground/5 rounded-xl text-foreground font-black text-xs flex items-center justify-center min-w-[3rem]">#{i + 1}</div>
                                                <input
                                                    type="text"
                                                    placeholder={`Player ${i + 1} Name`}
                                                    className="flex-1 bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-2xl px-6 py-4 font-bold transition-all"
                                                    value={p}
                                                    onChange={(e) => handlePlayerChange(i, e.target.value)}
                                                />
                                            </div>
                                        ))}
                                        <button className="text-neon-accent font-black text-xs uppercase tracking-widest hover:opacity-80 transition-all flex items-center gap-2">
                                            + Add More Players
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black uppercase italic tracking-tight">Review & Confirm</h3>
                                        <p className="text-muted-foreground text-sm font-medium">Verify your details before proceeding to payment.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-6 bg-foreground/5 rounded-2xl border border-foreground/5 space-y-1">
                                            <p className="text-[10px] font-black uppercase text-muted-foreground">Team</p>
                                            <p className="text-lg font-black italic">{formData.teamName || 'Not Provided'}</p>
                                        </div>
                                        <div className="p-6 bg-foreground/5 rounded-2xl border border-foreground/5 space-y-1">
                                            <p className="text-[10px] font-black uppercase text-muted-foreground">Captain</p>
                                            <p className="text-lg font-black italic">{formData.captainName || 'Not Provided'}</p>
                                        </div>
                                    </div>

                                    <div className="bg-neon-accent/10 border border-neon-accent/20 p-6 rounded-2xl flex items-start gap-4">
                                        <AlertCircle size={20} className="text-neon-accent shrink-0 mt-1" />
                                        <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                                            By clicking "Proceed to Payment", you agree to the tournament's code of conduct and cancellation policies.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Navigation */}
                            <div className="flex items-center justify-between pt-8 border-t border-foreground/5">
                                <button
                                    onClick={prevStep}
                                    disabled={step === 1}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-xl font-black uppercase italic tracking-widest transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'hover:bg-foreground/5 text-foreground/60'
                                        }`}
                                >
                                    <ChevronLeft size={18} /> Prev
                                </button>

                                {step < 3 ? (
                                    <button
                                        onClick={nextStep}
                                        className="flex items-center gap-3 px-12 py-4 bg-neon-accent text-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all font-black uppercase italic tracking-widest shadow-xl"
                                    >
                                        Next Step <ChevronRight size={18} />
                                    </button>
                                ) : (
                                    <Link href={`/tournaments/${id}/payment`}>
                                        <button className="flex items-center gap-3 px-12 py-4 bg-neon-accent text-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all font-black uppercase italic tracking-widest shadow-xl">
                                            Pay & Join <ArrowRight size={18} />
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MainFooter />
        </main>
    );
}
