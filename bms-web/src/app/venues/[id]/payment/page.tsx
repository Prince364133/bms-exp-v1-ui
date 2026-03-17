'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    ChevronLeft, ShieldCheck, CreditCard,
    Smartphone, Lock, CheckCircle2,
    ArrowRight, MapPin, Download, Share2,
    Calendar, Clock
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function VenuePaymentPage() {
    const params = useParams();
    const id = params?.id || '1';

    const [isPaid, setIsPaid] = useState(false);
    const [method, setMethod] = useState('card');

    const handlePay = () => {
        setIsPaid(true);
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
                        <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter text-neon-accent">
                            Booking Success!
                        </h1>
                        <p className="text-muted-foreground text-lg font-bold max-w-xl mx-auto">
                            Your arena is ready. Registration for **Greenfield Sports Arena** is confirmed. Just show your digital pass at the entry.
                        </p>
                    </div>

                    <div className="glass-card p-10 max-w-md mx-auto rounded-3xl border-neon-accent/20 space-y-8 bg-gradient-to-br from-white/5 to-transparent shadow-2xl">
                        <div className="flex justify-between items-start">
                            <div className="text-left space-y-1">
                                <p className="text-[10px] font-black uppercase text-muted-foreground">Booking Pass ID</p>
                                <p className="font-black text-lg">#BMS-SLOT-00821</p>
                            </div>
                            <div className="p-3 bg-neon-accent/10 rounded-2xl text-neon-accent">
                                <Calendar size={24} />
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-white/10">
                            <button className="w-full py-4 bg-neon-accent text-black rounded-xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                                <Download size={18} /> Download Pass
                            </button>
                            <button className="w-full py-4 bg-white/5 text-foreground rounded-xl font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10">
                                <Share2 size={18} /> Invite Squad
                            </button>
                        </div>
                    </div>

                    <div className="pt-8">
                        <Link href="/" className="text-neon-accent font-black text-sm uppercase italic tracking-widest hover:gap-4 flex items-center justify-center gap-2 transition-all">
                            Back to Dashboard <ArrowRight size={18} />
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

                    {/* Payment Form */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-4">
                            <button
                                onClick={() => window.history.back()}
                                className="text-muted-foreground flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-neon-accent transition-all"
                            >
                                <ChevronLeft size={16} /> Update Slots
                            </button>
                            <h1 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter">
                                Checkout
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Establish Payment Channel</p>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setMethod('card')}
                                    className={`p-6 rounded-2xl border flex flex-col gap-4 transition-all ${method === 'card'
                                            ? 'bg-neon-accent/10 border-neon-accent shadow-xl'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    <CreditCard size={24} className={method === 'card' ? 'text-neon-accent' : 'text-muted-foreground'} />
                                    <span className="font-black text-xs uppercase tracking-widest italic">Corporate Card</span>
                                </button>

                                <button
                                    onClick={() => setMethod('upi')}
                                    className={`p-6 rounded-2xl border flex flex-col gap-4 transition-all ${method === 'upi'
                                            ? 'bg-neon-accent/10 border-neon-accent shadow-xl'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    <Smartphone size={24} className={method === 'upi' ? 'text-neon-accent' : 'text-muted-foreground'} />
                                    <span className="font-black text-xs uppercase tracking-widest italic">Unified Interface</span>
                                </button>
                            </div>

                            <div className="glass-card p-10 rounded-3xl border-foreground/5 space-y-8 shadow-2xl">
                                {method === 'card' ? (
                                    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest ml-1">Card Holder</label>
                                            <input type="text" placeholder="FULL NAME" className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-xl px-6 py-4 font-bold" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest ml-1">Pan-Asian Identity Number</label>
                                            <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-xl px-6 py-4 font-bold" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest ml-1">Validity</label>
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
                                            <div className="w-full h-full border-2 border-black/10 border-dashed rounded-lg flex items-center justify-center">
                                                <p className="text-[8px] font-black text-black uppercase">Scan Protocol</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-xs font-bold text-muted-foreground">Virtual Payment Address</p>
                                            <input type="text" placeholder="athlete@bms" className="w-full bg-foreground/5 border border-foreground/10 focus:border-neon-accent/40 outline-none rounded-xl px-6 py-4 font-bold text-center uppercase" />
                                        </div>
                                    </div>
                                )}

                                <div className="pt-4 flex items-center gap-3 text-muted-foreground">
                                    <Lock size={14} className="text-neon-accent" />
                                    <span className="text-[9px] font-black uppercase tracking-widest opacity-60">High-Fidelity Encrypted Environment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Breakdown */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24 glass-card p-10 rounded-3xl border-foreground/5 space-y-10 shadow-3xl">
                            <h3 className="text-xl font-black uppercase italic tracking-tight border-b border-white/5 pb-6">Invoice Summary</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-foreground/5 overflow-hidden shrink-0 border border-white/5">
                                        <img src="https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=150" className="w-full h-full object-cover" alt="Venue" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[8px] font-black text-neon-accent uppercase tracking-widest italic">Confirmed Reservation</p>
                                        <h4 className="font-black text-sm uppercase italic">Greenfield Sports Arena</h4>
                                        <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground italic">
                                            <Calendar size={10} className="text-neon-accent" /> Mar 17, 2026
                                            <Clock size={10} className="text-neon-accent" /> 06:00 PM
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase text-muted-foreground italic">Slot Fee (1hr)</span>
                                        <span className="font-black italic text-sm">₹1,200</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase text-muted-foreground italic">Taxes & GST (18%)</span>
                                        <span className="font-black italic text-sm">₹216</span>
                                    </div>
                                    <div className="flex justify-between items-center text-neon-accent">
                                        <span className="text-[10px] font-black uppercase italic">Promotion (BMS_NEW)</span>
                                        <span className="font-black italic text-sm">-₹216</span>
                                    </div>
                                    <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                        <span className="font-black text-sm uppercase italic tracking-tighter">Total Payable</span>
                                        <span className="text-4xl font-black italic text-neon-accent tracking-tighter">₹1,200</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handlePay}
                                className="w-full py-5 bg-neon-accent text-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all font-black uppercase italic tracking-widest shadow-[0_15px_40px_rgba(57,255,20,0.3)] mt-4 flex items-center justify-center gap-3"
                            >
                                <ShieldCheck size={20} />
                                Authenticate & Pay
                            </button>

                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-neon-accent animate-pulse"></div>
                                <p className="text-[9px] font-black uppercase tracking-tight text-foreground/40 leading-relaxed">
                                    Trusted by 50,000+ athletes. Powered by SSL-L4 Security Protocols.
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
