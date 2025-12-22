import { Metadata } from 'next';
import Education from '../components/Education';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Education',
  description: 'Firas Mosbehi\'s educational background and qualifications in software engineering, DevOps, and cloud technologies. Academic achievements and relevant certifications.',
  openGraph: {
    title: 'Education - Firas Mosbehi',
    description: 'Educational background and certifications in DevOps and software engineering.',
  },
};

export default function EducationPage() {
  return (
    <PageTransition>
      <Education />
    </PageTransition>
  );
}
