'use client';

import React from 'react';
import { ChevronRight, MapPin, Calendar, Users, Star } from 'lucide-react';
import Link from 'next/link';

const sports = ["All Sports", "Badminton", "Cricket", "Football", "Tennis", "Pickleball"];

const games = [
    {
        id: 1,
        sport: "Badminton",
        type: "Regular",
        category: "Mixed Doubles",
        host: "Madhav",
        karma: 88,
        time: "Tue, 17 Mar 2026, 07:00 AM - 08:00 AM",
        location: "New Nallakunta",
        distance: "3.11 Kms",
        level: "Beginner - Professional",
        slots: 1,
        totalSlots: 4,
        fee: "₹250",
        gender: "Mixed",
        avatar: "https://i.pravatar.cc/150?u=1",
        status: "OPEN"
    },
    {
        id: 2,
        sport: "Cricket",
        type: "Regular",
        category: "Box Cricket",
        host: "Pranay",
        karma: 135,
        time: "Tue, 17 Mar 2026, Morning",
        location: "4COURTS Academy",
        distance: "3.81 Kms",
        level: "Intermediate",
        slots: 8,
        totalSlots: 12,
        fee: "₹350",
        gender: "Male Only",
        avatar: "https://i.pravatar.cc/150?u=2",
        status: "OPEN"
    },
    {
        id: 3,
        sport: "Badminton",
        type: "Regular",
        category: "Singles",
        host: "Ronny",
        karma: 219,
        time: "17 Mar, 06:00 AM",
        location: "Vishwamanya Court",
        distance: "7.50 Kms",
        level: "Advance",
        slots: 2,
        totalSlots: 2,
        fee: "₹400",
        gender: "Mixed",
        avatar: "https://i.pravatar.cc/150?u=3",
        status: "BOOKED"
    },
    {
        id: 4,
        sport: "Football",
        type: "Regular",
        category: "5v5 Turf",
        host: "Sai",
        karma: 70,
        time: "17 Mar, 06:30 AM",
        location: "Osmania Univ",
        distance: "5.67 Kms",
        level: "Beginner",
        slots: 4,
        totalSlots: 10,
        fee: "₹200",
        gender: "Mixed",
        avatar: "https://i.pravatar.cc/150?u=4",
        status: "OPEN"
    }
];

const GamesSection = () => {
    const [activeSport, setActiveSport] = React.useState("All Sports");

    return (
        <section className="px-4 lg:px-8 py-12 space-y-8">
            <div className="space-y-6">
                <div className="flex items-end justify-between">
                    <div className="space-y-1">
                        <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                            Join <span className="text-neon-accent">Games</span>
                        </h2>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-60">
                            Find players and level up your game
                        </p>
                    </div>

                    <Link href="/games">
                        <button className="flex items-center gap-2 text-neon-accent font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all">
                            SEE ALL GAMES <ChevronRight size={14} />
                        </button>
                    </Link>
                </div>

                {/* Sport Filters */}
                <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
                    {sports.map((sport, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveSport(sport)}
                            className={`px-5 py-2 rounded-lg border text-[9px] font-black uppercase italic tracking-widest transition-all whitespace-nowrap
                                ${activeSport === sport
                                    ? 'bg-neon-accent text-black border-neon-accent shadow-[0_5px_15px_rgba(57,255,20,0.2)] scale-105'
                                    : 'bg-foreground/5 border-foreground/5 text-foreground/40 hover:border-neon-accent/30'
                                }`}
                        >
                            {sport}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                {games
                    .filter(g => activeSport === "All Sports" || g.sport === activeSport)
                    .map((game) => (
                        <Link href={`/games/${game.id}`} key={game.id} className="group flex">
                            <div
                                className="glass-card min-w-[280px] lg:min-w-[320px] p-5 flex flex-col gap-5 group hover:-translate-y-2 duration-500 relative overflow-hidden h-full"
                            >
                                {/* Top: Sport & Fee */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-accent shadow-[0_0_8px_var(--glow-color)]"></div>
                                        <p className="text-[10px] font-black text-foreground uppercase tracking-wider">
                                            {game.sport} • {game.category}
                                        </p>
                                    </div>
                                    <div className="px-2 py-1 bg-foreground/10 rounded text-[10px] font-black text-foreground italic">
                                        {game.fee}
                                    </div>
                                </div>

                                {/* Host Row */}
                                <div className="flex items-center gap-3">
                                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-neon-accent/10 group-hover:border-neon-accent/50 transition-all duration-500">
                                        <img src={game.avatar} alt={game.host} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-neon-accent border-2 border-background rounded-full"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[12px] font-black text-foreground uppercase italic truncate mb-0.5">
                                            {game.host}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[9px] font-bold text-muted-foreground uppercase opacity-70">
                                                Karma: <span className="text-neon-accent">{game.karma}</span>
                                            </span>
                                            <span className="text-[8px] px-1.5 py-0.5 bg-foreground/5 rounded text-foreground/40 font-black uppercase tracking-tighter">
                                                {game.gender}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-1 gap-3 py-4 border-y border-foreground/5">
                                    <div className="flex items-center gap-2.5">
                                        <div className="p-1.5 bg-neon-accent/5 rounded-md">
                                            <Calendar size={13} className="text-neon-accent" />
                                        </div>
                                        <p className="text-[10px] font-bold text-foreground/80 uppercase italic tracking-tight truncate">{game.time}</p>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <div className="p-1.5 bg-neon-accent/5 rounded-md">
                                            <MapPin size={13} className="text-neon-accent" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-bold text-foreground/80 uppercase italic tracking-tight truncate">{game.location}</p>
                                            <p className="text-[8px] font-black text-neon-accent uppercase tracking-widest mt-0.5">
                                                {game.distance} away
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Interaction */}
                                <div className="flex items-center justify-between mt-auto pt-1">
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5">
                                            <Users size={12} className="text-foreground/30" />
                                            <span className="text-[10px] font-black text-foreground uppercase italic tracking-tighter">
                                                {game.slots}/{game.totalSlots} <span className="opacity-40 ml-0.5">GOING</span>
                                            </span>
                                        </div>
                                        {/* Slot Progress Bar */}
                                        <div className="w-20 h-1 bg-foreground/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-neon-accent shadow-[0_0_8px_var(--glow-color)] transition-all duration-1000"
                                                style={{ width: `${(game.slots / game.totalSlots) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <button className={`px-6 py-2.5 rounded-lg text-[10px] font-black uppercase italic tracking-widest transition-all
                              ${game.status === "BOOKED"
                                            ? 'bg-foreground/5 text-foreground/20 cursor-not-allowed border border-foreground/5'
                                            : 'bg-neon-accent text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-[0_5px_15px_var(--glow-color)] active:scale-95'
                                        }`}
                                    >
                                        {game.status === "BOOKED" ? "FULL" : "JOIN"}
                                    </button>
                                </div>

                                {/* Decorative Gradient */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-accent/5 blur-[50px] -mr-12 -mt-12 pointer-events-none"></div>
                            </div>
                        </Link>
                    ))}
            </div>
        </section>
    );
};

export default GamesSection;
