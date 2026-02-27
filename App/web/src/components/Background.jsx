import React, { useEffect, useRef, useState } from 'react';

const Background = () => {
  const gridRef = useRef(null);
  const gradRef = useRef(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduced(!!mq.matches);
      const handler = (e) => setReduced(!!e.matches);
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
    }
    return undefined;
  }, []); 

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let currentY = 0;
    let targetY = 0;
    const ease = 0.08;
    const onScroll = () => {
      targetY = window.scrollY || 0;
      if (!raf) tick();
    };
    const tick = () => {
      currentY += (targetY - currentY) * ease;
      const y1 = -(currentY * 0.04);
      const y2 = -(currentY * 0.12);
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(0, ${y1}px, 0)`;
      }
      if (gradRef.current) {
        gradRef.current.style.transform = `translate3d(0, ${y2}px, 0)`;
      }
      if (Math.abs(targetY - currentY) > 0.5) {
        raf = window.requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <>
      <div ref={gradRef} className="absolute inset-0 animated-gradient will-change-transform" />
      <div ref={gridRef} className="absolute inset-0 bg-dot-grid opacity-40 will-change-transform" />
    </>
  );
};

export default Background;
