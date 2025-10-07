import Navbar from '@/components/others/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/others/Footer';

export default function GeneralLayout() {
  return (
    <div className="container mx-auto min-h-[100dvh] pt-4 flex flex-col space-y-4">
      <Navbar />

      <div className='flex-1 rounded-t-2xl min-h-[90dvh] bg-background border-t overflow-x-hidden scrollbar-none'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}