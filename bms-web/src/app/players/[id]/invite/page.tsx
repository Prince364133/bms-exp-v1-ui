'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import {
    ChevronLeft, ArrowRight, Check,
    Calendar, MapPin, Zap, UserCircle2,
    CheckCircle2, Trophy, Clock, Search
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const steps = ["Select Game", "Timing & Venue", "Confirm Invite"];

const hostedGames = [
    { id: 1, title: "Sunday Football 5v5", date: "Mar 22", venue: "Greenfield Arena" },
    { id: 2, title: "Cricket T-10 Knockout", date: "Mar 28", venue: "Upper Ground" },
    { id: 3, title: "Badminton Weekend", date: "Mar 21", venue: "Club House" }
];

export default function PlayerInvitePage() {
    const params = useParams();
    const router = useRouter();
    const id = typeof params?.id === 'string' ? params.id : '1';

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedGame, setSelectedGame] = useState<number | null>(null);
    const [inviteType, setInviteType] = useState<'existing' | 'new'>('existing');

    const [isSent, setIsSent] = useState(false);

    const handleSend = () => {
        setIsSent(true);
    };

    if (isSent) {
        return (
            <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
                <Navbar />
                <div className="max-w-2xl mx-auto py-24 px-6 text-center space-y-10 animate-in zoom-in-95 duration-700">
                    <div className="space-y-4">
                        <div className="w-24 h-24 bg-neon-accent rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(57,255,20,0.4)]">
                            <Check size={48} className="text-black" />
                        </div>
                        <h1 className="text-5xl font-black uppercase italic tracking-tighter">Invite <span className="text-neon-accent">Sent!</span></h1>
                        <p className="text-muted-foreground font-medium text-lg uppercase tracking-widest">Awaiting Arjuns's confirmation</p>
                    </div>

                    <div className="glass-card p-10 rounded-[3rem] border-neon-accent/20 shadow-2xl relative overflow-hidden text-left space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full border-2 border-neon-accent/30 p-1">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" className="w-full h-full rounded-full object-cover" alt="Arjun" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-neon-accent tracking-widest leading-none">Connection Request</p>
                                <p className="text-xl font-black uppercase italic tracking-tight">Arjun Mehta</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 space-y-4 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                            <div className="flex justify-between">
                                <span>Game Mode</span>
                                <span className="text-foreground italic">{inviteType === 'existing' ? 'Join Existing Match' : 'Propose New Match'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Venue Status</span>
                                <span className="text-foreground italic">Confirmed</span>
                            </div>
                        </div>

                        <p className="text-[9px] font-black uppercase text-muted-foreground text-center tracking-[0.2em] pt-4 opacity-40">The invitations will expire in 24 hours if not accepted</p>
                    </div>

                    <div className="pt-8">
                        <Link href="/players">
                            <button className="px-10 py-5 bg-neon-accent text-black rounded-2xl font-black uppercase italic tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Return to Discovery Hub
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            <div className="max-w-4xl mx-auto py-12 px-6 space-y-12">
                {/* Horizontal Progress */}
                <div className="flex items-center justify-between relative px-10">
                    <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-0.5 bg-foreground/10 z-0"></div>
                    {steps.map((s, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-2
                                ${currentStep > i + 1 ? 'bg-neon-accent border-neon-accent text-black shadow-lg' :
                                    currentStep === i + 1 ? 'bg-background border-neon-accent text-neon-accent shadow-glow scale-110' :
                                        'bg-background border-foreground/10 text-muted-foreground opacity-40'}`}>
                                {currentStep > i + 1 ? <Check size={20} /> : <span className="text-xs font-black">{i + 1}</span>}
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-widest transition-opacity
                                ${currentStep === i + 1 ? 'opacity-100 text-neon-accent' : 'opacity-40'}`}>
                                {s}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="glass-card p-12 rounded-[3.5rem] border-foreground/5 shadow-3xl bg-gradient-to-br from-white/[0.02] to-transparent min-h-[500px] flex flex-col">

                    {currentStep === 1 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Invitation <span className="text-neon-accent">Type</span></h2>
                                <p className="text-muted-foreground font-medium">How would you like to connect with Arjun?</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    onClick={() => setInviteType('existing')}
                                    className={`p-10 rounded-[2.5rem] border-2 text-left transition-all group space-y-4
                                        ${inviteType === 'existing' ? 'bg-neon-accent/10 border-neon-accent shadow-2xl scale-[1.02]' :
                                            'bg-foreground/5 border-transparent hover:border-foreground/10'}`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors
                                        ${inviteType === 'existing' ? 'bg-neon-accent text-black' : 'bg-foreground/5 text-muted-foreground group-hover:text-neon-accent'}`}>
                                        <Trophy size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className={`font-black uppercase italic tracking-widest text-sm ${inviteType === 'existing' ? 'text-neon-accent' : ''}`}>Your Hosted Games</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60 tracking-wider">Invite Arjun to join a game you're hosting</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => setInviteType('new')}
                                    className={`p-10 rounded-[2.5rem] border-2 text-left transition-all group space-y-4
                                        ${inviteType === 'new' ? 'bg-neon-accent/10 border-neon-accent shadow-2xl scale-[1.02]' :
                                            'bg-foreground/5 border-transparent hover:border-foreground/10'}`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors
                                        ${inviteType === 'new' ? 'bg-neon-accent text-black' : 'bg-foreground/5 text-muted-foreground group-hover:text-neon-accent'}`}>
                                        <Zap size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className={`font-black uppercase italic tracking-widest text-sm ${inviteType === 'new' ? 'text-neon-accent' : ''}`}>New Challenge</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60 tracking-wider">Propose a new match-up and choose venue</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">
                                    {inviteType === 'existing' ? 'Match' : 'Proposal'} <span className="text-neon-accent">Selection</span>
                                </h2>
                                <p className="text-muted-foreground font-medium">Select the details for this connection.</p>
                            </div>

                            {inviteType === 'existing' ? (
                                <div className="space-y-3">
                                    {hostedGames.map((game) => (
                                        <button
                                            key={game.id}
                                            onClick={() => setSelectedGame(game.id)}
                                            className={`w-full p-6 rounded-2xl border-2 text-left transition-all flex items-center justify-between
                                                ${selectedGame === game.id ? 'bg-neon-accent/10 border-neon-accent shadow-lg' :
                                                    'bg-foreground/5 border-transparent hover:border-foreground/10'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-neon-accent">
                                                    <Trophy size={18} />
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-xs font-black uppercase tracking-tight">{game.title}</p>
                                                    <p className="text-[9px] font-bold text-muted-foreground uppercase">{game.venue} • {game.date}</p>
                                                </div>
                                            </div>
                                            {selectedGame === game.id && <CheckCircle2 size={18} className="text-neon-accent" />}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic ml-1">Proposed Sport</label>
                                            <div className="px-6 py-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-xs font-black text-neon-accent italic">
                                                FOOTBALL
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic ml-1">Proposed Date</label>
                                            <div className="px-6 py-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-xs font-black text-white italic">
                                                SELECT DATE
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 relative">
                                        <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest italic ml-1">Venue Selection</label>
                                        <div className="relative">
                                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neon-accent/60" size={16} />
                                            <input type="text" placeholder="Search premium arenas near Andheri..." className="w-full bg-foreground/5 border-2 border-transparent focus:border-neon-accent/20 outline-none rounded-2xl pl-16 pr-6 py-5 text-xs font-bold uppercase tracking-tight" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="space-y-3">
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Review <span className="text-neon-accent">Invite</span></h2>
                                <p className="text-muted-foreground font-medium">Almost there. Finalize your invitation to Arjun.</p>
                            </div>

                            <div className="p-10 glass-card border-foreground/5 rounded-[3rem] space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-accent/10 blur-[60px] rounded-full"></div>
                                <div className="flex items-center gap-6 relative">
                                    <div className="w-16 h-16 rounded-full border-2 border-neon-accent shadow-glow overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Arjun" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-2xl font-black uppercase italic tracking-tight">Arjun Mehta</p>
                                        <p className="text-[9px] font-black uppercase text-neon-accent tracking-widest">Professional Athlethe</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-10 pt-8 border-t border-white/5">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Invite Type</p>
                                        <p className="text-xs font-black uppercase italic tracking-widest">{inviteType === 'existing' ? 'Hosted Match' : 'Direct Challenge'}</p>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Response Expected</p>
                                        <p className="text-xs font-black text-neon-accent uppercase italic tracking-widest">BY TOMORROW</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-auto pt-12 flex gap-4">
                        {currentStep > 1 && (
                            <button
                                onClick={() => setCurrentStep(prev => prev - 1)}
                                className="px-10 py-6 glass-card rounded-2xl text-[11px] font-black uppercase italic tracking-widest border-foreground/5 hover:bg-foreground/5 transition-all"
                            >
                                Back
                            </button>
                        )}
                        <button
                            disabled={currentStep === 2 && inviteType === 'existing' && !selectedGame}
                            onClick={() => {
                                if (currentStep === 3) {
                                    handleSend();
                                } else {
                                    setCurrentStep(prev => prev + 1);
                                }
                            }}
                            className={`flex-1 py-6 rounded-2xl flex items-center justify-center gap-3 text-sm font-black uppercase italic tracking-widest transition-all
                                ${currentStep === 2 && inviteType === 'existing' && !selectedGame ? 'bg-foreground/10 text-muted-foreground cursor-not-allowed opacity-50' :
                                    'bg-neon-accent text-black shadow-glow hover:scale-[1.02] active:scale-[0.98]'}`}
                        >
                            {currentStep === 3 ? "Send Invitation Now" : "Continue"}
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <Link href={`/players/${id}`} className="block text-center text-muted-foreground hover:text-neon-accent transition-colors">
                    <button className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 hover:opacity-100">
                        Cancel Invitation Flow
                    </button>
                </Link>
            </div>
        </main>
    );
}
