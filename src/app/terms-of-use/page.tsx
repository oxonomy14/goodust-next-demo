// app/terms-of-use/page.tsx

import Terms from '@/components/Terms/Terms';

export const metadata = {
  title: 'Terms of Use | Goodust',
  description:
    'Read the terms and conditions governing the use of Goodust cleaning services.',
};

export default function TermsPage() {
  return <Terms />;
}
