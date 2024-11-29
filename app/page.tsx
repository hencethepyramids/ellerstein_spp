import dynamic from 'next/dynamic';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const Approach = dynamic(() => import('@/components/Approach'), { ssr: false });
const Clients = dynamic(() => import('@/components/Clients'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bi-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid /> */} 
        <RecentProjects />
        {/* <Clients /> */}
        {/* <Experience /> */}
        {/* <Approach /> */} 
        <Footer />
      </div>
    </main>
  );
}
