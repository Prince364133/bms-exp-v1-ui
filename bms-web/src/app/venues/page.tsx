'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Search, Filter, MapPin, Star,
    ArrowRight, Map as MapIcon, Grid,
    ChevronDown, Zap
} from 'lucide-react';
import Link from 'next/link';

const venues = [
    {
        id: 1,
        name: "Greenfield Sports Arena",
        location: "Andheri West, Mumbai",
        distance: "2.5 km",
        sport: "Cricket",
        rating: 4.8,
        reviews: 124,
        price: 1200,
        amenities: ["Floodlights", "Parking", "Changing Room", "Water"],
        image: "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        name: "Upper Ground Turf",
        location: "Jubilee Hills, Hyderabad",
        distance: "1.8 km",
        sport: "Football",
        rating: 4.9,
        reviews: 89,
        price: 1500,
        amenities: ["FIFA Grade Turf", "Shower", "Cafe"],
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Victory Badminton Center",
        location: "Indiranagar, Bengaluru",
        distance: "3.2 km",
        sport: "Badminton",
        rating: 4.7,
        reviews: 210,
        price: 500,
        amenities: ["Wooden Flooring", "AC", "Pro-Shop"],
        image: "https://images.unsplash.com/photo-1626225967045-2c36640cdebe?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "The Olympic Pool",
        location: "Salt Lake, Kolkata",
        distance: "5.1 km",
        sport: "Swimming",
        rating: 4.6,
        reviews: 156,
        price: 800,
        amenities: ["Heated Pool", "Lockers", "Coaching"],
        image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 5,
        name: "Elite Tennis Club",
        location: "Gachibowli, Hyderabad",
        distance: "0.5 km",
        sport: "Tennis",
        rating: 4.9,
        reviews: 67,
        price: 2000,
        amenities: ["Clay Court", "Ball Boys", "Floodlights"],
        image: "https://images.unsplash.com/photo-1595435064219-c7813d423b9f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Skybox Basketball",
        location: "Cyber City, Gurugram",
        distance: "4.2 km",
        sport: "Basketball",
        rating: 4.7,
        reviews: 93,
        price: 1800,
        amenities: ["Indoor", "Electronic Scoreboard", "Parking"],
        image: "https://images.pexels.com/photos/1752724/pexels-photo-1752724.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

const VenueCard = ({ venue }: { venue: typeof venues[0] }) => {
    return (
        <Link href={`/venues/${venue.id}`} className="group block h-full">
            <div className="glass-card p-0 overflow-hidden border-foreground/5 group-hover:-translate-y-2 duration-500 shadow-2xl h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={venue.image}
                        alt={venue.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-neon-accent text-black text-[10px] font-black uppercase tracking-widest rounded-md italic shadow-xl">
                            {venue.sport}
                        </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 space-y-1">
                        <div className="flex items-center gap-1 text-neon-accent bg-black/40 backdrop-blur-md w-fit px-2 py-0.5 rounded-md border border-white/10">
                            <Star size={10} className="fill-neon-accent" />
                            <span className="text-[10px] font-black italic">{venue.rating}</span>
                            <span className="text-[8px] text-white/60 font-bold ml-1">({venue.reviews})</span>
                        </div>
                        <h3 className="text-xl font-black text-white uppercase italic tracking-tighter leading-none">
                            {venue.name}
                        </h3>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin size={14} className="text-neon-accent" />
                            <p className="text-[11px] font-bold uppercase tracking-tight line-clamp-1">
                                {venue.location} • {venue.distance}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {venue.amenities.slice(0, 3).map((a, i) => (
                                <span key={i} className="px-2.5 py-1 bg-foreground/5 text-[9px] font-black uppercase tracking-widest rounded-lg opacity-60">
                                    {a}
                                </span>
                            ))}
                            {venue.amenities.length > 3 && (
                                <span className="px-2.5 py-1 bg-foreground/5 text-[9px] font-black uppercase tracking-widest rounded-lg opacity-60">
                                    +{venue.amenities.length - 3}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-foreground/5 mt-auto flex items-center justify-between">
                        <div className="space-y-0.5">
                            <p className="text-[8px] uppercase font-black text-muted-foreground tracking-widest">Starting at</p>
                            <p className="text-xl font-black text-foreground italic flex items-baseline gap-1">
                                ₹{venue.price} <span className="text-[10px] text-muted-foreground not-italic font-bold">/hr</span>
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

export default function VenuesDiscoveryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="relative z-10 max-w-[90%] mx-auto py-12 space-y-12">
                {/* Enterprise Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                            <Zap size={14} className="text-neon-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">Verified Quality</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            Elite <span className="gradient-text">Venues</span>
                        </h1>
                        <p className="text-muted-foreground font-medium text-lg lg:text-xl opacity-80 max-w-xl">
                            Find and book the highest quality sports facilities across major cities with instant confirmation.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-foreground/5 p-1.5 rounded-2xl border border-foreground/5">
                            <button className="px-6 py-3 bg-neon-accent text-black rounded-xl flex items-center gap-3 transition-all shadow-xl">
                                <Grid size={16} />
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Grid View</span>
                            </button>
                            <button className="px-6 py-3 text-muted-foreground hover:text-foreground flex items-center gap-3 transition-all">
                                <MapIcon size={16} />
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Map View</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Advanced Search & Multi-Filters */}
                <div className="space-y-6">
                    <div className="w-full glass-card p-2 rounded-2xl flex flex-col lg:flex-row gap-2 border-foreground/5 shadow-2xl">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neon-accent transition-transform group-focus-within:scale-110" size={18} />
                            <input
                                type="text"
                                placeholder="Search by venue name, location or sport..."
                                className="w-full bg-foreground/5 hover:bg-foreground/10 focus:bg-foreground/10 border-transparent focus:border-neon-accent/20 outline-none rounded-xl pl-16 pr-6 py-5 text-sm font-bold transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="px-8 py-5 glass-card bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-xl transition-all">
                                <MapPin size={16} className="text-neon-accent" />
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Mumbai</span>
                                <ChevronDown size={14} className="opacity-40" />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto no-scrollbar">
                        {["Price Range", "Top Rated", "Available Today", "Amenities", "Instant Book"].map((filter, i) => (
                            <button key={i} className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest italic flex items-center gap-3 transition-all whitespace-nowrap">
                                {filter}
                                <ChevronDown size={12} className="opacity-40" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sports Category Selection */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                    {["All Venues", "Cricket", "Football", "Badminton", "Pool", "Tennis", "Basketball", "Golf", "Gym"].map((sport, i) => (
                        <button key={i} className={`px-8 py-3.5 rounded-2xl border text-[10px] font-black uppercase italic tracking-widest transition-all whitespace-nowrap
                            ${i === 0 ? 'bg-neon-accent text-black border-neon-accent shadow-xl' : 'bg-foreground/5 border-transparent text-foreground/40 hover:border-foreground/10 hover:text-foreground'}`}>
                            {sport}
                        </button>
                    ))}
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {venues.map((v) => (
                        <VenueCard key={v.id} venue={v} />
                    ))}
                </div>

                <MainFooter />
            </div>

            {/* Float Decoration */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
        </main>
    );
}
