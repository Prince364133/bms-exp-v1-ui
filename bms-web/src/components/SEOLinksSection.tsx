'use client';

import React from 'react';

const cityLinks = [
    {
        city: "Hyderabad",
        links: ["Cricket in Hyderabad", "Football or Box Cricket in Hyderabad", "Badminton in Hyderabad", "Cricket Nets in Hyderabad", "Swimming in Hyderabad", "Pickleball in Hyderabad"]
    },
    {
        city: "Delhi NCR",
        links: ["Cricket in Delhi NCR", "Football or Box Cricket in Delhi NCR", "Badminton in Delhi NCR", "Cricket Nets in Delhi NCR", "Pickleball in Delhi NCR"]
    }
];

const SEOLinksSection = () => {
    return (
        <section className="px-4 lg:px-8 py-16 space-y-16 bg-background">
            <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-black text-foreground uppercase italic tracking-tighter">
                    Score Big at the <span className="text-neon-accent">Best Sports Venues</span> Near You
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {cityLinks.map((item, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="text-xl lg:text-2xl font-black text-foreground/80 uppercase italic tracking-tight">{item.city}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-3">
                            {item.links.map((link, lIdx) => (
                                <React.Fragment key={lIdx}>
                                    <a
                                        href="#"
                                        className="text-[11px] lg:text-[13px] font-medium text-muted-foreground hover:text-neon-accent transition-colors"
                                    >
                                        {link}
                                    </a>
                                    {lIdx < item.links.length - 1 && (
                                        <span className="text-foreground/10 font-thin">|</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        {idx < cityLinks.length - 1 && (
                            <div className="h-[1px] w-full bg-foreground/5 pt-4"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SEOLinksSection;
