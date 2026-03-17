'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import {
    ChevronLeft, ChevronRight, ArrowRight, Check,
    Calendar, Clock, ShieldCheck, Zap,
    GraduationCap, Trophy, Info, Loader2,
    CalendarCheck, User
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const steps = ["Confirm Package", "Schedule", "Payment & Enrollment"];

export default function CoachBookingPage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = typeof params?.id === 'string' ? params.id : '1';
    const pkgId = searchParams?.get('pkg') || '1';

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState('2026-03-22');
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleEnrollment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2500);
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
                        <h1 className="text-5xl font-black uppercase italic tracking-tighter">Enrolled <span className="text-neon-accent">Successfully!</span></h1>
                        <p className="text-muted-foreground font-medium text-lg uppercase tracking-widest">Training sessions confirmed</p>
                    </div>

                    <div className="glass-card p-10 rounded-[3rem] border-neon-accent/20 shadow-2xl relative overflow-hidden text-left space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full border-2 border-neon-accent/30 p-1">
                                <img src="https://images.unsplash.com/photo-1548433491-c84b4286506b?auto=format&fit=crop&w=150&q=80" className="w-full h-full rounded-full object-cover" alt="Coach" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest leading-none">BMS Pro training</p>
                                <p className="text-xl font-black uppercase italic tracking-tight">Coach Rajesh Kumar</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 space-y-4 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                            <div className="flex justify-between">
                                <span>Program</span>
                                <span className="text-foreground italic">Pro Pack (5 Sessions)</span>
                            </div>
                            <div className="flex justify-between">
                                <span>First Session</span>
                                <span className="text-foreground italic">Mar 22 • 05:00 PM</span>
                            </div>
                            <div className="flex justify-between border-t border-white/5 pt-4">
                                <span className="text-neon-accent">BMS Pass ID</span>
                                <span className="text-foreground">TRN-ACK-{Math.floor(Math.random() * 100000)}</span>
                            </div>
                        </div>

                        <p className="text-[9px] font-black uppercase text-muted-foreground text-center tracking-[0.2em] pt-4 opacity-40 italic">Guidelines and prep material sent to your email.</p>
                    </div>

                    <div className="pt-8">
                        <Link href="/dashboard">
                            <button className="px-10 py-5 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Go to Trainer Dashboard
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
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Training <span className="text-neon-accent">Confirmation</span></h2>
                                <p className="text-muted-foreground font-medium">Review your selected package before scheduling.</p>
                            </div>

                            <div className="p-8 glass-card border-neon-accent/20 rounded-[2.5rem] bg-neon-accent/[0.03] space-y-8">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest leading-none italic">Elite Program Selected</p>
                                        <p className="text-3xl font-black uppercase italic tracking-tight">Pro Pack (5 Sessions)</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-black italic text-white leading-none">₹5,000</p>
                                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Enrollment Fee</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-8 py-8 border-t border-foreground/5">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest italic text-muted-foreground">
                                            <Clock size={16} className="text-neon-accent" /> 5 Total Hours
                                        </div>
                                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest italic text-muted-foreground">
                                            <Zap size={16} className="text-neon-accent" /> Video Analysis Incl.
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <div className="p-5 bg-black/40 rounded-2xl border border-white/5 text-center">
                                            <p className="text-[8px] font-black text-neon-accent uppercase tracking-[0.2em] mb-1">Validity</p>
                                            <p className="text-xs font-black text-white italic uppercase tracking-wider">60 Days Access</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 flex items-center gap-4">
                                <Info size={20} className="text-muted-foreground" />
                                <p className="text-[10px] font-bold text-muted-foreground uppercase leading-relaxed tracking-widest">
                                    You can modify session timings 24 hours before the schedule. Access to BMS Academy Pro training resources will be unlocked instantly.
                                </p>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">First <span className="text-neon-accent">Session</span></h2>
                                <p className="text-muted-foreground font-medium">Pick a date and time for your intro training.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Calendar Preview</p>
                                    <div className="glass-card p-6 rounded-3xl border-foreground/5 bg-foreground/[0.02] space-y-4">
                                        <div className="flex justify-between items-center px-2">
                                            <p className="text-xs font-black uppercase italic tracking-widest">MARCH 2026</p>
                                            <div className="flex gap-2">
                                                <ChevronLeft size={16} className="opacity-20" />
                                                <ChevronRight size={16} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-[8px] font-black text-muted-foreground text-center opacity-40 uppercase">
                                            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span className="text-neon-accent">S</span><span className="text-neon-accent">S</span>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2">
                                            {[...Array(30)].map((_, i) => (
                                                <button key={i} className={`p-2 rounded-lg text-xs font-black transition-all ${i + 1 === 22 ? 'bg-neon-accent text-black shadow-glow' : 'hover:bg-foreground/5 text-muted-foreground'}`}>
                                                    {i + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Available Slots</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {["05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"].map((slot) => (
                                            <button
                                                key={slot}
                                                onClick={() => setSelectedSlot(slot)}
                                                className={`py-5 px-4 rounded-2xl border-2 font-black uppercase italic tracking-widest text-[10px] transition-all
                                                    ${selectedSlot === slot ? 'bg-neon-accent border-neon-accent text-black shadow-lg scale-105' : 'bg-foreground/5 border-transparent text-muted-foreground hover:border-foreground/10'}`}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Secure <span className="text-neon-accent">Enrollment</span></h2>
                                <p className="text-muted-foreground font-medium">Finalize your payment to start training.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-12 space-y-6">
                                    <div className="glass-card p-10 rounded-[3rem] border-foreground/5 space-y-6 relative overflow-hidden">
                                        <div className="flex justify-between items-center border-b border-foreground/5 pb-6">
                                            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Training Fee</span>
                                            <span className="text-lg font-black italic">₹5,000.00</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-xs font-black uppercase tracking-widest text-white italic">Total Payable</span>
                                            <span className="text-4xl font-black text-neon-accent italic">₹5,000</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleEnrollment}
                                        disabled={isProcessing}
                                        className="w-full py-7 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-sm shadow-[0_20px_50px_rgba(57,255,20,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                                    >
                                        {isProcessing ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                Processing Securely...
                                            </>
                                        ) : (
                                            <>
                                                Pay & Enroll Now
                                                <ArrowRight size={20} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    {!isProcessing && (
                        <div className="mt-auto pt-10 flex gap-4">
                            {currentStep > 1 && (
                                <button
                                    onClick={() => setCurrentStep(prev => prev - 1)}
                                    className="px-10 py-6 glass-card rounded-2xl text-[11px] font-black uppercase italic tracking-widest border-foreground/5 hover:bg-foreground/5 transition-all"
                                >
                                    Back
                                </button>
                            )}
                            {currentStep < 3 && (
                                <button
                                    disabled={currentStep === 2 && !selectedSlot}
                                    onClick={() => setCurrentStep(prev => prev + 1)}
                                    className={`flex-1 py-6 rounded-2xl flex items-center justify-center gap-3 text-sm font-black uppercase italic tracking-widest transition-all
                                        ${currentStep === 2 && !selectedSlot ? 'bg-foreground/10 text-muted-foreground cursor-not-allowed opacity-50' :
                                            'bg-neon-accent text-black shadow-glow hover:scale-[1.01] active:scale-[0.99]'}`}
                                >
                                    Next Step
                                    <ArrowRight size={18} />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
