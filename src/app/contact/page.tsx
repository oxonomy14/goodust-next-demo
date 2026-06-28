// app/contact/page.tsx

import PageHero from '@/components/PageHero/PageHero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import ContactInformation from '@/components/ContactInformation/ContactInformation';

export const metadata = {
  title: 'Contact Goodust Cleaning Services | Free Quote',
  description:
    'Contact Goodust for reliable residential and commercial cleaning services. Request a free quote, schedule a cleaning, or speak with our friendly support team.',
  keywords: [
    'Goodust contact',
    'cleaning company contact',
    'house cleaning quote',
    'office cleaning services',
    'professional cleaners',
    'book cleaning online',
    'cleaning service near me',
  ],
};

export default function ContactPage() {
  return (
    <LayoutShell>
      <PageHero
        subTitle="# Get in Touch"
        title="Contact Goodust Cleaning Services"
        description="Have questions or need a free cleaning estimate? Our friendly team is here to help. Reach out today, and we'll get back to you as soon as possible."
        bgImage="/images/aboutus/contactBg.webp"
      />
      <ContactInformation />
    </LayoutShell>
  );
}
