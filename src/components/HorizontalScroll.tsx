import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.section');
      
      const tl = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + (scrollRef.current?.offsetWidth || 0),
        },
      });

      return () => {
        tl.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div
        ref={scrollRef}
        className="flex  h-full"
        style={{ width: `${100 * React.Children.count(children)}vw` }}
      >
        {children}
      </div>
    </div>
  );
}