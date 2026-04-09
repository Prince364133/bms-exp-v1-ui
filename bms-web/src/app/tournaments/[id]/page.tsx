'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    ChevronLeft, Trophy, Calendar, MapPin, Users,
    ShieldCheck, Info, Award, Clock, Share2,
    MessageSquare, ArrowRight, Play
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const tournamentData: Record<string, {
    title: string; sport: string; date: string; location: string; city: string;
    entryFee: number; prizePool: string; format: string; teamsRegistered: number;
    maxTeams: number; image: string; description: string;
    rules: string[];
    prizes: { rank: string; prize: string; color: string }[];
    schedule: { day: string; event: string; time: string }[];
}> = {
    '1': {
        title: "STAND & DELIVER 11",
        sport: "Cricket",
        date: "Mar 28, 2026 - Apr 5, 2026",
        location: "Upper Ground Arena, Hyderabad",
        city: "Hyderabad",
        entryFee: 1500,
        prizePool: "₹50,000",
        format: "Knockout (12 Overs)",
        teamsRegistered: 24,
        maxTeams: 32,
        image: "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Join the 11th edition of Stand & Deliver, Hyderabad's premier tennis ball cricket tournament. Battle it out under the lights for the ultimate trophy and a massive cash prize.",
        rules: [
            "Matches will be 12 overs per side.",
            "Professional tennis balls will be provided.",
            "Standard ICC rules apply with local modifications.",
            "Maximum 15 players per squad (11 playing + 4 subs).",
            "Umpire's decision is final."
        ],
        prizes: [
            { rank: "Winner", prize: "₹30,000 + Trophy", color: "text-neon-accent" },
            { rank: "Runner Up", prize: "₹15,000 + Trophy", color: "text-foreground" },
            { rank: "Man of series", prize: "₹5,000 + Kit Bag", color: "text-foreground/60" }
        ],
        schedule: [
            { day: "Day 1", event: "Group Stage A & B", time: "10:00 AM - 08:00 PM" },
            { day: "Day 2", event: "Group Stage C & D", time: "10:00 AM - 08:00 PM" },
            { day: "Final Day", event: "Semi-Finals & Grand Finale", time: "02:00 PM - 10:00 PM" }
        ]
    }
};

export default function TournamentDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = typeof params?.id === 'string' ? params.id : '1';
    const tournament = tournamentData[id] ?? tournamentData['1'];

    const progress = (tournament.teamsRegistered / tournament.maxTeams) * 100;

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="relative">
                {/* Hero section with image backdrop */}
                <div className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden">
                    <img
                        src={tournament.image}
                        alt={tournament.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="absolute top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 glass-card hover:bg-neon-accent hover:text-black transition-all rounded-full group"
                    >
                        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase italic tracking-widest">Discover All</span>
                    </button>

                    {/* Floating Video Preview Gear */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <button className="w-20 h-20 rounded-full bg-neon-accent flex items-center justify-center shadow-[0_0_50px_rgba(57,255,20,0.5)] hover:scale-110 transition-all group">
                            <Play size={32} className="text-black fill-black ml-1" />
                            <div className="absolute inset-0 rounded-full border-2 border-neon-accent animate-ping opacity-20"></div>
                        </button>
                    </div>
                </div>

                {/* Main Content Overlay */}
                <div className="relative z-20 -mt-32 max-w-[90%] mx-auto pb-20">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Left Column: Details */}
                        <div className="flex-[2] space-y-8">
                            <div className="glass-card p-10 space-y-8 rounded-3xl border-foreground/5 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-1.5 bg-neon-accent text-black text-[10px] font-black uppercase tracking-widest rounded-full italic shadow-xl">
                                            {tournament.sport}
                                        </span>
                                        <span className="px-4 py-1.5 bg-foreground/5 text-foreground/60 text-[10px] font-black uppercase tracking-widest rounded-full italic border border-foreground/10">
                                            {tournament.format}
                                        </span>
                                    </div>
                                    <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">
                                        {tournament.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground pt-2">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={18} className="text-neon-accent" />
                                            <span className="text-sm font-bold uppercase tracking-tight">{tournament.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={18} className="text-neon-accent" />
                                            <span className="text-sm font-bold uppercase tracking-tight">{tournament.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-foreground/5 rounded-3xl border border-foreground/5">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Entry Fee</p>
                                        <p className="text-2xl font-black text-foreground italic">₹{tournament.entryFee}</p>
                                    </div>
                                    <div className="space-y-1 border-l border-foreground/10 pl-6">
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Prize Pool</p>
                                        <p className="text-2xl font-black text-neon-accent italic">{tournament.prizePool}</p>
                                    </div>
                                    <div className="space-y-1 border-l border-foreground/10 pl-6">
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Matches</p>
                                        <p className="text-2xl font-black text-foreground italic">48+</p>
                                    </div>
                                    <div className="space-y-1 border-l border-foreground/10 pl-6">
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Min. Players</p>
                                        <p className="text-2xl font-black text-foreground italic">11</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <Info size={24} className="text-neon-accent" />
                                        <h3 className="text-2xl font-black uppercase italic tracking-tight">About Tournament</h3>
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {tournament.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Award size={20} className="text-neon-accent" />
                                            <h3 className="text-xl font-black uppercase italic tracking-tight">Prize Distribution</h3>
                                        </div>
                                        <div className="space-y-3">
                                            {tournament.prizes.map((p, i) => (
                                                <div key={i} className="flex justify-between items-center p-4 bg-foreground/5 rounded-2xl border border-foreground/5">
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{p.rank}</span>
                                                    <span className={`text-sm font-black italic ${p.color}`}>{p.prize}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={20} className="text-neon-accent" />
                                            <h3 className="text-xl font-black uppercase italic tracking-tight">Rules & Regulations</h3>
                                        </div>
                                        <div className="space-y-3">
                                            {tournament.rules.map((r, i) => (
                                                <div key={i} className="flex gap-3 items-start p-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-neon-accent mt-1.5 shrink-0"></div>
                                                    <p className="text-xs font-bold text-muted-foreground tracking-tight">{r}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Schedule Section */}
                            <div className="glass-card p-10 rounded-3xl border-foreground/5">
                                <div className="flex items-center gap-3 mb-8">
                                    <Clock size={24} className="text-neon-accent" />
                                    <h3 className="text-2xl font-black uppercase italic tracking-tight">Match Schedule</h3>
                                </div>
                                <div className="space-y-4">
                                    {tournament.schedule.map((s, i) => (
                                        <div key={i} className="group relative flex items-center justify-between p-6 bg-foreground/5 hover:bg-neon-accent/5 rounded-2xl border border-foreground/5 transition-all">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest">{s.day}</p>
                                                <p className="text-lg font-black italic">{s.event}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-muted-foreground">{s.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Registration Card */}
                        <div className="flex-1 lg:max-w-md">
                            <div className="sticky top-24 space-y-6">
                                <div className="glass-card p-8 rounded-3xl border-neon-accent/20 shadow-2xl relative overflow-hidden group">
                                    {/* Ambient Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-accent/10 blur-[50px] rounded-full"></div>

                                    <div className="relative space-y-8">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-end">
                                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Registration Status</p>
                                                <span className="text-[10px] font-black text-neon-accent uppercase tracking-widest italic">{Math.round(progress)}% Filled</span>
                                            </div>
                                            <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-neon-accent shadow-[0_0_15px_rgba(57,255,20,0.6)] transition-all duration-1000"
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-xs font-bold text-center italic text-muted-foreground">
                                                <Users size={14} className="inline mr-2 text-neon-accent" />
                                                {tournament.teamsRegistered} of {tournament.maxTeams} teams registered
                                            </p>
                                        </div>

                                        <div className="space-y-4 pt-4 border-t border-foreground/5">
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground text-sm font-bold uppercase">Basic Entry</span>
                                                <span className="text-xl font-black italic">₹{tournament.entryFee}</span>
                                            </div>
                                            <div className="flex justify-between items-center opacity-50">
                                                <span className="text-muted-foreground text-sm font-bold uppercase">Processing</span>
                                                <span className="text-xl font-black italic">FREE</span>
                                            </div>
                                            <div className="flex justify-between items-center pt-2 border-t border-foreground/10">
                                                <span className="text-foreground text-sm font-black uppercase">Total Payable</span>
                                                <span className="text-3xl font-black text-neon-accent italic tracking-tighter">₹{tournament.entryFee}</span>
                                            </div>
                                        </div>

                                        <Link href={`/tournaments/${id}/register`}>
                                            <button className="w-full py-5 bg-neon-accent text-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm font-black uppercase italic tracking-widest shadow-[0_15px_40px_rgba(57,255,20,0.3)] mt-4">
                                                Join Championship
                                            </button>
                                        </Link>

                                        <p className="text-[10px] font-bold text-center text-muted-foreground opacity-60 uppercase tracking-widest leading-relaxed">
                                            Cancellation possible until 48h before the event starts.
                                        </p>
                                    </div>
                                </div>

                                {/* Support Card */}
                                <div className="glass-card p-6 rounded-2xl flex items-center justify-between border-foreground/5 group cursor-pointer hover:bg-foreground/5 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-neon-accent/10 flex items-center justify-center text-neon-accent">
                                            <MessageSquare size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest">Need Help?</p>
                                            <p className="text-xs font-bold text-muted-foreground">Talk to Organizer</p>
                                        </div>
                                    </div>
                                    <ArrowRight size={16} className="text-muted-foreground group-hover:translate-x-1 group-hover:text-neon-accent transition-all" />
                                </div>

                                {/* Share card */}
                                <div className="glass-card p-6 rounded-2xl flex items-center justify-between border-foreground/5 group cursor-pointer hover:bg-foreground/5 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground">
                                            <Share2 size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest">Spread the Word</p>
                                            <p className="text-xs font-bold text-muted-foreground">Invite your squad</p>
                                        </div>
                                    </div>
                                    <ArrowRight size={16} className="text-muted-foreground group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MainFooter />
            </div>
        </main>
    );
}
