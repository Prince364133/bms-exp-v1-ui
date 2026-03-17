'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const ads = [
    {
        id: 1,
        title: "UP TO 50% OFF",
        subtitle: "On your first turf booking this weekend!",
        badge: "Limited Offer",
        image: "https://images.pexels.com/photos/159515/football-football-player-sport-action-159515.jpeg?auto=compress&cs=tinysrgb&w=1200",
        cta: "Book Now",
        color: "from-neon-accent/20 to-transparent"
    },
    {
        id: 2,
        title: "CRICKET CARNIVAL",
        subtitle: "Join the biggest amateur league in Bengaluru",
        badge: "Tournament",
        image: "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=1200",
        cta: "Register Today",
        color: "from-neon-accent/20 to-transparent"
    },
    {
        id: 3,
        title: "PRO COACHING",
        subtitle: "Learn from national level coaches at top venues",
        badge: "New Launch",
        image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200",
        cta: "View Classes",
        color: "from-neon-accent/20 to-transparent"
    }
];

const AdsSection = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % ads.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="px-4 lg:px-8 py-8">
            <div className="relative w-full aspect-[21/9] lg:aspect-[32/10] rounded-[2rem] overflow-hidden group">
                {/* Slides */}
                {ads.map((ad, i) => (
                    <div
                        key={ad.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                            }`}
                    >
                        {/* Background Image */}
                        <Image
                            src={ad.image}
                            alt={ad.title}
                            fill
                            className="object-cover"
                            priority={i === 0}
                        />

                        {/* Overlays */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${ad.color} via-black/10 to-transparent`}></div>
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-neon-accent text-black text-[10px] font-black uppercase tracking-widest rounded-full italic shadow-lg">
                                    {ad.badge}
                                </span>
                                <div className="h-[1px] w-12 bg-white/30"></div>
                            </div>

                            <div className="space-y-1">
                                <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none drop-shadow-2xl">
                                    {ad.title}
                                </h2>
                                <p className="text-sm lg:text-xl font-bold text-white/80 max-w-md italic tracking-tight">
                                    {ad.subtitle}
                                </p>
                            </div>

                            <button className="w-fit flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white rounded-2xl transition-all group/btn shadow-2xl">
                                <span className="font-black uppercase italic tracking-widest text-sm">{ad.cta}</span>
                                <div className="p-2 bg-neon-accent rounded-full text-black group-hover/btn:translate-x-2 transition-transform">
                                    <ChevronRight size={16} />
                                </div>
                            </button>
                        </div>
                    </div>
                ))}

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {ads.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-neon-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>

                {/* Progress Bar (Timer) */}
                <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-20 overflow-hidden">
                    <div
                        key={index}
                        className="h-full bg-neon-accent animate-progress"
                        style={{ width: '100%' }}
                    ></div>
                </div>
            </div>

            <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s linear forwards;
        }
      `}</style>
        </section>
    );
};

export default AdsSection;
