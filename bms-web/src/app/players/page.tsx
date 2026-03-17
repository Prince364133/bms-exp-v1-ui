'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Search, Filter, MapPin, Users,
    Star, ShieldCheck, Zap, ChevronDown,
    UserCircle2, MessageSquare, UserPlus
} from 'lucide-react';
import Link from 'next/link';

const players = [
    {
        id: 1,
        name: "Arjun Mehta",
        distance: "1.2 km",
        location: "Andheri West, Mumbai",
        rating: 4.9,
        matches: 124,
        skill: "Professional",
        sports: ["Football", "Cricket"],
        karma: 95,
        status: "Available Now",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Sanya Iyer",
        distance: "2.5 km",
        location: "Juhu, Mumbai",
        rating: 4.8,
        matches: 88,
        skill: "Advanced",
        sports: ["Tennis", "Badminton"],
        karma: 82,
        status: "Available Weekend",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Vikram Singh",
        distance: "3.1 km",
        location: "Bandra East, Mumbai",
        rating: 4.7,
        matches: 210,
        skill: "Intermediate",
        sports: ["Cricket", "Basketball"],
        karma: 88,
        status: "Available Morning",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Priya Sharma",
        distance: "0.8 km",
        location: "Versova, Mumbai",
        rating: 4.9,
        matches: 56,
        skill: "Pro",
        sports: ["Swimming", "Yoga"],
        karma: 98,
        status: "Available Now",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        name: "Rohan Das",
        distance: "4.5 km",
        location: "Powai, Mumbai",
        rating: 4.6,
        matches: 112,
        skill: "Beginner",
        sports: ["Football", "Running"],
        karma: 75,
        status: "Looking for team",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        name: "Ishani Kapoor",
        distance: "2.1 km",
        location: "Khar, Mumbai",
        rating: 4.8,
        matches: 94,
        skill: "Advanced",
        sports: ["Badminton", "Table Tennis"],
        karma: 89,
        status: "Available Evening",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    }
];

const PlayerCard = ({ player }: { player: typeof players[0] }) => {
    return (
        <Link href={`/players/${player.id}`} className="group block h-full">
            <div className="glass-card p-6 flex flex-col gap-6 hover:-translate-y-2 duration-500 shadow-2xl h-full border-foreground/5 relative overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter border backdrop-blur-md
                        ${player.status.includes('Now') ? 'bg-neon-accent/20 border-neon-accent text-neon-accent' : 'bg-white/5 border-white/10 text-white/60'}`}>
                        {player.status}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-2 border-neon-accent/10 p-1 group-hover:border-neon-accent transition-colors duration-500">
                            <img src={player.image} alt={player.name} className="w-full h-full object-cover rounded-[1.8rem]" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-neon-accent text-black p-1 rounded-lg border-4 border-background shadow-xl">
                            <ShieldCheck size={14} />
                        </div>
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="space-y-0.5">
                            <h3 className="text-xl font-black text-foreground uppercase italic tracking-tighter group-hover:text-neon-accent transition-colors underline-offset-4">
                                {player.name}
                            </h3>
                            <div className="flex items-center gap-1.5 opacity-60">
                                <MapPin size={12} className="text-neon-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-tight">{player.distance} • {player.location.split(',')[0]}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-neon-accent">
                                <Star size={14} className="fill-neon-accent" />
                                <span className="text-xs font-black italic">{player.rating}</span>
                            </div>
                            <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest opacity-40">({player.matches} Games)</span>
                        </div>
                    </div>
                </div>

                {/* Skills/Sports Chips */}
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neon-accent text-black text-[9px] font-black uppercase tracking-widest rounded-md italic">
                        {player.skill}
                    </span>
                    {player.sports.map((sport, i) => (
                        <span key={i} className="px-3 py-1 bg-foreground/5 text-foreground/60 text-[9px] font-black uppercase tracking-widest rounded-md border border-foreground/5 italic">
                            {sport}
                        </span>
                    ))}
                </div>

                {/* Interaction Footer */}
                <div className="pt-6 border-t border-foreground/5 mt-auto flex items-center justify-between">
                    <div className="space-y-0.5">
                        <p className="text-[8px] uppercase font-black text-muted-foreground tracking-widest">Karma Score</p>
                        <p className="text-xl font-black text-neon-accent italic">{player.karma}</p>
                    </div>
                    <button className="px-6 py-3 bg-neon-accent text-black text-[9px] font-black uppercase italic tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">
                        Invite to Play
                    </button>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-accent/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-neon-accent/10 transition-all duration-700"></div>
            </div>
        </Link>
    );
};

export default function PlayersDiscoveryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="relative z-10 max-w-[90%] mx-auto py-12 space-y-12">
                {/* Enterprise Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                            <Zap size={14} className="text-neon-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">BMS Network Discovery</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            Find <span className="gradient-text">Players</span>
                        </h1>
                        <p className="text-muted-foreground font-medium text-lg lg:text-xl opacity-80 max-w-xl">
                            Connect with verified athletes in your neighborhood. Filter by skill, location, and preferred sports.
                        </p>
                    </div>

                    <button className="px-8 py-4 glass-card border-neon-accent/40 text-neon-accent rounded-2xl text-[10px] font-black uppercase italic tracking-widest shadow-2xl hover:bg-neon-accent hover:text-black transition-all flex items-center gap-3">
                        <UserPlus size={18} /> Sync Contacts
                    </button>
                </div>

                {/* Discovery Controls */}
                <div className="space-y-6">
                    <div className="w-full glass-card p-2 rounded-2xl flex flex-col lg:flex-row gap-2 border-foreground/5 shadow-2xl">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neon-accent/60 transition-colors group-focus-within:text-neon-accent" size={18} />
                            <input
                                type="text"
                                placeholder="Search by name, skill, or sport..."
                                className="w-full bg-foreground/5 hover:bg-foreground/10 focus:bg-foreground/10 border-transparent focus:border-neon-accent/20 outline-none rounded-xl pl-16 pr-6 py-5 text-sm font-bold transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="px-8 py-5 glass-card bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-xl transition-all">
                                <Filter size={16} className="text-neon-accent" />
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Advanced Filters</span>
                                <ChevronDown size={14} className="opacity-40" />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        {["Sport Type", "Gender", "Pro/Level", "Distance Range", "Verified Only"].map((filter, i) => (
                            <button key={i} className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest italic flex items-center gap-3 transition-all whitespace-nowrap">
                                {filter}
                                <ChevronDown size={12} className="opacity-40" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {players.map((p) => (
                        <PlayerCard key={p.id} player={p} />
                    ))}
                </div>

                {/* Social Trust Banner */}
                <div className="glass-card p-12 rounded-[3.5rem] border-foreground/5 bg-[radial-gradient(circle_at_top_right,rgba(57,255,20,0.05),transparent)] flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="space-y-6 text-center lg:text-left flex-1">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black uppercase italic tracking-tight">Fair Play Guaranteed</h2>
                            <p className="text-muted-foreground font-medium max-w-lg text-lg leading-relaxed">
                                Our Karma system and verified profiles build a community of committed athletes. Zero tolerance for no-shows.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <div className="px-5 py-3 bg-foreground/5 rounded-2xl border border-foreground/10 flex items-center gap-3">
                                <ShieldCheck className="text-neon-accent" size={18} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Verified ID</span>
                            </div>
                            <div className="px-5 py-3 bg-foreground/5 rounded-2xl border border-foreground/10 flex items-center gap-3">
                                <Star className="text-neon-accent fill-neon-accent" size={18} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Peer Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-16 h-16 rounded-full border-4 border-background bg-foreground/10 overflow-hidden shadow-2xl">
                                <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User avatar" />
                            </div>
                        ))}
                        <div className="w-16 h-16 rounded-full border-4 border-background bg-neon-accent flex items-center justify-center text-black font-black text-xs shadow-2xl">
                            10k+
                        </div>
                    </div>
                </div>

                <MainFooter />
            </div>
        </main>
    );
}
