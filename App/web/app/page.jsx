'use client';

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import CurrentlyBuilding from '../sections/CurrentlyBuilding';
import TechStack from '../sections/TechStack';
import GitHubStats from '../sections/GitHubStats';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import SectionDivider from '../components/SectionDivider';

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), {
    ssr: false,
});
const CustomCursor = dynamic(() => import('../components/CustomCursor'), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <ParticleBackground />
            <CustomCursor />

            <div className="relative z-10">
                <Navbar />

                <main>
                    <Hero />
                    <SectionDivider />
                    <About />
                    <SectionDivider flip />
                    <Skills />
                    <SectionDivider />
                    <Projects />
                    <SectionDivider flip />
                    <CurrentlyBuilding />
                    <SectionDivider />
                    <TechStack />
                    <SectionDivider flip />
                    <GitHubStats />
                    <SectionDivider />
                    <Contact />
                </main>

                <Footer />
            </div>
        </>
    );
}
