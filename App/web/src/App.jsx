import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Background from '@/components/Background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Hero = lazy(() => import('@/pages/Hero'));
const About = lazy(() => import('@/pages/About'));
const Skills = lazy(() => import('@/pages/Skills'));
const Projects = lazy(() => import('@/pages/Projects'));
const Contact = lazy(() => import('@/pages/Contact'));

function App() {
  return (
    <>
      <Helmet>
        <title>Ayushman Dixit - Full-Stack Developer | lukeewarmcoder</title>
        <meta
          name="description"
          content="Portfolio of Ayushman Dixit (lukeewarmcoder) - Full-Stack Developer and BTech CS Student. Building clean code and smart solutions with React, Next.js, Python, and modern web technologies."
        />
        <meta property="og:title" content="Ayushman Dixit - Full-Stack Developer" />
        <meta property="og:description" content="Clean code and smart solutions with React, Next.js, Python, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayushman Dixit - Full-Stack Developer" />
        <meta name="twitter:description" content="Clean code and smart solutions with React, Next.js, Python, and modern web technologies." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ayushman Dixit',
              sameAs: [
                'https://github.com/lukeewarmcoder',
                'https://www.linkedin.com/in/ayushman-dixit-a486512b6',
              ],
            }),
          }}
        />
      </Helmet>

      <div className="min-h-screen text-white relative overflow-hidden">
        <Background />
        <div className="relative z-10">
        <Header />
        <main>
          <Suspense fallback={<div className="p-8 text-slate-400">Loading...</div>}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
