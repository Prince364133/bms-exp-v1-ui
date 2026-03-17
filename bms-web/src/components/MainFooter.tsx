import React from 'react';
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const MainFooter = () => {
    return (
        <footer className="relative mt-20 border-t border-foreground/5 bg-background overflow-hidden">
            {/* Decorative Branding */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <span className="text-[15rem] font-black italic select-none">BMS</span>
            </div>

            <div className="max-w-[90%] mx-auto py-16 space-y-20 relative z-10">
                {/* Intro Pitch */}
                <div className="max-w-4xl space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground uppercase italic tracking-tighter">
                        Why <span className="text-neon-accent">BMS APP</span>?
                    </h2>
                    <p className="text-sm lg:text-base text-muted-foreground font-medium leading-relaxed opacity-80">
                        Find and book sports facilities in your city instantly! Whether you need a cricket ground, a football turf, or a sports academy for your training, Book My Sports App has you covered. Easy booking across all major cities—reserve your spot today!
                    </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Blogs */}
                    <div className="space-y-6">
                        <Link href="/blogs">
                            <h4 className="text-xs font-black text-neon-accent uppercase tracking-widest italic hover:opacity-80 transition-opacity">Blogs</h4>
                        </Link>
                        <ul className="space-y-4">
                            <li><Link href="/blogs/1" className="text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors">Prepare for playing in hot weather</Link></li>
                            <li><Link href="/blogs/2" className="text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors">Best Football Grounds In Hyderabad</Link></li>
                            <li><Link href="/blogs/3" className="text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors">Best Cricket Grounds In Hyderabad</Link></li>
                            <li><Link href="/blogs/4" className="text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors">Cricket Ground with Flood Lights in Hyderabad</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black text-neon-accent uppercase tracking-widest italic">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors">List Your Facility</a></li>
                            <li><a href="#" className="text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors">Coupons & Offers</a></li>
                            <li><Link href="/how-it-works" className="text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors">How BMS APP Works</Link></li>
                            <li><Link href="/faqs" className="text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors">FAQ's</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black text-neon-accent uppercase tracking-widest italic">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-neon-accent mt-0.5 shrink-0" />
                                <span className="text-[13px] text-muted-foreground">Hyderabad, Telangana, India</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-neon-accent mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[11px] uppercase font-black text-foreground/40 leading-none mb-1">Email Support</p>
                                    <a href="mailto:contact@bmsapp.in" className="text-[13px] text-muted-foreground hover:text-neon-accent">contact@bmsapp.in</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-neon-accent mt-0.5 shrink-0" />
                                <a href="#" className="text-[13px] text-muted-foreground hover:text-neon-accent">Have a query? Click here</a>
                            </li>
                        </ul>
                    </div>

                    {/* Download App */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-neon-accent uppercase tracking-widest italic">Download App</h4>
                        <div className="flex flex-col gap-4">
                            <button className="h-14 px-6 bg-black rounded-xl border border-white/10 flex items-center gap-4 group hover:scale-105 transition-all">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-6 w-auto" />
                                <div className="text-left">
                                    <p className="text-[7px] text-white/40 uppercase leading-none">Get it on</p>
                                    <p className="text-[14px] font-black text-white leading-none mt-1">Google Play</p>
                                </div>
                            </button>
                            <button className="h-14 px-6 bg-black rounded-xl border border-white/10 flex items-center gap-4 group hover:scale-105 transition-all">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6 w-auto brightness-0 invert" />
                                <div className="text-left">
                                    <p className="text-[7px] text-white/40 uppercase leading-none">Download on the</p>
                                    <p className="text-[14px] font-black text-white leading-none mt-1">App Store</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social & Legal */}
                <div className="pt-20 border-t border-foreground/5 space-y-12">
                    {/* Socials */}
                    <div className="flex justify-center items-center gap-12">
                        <a href="#" className="text-muted-foreground hover:text-blue-600 transition-all hover:scale-125 duration-500"><Facebook size={24} /></a>
                        <a href="#" className="text-muted-foreground hover:text-blue-500 transition-all hover:scale-125 duration-500"><Linkedin size={24} /></a>
                        <a href="#" className="text-muted-foreground hover:text-pink-500 transition-all hover:scale-125 duration-500"><Instagram size={24} /></a>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        <a href="#" className="text-[11px] font-black uppercase text-foreground/40 hover:text-neon-accent tracking-widest transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[11px] font-black uppercase text-foreground/40 hover:text-neon-accent tracking-widest transition-colors">Terms & Conditions</a>
                        <a href="#" className="text-[11px] font-black uppercase text-foreground/40 hover:text-neon-accent tracking-widest transition-colors">Terms of Use</a>
                    </div>

                    {/* Bottom Credit */}
                    <div className="text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="bg-neon-accent text-black px-2.5 py-1 rounded text-[10px] font-black italic">BMS <span className="font-medium opacity-80 not-italic">APP</span></div>
                        </div>
                        <p className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.3em]">
                            Copyright 2015 - 2026 saavik solutions pvt ltd. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Bubble Placeholder */}
            <div className="fixed bottom-8 Right-8 z-50 p-3 bg-[#25D366] rounded-full shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-all cursor-pointer group">
                <div className="absolute -top-12 -left-32 bg-white text-black text-[10px] font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    Chat with us!
                </div>
                <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.774-.874-2.046-.972-.272-.099-.47-.149-.669.15-.198.299-.768.972-.941 1.171-.173.199-.347.225-.648.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.5-1.785-1.675-2.084-.175-.299-.019-.461.13-.61.135-.133.301-.35.451-.524.151-.174.201-.299.302-.498.101-.199.05-.374-.025-.524-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.774-.726 2.022-1.429.247-.704.247-1.306.173-1.429-.074-.124-.272-.198-.573-.349z" /></svg>
            </div>
        </footer>
    );
};

export default MainFooter;
