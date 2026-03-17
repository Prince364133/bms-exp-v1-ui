'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    Search, HelpCircle, ChevronDown,
    MessageSquare, Phone, Mail,
    Zap, Shield, CreditCard, Users,
    Plus, Minus, Filter
} from 'lucide-react';

const faqCategories = [
    { id: 'bookings', label: 'Bookings & Arenas', icon: <CreditCard size={18} /> },
    { id: 'squads', label: 'Squads & Matches', icon: <Users size={18} /> },
    { id: 'pro', label: 'Coaches & Umpires', icon: <Zap size={18} /> },
    { id: 'account', label: 'Account & Privacy', icon: <Shield size={18} /> }
];

const faqs = [
    {
        category: 'bookings',
        q: "What is the cancellation protocol for arena bookings?",
        a: "Users can cancel bookings up to 4 hours before the scheduled kick-off for a full refund build into their BMS Vault. Cancellations within the 4-hour window may incur a 50% reservation fee depending on the arena's specific policy."
    },
    {
        category: 'bookings',
        q: "How do I access the arena once I arrive?",
        a: "Upon arrival, navigate to your 'Pass Vault' in the profile section. Present your Digital Match Pass (QR Code) at the arena reception for localized verification and entry."
    },
    {
        category: 'squads',
        q: "How does the 'Join Match' entry split work?",
        a: "When you join a public match, the total arena cost is automatically split by the host. Your individual share is displayed upfront. Upon joining, your share is reserved via the mock payment gateway and settled once the match is localized."
    },
    {
        category: 'squads',
        q: "What are Karma Points and how do I earn them?",
        a: "Karma Points are the core of our community trust system. You earn Karma by being punctual for matches, receiving positive ratings from captains, and hosting successful public games. High-Karma athletes get priority access to elite tournaments."
    },
    {
        category: 'pro',
        q: "How can I verify my coaching certification on BMS?",
        a: "Navigate to the 'Professional Onboarding' portal. Upload your certified credentials and match history. Our system conducts a 48-hour audit before granting you the 'Verified Instructor' badge."
    },
    {
        category: 'account',
        q: "Is my broadcast ID visible to everyone?",
        a: "No. You have granular control in your 'Core System' settings. You can choose to be 'Public' (discoverable by all squads) or 'Private' (only visible to those you share your link with)."
    }
];

const FAQItem = ({ faq }: { faq: typeof faqs[0] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`glass-card p-0 rounded-[2rem] border-foreground/5 overflow-hidden transition-all duration-500 hover:border-foreground/10
            ${isOpen ? 'bg-foreground/[0.03] ring-1 ring-neon-accent/20 shadow-2xl' : 'bg-foreground/[0.01]'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-8 flex items-center justify-between text-left outline-none group"
            >
                <h4 className={`text-lg font-black uppercase italic tracking-tighter transition-colors duration-500
                    ${isOpen ? 'text-neon-accent' : 'text-foreground'}`}>
                    {faq.q}
                </h4>
                <div className={`w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center transition-all duration-500
                    ${isOpen ? 'rotate-180 bg-neon-accent text-black' : 'text-muted-foreground group-hover:scale-110'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            <div className={`px-8 transition-all duration-500 ease-in-out overflow-hidden
                ${isOpen ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed uppercase tracking-wide border-t border-foreground/5 pt-6">
                    {faq.a}
                </p>
            </div>
        </div>
    );
};

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState('bookings');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqs = faqs.filter(f =>
        (f.category === activeCategory || searchQuery !== '') &&
        (f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <main className="min-h-screen bg-background text-foreground transition-all duration-500 pb-24">
            <Navbar />

            <div className="max-w-[1000px] mx-auto px-6 pt-12 space-y-16">

                {/* Support Header */}
                <div className="text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-accent/10 rounded-full border border-neon-accent/20">
                        <HelpCircle size={14} className="text-neon-accent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-accent italic">BMS Support Protocol</span>
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none">
                        Support <span className="gradient-text">Hub</span>
                    </h1>

                    <div className="max-w-2xl mx-auto relative group pt-6">
                        <Search className="absolute left-6 top-[calc(50%+12px)] -translate-y-1/2 text-neon-accent transition-transform group-focus-within:scale-110" size={18} />
                        <input
                            type="text"
                            placeholder="SEARCH PROTOCOLS OR QUESTIONS..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-foreground/5 hover:bg-foreground/10 focus:bg-foreground/10 border-foreground/5 focus:border-neon-accent/20 outline-none rounded-[2rem] pl-16 pr-6 py-6 text-[10px] font-black uppercase italic tracking-widest transition-all shadow-xl"
                        />
                    </div>
                </div>

                {/* Category Navigation */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    {faqCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); }}
                            className={`px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500
                                ${activeCategory === cat.id && searchQuery === '' ? 'bg-neon-accent text-black shadow-glow' : 'glass-card border-foreground/5 text-muted-foreground hover:bg-foreground/5'}`}
                        >
                            {cat.icon}
                            <span className="text-[10px] font-black uppercase italic tracking-widest">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* FAQ Feed */}
                <div className="space-y-6">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, i) => (
                            <FAQItem key={i} faq={faq} />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-foreground/[0.02] rounded-[3rem] border border-dashed border-foreground/10">
                            <p className="text-xl font-black uppercase italic tracking-tighter opacity-20">No matching protocols found</p>
                        </div>
                    )}
                </div>

                {/* Still Need Help CTA */}
                <div className="glass-card p-12 rounded-[3.5rem] border-neon-accent/10 bg-gradient-to-br from-neon-accent/5 to-transparent flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
                    <div className="space-y-4 text-center lg:text-left z-10">
                        <h4 className="text-3xl lg:text-5xl font-black uppercase italic tracking-tighter">Still Need <span className="text-neon-accent">Execution?</span></h4>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest leading-loose">Our elite athlete support squad is ready to assist you via dedicated channels.</p>
                    </div>
                    <div className="flex gap-4 z-10">
                        <button className="px-8 py-5 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-[10px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
                            Broadcast DM
                        </button>
                        <button className="px-8 py-5 bg-foreground/10 hover:bg-foreground/20 rounded-2xl font-black uppercase italic tracking-widest text-[10px] transition-all">
                            Enterprise Call
                        </button>
                    </div>
                    <div className="absolute -bottom-10 -right-10 opacity-5"><MessageSquare size={200} className="text-neon-accent" /></div>
                </div>

                <MainFooter />
            </div>

            {/* Ambient Background */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-neon-accent/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>
            </div>
        </main>
    );
}
