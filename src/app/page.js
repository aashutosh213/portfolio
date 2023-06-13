'use client';
import dynamic from 'next/dynamic';
import Header from '@/components/Header'
import CarouselComp from '@/components/CarouselComp';
import WorkXP from '@/components/WorkXP';
import Projects from '@/components/Projects';
import Info from '@/components/Info';
import Image from 'next/image';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ScrollUp from '@/components/scrollUp';
const DynamicComponent = dynamic(() => import('../components/About'), {
  ssr: false, // Render this component on the client-side only
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-[#f1f4f5] text-[#383d41]">
      <Header />
      <ScrollUp/>
      <DynamicComponent />
      <CarouselComp/>
      <WorkXP/>
      <Projects />
      <Info />
      <Contact/>
      <Footer/>
    </main>
  )
}
