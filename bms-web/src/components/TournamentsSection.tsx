'use client';

import Link from 'next/link';
import { Trophy, Calendar, MapPin, ChevronRight, Clock } from 'lucide-react';

const tournaments = [
    {
        id: 1,
        title: "STAND & DELIVER 11",
        sport: "Cricket",
        date: "Mar 28, 2026 - Apr 5, 2026",
        location: "Hyderabad",
        countdown: "Limited Slots",
        isFeatured: true,
        image: "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        title: "Hyderabad Tennis Cricket Cup",
        sport: "Cricket",
        date: "Apr 11, 2026 - Apr 12, 2026",
        location: "Hyderabad",
        countdown: "Starts in April",
        isFeatured: true,
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Koshalendra Foundation Cricket",
        sport: "Cricket",
        date: "Apr 11, 2026 - Apr 26, 2026",
        location: "Kolkata",
        countdown: "25 Days left",
        isFeatured: false,
        image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 4,
        title: "MBP Premier League— Season 29",
        sport: "Cricket",
        date: "Mar 29, 2026 - Mar 31, 2026",
        location: "PK Sports Arena, Bakaram",
        countdown: "12 Days left",
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1510566334573-fb3ff6286dde?auto=format&fit=crop&w=800&q=80"
    }
];

const TournamentCard = ({ tournament }: { tournament: typeof tournaments[0] }) => {
    return (
        <Link href={`/tournaments/${tournament.id}`} className="group relative min-w-[280px] lg:min-w-[320px] flex flex-col glass-card p-0 overflow-hidden border-foreground/5 hover:-translate-y-2 duration-500 shadow-2xl">
            {/* Banner Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={tournament.image}
                    alt={tournament.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <div className="px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg flex items-center gap-1.5 shadow-lg">
                        <Trophy size={10} className="text-neon-accent fill-neon-accent" />
                        <span className="text-[9px] font-black text-black uppercase tracking-widest">{tournament.sport}</span>
                    </div>
                    {tournament.isFeatured && (
                        <div className="px-2.5 py-1 bg-neon-accent text-black text-[9px] font-black uppercase tracking-widest rounded-lg shadow-neon-accent/20 shadow-lg border border-black/10">
                            Featured
                        </div>
                    )}
                </div>

                {/* Countdown Overlay */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <Clock size={10} className="text-neon-accent" />
                    <span className="text-[9px] font-black text-white uppercase italic">{tournament.countdown}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
                <div className="space-y-1">
                    <h3 className="text-[13px] font-black text-foreground uppercase italic tracking-tighter leading-tight line-clamp-1 group-hover:text-neon-accent transition-colors">
                        {tournament.title}
                    </h3>
                    <div className="flex flex-col gap-1 opacity-60">
                        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-muted-foreground italic">
                            <Calendar size={10} />
                            <span>{tournament.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-muted-foreground italic line-clamp-1">
                            <MapPin size={10} />
                            <span>{tournament.location}</span>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2.5 bg-foreground/5 group-hover:bg-neon-accent group-hover:text-black text-[10px] font-black uppercase italic tracking-widest rounded-xl transition-all border border-foreground/5 flex items-center justify-center">
                    Join Tournament
                </div>
            </div>
        </Link>
    );
};

const TournamentsSection = () => {
    return (
        <section className="px-4 lg:px-8 py-12 space-y-10">
            <div className="flex items-end justify-between border-b border-foreground/5 pb-8">
                <div className="space-y-1">
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                        Featured <span className="text-neon-accent">Tournaments</span>
                    </h2>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-60">
                        Battle for glory in elite professional leagues
                    </p>
                </div>

                <Link href="/tournaments">
                    <button className="flex items-center gap-2 text-foreground font-black text-[10px] uppercase tracking-widest hover:text-neon-accent transition-all">
                        VIEW ALL <ChevronRight size={14} className="text-neon-accent" />
                    </button>
                </Link>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                {tournaments.map((tournament) => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
            </div>
        </section>
    );
};

export default TournamentsSection;
