'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    MapPin, Star, Share2, Heart,
    ShieldCheck, Clock, Users, Zap,
    ArrowRight, Check, Info, Info as HelpCircle,
    Calendar, ChevronLeft, Play, Map as MapIcon
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const venueData = {
    1: {
        name: "Greenfield Sports Arena",
        location: "Andheri West, Mumbai",
        fullAddress: "Plot No. 42, Sector 8, Near Crystal Mall, Andheri West, Mumbai - 400053",
        distance: "2.5 km",
        sport: "Cricket / Football",
        rating: 4.8,
        reviews: 124,
        price: 1200,
        amenities: [
            { icon: <Zap size={18} />, label: "Floodlights" },
            { icon: <Users size={18} />, label: "Changing Rooms" },
            { icon: <ShieldCheck size={18} />, label: "CCTV Security" },
            { icon: <Clock size={18} />, label: "24/7 Access" },
            { icon: <Info size={18} />, label: "Parking" },
            { icon: <Info size={18} />, label: "Drinking Water" }
        ],
        images: [
            "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
        ],
        about: "Experience top-tier sports facilities at Greenfield Sports Arena. Our FIFA-grade turf and professional cricket pithces are designed for both casual players and professional athletes. Located in the heart of Andheri, we offer a seamless booking experience with state-of-the-art amenities including player lounges, showers, and a premium cafe area."
    }
};

export default function VenueDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const idStr = typeof params?.id === 'string' ? params.id : '1';
    const venue = venueData[idStr as unknown as keyof typeof venueData] || venueData[1];

    const [activeImg, setActiveImg] = useState(0);

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="max-w-[90%] mx-auto py-10 space-y-10">
                {/* Immersive Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-[10px] font-black uppercase text-muted-foreground hover:text-neon-accent transition-all tracking-widest"
                        >
                            <ChevronLeft size={16} /> Back to Search
                        </button>
                        <div className="space-y-2">
                            <h1 className="text-4xl lg:text-7xl font-black uppercase italic tracking-tighter">
                                {venue.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2 text-neon-accent">
                                    <Star size={18} className="fill-neon-accent" />
                                    <span className="text-sm font-black italic">{venue.rating}</span>
                                    <span className="text-xs text-muted-foreground font-bold">({venue.reviews} Verified Reviews)</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin size={16} className="text-neon-accent" />
                                    <span className="text-sm font-bold uppercase tracking-tight">{venue.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-4 glass-card rounded-2xl hover:bg-neon-accent hover:text-black transition-all border-foreground/5 shadow-xl">
                            <Heart size={20} />
                        </button>
                        <button className="p-4 glass-card rounded-2xl hover:bg-neon-accent hover:text-black transition-all border-foreground/5 shadow-xl">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>

                {/* Visual Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 relative aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl">
                        <img
                            src={venue.images[activeImg]}
                            className="w-full h-full object-cover"
                            alt="Venue main view"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                            <button className="w-16 h-16 rounded-full bg-neon-accent flex items-center justify-center shadow-2xl">
                                <Play size={24} className="text-black fill-black ml-1" />
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex lg:flex-column gap-4 overflow-x-auto no-scrollbar">
                        {venue.images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveImg(i)}
                                className={`relative w-1/2 lg:w-full aspect-[4/3] rounded-[2rem] overflow-hidden border-2 transition-all shrink-0
                                    ${activeImg === i ? 'border-neon-accent p-1' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <img src={img} className="w-full h-full object-cover rounded-[1.8rem]" alt={`Thumbnail ${i}`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Facility Intelligence */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-l-4 border-neon-accent pl-6">
                                <h3 className="text-2xl font-black uppercase italic tracking-tight">About this Space</h3>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                {venue.about}
                            </p>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-black uppercase italic tracking-tight">Technical Amenities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {venue.amenities.map((a, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 glass-card rounded-2xl border-foreground/5 hover:bg-foreground/5 transition-all">
                                        <div className="text-neon-accent">{a.icon}</div>
                                        <span className="text-[11px] font-black uppercase tracking-widest">{a.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black uppercase italic tracking-tight">How to Reach</h3>
                            <div className="glass-card p-8 rounded-[2.5rem] border-foreground/5 space-y-4">
                                <div className="flex gap-4">
                                    <MapPin className="text-neon-accent shrink-0" size={24} />
                                    <div>
                                        <p className="font-bold text-foreground">{venue.fullAddress}</p>
                                        <p className="text-sm text-neon-accent font-black uppercase italic pt-1 tracking-widest">Get Directions on Maps</p>
                                    </div>
                                </div>
                                <div className="h-64 w-full bg-foreground/5 rounded-3xl border border-foreground/5 relative overflow-hidden">
                                    {/* Map Placeholder UI */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center space-y-2 opacity-40">
                                            <MapIcon size={48} className="mx-auto" />
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em]">Map Engine Loading...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transaction Engine (Booking Bar) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <div className="glass-card p-10 rounded-[2.5rem] border-neon-accent/20 shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-accent/10 blur-[60px] rounded-full"></div>

                                <div className="relative space-y-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Instant Booking Platform</p>
                                        <p className="text-5xl font-black text-foreground italic flex items-baseline gap-2">
                                            ₹{venue.price} <span className="text-base text-muted-foreground not-italic font-bold">/hr</span>
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-4 bg-foreground/5 rounded-2xl border border-foreground/10">
                                            <div className="flex items-center gap-3">
                                                <Calendar size={18} className="text-neon-accent" />
                                                <span className="text-xs font-black uppercase">Select Date</span>
                                            </div>
                                            <span className="text-xs font-bold opacity-60">Today</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-foreground/5 rounded-2xl border border-foreground/10">
                                            <div className="flex items-center gap-3">
                                                <Clock size={18} className="text-neon-accent" />
                                                <span className="text-xs font-black uppercase">Select Slot</span>
                                            </div>
                                            <span className="text-xs font-bold opacity-60">1h onwards</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {["Free Cancellation", "Verified Facilities", "Instant Pass"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-foreground/60">
                                                <Check size={14} className="text-neon-accent" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/venues/${idStr}/book`}>
                                        <button className="w-full py-6 bg-neon-accent text-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm font-black uppercase italic tracking-widest shadow-[0_20px_50px_rgba(57,255,20,0.35)] mt-4 group">
                                            Reserve My Slot
                                            <ArrowRight size={18} className="inline ml-3 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>

                                    <div className="flex items-center justify-center gap-2 pt-2 grayscale opacity-40">
                                        <ShieldCheck size={14} />
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Enterprise Secure Checkout</span>
                                    </div>
                                </div>
                            </div>

                            {/* Help Section */}
                            <div className="glass-card p-6 rounded-2xl flex items-center justify-between border-foreground/5 cursor-pointer hover:bg-foreground/5 transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-neon-accent/10 flex items-center justify-center text-neon-accent">
                                        <HelpCircle size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest">Policy Hub</p>
                                        <p className="text-xs font-bold text-muted-foreground italic">Rules & Refunds</p>
                                    </div>
                                </div>
                                <ArrowRight size={16} className="text-muted-foreground group-hover:translate-x-1 group-hover:text-neon-accent transition-all" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MainFooter />
        </main>
    );
}
