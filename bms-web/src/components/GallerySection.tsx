'use client';

import React from 'react';

const galleryImages = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/159515/football-football-player-sport-action-159515.jpeg?auto=compress&cs=tinysrgb&w=800",
        className: "col-span-2 row-span-2",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1510566334573-fb3ff6286dde?auto=format&fit=crop&w=800&q=80",
        className: "col-span-1 row-span-1",
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=800",
        className: "col-span-1 row-span-2",
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1541252260730-0442e3e7b089?auto=format&fit=crop&w=800&q=80",
        className: "col-span-1 row-span-1",
    },
    {
        id: 5,
        url: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800",
        className: "col-span-1 row-span-1",
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1526232759583-26f17356ee97?auto=format&fit=crop&w=800&q=80",
        className: "col-span-1 row-span-1",
    }
];

export default function GallerySection() {
    return (
        <section className="px-4 lg:px-8 py-12 space-y-12">
            <div className="text-center space-y-3">
                <h2 className="text-4xl lg:text-5xl font-black text-foreground uppercase italic tracking-tighter">
                    The <span className="text-neon-accent">Gallery</span>
                </h2>
                <p className="text-xs uppercase font-bold text-muted-foreground tracking-[0.2em] opacity-60">
                    Explore our amazing sports venues and facilities
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 lg:gap-6 min-h-[500px] lg:min-h-[700px]">
                {galleryImages.map((image) => (
                    <div
                        key={image.id}
                        className={`group relative overflow-hidden rounded-[2rem] border border-foreground/5 shadow-2xl ${image.className}`}
                    >
                        <img
                            src={image.url}
                            alt="Sports Action"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />

                        {/* Glass Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Corner Accent */}
                        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-neon-accent/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 translate-x-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-neon-accent/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 -translate-x-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                        {/* View Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                            <div className="px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                                <span className="text-[10px] font-black uppercase text-white tracking-widest">Enlarge</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
