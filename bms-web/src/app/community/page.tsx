'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import {
    Search,
    MoreHorizontal,
    Video,
    ImageIcon,
    Smile,
    MapPin,
    Heart,
    MessageCircle,
    Share2,
    Send
} from 'lucide-react';
import Link from 'next/link';

const posts = [
    {
        id: 0,
        author: "System Broadcast",
        avatar: "https://i.pravatar.cc/150?u=admin",
        time: "Active Now",
        content: "🚨 NEW MATCH HOSTED: 5v5 Sunday Football Rush at Greenfield Sports Arena. 3 spots remaining! Entry split: ₹300/head. Skill: Intermediate. Join now to lock your spot in the squad! ⚽⚡",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
        likes: 24,
        comments: 8,
        isMatchInvite: true
    },
    {
        id: 1,
        author: "Rahul Sharma",
        avatar: "https://i.pravatar.cc/150?u=11",
        time: "Just now",
        content: "Anyone up for a Football 5v5 today at New Nallakunta? We are short of 2 players. Kick-off at 6 PM. High intensity game, intermediate level preferred. Comment below to join the squad! ⚽🔥",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
        likes: 12,
        comments: 4
    },
    {
        id: 2,
        author: "Anjali Nair",
        avatar: "https://i.pravatar.cc/150?u=12",
        time: "2 hours ago",
        content: "Throwback to last weekend's Badminton championship at Vishwamanya. The energy was electric! Huge shoutout to the finalists. If you're looking for professional drills, Sania Mirza's classes are starting this week. Don't miss out! 🏸✨",
        image: "https://images.unsplash.com/photo-1626225967045-2c36640cdebe?w=800&q=80",
        likes: 89,
        comments: 15
    },
    {
        id: 3,
        author: "Vikram Rathour",
        avatar: "https://i.pravatar.cc/150?u=22",
        time: "5 hours ago",
        content: "Mastering the pull shot today with my morning batch. Cricket is 80% mental and 20% skill. Remember to keep your eyes on the ball till the very last millisecond. New coaching slots opening for the Mumbai center soon. #CricketCoach #BMSPro",
        image: "https://images.unsplash.com/photo-1531415080293-233414a5ef35?w=800&q=80",
        likes: 156,
        comments: 24
    },
    {
        id: 4,
        author: "Sai Kiran",
        avatar: "https://i.pravatar.cc/150?u=33",
        time: "Yesterday",
        content: "Looking for an Umpire for our inter-corporate Tennis tournament this Sunday in Pune. Professional certification preferred but not mandatory. We need someone who knows the 'Elite' rules. DM for pay details! 🎾🏆",
        image: "https://images.unsplash.com/photo-1595435066359-e1a3bb8b9ea1?w=800&q=80",
        likes: 34,
        comments: 10
    }
];

export default function CommunityPage() {
    return (
        <main className="min-h-screen bg-background pb-12">
            <Navbar />

            <div className="max-w-[700px] mx-auto px-4 mt-28 space-y-8">

                {/* Search Header */}
                <div className="space-y-4">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-neon-accent transition-colors">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="SEARCH SQUADS, COACHES, OR POSTS..."
                            className="w-full bg-foreground/5 border border-foreground/5 focus:border-neon-accent/30 rounded-2xl py-4 pl-14 pr-6 text-[11px] font-black uppercase italic tracking-widest text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:bg-foreground/10 focus:shadow-[0_0_30px_rgba(57,255,20,0.05)]"
                        />
                    </div>
                </div>

                {/* Create Post */}
                <div className="glass-card p-6 space-y-5 border-neon-accent/5">
                    <div className="flex gap-4">
                        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-neon-accent/20">
                            <img src="https://i.pravatar.cc/150?u=99" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <textarea
                                placeholder="SHARE YOUR LATEST MATCH STORY OR FIND A SQUAD..."
                                className="w-full bg-transparent border-none text-[13px] font-medium text-foreground placeholder:text-muted-foreground/30 resize-none outline-none min-h-[60px] pt-2 uppercase"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-foreground/5">
                        <div className="flex items-center gap-1">
                            {[
                                { icon: ImageIcon, label: "Photo / Video", color: "text-neon-accent" },
                                { icon: Smile, label: "Activity", color: "text-neon-accent" }
                            ].map((action, i) => (
                                <button key={i} className="flex items-center gap-2.5 px-4 py-2 hover:bg-foreground/5 rounded-xl transition-all group">
                                    <action.icon size={16} className={`${action.color} group-hover:scale-110 transition-transform`} />
                                    <span className="text-[9px] font-black text-muted-foreground uppercase opacity-60 group-hover:opacity-100 tracking-wider font-sans">{action.label}</span>
                                </button>
                            ))}
                        </div>
                        <button className="bg-neon-accent text-black p-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_5px_15px_rgba(57,255,20,0.2)]">
                            <Send size={18} />
                        </button>
                    </div>
                </div>

                {/* Feed Divider */}
                <div className="flex items-center gap-4 py-2">
                    <div className="h-[1px] flex-1 bg-foreground/5"></div>
                    <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-40">Recent Activity</span>
                    <div className="h-[1px] flex-1 bg-foreground/5"></div>
                </div>

                {/* Posts Feed */}
                <div className="space-y-8 pb-20">
                    {posts.map((post) => (
                        <div key={post.id} className="glass-card p-0 group overflow-hidden border-neon-accent/5">
                            {/* Author Info */}
                            <div className="p-6 pb-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border border-neon-accent/20 overflow-hidden group-hover:border-neon-accent/50 transition-colors">
                                        <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-[12px] font-black text-foreground uppercase italic tracking-tighter">{post.author}</h4>
                                        <p className="text-[9px] font-bold text-muted-foreground uppercase opacity-60">{post.time}</p>
                                    </div>
                                </div>
                                <button className="text-muted-foreground p-2 hover:bg-foreground/5 rounded-full transition-colors">
                                    <MoreHorizontal size={18} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="px-6 pb-4">
                                <p className="text-[13px] text-foreground/85 leading-relaxed font-medium">
                                    {post.content}
                                </p>
                            </div>

                            {/* Media */}
                            <div className="relative aspect-[16/10] bg-foreground/5 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt="Post"
                                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Interaction Bar */}
                            <div className="p-4 px-6 flex items-center justify-between border-t border-foreground/5 bg-foreground/[0.02]">
                                <div className="flex gap-8">
                                    <button className="flex items-center gap-2.5 text-muted-foreground hover:text-neon-accent transition-all group/action">
                                        <Heart size={20} className="group-hover/action:fill-neon-accent group-hover/action:scale-110 transition-all" />
                                        <span className="text-[11px] font-black italic tracking-tighter">{post.likes}</span>
                                    </button>
                                    <button className="flex items-center gap-2.5 text-muted-foreground hover:text-neon-accent transition-all group/action">
                                        <MessageCircle size={20} className="group-hover/action:scale-110 transition-all" />
                                        <span className="text-[11px] font-black italic tracking-tighter">{post.comments}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-muted-foreground hover:text-neon-accent transition-all">
                                        <Share2 size={20} className="hover:scale-110 transition-all" />
                                    </button>
                                </div>

                                {(post as any).isMatchInvite && (
                                    <Link href={`/games/1`}>
                                        <button className="px-6 py-2.5 bg-neon-accent text-black rounded-xl text-[10px] font-black uppercase italic tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
                                            Join Match
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-neon-accent/5 blur-[120px] rounded-full pointer-events-none -mr-48 -mb-48 opacity-40"></div>
        </main>
    );
}
