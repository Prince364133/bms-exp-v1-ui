'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Search, Filter, ChevronRight, Clock,
    Share2, Bookmark, Heart, TrendingUp,
    Zap, Trophy, Target, Newspaper,
    ArrowRight, MessageCircle, Eye
} from 'lucide-react';
import Link from 'next/link';

const categories = ["All Stories", "Matches", "Training", "Community", "Pro Tips", "Nutrition"];

const articles = [
    {
        id: 1,
        title: "The Evolution of 5v5 Football: Why Speed is Overrated",
        category: "Matches",
        author: "Rahul Sharma",
        date: "Mar 16, 2026",
        readTime: "6 min read",
        views: "1.2k",
        likes: 124,
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
        excerpt: "Discover why tactical positioning and spatial awareness are becoming more critical than raw sprinting power in modern small-sided games."
    },
    {
        id: 2,
        title: "Mastering the Power Sweep: Insights from National Coaches",
        category: "Pro Tips",
        author: "Coach Rajesh",
        date: "Mar 15, 2026",
        readTime: "8 min read",
        views: "2.4k",
        likes: 342,
        image: "https://images.unsplash.com/photo-1531415080293-233414a5ef35?auto=format&fit=crop&w=800&q=80",
        excerpt: "A deep dive into the biomechanics of the sweep shot and how to maintain balance against quality spin bowling."
    },
    {
        id: 3,
        title: "Mental Resilience: Preparing for High-Stakes Tournaments",
        category: "Training",
        author: "Sonia Rao",
        date: "Mar 14, 2026",
        readTime: "5 min read",
        views: "890",
        likes: 215,
        image: "https://images.unsplash.com/photo-1595435066359-e1a3bb8b9ea1?auto=format&fit=crop&w=800&q=80",
        excerpt: "Elite athletes share their routines for staying focused under pressure and recovering from mid-match errors."
    },
    {
        id: 4,
        title: "The Ultimate Recovery Guide: Post-Match Nutrition",
        category: "Nutrition",
        author: "Dr. Amit Gupta",
        date: "Mar 12, 2026",
        readTime: "10 min read",
        views: "3.1k",
        likes: 567,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        excerpt: "Proper fueling is just as important as the training itself. Learn what to eat in the critical 2-hour window after your game."
    }
];

const BlogCard = ({ article }: { article: typeof articles[0] }) => {
    return (
        <Link href={`/blogs/${article.id}`} className="group">
            <div className="glass-card p-0 rounded-[2.5rem] overflow-hidden border-foreground/5 bg-foreground/[0.01] hover:-translate-y-2 transition-all duration-500 shadow-2xl h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-neon-accent text-black text-[9px] font-black uppercase tracking-widest rounded-xl italic shadow-xl">
                            {article.category}
                        </span>
                    </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[9px] font-black uppercase text-muted-foreground tracking-widest italic opacity-60">
                        <span className="flex items-center gap-2"><Clock size={12} className="text-neon-accent" /> {article.readTime}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                    </div>

                    <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-tight group-hover:text-neon-accent transition-colors flex-1">
                        {article.title}
                    </h3>

                    <p className="text-xs font-medium text-muted-foreground leading-relaxed line-clamp-3 uppercase tracking-wide">
                        {article.excerpt}
                    </p>

                    <div className="pt-6 border-t border-foreground/5 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-neon-accent/10 border border-neon-accent/20 flex items-center justify-center text-neon-accent font-black text-[10px] italic">
                                {article.author[0]}
                            </div>
                            <span className="text-[10px] font-black uppercase italic tracking-widest opacity-80">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-4 opacity-40">
                            <div className="flex items-center gap-1"><Eye size={14} /> <span className="text-[10px] font-bold">{article.views}</span></div>
                            <div className="flex items-center gap-1"><Heart size={14} /> <span className="text-[10px] font-bold">{article.likes}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function BlogsHubPage() {
    const [activeCategory, setActiveCategory] = useState("All Stories");

    return (
        <main className="min-h-screen bg-background text-foreground transition-all duration-500 pb-24">
            <Navbar />

            <div className="max-w-[1400px] mx-auto px-6 space-y-16">

                {/* Enterprise Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                            <Newspaper size={14} className="text-neon-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">BMS Editorial Hub</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none">
                            Editorial <span className="gradient-text">Pulse</span>
                        </h1>
                        <p className="text-muted-foreground font-medium text-xl opacity-80 max-w-2xl">
                            Elite sports analysis, training protocols, and community stories curated for the next generation of athletes.
                        </p>
                    </div>

                    <div className="relative group min-w-[300px]">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neon-accent transition-transform group-focus-within:scale-110" size={18} />
                        <input
                            type="text"
                            placeholder="SEARCH ARTICLES..."
                            className="w-full bg-foreground/5 hover:bg-foreground/10 focus:bg-foreground/10 border-foreground/5 focus:border-neon-accent/20 outline-none rounded-2xl pl-16 pr-6 py-5 text-[10px] font-black uppercase italic tracking-widest transition-all"
                        />
                    </div>
                </div>

                {/* Featured Hero */}
                <Link href="/blogs/1" className="group block">
                    <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden border-2 border-foreground/5 shadow-3xl bg-black">
                        <img
                            src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=1600&q=80"
                            alt="Featured Story"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-neon-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="absolute bottom-12 left-12 right-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                            <div className="space-y-6 max-w-3xl">
                                <div className="flex items-center gap-4">
                                    <span className="px-4 py-2 bg-neon-accent text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl italic">FEATURED STORY</span>
                                    <span className="text-[10px] font-black text-white uppercase italic tracking-widest opacity-60">12 MIN READ • MAR 17</span>
                                </div>
                                <h2 className="text-4xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
                                    Building a <span className="text-neon-accent">Championship</span> Mindset outside the arena.
                                </h2>
                                <p className="text-white/60 font-medium text-lg uppercase tracking-wide leading-relaxed max-w-2xl line-clamp-2">
                                    We sit down with India's top athletes to discuss the psychological breakdown of long-form tournaments and maintaining focus.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-glow-white">
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Category Filter */}
                <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-4 pt-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase italic tracking-widest transition-all duration-500 shrink-0
                                ${activeCategory === cat ? 'bg-neon-accent text-black shadow-glow' : 'glass-card border-foreground/5 text-muted-foreground hover:bg-foreground/5'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map((article) => (
                        <BlogCard key={article.id} article={article} />
                    ))}
                </div>

                {/* Subscription CTA */}
                <div className="glass-card p-16 rounded-[4rem] border-neon-accent/10 bg-gradient-to-br from-neon-accent/5 via-transparent to-transparent text-center space-y-10 relative overflow-hidden">
                    <div className="space-y-4 relative z-10">
                        <h3 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter">Never Miss a <span className="text-neon-accent">Beat</span></h3>
                        <p className="text-muted-foreground font-medium text-lg lg:text-xl uppercase tracking-[0.1em] opacity-60">Join 15,000+ athletes receiving weekly pro insights</p>
                    </div>
                    <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
                        <input
                            type="email"
                            placeholder="YOUR ATHLETE EMAIL..."
                            className="flex-1 bg-foreground/10 border-2 border-transparent focus:border-neon-accent/20 rounded-2xl px-8 py-5 text-[10px] font-black uppercase italic tracking-widest outline-none transition-all"
                        />
                        <button className="px-12 py-5 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
                            Broadcast Subscription
                        </button>
                    </div>

                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-neon-accent/5 blur-[100px] rounded-full"></div>
                    <div className="absolute top-10 left-10 opacity-10"><Target size={120} className="text-neon-accent" /></div>
                </div>

                <MainFooter />
            </div>

            {/* Background Decorative */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-accent/5 blur-[180px] rounded-full pointer-events-none opacity-40"></div>
        </main>
    );
}
