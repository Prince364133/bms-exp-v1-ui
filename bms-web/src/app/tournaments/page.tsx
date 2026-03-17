'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import { Trophy, Calendar, MapPin, Search, Filter, ChevronRight, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const tournaments = [
    {
        id: 1,
        title: "STAND & DELIVER 11",
        sport: "Cricket",
        date: "Mar 28, 2026 - Apr 5, 2026",
        location: "Hyderabad",
        arena: "Upper Ground Arena",
        entryFee: 1500,
        prizePool: "₹50,000",
        format: "Knockout",
        teamsRegistered: 24,
        maxTeams: 32,
        image: "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        title: "Hyderabad Tennis Cricket Cup",
        sport: "Cricket",
        date: "Apr 11, 2026 - Apr 12, 2026",
        location: "Hyderabad",
        arena: "Victory Turf",
        entryFee: 1200,
        prizePool: "₹30,000",
        format: "League + Knockout",
        teamsRegistered: 12,
        maxTeams: 16,
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Koshalendra Foundation Cricket",
        sport: "Cricket",
        date: "Apr 11, 2026 - Apr 26, 2026",
        location: "Kolkata",
        arena: "Eden Gardens (Secondary)",
        entryFee: 2000,
        prizePool: "₹1,00,000",
        format: "Knockout",
        teamsRegistered: 18,
        maxTeams: 32,
        image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 4,
        title: "MBP Premier League— Season 29",
        sport: "Cricket",
        date: "Mar 29, 2026 - Mar 31, 2026",
        location: "Hyderabad",
        arena: "PK Sports Arena, Bakaram",
        entryFee: 1000,
        prizePool: "₹25,000",
        format: "League",
        teamsRegistered: 30,
        maxTeams: 32,
        image: "https://images.unsplash.com/photo-1510566334573-fb3ff6286dde?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "BMS Football Championship",
        sport: "Football",
        date: "May 5, 2026 - May 10, 2026",
        location: "Bengaluru",
        arena: "Elevate Sports Hub",
        entryFee: 2500,
        prizePool: "₹75,000",
        format: "Tournament",
        teamsRegistered: 8,
        maxTeams: 16,
        image: "https://images.pexels.com/photos/159515/football-football-player-sport-action-159515.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 6,
        title: "Andheri Badminton Open",
        sport: "Badminton",
        date: "Jun 1, 2026",
        location: "Mumbai",
        arena: "Greenfield Arena",
        entryFee: 500,
        prizePool: "₹15,000",
        format: "Singles",
        teamsRegistered: 45,
        maxTeams: 64,
        image: "https://images.unsplash.com/photo-1626225967045-2c36640cdebe?auto=format&fit=crop&w=800&q=80"
    }
];

const TournamentCard = ({ tournament }: { tournament: typeof tournaments[0] }) => {
    const progress = (tournament.teamsRegistered / tournament.maxTeams) * 100;

    return (
        <Link href={`/tournaments/${tournament.id}`} className="group block">
            <div className="glass-card p-0 overflow-hidden border-foreground/5 hover:-translate-y-2 duration-500 shadow-2xl h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={tournament.image}
                        alt={tournament.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-2.5 py-1 bg-neon-accent text-black text-[9px] font-black uppercase tracking-widest rounded-md italic shadow-xl">
                            {tournament.sport}
                        </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div className="space-y-1">
                            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter leading-none line-clamp-1">
                                {tournament.title}
                            </h3>
                            <div className="flex items-center gap-2 text-white/70">
                                <MapPin size={12} className="text-neon-accent" />
                                <p className="text-[10px] font-bold uppercase tracking-tight line-clamp-1">
                                    {tournament.arena}, {tournament.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6 flex-1 flex flex-col">
                    {/* Key Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-[8px] uppercase font-black text-muted-foreground tracking-widest">Entry Fee</p>
                            <p className="text-lg font-black text-foreground italic leading-none">₹{tournament.entryFee}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[8px] uppercase font-black text-muted-foreground tracking-widest">Prize Pool</p>
                            <p className="text-lg font-black text-neon-accent italic leading-none">{tournament.prizePool}</p>
                        </div>
                    </div>

                    {/* Deadline/Date Info */}
                    <div className="flex items-center gap-3 p-3 bg-foreground/5 rounded-xl border border-foreground/5">
                        <div className="p-2 bg-neon-accent/10 rounded-lg text-neon-accent">
                            <Calendar size={16} />
                        </div>
                        <div>
                            <p className="text-[8px] uppercase font-black text-muted-foreground tracking-widest leading-none">Event Date</p>
                            <p className="text-[10px] font-bold text-foreground pt-1">{tournament.date}</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2 mt-auto">
                        <div className="flex justify-between items-end">
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                                <Users size={12} className="text-neon-accent" />
                                <span className="text-[10px] font-black italic">{tournament.teamsRegistered}/{tournament.maxTeams} Teams</span>
                            </div>
                            <span className="text-[9px] font-black text-neon-accent uppercase tracking-widest italic">{Math.round(progress)}% Full</span>
                        </div>
                        <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-neon-accent shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-all duration-1000"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <div className="w-full py-3 bg-white/5 group-hover:bg-neon-accent group-hover:text-black transition-all rounded-xl border border-white/10 flex items-center justify-center gap-2">
                            <span className="font-black text-[11px] uppercase italic tracking-widest">Register Now</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function TournamentsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            {/* Background Decorations */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-accent/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00D1FF]/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="relative z-10 max-w-[90%] mx-auto flex flex-col min-h-screen">
                <Navbar />

                {/* Hero Header */}
                <div className="pt-12 pb-16 space-y-8 flex flex-col items-center text-center">
                    <div className="space-y-4 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                            <Trophy size={14} className="text-neon-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">Elite Competitions</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            Discover <span className="gradient-text">Tournaments</span>
                        </h1>
                        <p className="text-muted-foreground font-medium text-lg lg:text-xl opacity-80">
                            Join professional leagues, compete with the best, and win massive rewards in your favorite sports.
                        </p>
                    </div>

                    {/* Modern Refinement Bar */}
                    <div className="w-full max-w-5xl glass-card p-2 rounded-2xl flex flex-col lg:flex-row gap-2 border-foreground/5 shadow-2xl">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neon-accent transition-transform group-focus-within:scale-110" size={18} />
                            <input
                                type="text"
                                placeholder="Search by name, sport or city..."
                                className="w-full bg-foreground/5 hover:bg-foreground/10 focus:bg-foreground/10 border-transparent focus:border-neon-accent/20 outline-none rounded-xl pl-16 pr-6 py-5 text-sm font-bold transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-5 glass-card hover:bg-foreground/5 transition-all text-sm font-black uppercase italic tracking-widest border-foreground/5">
                                <Filter size={18} className="text-neon-accent" />
                                Filters
                            </button>
                            <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-12 py-5 bg-neon-accent text-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm font-black uppercase italic tracking-widest shadow-[0_10px_30px_rgba(57,255,20,0.3)]">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sports Quick Filter */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-10">
                    {["All Sports", "Cricket", "Football", "Badminton", "Tennis", "Basketball", "Esports", "Athletics"].map((sport, i) => (
                        <button key={i} className={`px-8 py-3 rounded-xl border text-[10px] font-black uppercase italic tracking-widest transition-all whitespace-nowrap
                            ${i === 0 ? 'bg-neon-accent text-black border-neon-accent shadow-xl' : 'bg-foreground/5 border-transparent text-foreground/40 hover:border-foreground/10 hover:text-foreground'}`}>
                            {sport}
                        </button>
                    ))}
                </div>

                {/* Tournament Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {tournaments.map((t) => (
                        <TournamentCard key={t.id} tournament={t} />
                    ))}
                </div>

                <MainFooter />
            </div>
        </main>
    );
}
