'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    ChevronLeft, Clock, Share2, Heart,
    MessageCircle, Bookmark, Copy,
    Facebook, Twitter, Linkedin,
    ArrowRight, Star, Quote, Check,
    User, Calendar, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function ArticleReaderPage({ params }: { params: { id: string } }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(124);

    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setScrollProgress((currentScroll / scrollHeight) * 100);
            }
        };
        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const toggleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-all duration-500">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-foreground/5">
                <div
                    className="h-full bg-neon-accent shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <Navbar />

            {/* Sticky Interaction Sidebar for Desktop */}
            <div className="hidden lg:flex fixed left-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
                <button
                    onClick={toggleLike}
                    className={`w-14 h-14 rounded-full border border-foreground/5 flex items-center justify-center transition-all group hover:scale-110 active:scale-95
                        ${isLiked ? 'bg-red-500/10 text-red-500' : 'bg-foreground/5 text-muted-foreground hover:text-neon-accent'}`}
                >
                    <Heart size={24} className={isLiked ? 'fill-red-500' : ''} />
                </button>
                <button className="w-14 h-14 rounded-full bg-foreground/5 border border-foreground/5 text-muted-foreground hover:text-neon-accent flex items-center justify-center transition-all group hover:scale-110">
                    <MessageCircle size={24} />
                </button>
                <button className="w-14 h-14 rounded-full bg-foreground/5 border border-foreground/5 text-muted-foreground hover:text-neon-accent flex items-center justify-center transition-all group hover:scale-110">
                    <Share2 size={24} />
                </button>
                <div className="h-20 w-[1px] bg-foreground/10 mx-auto"></div>
                <span className="text-[10px] font-black transform -rotate-90 origin-center text-muted-foreground uppercase tracking-widest italic">Broadcast Control</span>
            </div>

            <div className="max-w-[900px] mx-auto px-6 pt-12 space-y-10">

                {/* Header Section */}
                <div className="space-y-6">
                    <Link href="/blogs" className="group inline-flex items-center gap-2 text-muted-foreground hover:text-neon-accent transition-colors">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest italic">Back to Archive</span>
                    </Link>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-neon-accent/10 border border-neon-accent/20 rounded-lg text-neon-accent text-[9px] font-black uppercase tracking-widest italic">Trending Analysis</span>
                            <span className="text-muted-foreground text-[9px] font-black uppercase tracking-widest opacity-40">Mar 16, 2026 • 6 MIN READ</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.95]">
                            The Evolution of <span className="text-neon-accent">5v5 Football</span>: Why Speed is Overrated.
                        </h1>
                    </div>

                    <div className="flex items-center justify-between py-8 border-y border-foreground/5">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-neon-accent/20 p-0.5">
                                <img src="https://i.pravatar.cc/150?u=rahul" alt="Rahul" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-black uppercase italic tracking-tighter">Rahul Sharma</p>
                                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">Elite Athlete • Lead Contributor</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-5 py-2.5 bg-foreground/5 hover:bg-foreground/10 rounded-xl text-[10px] font-black uppercase italic tracking-widest transition-all">Follow Author</button>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-video rounded-[3rem] overflow-hidden border-2 border-foreground/5 shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80"
                        alt="Article Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Body */}
                <div className="py-10 space-y-12 prose prose-invert prose-xl max-w-none">
                    <p className="text-xl font-medium text-foreground/80 leading-relaxed first-letter:text-7xl first-letter:font-black first-letter:text-neon-accent first-letter:mr-4 first-letter:float-left uppercase tracking-tight">
                        In the fast-paced world of small-sided football, the common misconception is that the fastest team wins. While raw pace is a valuable asset, modern tactical breakdowns show that spatial intelligence and defensive coordination are the true pillars of a championship-winning 5v5 squad.
                    </p>

                    <div className="p-10 glass-card bg-neon-accent/[0.03] border-l-4 border-l-neon-accent rounded-r-3xl space-y-4">
                        <Quote size={40} className="text-neon-accent opacity-40" />
                        <p className="text-2xl font-black italic uppercase tracking-tighter leading-tight">
                            "Speed gets you to the ball, but intelligence determines what you do with it when the space starts to close."
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent">— COACH RAJESH, NATIONAL ACADEMY</p>
                    </div>

                    <h2 className="text-3xl font-black uppercase italic tracking-tighter">The Myth of the Pure Sprinter</h2>
                    <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                        In a traditional 11-a-side match, players have vast expanses of grass to exploit. A high-speed winger can effectively bypass an entire defensive line with a single burst. However, on a 5v5 turf, the pitch is essentially a collection of tight corridors.
                    </p>
                    <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                        Data from over 2,000 matches on the BMS platform suggests that high-Karma squads actually spend 40% less time sprinting than casual groups. Instead, they focus on:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                        {[
                            { title: "Diamond Rotation", desc: "Constant movement to create passing lanes." },
                            { title: "Point Defense", desc: "Neutralizing the oppositions pivot player." },
                            { title: "Trigger Pressing", desc: "Knowing exactly when to close down space." },
                            { title: "Transition Efficiency", desc: "Turning defense into attack in under 3 seconds." }
                        ].map((point, i) => (
                            <div key={i} className="glass-card p-8 rounded-[2rem] border-foreground/5 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-neon-accent/10 flex items-center justify-center text-neon-accent">
                                    <Check size={20} />
                                </div>
                                <h4 className="text-lg font-black uppercase italic tracking-tight">{point.title}</h4>
                                <p className="text-xs font-medium text-muted-foreground uppercase leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-black uppercase italic tracking-tighter">Conclusion: Intelligence over Intensity</h2>
                    <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                        Next time you're on the turf at Greenfield or New Nallakunta, resist the urge to sprint at 100% for the full hour. Conserve your energy for the critical tactical movements. Watch how the game slows down as your awareness speeds up.
                    </p>
                </div>

                {/* Engagement Footer */}
                <div className="pt-20 border-t border-foreground/5 space-y-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-10 glass-card px-10 rounded-[3rem] border-neon-accent/10">
                        <div className="space-y-4 text-center lg:text-left">
                            <h4 className="text-3xl font-black uppercase italic tracking-tighter">Did this improve your <span className="text-neon-accent">IQ?</span></h4>
                            <p className="text-sm font-medium text-muted-foreground uppercase">Share this training protocol with your squad.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={toggleLike} className={`px-8 py-4 rounded-2xl flex items-center gap-3 font-black uppercase italic tracking-widest text-[10px] transition-all
                                   ${isLiked ? 'bg-red-500 text-white shadow-glow-red' : 'bg-foreground/5 hover:bg-foreground/10'}`}>
                                <Heart size={16} className={isLiked ? 'fill-white' : ''} /> {likeCount} Likes
                            </button>
                            <button className="p-4 bg-foreground/5 hover:bg-foreground/10 rounded-2xl transition-all"><Share2 size={18} /></button>
                            <button className="p-4 bg-foreground/5 hover:bg-foreground/10 rounded-2xl transition-all"><Bookmark size={18} /></button>
                        </div>
                    </div>

                    {/* Comments Teaser */}
                    <div className="space-y-8 pb-20">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter">Squad Discussion <span className="text-muted-foreground opacity-40 ml-2">(14)</span></h4>
                            <button className="text-[10px] font-black uppercase text-neon-accent italic border-b border-neon-accent">Post a Comment</button>
                        </div>

                        <div className="space-y-6">
                            {[
                                { user: "Arjun Mehta", comment: "The Diamond Rotation point is spot on. We tried this last Sunday and finally beat the office pro team!", time: "2 hours ago", avatar: "11" },
                                { user: "Priya K.", comment: "Looking for more content on point defense for 7v7. Is it similar?", time: "5 hours ago", avatar: "12" }
                            ].map((c, i) => (
                                <div key={i} className="flex gap-4 p-6 hover:bg-foreground/[0.02] rounded-3xl transition-all border border-transparent hover:border-foreground/5">
                                    <div className="w-10 h-10 rounded-full bg-foreground/5 overflow-hidden border border-neon-accent/10 shrink-0">
                                        <img src={`https://i.pravatar.cc/150?u=${c.avatar}`} alt={c.user} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <p className="text-xs font-black uppercase italic tracking-tighter">{c.user}</p>
                                            <span className="text-[8px] font-bold text-muted-foreground uppercase opacity-40">{c.time}</span>
                                        </div>
                                        <p className="text-[13px] font-medium text-foreground/80 leading-relaxed uppercase tracking-tight">{c.comment}</p>
                                        <div className="flex gap-4 pt-2">
                                            <button className="text-[9px] font-black uppercase text-muted-foreground hover:text-neon-accent italic">Reply</button>
                                            <button className="text-[9px] font-black uppercase text-muted-foreground hover:text-neon-accent italic">Karma +1</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12">
                    <MainFooter />
                </div>
            </div>

            {/* Ambient System Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-neon-accent/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-neon-accent/5 blur-[150px] rounded-full"></div>
            </div>
        </main>
    );
}
