'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingCart, Bell, User, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="flex items-center justify-between px-8 py-4 glass-card mx-4 lg:mx-8 mt-4 bg-nav-bg">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-neon-accent rounded-lg flex items-center justify-center font-bold text-black rotate-12 shadow-[0_0_10px_rgba(57,255,20,0.3)]">B</div>
        <span className="text-xl font-bold tracking-tight text-foreground uppercase italic leading-none pt-1">BMS <span className="text-neon-accent">APP</span></span>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors group"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun size={20} className="text-neon-green group-hover:scale-110 transition-transform" /> : <Moon size={20} className="text-foreground group-hover:scale-110 transition-transform" />}
        </button>
        <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-foreground">
          <ShoppingCart size={20} />
        </button>
        <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors relative text-foreground">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-neon-green rounded-full shadow-[0_0_8px_var(--neon-green)]"></span>
        </button>
        <div className="h-6 w-[1px] bg-foreground/10 mx-2"></div>
        <Link href="/profile">
          <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-foreground">
            <User size={20} />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
