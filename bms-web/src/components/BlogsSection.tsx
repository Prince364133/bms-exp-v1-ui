'use client';

import React from 'react';
import { Eye, Heart, Share2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const blogs = [
    {
        id: "01",
        title: "Rising Stars: Kishore Jena and Neeraj Chopra - India's Javelin",
        date: "23rd July 2024",
        readTime: "2 mins read",
        views: "1.2k",
        likes: 450,
        image: "https://images.pexels.com/photos/159515/football-football-player-sport-action-159515.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: "02",
        title: "Empowering Innings: The Rise of Women's Cricket Worldwide",
        date: "11th July 2024",
        readTime: "3 mins read",
        views: "890",
        likes: 312,
        image: "https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: "03",
        title: "And that was the Final: Analyzing the Championship Decider",
        date: "20th May 2024",
        readTime: "1 min read",
        views: "2.4k",
        likes: 890,
        image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: "04",
        title: "Cricketing Glory: India's World Cup Journey (1975-2023)",
        date: "17th May 2024",
        readTime: "5 mins read",
        views: "3.1k",
        likes: "1.2k",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
    }
];

const BlogCard = ({ blog }: { blog: typeof blogs[0] }) => {
    return (
        <Link href={`/blogs/${blog.id}`} className="group relative min-w-[280px] lg:min-w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-foreground/5 shadow-2xl transition-all duration-700 hover:-translate-y-2">
            {/* Background Image */}
            <img
                src={blog.image}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-40 transition-opacity"></div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                {/* Top Meta */}
                <div className="flex justify-between items-start">
                    <span className="text-4xl font-black text-white opacity-20 tracking-tighter italic leading-none group-hover:opacity-40 transition-opacity duration-700">
                        {blog.id}
                    </span>
                    <div className="flex flex-col items-end text-[9px] font-black text-white/50 uppercase tracking-widest italic">
                        <span>{blog.date}</span>
                        <span className="text-neon-accent opacity-80">{blog.readTime}</span>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="space-y-4">
                    <h3 className="text-sm lg:text-base font-black text-white uppercase italic tracking-tighter leading-tight line-clamp-3 group-hover:text-neon-accent transition-colors duration-500">
                        {blog.title}
                    </h3>

                    {/* Interaction Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-white/60">
                                <Eye size={12} className="text-neon-accent/60" />
                                <span className="text-[9px] font-bold italic">{blog.views}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-white/60">
                                <Heart size={12} className="group-hover:text-neon-accent transition-colors" />
                                <span className="text-[9px] font-bold italic">{blog.likes}</span>
                            </div>
                        </div>

                        <button className="p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/5 hover:bg-neon-accent hover:text-black transition-all group/share">
                            <Share2 size={12} className="group-hover/share:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Glossy Reflection Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden rounded-[2rem]">
                <div className="absolute top-[-100%] left-[-50%] w-[200%] h-[100%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent rotate-[35deg] group-hover:translate-y-[200%] transition-transform duration-1000 ease-out"></div>
            </div>
        </Link>
    );
};

const BlogsSection = () => {
    return (
        <section className="px-4 lg:px-8 py-16 space-y-10" id="blogs">
            <div className="flex items-end justify-between border-b border-foreground/5 pb-8">
                <div className="space-y-1">
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                        Blogs And <span className="text-neon-accent">Articles</span>
                    </h2>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-60">
                        Insights, stories, and deep dives from the sports world
                    </p>
                </div>

                <Link href="/blogs">
                    <button className="flex items-center gap-2 text-foreground font-black text-[10px] uppercase tracking-widest hover:text-neon-accent transition-all">
                        VIEW ALL <ChevronRight size={14} className="text-neon-accent" />
                    </button>
                </Link>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default BlogsSection;
