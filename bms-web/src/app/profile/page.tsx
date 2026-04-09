'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/MainFooter';
import {
    User, Settings, Shield, Bell,
    CreditCard, Calendar, MapPin, Star,
    Trophy, Users, Zap, Check,
    ChevronRight, LogOut, Camera,
    Mail, Phone, Globe, Lock,
    QrCode, Download, Share2, Info,
    Clock, Award
} from 'lucide-react';
import Link from 'next/link';

type TabType = 'overview' | 'passes' | 'activity' | 'settings';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<TabType>('overview');
    const [isEditing, setIsEditing] = useState(false);

    const stats = [
        { label: "Total Bookings", val: "24", change: "+12%", icon: <Calendar size={20} />, color: "bg-blue-500/10 text-blue-500" },
        { label: "Matches Played", val: "18", icon: <Trophy size={20} />, color: "bg-orange-500/10 text-orange-500" },
        { label: "Health Rating", val: "4.8", change: "+2.5%", icon: <Star size={20} />, color: "bg-yellow-500/10 text-yellow-500" },
        { label: "Arenas Visited", val: "8", icon: <MapPin size={20} />, color: "bg-purple-500/10 text-purple-500" }
    ];

    const activePasses = [
        {
            id: "PASS-78291",
            type: "Match Pass",
            title: "5v5 Sunday Football Rush",
            venue: "Greenfield Sports Arena",
            date: "Mar 22, 2026",
            time: "07:00 PM",
            sport: "Football",
            status: "Active"
        },
        {
            id: "TRN-ACK-992",
            type: "Training Pass",
            title: "Pro Pack (5 Sessions)",
            venue: "BMS Academy Center",
            date: "First Session: Mar 24",
            time: "05:00 PM",
            sport: "Cricket",
            status: "Enrolled"
        }
    ];
    return (
        <main className="min-h-screen bg-background text-foreground transition-all duration-500">
            <Navbar />

            <div className="max-w-[1400px] mx-auto px-6 py-12 lg:mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Sidebar: Profile Card */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="glass-card p-10 rounded-[3.5rem] border-foreground/5 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-6 right-6">
                                <button className="p-3 bg-neon-accent/10 border border-neon-accent/20 rounded-xl text-neon-accent hover:bg-neon-accent hover:text-black transition-all">
                                    <Settings size={18} />
                                </button>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="relative">
                                    <div className="w-40 h-40 rounded-full border-4 border-neon-accent/30 p-2 relative overflow-hidden group-hover:border-neon-accent transition-all duration-500">
                                        <img src="https://i.pravatar.cc/300?u=rahul" alt="Rahul" className="w-full h-full rounded-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                            <Camera size={24} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-neon-accent rounded-xl flex items-center justify-center text-black border-4 border-background shadow-xl">
                                        <Check size={18} />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h2 className="text-3xl font-black uppercase italic tracking-tighter">Rahul Sharma</h2>
                                    <p className="text-[10px] font-black uppercase text-neon-accent tracking-[0.3em] italic">Elite Athlete • BMS Pro</p>
                                </div>

                                <div className="flex gap-2 flex-wrap justify-center">
                                    {["Football", "Cricket", "Tennis"].map((s) => (
                                        <span key={s} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-black uppercase tracking-widest text-muted-foreground">{s}</span>
                                    ))}
                                </div>

                                <div className="w-full pt-6 border-t border-foreground/5 space-y-4">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center text-muted-foreground"><Mail size={18} /></div>
                                        <div>
                                            <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest opacity-40 leading-none mb-1">Email Coordinates</p>
                                            <p className="text-xs font-bold font-sans">rahul.sharma@enterprise.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center text-muted-foreground"><Phone size={18} /></div>
                                        <div>
                                            <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest opacity-40 leading-none mb-1">Mobile Access</p>
                                            <p className="text-xs font-bold font-sans">+91 98765 43210</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full pt-8">
                                    <button className="w-full py-5 bg-foreground/5 hover:bg-red-500/10 hover:text-red-500 border border-foreground/5 hover:border-red-500/20 rounded-2xl text-[10px] font-black uppercase italic tracking-widest flex items-center justify-center gap-3 transition-all outline-none">
                                        <LogOut size={16} />
                                        Broadcast Logout
                                    </button>
                                </div>
                            </div>

                            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-neon-accent/5 blur-[60px] rounded-full"></div>
                        </div>

                        <div className="glass-card p-8 rounded-[2.5rem] border-foreground/5 space-y-6">
                            <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Quick Settings</h3>
                            <div className="space-y-2 text-left">
                                {[
                                    { icon: <Shield size={16} />, label: "Privacy Core", desc: "Manage access controls" },
                                    { icon: <Bell size={16} />, label: "Pulse Alerts", desc: "Notification preference" },
                                    { icon: <Lock size={16} />, label: "Vault Security", desc: "Credentials & Password" }
                                ].map((item, i) => (
                                    <button key={i} className="w-full p-4 hover:bg-foreground/5 rounded-2xl flex items-center justify-between group transition-all">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="text-neon-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase italic leading-none mb-1">{item.label}</p>
                                                <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-widest">{item.desc}</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={14} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Stats & Tabs */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Status Hub */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="glass-card p-6 rounded-3xl border-foreground/5 group hover:border-neon-accent/10 transition-all shadow-xl">
                                    <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-6 shadow-2xl transition-transform group-hover:scale-110`}>
                                        {stat.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-3xl font-black italic">{stat.val}</p>
                                            {stat.change && <span className="text-[9px] font-black text-neon-accent italic">{stat.change}</span>}
                                        </div>
                                        <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Professional Tabs Navigation */}
                        <div className="flex items-center gap-2 p-2 bg-foreground/5 rounded-3xl w-fit">
                            {[
                                { id: 'overview', icon: <Zap size={16} />, label: 'Hub Overview' },
                                { id: 'passes', icon: <QrCode size={16} />, label: 'Pass Vault' },
                                { id: 'activity', icon: <Clock size={16} />, label: 'Pulse Feed' },
                                { id: 'settings', icon: <Settings size={16} />, label: 'Core System' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as TabType)}
                                    className={`px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500
                                        ${activeTab === tab.id ? 'bg-background text-neon-accent shadow-2xl scale-105' : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    {tab.icon}
                                    <span className="text-[10px] font-black uppercase italic tracking-widest">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[500px]">
                            {activeTab === 'overview' && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="glass-card p-10 rounded-[3rem] border-foreground/5 space-y-6">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-xl font-black uppercase italic tracking-tighter">Bio Configuration</h4>
                                                <Award size={20} className="text-neon-accent" />
                                            </div>
                                            <p className="text-sm font-medium text-foreground/70 leading-loose uppercase tracking-wide">
                                                Multi-sport athlete driven by competitive spirit. Currently focused on defensive football tactics and improving tennis serve RPM. BMS verified player since Feb 2026.
                                            </p>
                                            <div className="pt-4 flex gap-4">
                                                <button className="text-[10px] font-black uppercase border-b-2 border-neon-accent text-neon-accent italic">Update Bio</button>
                                                <button className="text-[10px] font-black uppercase text-muted-foreground italic">Sync LinkedIn</button>
                                            </div>
                                        </div>

                                        <div className="glass-card p-10 rounded-[3rem] border-neon-accent/5 bg-gradient-to-br from-neon-accent/[0.03] to-transparent space-y-8 relative overflow-hidden">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <p className="text-[9px] font-black uppercase text-neon-accent tracking-widest italic">Membership Tier</p>
                                                    <h4 className="text-3xl font-black uppercase italic tracking-tight">PREMIUM <span className="text-neon-accent">GOLD</span></h4>
                                                </div>
                                                <div className="w-16 h-16 rounded-full bg-black/40 border-2 border-neon-accent flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                                                    <Zap size={28} className="text-neon-accent fill-neon-accent" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                {["0% Booking Fees", "Priority Court Access", "Elite Match Invitations"].map((benefit, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-neon-accent flex items-center justify-center text-black shadow-glow"><Check size={12} /></div>
                                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{benefit}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-neon-accent/10 blur-[60px] rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="glass-card p-10 rounded-[3.5rem] border-foreground/5">
                                        <div className="flex items-center justify-between mb-8">
                                            <h4 className="text-xl font-black uppercase italic tracking-tighter">Skill Intelligence</h4>
                                            <p className="text-[9px] font-black uppercase text-neon-accent italic">BMS Algorithm Analysis</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                            {[
                                                { sport: "Football", level: "Intermediate", progress: 68, label: "Tactical Execution" },
                                                { sport: "Cricket", level: "Elite", progress: 92, label: "Power Hitting" },
                                                { sport: "Tennis", level: "Beginner", progress: 34, label: "Net Play" }
                                            ].map((skill, i) => (
                                                <div key={i} className="space-y-4">
                                                    <div className="flex justify-between items-end">
                                                        <div>
                                                            <p className="text-[10px] font-black uppercase italic text-neon-accent leading-none mb-1">{skill.sport}</p>
                                                            <p className="text-xs font-bold uppercase tracking-widest">{skill.level}</p>
                                                        </div>
                                                        <p className="text-[9px] font-black italic opacity-40">{skill.progress}%</p>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
                                                        <div className="h-full bg-neon-accent shadow-glow transition-all duration-1000" style={{ width: `${skill.progress}%` }}></div>
                                                    </div>
                                                    <p className="text-[8px] font-medium text-muted-foreground uppercase italic tracking-widest">Focused on: {skill.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'passes' && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-2xl font-black uppercase italic tracking-tighter">Your <span className="text-neon-accent">Pass Vault</span></h4>
                                        <button className="flex items-center gap-2 px-6 py-3 bg-foreground/5 hover:bg-foreground/10 border border-foreground/5 rounded-2xl transition-all">
                                            <Download size={16} className="text-neon-accent" />
                                            <span className="text-[10px] font-black uppercase italic italic tracking-widest">Offline Export</span>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {activePasses.map((pass, i) => (
                                            <div key={i} className="glass-card p-0 rounded-[3rem] border-foreground/5 overflow-hidden flex flex-col group hover:border-neon-accent/20 transition-all shadow-2xl">
                                                <div className="p-8 space-y-6 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <div className="space-y-1">
                                                            <p className="text-[9px] font-black uppercase text-neon-accent tracking-widest leading-none italic">{pass.type}</p>
                                                            <h5 className="text-xl font-black uppercase italic tracking-tight">{pass.title}</h5>
                                                        </div>
                                                        <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-neon-accent group-hover:text-black transition-all">
                                                            <QrCode size={28} />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3 text-muted-foreground">
                                                            <MapPin size={14} className="text-neon-accent" />
                                                            <p className="text-[10px] font-bold uppercase tracking-widest">{pass.venue}</p>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-muted-foreground">
                                                            <Calendar size={14} className="text-neon-accent" />
                                                            <p className="text-[10px] font-bold uppercase tracking-widest">{pass.date} • {pass.time}</p>
                                                        </div>
                                                    </div>

                                                    <div className="pt-4 flex items-center justify-between border-t border-foreground/5">
                                                        <p className="text-[9px] font-black text-muted-foreground italic uppercase tracking-widest">Pass ID: {pass.id}</p>
                                                        <div className="flex items-center gap-2 px-3 py-1 bg-neon-accent/10 border border-neon-accent/20 rounded-lg">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-accent animate-pulse"></div>
                                                            <span className="text-[9px] font-black text-neon-accent uppercase tracking-widest italic">{pass.status}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-foreground/[0.03] p-4 px-8 flex justify-between items-center group-hover:bg-neon-accent/[0.03] transition-colors">
                                                    <button className="flex items-center gap-2 text-[10px] font-black uppercase italic text-muted-foreground hover:text-white transition-colors">
                                                        <Share2 size={14} /> Send Pass
                                                    </button>
                                                    <button className="px-6 py-2.5 bg-black text-white text-[9px] font-black uppercase italic tracking-widest rounded-xl hover:bg-neon-accent hover:text-black transition-all shadow-xl">
                                                        Digital Access
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-8 bg-foreground/5 border border-dashed border-foreground/10 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4">
                                        <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground opacity-40">
                                            <Info size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-lg font-black uppercase italic tracking-tighter opacity-40">History Archived</p>
                                            <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-widest leading-loose">Previous year match passes and receipts have been moved to your enterprise archive.</p>
                                        </div>
                                        <button className="text-[10px] font-black uppercase text-neon-accent border-b border-neon-accent italic mt-2">View Archive Hub</button>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'activity' && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <h4 className="text-2xl font-black uppercase italic tracking-tighter">Your <span className="text-neon-accent">Pulse Feed</span></h4>
                                    <div className="space-y-4">
                                        {[
                                            { type: 'Match', icon: <Trophy size={16} />, label: "Victory vs Team Warriors", date: "2 days ago", points: "+45 Karma" },
                                            { type: 'Review', icon: <Star size={16} />, label: "5-Star rating from Captain Rahul", date: "3 days ago", points: "RATING UP" },
                                            { type: 'Booking', icon: <Calendar size={16} />, label: "Booked Greenfield Arena for Mar 22", date: "5 days ago", points: "CONFIRMED" },
                                            { type: 'Syndication', icon: <Globe size={16} />, label: "Shared your match invite to Community", date: "1 week ago", points: "BROADCAST" }
                                        ].map((item, i) => (
                                            <div key={i} className="glass-card p-6 rounded-2xl border-foreground/5 hover:border-foreground/10 flex items-center justify-between group transition-all">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-muted-foreground group-hover:bg-neon-accent/10 group-hover:text-neon-accent transition-all duration-500">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-black uppercase italic tracking-tighter leading-none mb-1">{item.label}</p>
                                                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{item.type} • {item.date}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] font-black uppercase text-neon-accent italic tracking-widest">{item.points}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'settings' && (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-8">
                                            <div className="space-y-1">
                                                <h5 className="text-xl font-black uppercase italic tracking-tighter">System Access</h5>
                                                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest opacity-60">Control your digital footprint</p>
                                            </div>

                                            <div className="space-y-6">
                                                {[
                                                    { label: "Profile Visibility", desc: "Make your athlete profile discoverable", toggle: true },
                                                    { label: "Pulse Notifications", desc: "Match reminders and squad requests", toggle: true },
                                                    { label: "Data Syndication", desc: "Sync matches to Community automatically", toggle: false },
                                                    { label: "Enterprise Security", desc: "2-Factor Authentication protocols", toggle: false }
                                                ].map((setting, i) => (
                                                    <div key={i} className="flex items-center justify-between">
                                                        <div className="space-y-1">
                                                            <p className="text-xs font-black uppercase italic tracking-tighter">{setting.label}</p>
                                                            <p className="text-[8px] font-medium text-muted-foreground uppercase tracking-widest">{setting.desc}</p>
                                                        </div>
                                                        <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-500 cursor-pointer ${setting.toggle ? 'bg-neon-accent' : 'bg-foreground/10'}`}>
                                                            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-500 ${setting.toggle ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-1">
                                                <h5 className="text-xl font-black uppercase italic tracking-tighter">Vault Management</h5>
                                                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest opacity-60">Reset credentials and security keys</p>
                                            </div>

                                            <div className="glass-card p-8 rounded-[2.5rem] border-red-500/10 bg-red-500/[0.02] space-y-6">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase text-red-500 tracking-widest italic">Hazard Protocol</p>
                                                    <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-widest leading-loose">Warning: The following actions are destructive and cannot be synchronized back.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <button className="w-full py-4 bg-foreground/5 hover:bg-foreground/10 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">Forgot All Access Keys</button>
                                                    <button className="w-full py-4 bg-red-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-2xl transition-all">Deactivate Broadcast ID</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                <div className="pt-24">
                    <MainFooter />
                </div>
            </div>

            {/* Ambient System Background */}
            <div className="fixed top-0 left-[20%] w-[800px] h-[800px] bg-neon-accent/5 blur-[150px] rounded-full pointer-events-none opacity-50"></div>
            <div className="fixed bottom-0 right-[10%] w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none opacity-30"></div>
        </main>
    );
}
