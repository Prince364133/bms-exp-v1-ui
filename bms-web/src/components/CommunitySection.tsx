'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Share2, ChevronRight } from 'lucide-react';

const posts = [
    {
        id: 1,
        author: "Rahul Sharma",
        avatar: "https://i.pravatar.cc/150?u=11",
        role: "Elite Player",
        sport: "Cricket",
        time: "2 hours ago",
        content: "Just finished an intense session at the New Nallakunta turf! Pitch quality is amazing. Looking for players to join our weekend tournament.",
        image: "https://images.unsplash.com/photo-1510566334573-fb3ff6286dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        likes: 24,
        comments: 8
    },
    {
        id: 2,
        author: "Anjali Nair",
        avatar: "https://i.pravatar.cc/150?u=12",
        role: "Badminton Pro",
        sport: "Badminton",
        time: "5 hours ago",
        content: "Shoutout to Madhav for hosting such a well-organized mixed doubles match today! The energy was incredible. Can't wait for the next one.",
        image: "https://images.unsplash.com/photo-1626225967045-2c36640cdebe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        likes: 42,
        comments: 12
    }
];

const PostCard = ({ post }: { post: typeof posts[0] }) => {
    return (
        <div className="glass-card min-w-[300px] lg:min-w-[380px] p-5 space-y-4 group transition-all duration-500 relative overflow-hidden flex flex-col">
            {/* Post Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neon-accent/20">
                        <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-[11px] font-black text-foreground uppercase italic tracking-tighter">{post.author}</h3>
                            <span className="px-1.5 py-0.5 bg-neon-accent/10 rounded text-[7px] font-black text-neon-accent uppercase tracking-widest">{post.role}</span>
                        </div>
                        <p className="text-[8px] font-bold text-muted-foreground uppercase opacity-60">
                            {post.sport} • {post.time}
                        </p>
                    </div>
                </div>
            </div>

            {/* Post Media */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-foreground/5 bg-foreground/5">
                <img src={post.image} alt="Post content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>

            {/* Post Content */}
            <p className="text-[11px] text-foreground/80 leading-relaxed font-medium line-clamp-2">
                {post.content}
            </p>

            {/* Post Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-foreground/5 mt-auto">
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-neon-accent transition-all">
                        <Heart size={14} />
                        <span className="text-[9px] font-black italic">{post.likes}</span>
                    </button>

                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-neon-accent transition-colors">
                        <MessageCircle size={14} />
                        <span className="text-[9px] font-black italic">{post.comments}</span>
                    </button>
                </div>

                <div className="flex -space-x-1.5">
                    {[1, 2].map((i) => (
                        <div key={i} className="w-5 h-5 rounded-full border border-background overflow-hidden opacity-60">
                            <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="User" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CommunitySection = () => {
    return (
        <section className="px-4 lg:px-8 py-12 space-y-10">
            <div className="flex items-end justify-between border-b border-foreground/5 pb-8">
                <div className="space-y-1">
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                        Community <span className="text-neon-accent">Hub</span>
                    </h2>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest opacity-60">
                        Swipe to see what's happening in the field
                    </p>
                </div>

                <Link href="/community" className="flex items-center gap-2 text-neon-accent font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all">
                    EXPLORE COMMUNITY <ChevronRight size={14} />
                </Link>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}

                {/* Terminal Card: Pull Effect Trigger */}
                <Link
                    href="/community"
                    className="glass-card min-w-[200px] flex flex-col items-center justify-center gap-4 group/explore hover:bg-neon-accent transition-all duration-500 relative"
                >
                    <div className="w-14 h-14 rounded-full border-2 border-neon-accent flex items-center justify-center group-hover/explore:border-black transition-colors">
                        <ChevronRight size={28} className="text-neon-accent group-hover/explore:text-black group-hover/explore:translate-x-1 transition-all" />
                    </div>
                    <div className="text-center space-y-1">
                        <p className="text-[10px] font-black text-foreground uppercase italic tracking-widest group-hover/explore:text-black leading-none">
                            Explore More
                        </p>
                        <p className="text-[8px] font-bold text-muted-foreground uppercase opacity-40 group-hover/explore:text-black/40">
                            Community Feed
                        </p>
                    </div>

                    {/* Decorative Arrow Cluster */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={12} className="text-black/20" />
                        <ChevronRight size={12} className="text-black/40" />
                        <ChevronRight size={12} className="text-black/20" />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default CommunitySection;
