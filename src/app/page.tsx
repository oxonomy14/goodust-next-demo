import LayoutShell from '@/components/LayoutShell/LayoutShell';
import css from './page.module.css';
import Hero from '@/components/Hero/Hero';
import AboutUs from '@/components/AboutUs/AboutUs';

export default function Home() {
  return (
    <LayoutShell>
      <Hero />
      <AboutUs />
    </LayoutShell>
  );
}
