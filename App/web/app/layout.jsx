import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata = {
    title: 'Ayushman Dixit — Full-Stack Developer | lukeewarmcoder',
    description:
        'Portfolio of Ayushman Dixit (lukeewarmcoder) — Full-Stack Developer and BTech CS Student. Building clean code and smart solutions with React, Next.js, Python, and modern web technologies.',
    keywords: ['Ayushman Dixit', 'lukeewarmcoder', 'Full-Stack Developer', 'React', 'Next.js', 'Portfolio'],
    authors: [{ name: 'Ayushman Dixit', url: 'https://github.com/lukeewarmcoder' }],
    openGraph: {
        title: 'Ayushman Dixit — Full-Stack Developer',
        description: 'Clean code and smart solutions with React, Next.js, Python, and modern web technologies.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ayushman Dixit — Full-Stack Developer',
        description: 'Clean code and smart solutions with React, Next.js, Python, and modern web technologies.',
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
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
            </head>
            <body className="font-sans antialiased animated-gradient-bg min-h-screen text-slate-200">
                {children}
            </body>
        </html>
    );
}
