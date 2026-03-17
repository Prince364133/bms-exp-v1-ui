'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import {
    ShieldCheck, Check, ArrowRight, Zap,
    Smartphone, CreditCard, Wallet, Download,
    Share2, MapPin, Calendar, Clock, QrCode,
    Loader2
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function GamePaymentPage() {
    const params = useParams();
    const router = useRouter();
    const id = typeof params?.id === 'string' ? params.id : '1';

    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('upi');

    const handlePayment = () => {
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
                <div className="max-w-2xl mx-auto py-20 px-6 text-center space-y-12 animate-in zoom-in-95 duration-700">
                    <div className="space-y-4">
                        <div className="w-24 h-24 bg-neon-accent rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(57,255,20,0.4)]">
                            <Check size={48} className="text-black" />
                        </div>
                        <h1 className="text-5xl font-black uppercase italic tracking-tighter">You're <span className="text-neon-accent">In!</span></h1>
                        <p className="text-muted-foreground font-medium text-lg uppercase tracking-widest">Match spot secured successfully</p>
                    </div>

                    <div className="glass-card p-10 rounded-[3rem] border-neon-accent/30 shadow-3xl bg-gradient-to-br from-neon-accent/5 to-transparent relative overflow-hidden text-left space-y-8">
                        {/* Digital Ticket Logic */}
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest leading-none">Official Match Pass</p>
                                <p className="text-2xl font-black uppercase italic tracking-tight">Sunday Football Rush</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Pass ID</p>
                                <p className="text-xs font-mono font-bold">BMS-G-{Math.floor(Math.random() * 100000)}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-y border-foreground/5 py-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Calendar size={16} className="text-neon-accent" />
                                    <span className="text-[11px] font-black uppercase italic">Mar 22, 2026</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={16} className="text-neon-accent" />
                                    <span className="text-[11px] font-black uppercase italic">07:00 PM</span>
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <div className="p-4 bg-white rounded-2xl">
                                    <QrCode size={100} className="text-black" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-neon-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-tight">Greenfield Sports Arena, Andheri</span>
                            </div>
                            <p className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em] italic">Note: Show this QR at the arena reception</p>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-10">
                        <button className="flex-1 py-5 glass-card rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase italic tracking-widest hover:bg-foreground/5 transition-all">
                            <Download size={18} /> Download Pass
                        </button>
                        <button className="flex-1 py-5 bg-neon-accent text-black rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase italic tracking-widest shadow-2xl hover:scale-105 transition-all">
                            <Share2 size={18} /> Share with Team
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="max-w-6xl mx-auto py-12 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Payment Form */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-black uppercase italic tracking-tighter">Secure <span className="text-neon-accent">Payment</span></h1>
                            <p className="text-muted-foreground font-medium">Choose your method and finalize your game split.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { id: 'upi', label: 'UPI / GPay', icon: <Smartphone size={20} /> },
                                { id: 'card', label: 'Credit Card', icon: <CreditCard size={20} /> },
                                { id: 'wallet', label: 'BMS Wallet', icon: <Wallet size={20} /> }
                            ].map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setPaymentMethod(method.id)}
                                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all
                                        ${paymentMethod === method.id ? 'bg-neon-accent/10 border-neon-accent shadow-xl' : 'bg-foreground/5 border-transparent hover:border-foreground/10'}`}
                                >
                                    <div className={`${paymentMethod === method.id ? 'text-neon-accent' : 'text-muted-foreground opacity-40'}`}>
                                        {method.icon}
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${paymentMethod === method.id ? 'text-neon-accent' : 'opacity-40'}`}>
                                        {method.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="glass-card p-10 rounded-[2.5rem] border-foreground/5 space-y-8">
                            {paymentMethod === 'upi' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Your VPA / UPI ID</label>
                                        <input
                                            type="text"
                                            placeholder="username@okaxis"
                                            className="w-full bg-foreground/5 border-2 border-transparent focus:border-neon-accent/20 rounded-2xl px-6 py-5 outline-none font-bold text-sm transition-all"
                                        />
                                    </div>
                                    <div className="p-6 bg-neon-accent/5 rounded-2xl border border-neon-accent/10 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-neon-accent/20 flex items-center justify-center text-neon-accent">
                                            <Zap size={18} />
                                        </div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-neon-accent/80 italic">Faster checkouts: Approval request will be sent to your UPI app.</p>
                                    </div>
                                </div>
                            )}

                            {paymentMethod === 'card' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Card Details</label>
                                        <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-foreground/5 border-2 border-transparent rounded-2xl px-6 py-5 outline-none font-bold text-sm" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="MM/YY" className="bg-foreground/5 border-2 border-transparent rounded-2xl px-6 py-5 outline-none font-bold text-sm" />
                                        <input type="password" placeholder="CVV" className="bg-foreground/5 border-2 border-transparent rounded-2xl px-6 py-5 outline-none font-bold text-sm" />
                                    </div>
                                </div>
                            )}

                            {paymentMethod === 'wallet' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <div className="p-10 bg-foreground/5 rounded-[2rem] border border-foreground/10 text-center space-y-2">
                                        <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Available Balance</p>
                                        <p className="text-4xl font-black text-neon-accent italic">₹1,240.00</p>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handlePayment}
                                disabled={isProcessing}
                                className="w-full py-6 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-sm shadow-[0_20px_50px_rgba(57,255,20,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                            >
                                {isProcessing ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Processing Securely...
                                    </>
                                ) : (
                                    <>
                                        Authorize Payment ₹300.00
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Right: Summary Sidebar */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24 space-y-6">
                            <div className="glass-card p-10 rounded-[3rem] border-foreground/5 shadow-2xl space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Transaction Summary</p>
                                    <div className="space-y-6 border-y border-foreground/5 py-8">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-muted-foreground uppercase font-black tracking-widest">Match Entry Fee</span>
                                            <span className="font-bold italic">₹254.24</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-muted-foreground uppercase font-black tracking-widest">CGST (9%)</span>
                                            <span className="font-bold italic">₹22.88</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-muted-foreground uppercase font-black tracking-widest">SGST (9%)</span>
                                            <span className="font-bold italic">₹22.88</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pt-4">
                                        <span className="text-sm font-black uppercase text-foreground tracking-widest italic">Net Amount</span>
                                        <span className="text-4xl font-black text-neon-accent italic">₹300.00</span>
                                    </div>
                                </div>

                                <div className="p-6 bg-white/[0.02] rounded-[2rem] border border-white/5 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-neon-accent/10 flex items-center justify-center text-neon-accent">
                                            <ShieldCheck size={16} />
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest">Elite Member Protection</p>
                                    </div>
                                    <p className="text-[9px] text-muted-foreground font-bold leading-relaxed px-1">
                                        Your payment is held in escrow until the match completion. Hosts only receive funds upon successful game verification.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
