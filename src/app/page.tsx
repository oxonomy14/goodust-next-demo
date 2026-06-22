import LayoutShell from '@/components/LayoutShell/LayoutShell';
import css from './page.module.css';
import Hero from '@/components/Hero/Hero';
import AboutUs from '@/components/AboutUs/AboutUs';
import ContactForm from '@/components/ContactForm/ContactForm';
import Testimonials from '@/components/Testimonials/Testimonials';
import PromoBanner from '@/components/PromoBanner/PromoBanner';
import Services from '@/components/Services/Services';
import Statistics from '@/components/Statistics/Statistics';
import CtaBanner from '@/components/CtaBanner/CtaBanner';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Services',
  description:
    'Reliable residential and commercial cleaning services. Book professional cleaners online with Goodust.',
};

export default function Home() {
  return (
    <LayoutShell>
      <Hero />
      <AboutUs />
      <PromoBanner />
      <Services />
      <Statistics />
      <CtaBanner />
      <WhyChooseUs />
      <ContactForm />
      <Testimonials />
    </LayoutShell>
  );
}
