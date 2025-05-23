import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import ImageGallery from "@/components/gallery";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <ImageGallery/>
    </main>
  );
}
