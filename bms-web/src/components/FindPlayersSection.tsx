'use client';

import React from 'react';
import { UserPlus, MapPin, Filter, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';

const players = [
    {
        id: 1,
        name: "Rahul Khanna",
        skill: "Intermediate",
        location: "HSR Layout, Bengaluru",
        sports: ["Cricket", "Football"],
        avatar: "https://i.pravatar.cc/150?u=r1",
        distance: "2.5 km away"
    },
    {
        id: 2,
        name: "Sanya Mirza",
        skill: "Pro",
        location: "Koramangala, Bengaluru",
        sports: ["Tennis", "Badminton"],
        avatar: "https://i.pravatar.cc/150?u=s2",
        distance: "3.8 km away"
    },
    {
        id: 3,
        name: "Arjun Das",
        skill: "Beginner",
        location: "Indiranagar, Bengaluru",
        sports: ["Football", "Table Tennis"],
        avatar: "https://i.pravatar.cc/150?u=a3",
        distance: "1.2 km away"
    },
    {
        id: 4,
        name: "Priya Rao",
        skill: "Intermediate",
        location: "Whitefield, Bengaluru",
        sports: ["Cricket", "Basketball"],
        avatar: "https://i.pravatar.cc/150?u=p4",
        distance: "5.0 km away"
    },
    {
        id: 5,
        name: "Vikram Singh",
        skill: "Pro",
        location: "Jayanagar, Bengaluru",
        sports: ["Cricket", "Football"],
        avatar: "https://i.pravatar.cc/150?u=v5",
        distance: "4.1 km away"
    }
];

const PlayerCard = ({ player }: { player: typeof players[0] }) => {
    return (
        <Link href={`/players/${player.id}`} className="group flex">
            <div className="glass-card min-w-[260px] p-5 space-y-4 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full border-foreground/5">
                {/* Skill Badge Overlay */}
                <div className="absolute top-4 right-4 z-10">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${player.skill === 'Pro' ? 'bg-orange-500/20 text-orange-500' :
                        player.skill === 'Intermediate' ? 'bg-neon-accent/20 text-neon-accent' :
                            'bg-blue-500/20 text-blue-500'
                        }`}>
                        {player.skill}
                    </span>
                </div>

                {/* Profile Avatar */}
                <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-neon-accent/10 group-hover:border-neon-accent/40 transition-colors">
                        <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="text-sm font-black text-foreground uppercase italic tracking-tighter">{player.name}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin size={10} className="text-neon-accent" />
                            <span className="text-[10px] font-bold uppercase opacity-60 tracking-tight">{player.distance}</span>
                        </div>
                    </div>
                </div>

                {/* Favorite Sports */}
                <div className="flex flex-wrap gap-1.5 py-2">
                    {player.sports.map((sport, i) => (
                        <span key={i} className="px-2 py-1 bg-foreground/5 rounded-lg text-[9px] font-bold text-foreground/70 uppercase">
                            {sport}
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-neon-accent/10 hover:bg-neon-accent hover:text-black transition-all rounded-xl border border-neon-accent/20 flex items-center justify-center gap-2 mt-auto">
                    <UserPlus size={14} />
                    <span className="font-black text-[10px] uppercase italic tracking-widest text-inherit">Invite to Play</span>
                </button>
            </div>
        </Link>
    );
};

const FindPlayersSection = () => {
    return (
        <section className="px-4 lg:px-8 py-12 space-y-8">
            {/* Header with Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-foreground/5">
                <div className="space-y-1">
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter leading-none">
                        Find Players <span className="text-neon-accent">Near You</span>
                    </h2>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-60">
                        Connect with athletes in your neighborhood
                    </p>
                </div>

                {/* Local Filter Bar */}
                <div className="flex flex-wrap items-center gap-2 lg:gap-3 p-1.5 lg:px-3 lg:py-2 glass-card border-neon-accent/10 w-fit">
                    <div className="flex items-center gap-2 px-3 py-1.5 border-r border-foreground/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                        <MapPin size={14} className="text-neon-accent" />
                        <span className="text-[10px] font-black uppercase tracking-wider">Karnataka</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 border-r border-foreground/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                        <Search size={14} className="text-neon-accent" />
                        <span className="text-[10px] font-black uppercase tracking-wider">Bengaluru</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer border-r border-foreground/10">
                        <Filter size={14} className="text-neon-accent" />
                        <span className="text-[10px] font-black uppercase tracking-wider">5 km Radius</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-1.5 bg-neon-accent text-black rounded-lg font-black text-[10px] uppercase tracking-wider hover:scale-105 transition-all">
                        Search
                    </button>
                </div>
            </div>

            {/* Players Carousel */}
            <div className="relative group">
                <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                    {players.map((player) => (
                        <PlayerCard key={player.id} player={player} />
                    ))}

                    {/* View All Terminal Card */}
                    <Link href="/players" className="flex">
                        <div className="glass-card min-w-[180px] flex flex-col items-center justify-center gap-4 group/more hover:bg-neon-accent transition-all duration-500 border-foreground/5 h-full">
                            <div className="w-12 h-12 rounded-full border-2 border-neon-accent flex items-center justify-center group-hover/more:border-black transition-colors">
                                <ChevronRight size={24} className="text-neon-accent group-hover/more:text-black group-hover/more:translate-x-1 transition-all" />
                            </div>
                            <span className="font-black text-[10px] uppercase italic tracking-widest text-foreground group-hover/more:text-black">View All Players</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FindPlayersSection;
