'use client';

import React from 'react';
import { ChevronRight, Award, Star, ShieldCheck, MapPin } from 'lucide-react';
import Link from 'next/link';

const sports = ["All Sports", "Cricket", "Badminton", "Football", "Tennis", "Pickleball"];

const pros = [
    {
        id: 1,
        role: "Coach",
        sport: "Cricket",
        name: "Vikram Rathour",
        rating: 4.9,
        reviews: 124,
        experience: "12+ Years",
        specialty: "Batting Consultant",
        price: "₹1,200/hr",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        verified: true
    },
    {
        id: 2,
        role: "Coach",
        sport: "Badminton",
        name: "Sania Mirza",
        rating: 4.8,
        reviews: 89,
        experience: "8 Years",
        specialty: "Advanced Drills",
        price: "₹800/hr",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        verified: true
    },
    {
        id: 3,
        role: "Umpire",
        sport: "Cricket",
        name: "Nitin Menon",
        rating: 5.0,
        reviews: 210,
        experience: "15 Years",
        specialty: "ICC Elite Panel",
        price: "₹2,500/match",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        verified: true
    },
    {
        id: 4,
        role: "Umpire",
        sport: "Football",
        name: "Mark Clattenburg",
        rating: 4.7,
        reviews: 156,
        experience: "10 Years",
        specialty: "FIFA Certified",
        price: "₹1,500/game",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        verified: false
    },
    {
        id: 5,
        role: "Coach",
        sport: "Tennis",
        name: "Roger Federer",
        rating: 5.0,
        reviews: 500,
        experience: "20+ Years",
        specialty: "Grand Slam Expert",
        price: "₹5,000/hr",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        verified: true
    },
    {
        id: 6,
        role: "Coach",
        sport: "Cricket",
        name: "Rahul Dravid",
        rating: 4.9,
        reviews: 320,
        experience: "15 Years",
        specialty: "Technique Coach",
        price: "₹1,800/hr",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        verified: true
    }
];

const ProsSection = () => {
    const [activeRole, setActiveRole] = React.useState<"Coach" | "Umpire">("Coach");
    const [activeSport, setActiveSport] = React.useState("All Sports");

    const rolePath = activeRole === "Coach" ? "coaches" : "umpires";

    return (
        <section className="px-4 lg:px-8 py-12 space-y-10">
            {/* Header & Main Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-foreground/5 pb-8">
                <div className="space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                            Find <span className="text-neon-accent">Pros</span>
                        </h2>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-60">
                            Book certified experts for your next session
                        </p>
                    </div>

                    {/* Role Tabs */}
                    <div className="flex p-1 bg-foreground/5 rounded-xl w-fit border border-foreground/5">
                        {(["Coach", "Umpire"] as const).map((role) => (
                            <button
                                key={role}
                                onClick={() => {
                                    setActiveRole(role);
                                    setActiveSport("All Sports");
                                }}
                                className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase italic tracking-widest transition-all
                                    ${activeRole === role
                                        ? 'bg-background text-neon-accent shadow-xl border border-neon-accent/10'
                                        : 'text-foreground/40 hover:text-foreground'
                                    }`}
                            >
                                {role === "Coach" ? "Find Coaches" : "Find Umpires"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Secondary Sport Filters */}
                <div className="flex flex-wrap items-center gap-2 lg:justify-end max-w-xl">
                    {sports.map((sport) => (
                        <button
                            key={sport}
                            onClick={() => setActiveSport(sport)}
                            className={`px-4 py-1.5 rounded-full border text-[9px] font-black uppercase italic tracking-[0.1em] transition-all
                                ${activeSport === sport
                                    ? 'bg-neon-accent text-black border-neon-accent shadow-[0_5px_15px_rgba(57,255,20,0.2)]'
                                    : 'bg-foreground/5 border-transparent text-foreground/50 hover:border-foreground/10'
                                }`}
                        >
                            {sport}
                        </button>
                    ))}
                </div>
            </div>

            {/* Profiles Carousel */}
            <div className="flex gap-8 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                {pros
                    .filter(p => p.role === activeRole && (activeSport === "All Sports" || p.sport === activeSport))
                    .map((pro) => (
                        <Link key={pro.id} href={`/${rolePath}/${pro.id}`} className="group flex">
                            <div
                                className="glass-card min-w-[260px] lg:min-w-[300px] group relative overflow-hidden flex flex-col h-full border-foreground/5"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img
                                        src={pro.image}
                                        alt={pro.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>

                                    {/* Pro Badge */}
                                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                                        <Award size={12} className="text-neon-accent shadow-sm" />
                                        <span className="text-[9px] font-black text-white uppercase tracking-widest italic">PRO</span>
                                    </div>

                                    {/* Verified Badge */}
                                    {pro.verified && (
                                        <div className="absolute top-4 right-4 p-1.5 bg-neon-accent rounded-full text-black shadow-lg">
                                            <ShieldCheck size={14} strokeWidth={3} />
                                        </div>
                                    )}

                                    {/* Info Overlay (Bottom) */}
                                    <div className="absolute bottom-4 left-4 right-4 space-y-1">
                                        <div className="flex items-center gap-1.5">
                                            <Star size={10} className="text-neon-accent fill-neon-accent" />
                                            <span className="text-[10px] font-black text-white italic">{pro.rating}</span>
                                            <span className="text-[9px] font-medium text-white/50 lowercase">({pro.reviews} reviews)</span>
                                        </div>
                                        <h3 className="text-xl font-black text-white uppercase italic tracking-tighter leading-none">
                                            {pro.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="p-5 flex flex-col gap-4 bg-background/20 backdrop-blur-md border-t border-foreground/5 flex-1">
                                    <div className="grid grid-cols-2 gap-4 text-left">
                                        <div className="space-y-0.5">
                                            <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Experience</p>
                                            <p className="text-[11px] font-bold text-foreground italic">{pro.experience}</p>
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Specialty</p>
                                            <p className="text-[11px] font-bold text-foreground italic truncate">{pro.specialty}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 pt-1 mt-auto">
                                        <div className="flex flex-col text-left">
                                            <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Starting From</p>
                                            <p className="text-sm font-black text-foreground">{pro.price}</p>
                                        </div>
                                        <button className="px-6 py-2.5 bg-foreground text-background dark:bg-white dark:text-black group-hover:bg-neon-accent group-hover:text-black transition-all rounded-lg text-[10px] font-black uppercase italic tracking-widest shadow-xl border-none outline-none">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                {/* View All Terminal Card */}
                <Link href={`/${rolePath}`} className="flex">
                    <div className="glass-card min-w-[200px] flex flex-col items-center justify-center gap-4 group/more hover:bg-neon-accent transition-all duration-500 border-foreground/5 h-full">
                        <div className="w-12 h-12 rounded-full border-2 border-neon-accent flex items-center justify-center group-hover/more:border-black transition-colors">
                            <ChevronRight size={24} className="text-neon-accent group-hover/more:text-black group-hover/more:translate-x-1 transition-all" />
                        </div>
                        <span className="font-black text-[10px] uppercase italic tracking-widest text-foreground group-hover/more:text-black text-center px-4">
                            View All {activeRole}s
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default ProsSection;
