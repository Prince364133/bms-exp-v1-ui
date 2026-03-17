'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    ChevronLeft, Calendar as CalendarIcon,
    Clock, Check, ArrowRight, Shield,
    UserCircle2, Trophy, Settings
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function BookingPage() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id || '1';

    const [selectedDate, setSelectedDate] = useState(0);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [addons, setAddons] = useState<string[]>([]);

    const dates = [
        { day: "Today", date: "Mar 17", full: "Tuesday, March 17" },
        { day: "Wed", date: "Mar 18", full: "Wednesday, March 18" },
        { day: "Thu", date: "Mar 19", full: "Thursday, March 19" },
        { day: "Fri", date: "Mar 20", full: "Friday, March 20" },
        { day: "Sat", date: "Mar 21", full: "Saturday, March 21" },
        { day: "Sun", date: "Mar 22", full: "Sunday, March 22" },
    ];

    const slots = {
        morning: ["06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM"],
        afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"],
        evening: ["05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"]
    };

    const toggleAddon = (name: string) => {
        setAddons(prev => prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]);
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Booking Control Area (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-4">
                            <button
                                onClick={() => router.back()}
                                className="text-neon-accent flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all mb-4"
                            >
                                <ChevronLeft size={16} /> Back to Venue
                            </button>
                            <h1 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter">
                                Reserve <span className="text-neon-accent">Slots</span>
                            </h1>
                            <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest italic">
                                Greenfield Sports Arena • Cricket / Football
                            </p>
                        </div>

                        {/* Date Selection */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                                <CalendarIcon size={20} className="text-neon-accent" />
                                1. Select Date
                            </h3>
                            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                                {dates.map((d, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedDate(i)}
                                        className={`flex flex-col items-center justify-center min-w-[100px] py-6 rounded-2xl border transition-all
                                            ${selectedDate === i
                                                ? 'bg-neon-accent text-black border-neon-accent shadow-xl scale-105'
                                                : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                                    >
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{d.day}</span>
                                        <span className="text-lg font-black italic">{d.date}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Slot Selection */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                                <Clock size={20} className="text-neon-accent" />
                                2. Available Time Slots
                            </h3>

                            <div className="space-y-8">
                                {Object.entries(slots).map(([period, times]) => (
                                    <div key={period} className="space-y-4">
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground border-b border-white/5 pb-2 ml-1">
                                            {period} Slots
                                        </p>
                                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                                            {times.map((t) => (
                                                <button
                                                    key={t}
                                                    onClick={() => setSelectedSlot(t)}
                                                    className={`py-4 rounded-xl text-[10px] font-black uppercase italic tracking-widest transition-all
                                                        ${selectedSlot === t
                                                            ? 'bg-neon-accent text-black shadow-lg scale-105'
                                                            : 'bg-white/5 border border-white/5 hover:border-neon-accent/40'}`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Add-ons */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic tracking-tight flex items-center gap-3">
                                <Settings size={20} className="text-neon-accent" />
                                3. Extra Services (Optional)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { id: 'bat', name: "English Willow Bat", price: 200, icon: <Trophy size={18} /> },
                                    { id: 'coach', name: "Professional Coach", price: 500, icon: <UserCircle2 size={18} /> },
                                    { id: 'kit', name: "Safety Kit & Pads", price: 150, icon: <Shield size={18} /> }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleAddon(item.id)}
                                        className={`flex items-center justify-between p-5 rounded-2xl border transition-all
                                            ${addons.includes(item.id)
                                                ? 'bg-neon-accent/10 border-neon-accent'
                                                : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={addons.includes(item.id) ? 'text-neon-accent' : 'text-muted-foreground'}>
                                                {item.icon}
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[10px] font-black uppercase tracking-widest">{item.name}</p>
                                                <p className="text-xs font-bold text-muted-foreground">₹{item.price} / session</p>
                                            </div>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${addons.includes(item.id) ? 'bg-neon-accent border-neon-accent text-black' : 'border-white/20'}`}>
                                            {addons.includes(item.id) && <Check size={14} />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary (4 Cols) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 glass-card p-10 rounded-[2.5rem] border-foreground/5 space-y-10 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-accent/10 blur-[60px] rounded-full"></div>

                            <h3 className="text-xl font-black uppercase italic tracking-tight relative">Booking Invoice</h3>

                            <div className="space-y-6 relative">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-muted-foreground uppercase font-black tracking-widest">Base Rate</span>
                                        <span className="font-black italic">₹1,200</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-muted-foreground uppercase font-black tracking-widest">Selected Slot</span>
                                        <span className="font-black italic text-neon-accent uppercase">{selectedSlot || 'Not Selected'}</span>
                                    </div>
                                    {addons.length > 0 && (
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-muted-foreground uppercase font-black tracking-widest">Add-ons ({addons.length})</span>
                                            <span className="font-black italic">₹{addons.length * 200}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-6 border-t border-white/5 space-y-4">
                                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-60">
                                        <CalendarIcon size={14} className="text-neon-accent" />
                                        {dates[selectedDate].full}
                                    </div>
                                    <div className="flex justify-between items-end pt-2">
                                        <span className="text-sm font-black uppercase italic">Total Amount</span>
                                        <span className="text-4xl font-black text-neon-accent italic tracking-tighter">
                                            ₹{1200 + (addons.length * 200)}
                                        </span>
                                    </div>
                                </div>

                                <Link href={`/venues/${id}/payment`}>
                                    <button
                                        disabled={!selectedSlot}
                                        className="w-full py-6 bg-neon-accent text-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm font-black uppercase italic tracking-widest shadow-[0_20px_50px_rgba(57,255,20,0.3)] mt-4 disabled:opacity-50 disabled:grayscale disabled:pointer-events-none group"
                                    >
                                        Establish Connection
                                        <ArrowRight size={18} className="inline ml-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>

                                <div className="text-center opacity-40">
                                    <span className="text-[8px] font-black uppercase tracking-[0.3em]">BMS Enterprise Gateway</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <MainFooter />
        </main>
    );
}
