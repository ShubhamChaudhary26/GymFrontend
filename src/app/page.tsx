import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import Checkout from "@/Payment";
import StatsSection from "@/components/home/stats";
// import { AnimatedPinDemo } from "@/components/home/Features";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/Pricing/Price";
import BlogSection from "@/components/Blog/BlogSection";
import FAQSection from "@/components/faq/Faq";
import ContactSection from "@/components/contact/contact";
import LogoLoop from "@/components/home/LogoLoop";
import CircularGallery from "@/components/home/CircularGallery";
import Lightning from '@/components/home/Lightning';
import {AnimatedPinDemo} from "@/components/home/Features";




const techLogos = [
  // Gym Nutrition / Fitness related with company logos
  {
    node: (
      <img
        src="https://imgs.search.brave.com/El-9hhilTBUa5su3OETu6f5iGfXs8LXDb0iOUd-fKx8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZhLzg3/L2IwLzZhODdiMDZl/ZTRmMmM5ZmY3Mzlm/MWE0ZWFhOTAxNzg1/LmpwZw"
        alt="MyProtein"
        className="w-12 h-12"
      />
    ),
    title: "MyProtein",
    href: "/products/myprotein",
  },
  {
    node: (
      <img
        src="https://imgs.search.brave.com/68BXBg_-OmFWW2aC2mWdorN360BT9FwvYV7Yk8h1GjM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivc3BvcnQtbnV0/cml0aW9uLXByb3Rl/aW4tamFyLWZpdG5l/c3MtcHJvdGVpbi1k/dW1iYmVsbC1lbmVy/Z3ktZHJpbmtzLWJv/ZHlidWlsZGluZy1m/b29kLXN1cHBsZW1l/bnRfMTU5MDI1LTk0/NC5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA"
        alt="Optimum Nutrition"
        className="w-12 h-12"
      />
    ),
    title: "Optimum Nutrition",
    href: "/products/optimum-nutrition",
  },
  {
    node: (
      <img
        src="https://imgs.search.brave.com/VJ4DugaO59JrywrWqdWq_MrRlqAEmgxKAsaLD6uBL74/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBjLzlm/Lzc3LzBjOWY3Nzcw/OTMzOTA2MjM2MDVl/NWIwZTcwOTZhODY0/LmpwZw"
        alt="MuscleBlaze"
        className="w-12 h-12"
      />
    ),
    title: "MuscleBlaze",
    href: "/products/muscleblaze",
  },
];


// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default async function HomePage() {
  return (
    <main>
      
{/* 
<div style={{ width: '100%', height: '650px', position: 'relative' }}>
  <Lightning
   
  /> */}
{/* </div> */}
      <Hero />
      <StatsSection />
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <div className="mt-20">

        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={50}
          gap={90}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
          />
          </div>
      </div>
      
      {/* <AnimatedPinDemo  /> */}

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
      
      {/* <Programs /> */}
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
