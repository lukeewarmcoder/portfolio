/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './sections/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
            },
            colors: {
                neon: {
                    cyan: '#00f0ff',
                    blue: '#0066ff',
                    purple: '#8b5cf6',
                    pink: '#ec4899',
                },
                surface: {
                    50: 'rgba(255, 255, 255, 0.03)',
                    100: 'rgba(255, 255, 255, 0.05)',
                    200: 'rgba(255, 255, 255, 0.08)',
                    300: 'rgba(255, 255, 255, 0.12)',
                },
            },
            animation: {
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
                'border-glow': 'border-glow 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'slide-up': 'slide-up 0.6s ease-out',
                'fade-in': 'fade-in 0.8s ease-out',
                'spin-slow': 'spin 20s linear infinite',
                'marquee': 'marquee 30s linear infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'gradient-shift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'border-glow': {
                    '0%, 100%': { borderColor: 'rgba(0, 240, 255, 0.3)' },
                    '50%': { borderColor: 'rgba(139, 92, 246, 0.6)' },
                },
                'shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'marquee': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            backgroundSize: {
                '200%': '200% 200%',
                '300%': '300% 300%',
            },
        },
    },
    plugins: [],
};
