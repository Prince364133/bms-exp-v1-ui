'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Search, Filter, MapPin, Users,
    ArrowRight, Calendar, UserCircle2,
    ChevronDown, Zap, ShieldCheck, Star
} from 'lucide-react';
import Link from 'next/link';

const games = [
    {
        id: 1,
        title: "5v5 Sunday Football Rush",
        venue: "Greenfield Sports Arena",
        location: "Andheri West, Mumbai",
        date: "Mar 22, 2026",
        time: "07:00 PM",
        sport: "Football",
        hostedBy: "Captain Rahul",
        joined: 7,
        total: 10,
        skillLevel: "Intermediate",
        pricePerHead: 300,
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Competitive Cricket T-10",
        venue: "Upper Ground Turf",
        location: "Jubilee Hills, Hyderabad",
        date: "Mar 21, 2026",
        time: "06:00 AM",
        sport: "Cricket",
        hostedBy: "Sameer K.",
        joined: 14,
        total: 22,
        skillLevel: "Professional",
        pricePerHead: 450,
        image: "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 3,
        title: "Badminton Doubles Mixer",
        venue: "Victory Badminton Center",
        location: "Indiranagar, Bengaluru",
        date: "Mar 20, 2026",
        time: "08:00 PM",
        sport: "Badminton",
        hostedBy: "Aditi G.",
        joined: 3,
        total: 4,
        skillLevel: "Advanced",
        pricePerHead: 250,
        image: "https://images.unsplash.com/photo-1626225967045-2c36640cdebe?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Hoops & Coffee (Pickup)",
        venue: "Skybox Basketball",
        location: "Cyber City, Gurugram",
        date: "Mar 23, 2026",
        time: "05:00 PM",
        sport: "Basketball",
        hostedBy: "Mike 'The Wall'",
        joined: 6,
        total: 12,
        skillLevel: "Beginner",
        pricePerHead: 200,
        image: "https://images.pexels.com/photos/1752724/pexels-photo-1752724.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 5,
        title: "Late Night Tennis Sesh",
        venue: "Elite Tennis Club",
        location: "Gachibowli, Hyderabad",
        date: "Mar 19, 2026",
        time: "10:00 PM",
        sport: "Tennis",
        hostedBy: "Sonia R.",
        joined: 1,
        total: 2,
        skillLevel: "Pro",
        pricePerHead: 600,
        image: "https://images.unsplash.com/photo-1595435064219-c7813d423b9f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "Open Water Swim Practice",
        venue: "The Olympic Pool",
        location: "Salt Lake, Kolkata",
        date: "Mar 24, 2026",
        time: "06:00 AM",
        sport: "Swimming",
        hostedBy: "Coach Vikram",
        joined: 8,
        total: 15,
        skillLevel: "All Levels",
        pricePerHead: 150,
        image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

const GameJoinCard = ({ game }: { game: typeof games[0] }) => {
    const progress = (game.joined / game.total) * 100;

    return (
        <Link href={`/games/${game.id}`} className="group block h-full">
            <div className="glass-card p-0 overflow-hidden border-foreground/5 group-hover:-translate-y-2 duration-500 shadow-2xl h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-neon-accent text-black text-[9px] font-black uppercase tracking-widest rounded-md italic shadow-xl">
                            {game.sport}
                        </span>
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-md italic border border-white/10">
                            {game.skillLevel}
                        </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-black text-white uppercase italic tracking-tighter leading-none line-clamp-1">
                            {game.title}
                        </h3>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <UserCircle2 size={16} className="text-neon-accent" />
                                <span className="text-[10px] font-black uppercase tracking-[0.1em]">Host: {game.hostedBy}</span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-0.5 bg-neon-accent/10 rounded-md border border-neon-accent/20">
                                <ShieldCheck size={10} className="text-neon-accent" />
                                <span className="text-[8px] font-black text-neon-accent uppercase tracking-widest">Verified</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground opacity-80">
                                <MapPin size={14} />
                                <p className="text-[10px] font-bold uppercase tracking-tight">{game.venue}</p>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground opacity-80">
                                <Calendar size={14} />
                                <p className="text-[10px] font-bold uppercase tracking-tight">{game.date} • {game.time}</p>
                            </div>
                        </div>

                        {/* Social Logic: Spots Remaining */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">SQUAD STATUS</span>
                                <span className="text-[10px] font-black italic text-neon-accent">{game.total - game.joined} SPOTS LEFT</span>
                            </div>
                            <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-neon-accent shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-all duration-1000"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-foreground/5 mt-auto flex items-center justify-between">
                        <div className="space-y-0.5">
                            <p className="text-[8px] uppercase font-black text-muted-foreground tracking-widest">Entry Split</p>
                            <p className="text-xl font-black text-foreground italic flex items-baseline gap-1">
                                ₹{game.pricePerHead} <span className="text-[10px] text-muted-foreground not-italic font-bold">/pp</span>
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-neon-accent/10 flex items-center justify-center text-neon-accent group-hover:bg-neon-accent group-hover:text-black transition-all">
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function GamesDiscoveryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="relative z-10 max-w-[90%] mx-auto py-12 space-y-12">
                {/* Enterprise Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                            <Users size={14} className="text-neon-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">Community Hosted Matches</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            Join <span className="gradient-text">Games</span>
                        </h1>
                        <p className="text-muted-foreground font-medium text-lg lg:text-xl opacity-80 max-w-xl">
                            Don't have a full team? No problem. Find active matches near you and join the community.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/games/host">
                            <button className="px-8 py-4 bg-neon-accent text-black rounded-2xl text-[10px] font-black uppercase italic tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Host A Match
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Discovery Controls */}
                <div className="space-y-6">
                    <div className="w-full glass-card p-2 rounded-2xl flex flex-col lg:flex-row gap-2 border-foreground/5 shadow-2xl">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neon-accent transition-transform group-focus-within:scale-110" size={18} />
                            <input
                                type="text"
                                placeholder="Search by game title, captain, or arena..."
                                className="w-full bg-foreground/5 hover:bg-foreground/10 focus:bg-foreground/10 border-transparent focus:border-neon-accent/20 outline-none rounded-xl pl-16 pr-6 py-5 text-sm font-bold transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="px-8 py-5 glass-card bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-xl transition-all">
                                <Filter size={16} className="text-neon-accent" />
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Filters</span>
                                <ChevronDown size={14} className="opacity-40" />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto no-scrollbar">
                        {["Skill Level", "Price Range", "Age Group", "Game Duration", "Verified Hosts"].map((filter, i) => (
                            <button key={i} className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest italic flex items-center gap-3 transition-all whitespace-nowrap">
                                {filter}
                                <ChevronDown size={12} className="opacity-40" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {games.map((g) => (
                        <GameJoinCard key={g.id} game={g} />
                    ))}
                </div>

                {/* Trust Section */}
                <div className="glass-card p-12 rounded-[2.5rem] border-foreground/5 bg-gradient-to-r from-neon-accent/5 to-transparent flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="space-y-4 text-center lg:text-left">
                        <h2 className="text-3xl font-black uppercase italic tracking-tight">Enterprise Standard Match-Making</h2>
                        <p className="text-muted-foreground font-medium max-w-lg">
                            We verify every venue and host to ensure a seamless on-field experience. Transparent pricing, verified skill levels, and instant support.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {[
                            { label: "Verified Hosts", val: "500+" },
                            { label: "Daily Matches", val: "1.2k" },
                            { label: "Secure Split", val: "100%" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center space-y-1">
                                <p className="text-2xl font-black italic text-neon-accent">{stat.val}</p>
                                <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <MainFooter />
            </div>
        </main>
    );
}
