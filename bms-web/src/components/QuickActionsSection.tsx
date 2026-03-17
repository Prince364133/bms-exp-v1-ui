'use client';

import React from 'react';
import { Store, Ticket, Download, CalendarCheck2 } from 'lucide-react';
import Link from 'next/link';

const actions = [
    {
        icon: Store,
        title: "List Your Venue",
        subtitle: "and earn now!",
        color: "text-neon-accent",
        bgColor: "bg-neon-accent/10",
        href: "/venues"
    },
    {
        icon: Ticket,
        title: "Host Your Game",
        subtitle: "Start hosting now",
        color: "text-neon-accent",
        bgColor: "bg-neon-accent/10",
        href: "/games"
    },
    {
        icon: Download,
        title: "Download the App",
        subtitle: "Android and iOS",
        color: "text-neon-accent",
        bgColor: "bg-neon-accent/10",
        href: "#"
    },
    {
        icon: CalendarCheck2,
        title: "Your Bookings",
        subtitle: "Upcoming & past",
        color: "text-neon-accent",
        bgColor: "bg-neon-accent/10",
        href: "/dashboard"
    }
];

const QuickActionsSection = () => {
    return (
        <section className="px-4 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="glass-card p-2 rounded-[3rem] lg:rounded-full border-foreground/5 shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-foreground/5">
                        {actions.map((action, i) => (
                            <Link href={action.href} key={i} className="flex flex-1">
                                <button
                                    className="flex-1 flex items-center gap-6 p-6 lg:px-10 lg:py-8 group hover:bg-foreground/[0.03] transition-all duration-500 text-left"
                                >
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 border-foreground/5 transition-all duration-500 group-hover:scale-110 group-hover:border-neon-accent/20 shadow-lg ${action.bgColor}`}>
                                        <action.icon size={26} className={`${action.color} transition-transform group-hover:rotate-6`} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <h3 className="text-[13px] font-black text-foreground uppercase italic tracking-tighter leading-none group-hover:text-neon-accent transition-colors">
                                            {action.title}
                                        </h3>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60 tracking-wider">
                                            {action.subtitle}
                                        </p>
                                    </div>
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickActionsSection;
