'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

const cities = ["Bengaluru", "Mumbai", "Pune", "Delhi", "Hyderabad", "Chennai"];
const categories = [
    "Sports Venues",
    "Cricket Champs (5-12 yrs)",
    "Cricket Coaching (12+ yrs)",
    "Events Near You"
];

const cards = [
    {
        id: 1,
        name: "Greenfield Sports Arena",
        location: "Andheri West, Mumbai",
        distance: "2.5 km",
        sport: "Cricket",
        amenities: ["Floodlights", "Parking", "+2"],
        price: 1200,
        city: "Mumbai",
        offer: "Avail 25% off* on all turf bookings",
        subtext: "Premium football and cricket grounds",
        rating: 4.9,
        images: [
            "https://images.unsplash.com/photo-1540749413346-db03960086c8?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1510566334573-fb3ff6286dde?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        name: "Elevate Sports Hub",
        location: "HSR Layout, Bengaluru",
        distance: "1.8 km",
        sport: "Football",
        amenities: ["Artificial Turf", "Refreshments", "+3"],
        price: 1500,
        city: "Bengaluru",
        offer: "Group Discounts available",
        subtext: "Join the largest sports community",
        rating: 4.8,
        images: [
            "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=800&q=80",
            "https://images.pexels.com/photos/159515/football-football-player-sport-action-159515.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },
    {
        id: 3,
        name: "Power Play Arena",
        location: "Gachibowli, Hyderabad",
        distance: "3.2 km",
        sport: "Multi-Sport",
        amenities: ["Pro Coaching", "Locker Room", "+1"],
        price: 900,
        city: "Hyderabad",
        offer: "Avail 25% off* on all turf bookings",
        subtext: "Premium football and cricket grounds",
        rating: 4.7,
        images: [
            "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 4,
        name: "Velocity Sports Ground",
        location: "Saket, Delhi",
        distance: "4.5 km",
        sport: "Cricket",
        amenities: ["Net Practice", "Cafeteria", "+2"],
        price: 1100,
        city: "Delhi",
        offer: "Weekend Special: Flat Rs. 200 Off",
        subtext: "Best indoor facilities in NCR",
        rating: 4.7,
        images: [
            "https://images.unsplash.com/photo-1541252260730-0442e3e7b089?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1626225967045-2c36640cdebe?auto=format&fit=crop&w=800&q=80"
        ]
    }
];

// Reusable Gallery Component
const CardGallery = ({ images, alt }: { images: string[], alt: string }) => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {images.map((src, i) => (
                <Image
                    key={src}
                    src={src}
                    alt={alt}
                    fill
                    className={`object-cover transition-all duration-1000 group-hover:scale-105 ${i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                    priority={i === 0}
                />
            ))}

            {/* Pagination Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-0.5 rounded-full transition-all duration-500 ${i === index ? 'w-3 bg-neon-accent' : 'w-1 bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

const VenuesSection = () => {
    const [activeCategory, setActiveCategory] = React.useState(categories[0]);
    const [activeCity, setActiveCity] = React.useState("Bengaluru");

    return (
        <section className="px-4 lg:px-8 py-12 space-y-10">
            {/* Header Section */}
            <div className="space-y-8">
                <div className="flex items-end justify-between border-b border-foreground/5 pb-6">
                    <div className="space-y-1">
                        <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                            Top Rated <span className="text-neon-accent">Venues</span>
                        </h2>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-60">
                            The best arenas and turfs in the country
                        </p>
                    </div>

                    <Link href="/venues">
                        <button className="flex items-center gap-2 text-neon-accent font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all opacity-80">
                            View All <ChevronRight size={14} />
                        </button>
                    </Link>
                </div>

                {/* Category Tabs - Updated to Neon */}
                <div className="flex items-center gap-8 border-b border-foreground/5 overflow-x-auto no-scrollbar">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveCategory(cat)}
                            className={`pb-4 text-[10px] lg:text-xs font-black uppercase italic tracking-wider transition-all relative whitespace-nowrap
                                ${activeCategory === cat ? 'text-neon-accent opacity-100' : 'text-foreground/40 hover:opacity-100'}`}
                        >
                            {cat}
                            {activeCategory === cat && (
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-neon-accent rounded-t-full shadow-[0_-4px_12px_rgba(57,255,20,0.3)]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* City Filters */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                    {cities.map((city) => (
                        <button
                            key={city}
                            onClick={() => setActiveCity(city)}
                            className={`px-5 py-1.5 rounded-full border text-[9px] font-black uppercase italic tracking-widest transition-all
                                ${activeCity === city
                                    ? 'bg-neon-accent text-black border-neon-accent shadow-[0_8px_20px_rgba(57,255,20,0.2)]'
                                    : 'bg-foreground/5 border-transparent text-foreground/40 hover:border-foreground/10'}`}
                        >
                            {city}
                        </button>
                    ))}
                </div>
            </div>

            {/* 2-Row Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <Link href={`/venues/${card.id}`} key={card.id} className="group block">
                        <div className="glass-card p-1.5 flex flex-col hover:-translate-y-2 transition-all duration-500 h-full border-foreground/5">
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10"></div>
                                <CardGallery images={card.images} alt={card.name} />

                                {/* Rating Badge */}
                                <div className="absolute top-3 right-3 z-30 flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                                    <Star size={10} className="fill-neon-accent text-neon-accent" />
                                    <span className="text-[10px] font-black text-white italic">{card.rating}</span>
                                </div>

                                <div className="absolute top-3 left-3 z-30 px-2.5 py-1 bg-neon-accent/90 text-black text-[8px] font-black uppercase tracking-widest rounded-md italic shadow-xl">
                                    {card.sport}
                                </div>
                            </div>

                            <div className="p-4 space-y-4 flex-1 flex flex-col">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-black text-foreground uppercase italic tracking-tighter leading-none group-hover:text-neon-accent transition-colors">
                                        {card.name}
                                    </h3>
                                    <div className="flex items-center gap-1.5 opacity-60">
                                        <span className="text-[9px] font-bold text-foreground truncate">{card.location}</span>
                                        <span className="text-neon-accent font-black">•</span>
                                        <span className="text-[9px] font-black text-neon-accent italic whitespace-nowrap">{card.distance}</span>
                                    </div>
                                </div>

                                {/* Tech Stack style Amenities */}
                                <div className="flex flex-wrap gap-1.5">
                                    {card.amenities.map((item, idx) => (
                                        <span key={idx} className="px-2 py-0.5 bg-foreground/5 rounded-md text-[8px] font-black uppercase tracking-tight text-foreground/60 border border-foreground/5">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-foreground/5 mt-auto">
                                    <div>
                                        <p className="text-[7px] uppercase font-black text-muted-foreground tracking-widest leading-none">Price per hour</p>
                                        <p className="text-lg font-black text-foreground italic leading-none pt-1">
                                            ₹{card.price}
                                        </p>
                                    </div>
                                    <div className="px-6 py-2.5 bg-neon-accent text-black text-[9px] font-black uppercase italic tracking-widest rounded-xl transition-all shadow-[0_4px_15px_rgba(57,255,20,0.2)]">
                                        Book Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* See More Terminal Card */}
                <Link href="/venues" className="block">
                    <div className="glass-card p-1.5 flex flex-col group cursor-pointer hover:bg-neon-accent transition-all duration-500 h-full border-foreground/5">
                        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center py-12">
                            <div className="w-14 h-14 rounded-full border-2 border-neon-accent flex items-center justify-center group-hover:bg-black transition-colors duration-500">
                                <ChevronRight size={28} className="text-neon-accent group-hover:translate-x-1 transition-all" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[12px] font-black text-foreground uppercase italic tracking-widest group-hover:text-black">See More</p>
                                <p className="text-[8px] font-bold text-muted-foreground uppercase opacity-50 group-hover:text-black/40">Explore 50+ Venues</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default VenuesSection;
