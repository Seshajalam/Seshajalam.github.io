'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Resumes from '@/components/Resumes';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false });

export default function Home() {
  return (
    <>
      <Scene />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Resumes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
