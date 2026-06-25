// app/about-us/page.tsx

import PageHero from '@/components/PageHero/PageHero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

export const metadata = {
  title: 'About Us | Goodust',
  description:
    'Learn more about Goodust Cleaning Services, our mission, values, and commitment to providing professional residential and commercial cleaning solutions.',
  keywords: [
    'about Goodust',
    'cleaning company',
    'professional cleaning',
    'residential cleaning',
    'commercial cleaning',
    'cleaning services',
  ],
};

export default function AboutUsPage() {
  return (
    <LayoutShell>
      <PageHero
        subTitle="# Who We Are"
        title="About Goodust Cleaning Services"
        description="We provide reliable residential and commercial cleaning services, helping homeowners and businesses enjoy cleaner, healthier, and more comfortable spaces every day."
        bgImage="/images/pages/aboutUs.webp"
      />
    </LayoutShell>
  );
}
