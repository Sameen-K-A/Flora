import Navbar from '@/components/others/Navbar';
import { Outlet } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function GeneralLayout() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.1,
    });
  }, []);

  return (
    <div className="container mx-auto h-[100dvh] p-4 flex flex-col">
      <Navbar />

      <div 
        ref={contentRef}
        className='flex-1 rounded-xl bg-background shadow-2xl/5 p-4'
      >
        <Outlet />
      </div>  
    </div>
  );
}