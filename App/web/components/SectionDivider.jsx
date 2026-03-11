export default function SectionDivider({ flip = false }) {
    return (
        <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
            <svg
                viewBox="0 0 1440 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-12 sm:h-16 md:h-20"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0, 240, 255, 0.1)" />
                        <stop offset="50%" stopColor="rgba(139, 92, 246, 0.15)" />
                        <stop offset="100%" stopColor="rgba(0, 240, 255, 0.1)" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
                    fill="url(#wave-grad)"
                />
                <path
                    d="M0,70 C480,30 960,90 1440,60 L1440,100 L0,100 Z"
                    fill="rgba(3, 7, 18, 0.5)"
                />
            </svg>
        </div>
    );
}
