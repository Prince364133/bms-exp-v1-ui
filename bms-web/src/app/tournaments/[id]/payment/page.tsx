'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    ChevronLeft, ShieldCheck, CreditCard,
    Smartphone, Lock, CheckCircle2,
    ArrowRight, Trophy, Download, Share2
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PaymentPage() {
    const params = useParams();
    const id = params?.id || '1';

    const [isPaid, setIsPaid] = useState(false);
    const [method, setMethod] = useState('card');

    const handlePay = () => {
        // Simulate processing
        setTimeout(() => setIsPaid(true), 1500);
    };

    if (isPaid) {
        return (
            <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
                <Navbar />
                <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-10 animate-in zoom-in-95 duration-700">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-neon-accent/20 blur-[60px] rounded-full animate-pulse"></div>
                        <div className="w-24 h-24 rounded-full bg-neon-accent flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                            <CheckCircle2 size={48} className="text-black" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter">
                            Registration <span className="text-neon-accent">Confirmed!</span>
                        </h1>
                        <p className="text-muted-foreground text-lg font-bold max-w-xl mx-auto">
                            Welcome to the arena. You have successfully registered for **STAND & DELIVER 11**. Your entry pass has been sent to your email.
                        </p>
                    </div>

                    <div className="glass-card p-10 max-w-md mx-auto rounded-3xl border-neon-accent/20 space-y-8 bg-gradient-to-br from-white/5 to-transparent">
                        <div className="flex justify-between items-start">
                            <div className="text-left space-y-1">
                                <p className="text-[10px] font-black uppercase text-muted-foreground">Booking ID</p>
                                <p className="font-black text-lg">#BMS-TXN-9982</p>
                            </div>
                            <Trophy className="text-neon-accent" size={32} />
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <button className="w-full py-4 bg-neon-accent text-black rounded-xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                                <Download size={18} /> Download Ticket
                            </button>
                            <button className="w-full py-4 bg-white/5 text-foreground rounded-xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10">
                                <Share2 size={18} /> Invite Team
                            </button>
                        </div>
                    </div>

                    <div className="pt-8">
                        <Link href="/" className="text-neon-accent font-black text-sm uppercase italic tracking-widest hover:gap-4 flex items-center justify-center gap-2 transition-all">
                            Back to Home <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
                <MainFooter />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Payment Form (7 Cols) */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-4">
                            <Link href={`/tournaments/${id}/register`} className="text-muted-foreground flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-neon-accent transition-all">
                                <ChevronLeft size={16} /> Edit Registration Detail
                            </Link>
                            <h1 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter">
                                Checkout
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Select Payment Method</p>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setMethod('card')}
                                    className={`p-6 rounded-2xl border flex flex-col gap-4 transition-all ${method === 'card'
                                            ? 'bg-neon-accent/10 border-neon-accent shadow-[0_0_20px_rgba(57,255,20,0.1)]'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    <CreditCard size={24} className={method === 'card' ? 'text-neon-accent' : 'text-muted-foreground'} />
                                    <span className="font-black text-xs uppercase tracking-widest italic">Credit / Debit Card</span>
                                </button>

                                <button
                                    onClick={() => setMethod('upi')}
                                    className={`p-6 rounded-2xl border flex flex-col gap-4 transition-all ${method === 'upi'
                                            ? 'bg-neon-accent/10 border-neon-accent shadow-[0_0_20px_rgba(57,255,20,0.1)]'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    <Smartphone size={24} className={method === 'upi' ? 'text-neon-accent' : 'text-muted-foreground'} />
                                    <span className="font-black text-xs uppercase tracking-widest italic">UPI / GPay / PhonePe</span>
                                </button>
                            </div>

                            <div className="glass-card p-10 rounded-3xl border-foreground/5 space-y-8">
                                {method === 'card' ? (
                                    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest ml-1">Card Number</label>
                                            <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-xl px-6 py-4 font-bold" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest ml-1">Expiry</label>
                                                <input type="text" placeholder="MM / YY" className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-xl px-6 py-4 font-bold" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest ml-1">CVV</label>
                                                <input type="password" placeholder="***" className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-xl px-6 py-4 font-bold" />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-8 py-4 text-center animate-in slide-in-from-bottom-4 duration-500">
                                        <div className="w-32 h-32 bg-white rounded-xl mx-auto p-2 flex items-center justify-center">
                                            {/* Dummy QR Code UI */}
                                            <div className="w-full h-full border-2 border-black/10 border-dashed rounded-lg flex items-center justify-center">
                                                <p className="text-[8px] font-black text-black uppercase">Scan for UPI</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-xs font-bold text-muted-foreground">Or enter UPI ID</p>
                                            <input type="text" placeholder="user@upi" className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-xl px-6 py-4 font-bold text-center" />
                                        </div>
                                    </div>
                                )}

                                <div className="pt-4 flex items-center gap-3 text-muted-foreground">
                                    <Lock size={14} className="text-neon-accent" />
                                    <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Secure SSL Encrypted Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary (5 Cols) */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24 glass-card p-10 rounded-3xl border-foreground/5 space-y-10 shadow-2xl">
                            <h3 className="text-xl font-black uppercase italic tracking-tight border-b border-white/5 pb-6">Payment Order</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-foreground/5 overflow-hidden shrink-0 border border-white/5">
                                        <img src="https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=150" className="w-full h-full object-cover opacity-60" alt="Tournament" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[8px] font-black text-neon-accent uppercase tracking-widest">Entry Registration</p>
                                        <h4 className="font-black text-sm uppercase italic">STAND & DELIVER 11</h4>
                                        <p className="text-[10px] font-bold text-muted-foreground truncate">1 Team Slot • Open Category</p>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase text-muted-foreground">Registration Fee</span>
                                        <span className="font-black italic">₹1,500</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase text-muted-foreground">Internet Handling</span>
                                        <span className="font-black italic text-neon-accent">WAIVED</span>
                                    </div>
                                    <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                        <span className="font-black text-sm uppercase italic">Total Amount</span>
                                        <span className="text-3xl font-black italic text-neon-accent">₹1,500</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handlePay}
                                className="w-full py-5 bg-neon-accent text-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all font-black uppercase italic tracking-widest shadow-[0_15px_40px_rgba(57,255,20,0.3)] mt-4 flex items-center justify-center gap-3 group"
                            >
                                <ShieldCheck size={20} />
                                Pay Securely
                            </button>

                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-neon-accent animate-pulse"></div>
                                <p className="text-[9px] font-black uppercase tracking-tight text-foreground/40 leading-relaxed">
                                    Trusted by 10,000+ athletes across 500+ venues nationwide.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <MainFooter />
        </main>
    );
}
