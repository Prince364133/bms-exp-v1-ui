'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Krishna",
        city: "Hyderabad",
        quote: "Great app for booking sports venues, very convenient and user-friendly",
        thumbnail: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=800&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
        id: 2,
        name: "Yashwant",
        city: "Hyderabad",
        quote: "Easy filter option, quick booking experience",
        thumbnail: "https://images.unsplash.com/photo-1544717305-273295c27079?w=800&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 3,
        name: "Manas",
        city: "Hyderabad",
        quote: "Using since 2023, pretty good experience all throughout..",
        thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        name: "Eshwar",
        city: "Hyderabad",
        quote: "User friendly App, Good discount and offers",
        thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

export default function TestimonialsSection() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const openVideo = (url: string) => setActiveVideo(url);
    const closeVideo = () => setActiveVideo(null);

    return (
        <section className="px-4 lg:px-8 py-12 space-y-10">
            <div className="flex items-end justify-between border-b border-foreground/5 pb-8">
                <div className="space-y-1">
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                        Video <span className="text-neon-accent">Testimonials</span>
                    </h2>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-60">
                        Hear from our community of athletes and organizers
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((t) => (
                    <div key={t.id} className="space-y-4 group">
                        {/* Video Card */}
                        <div
                            onClick={() => openVideo(t.videoUrl)}
                            className="relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer border border-foreground/5 shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <img
                                src={t.thumbnail}
                                alt={t.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-neon-accent group-hover:border-neon-accent shadow-2xl">
                                    <Play size={20} className="text-white group-hover:text-black fill-current ml-1" />
                                </div>
                            </div>

                            {/* Logo Overlay */}
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                                <span className="text-[8px] font-black text-white uppercase tracking-tighter">BMS</span>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="px-2 space-y-2">
                            <div className="flex items-center gap-2">
                                <h4 className="text-[12px] font-black text-foreground uppercase italic tracking-tighter">{t.name}, {t.city}</h4>
                                <div className="h-[1px] w-4 bg-neon-accent/40"></div>
                            </div>
                            <p className="text-[10px] text-muted-foreground font-medium italic opacity-80 leading-relaxed">
                                "{t.quote}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal Popup */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-500"
                        onClick={closeVideo}
                    ></div>

                    <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(57,255,20,0.1)] animate-in zoom-in-95 duration-500">
                        <button
                            onClick={closeVideo}
                            className="absolute top-4 Right-4 z-10 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-neon-accent hover:text-black transition-all"
                        >
                            <X size={20} />
                        </button>
                        <iframe
                            src={activeVideo + "?autoplay=1"}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
