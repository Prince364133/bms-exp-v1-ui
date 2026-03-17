import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VenuesSection from "@/components/VenuesSection";
import GamesSection from "@/components/GamesSection";
import FindPlayersSection from "@/components/FindPlayersSection";
import AdsSection from "@/components/AdsSection";
import TournamentsSection from "@/components/TournamentsSection";
import ProsSection from "@/components/ProsSection";
import CommunitySection from "@/components/CommunitySection";
import QuickActionsSection from "@/components/QuickActionsSection";
import BlogsSection from "@/components/BlogsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import AppPromotionSection from "@/components/AppPromotionSection";
import SEOLinksSection from "@/components/SEOLinksSection";
import MainFooter from "@/components/MainFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-neon-accent selection:text-background">
      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-accent/5 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-100"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00D1FF]/5 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-100"></div>

      <div className="relative z-10 max-w-[90%] mx-auto min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <AdsSection />
        <TournamentsSection />
        <VenuesSection />
        <GamesSection />
        <FindPlayersSection />
        <ProsSection />
        <CommunitySection />
        <QuickActionsSection />
        <BlogsSection />
        <TestimonialsSection />
        <GallerySection />
        <AppPromotionSection />
        <SEOLinksSection />
        <MainFooter />
      </div>
    </main>
  );
}
