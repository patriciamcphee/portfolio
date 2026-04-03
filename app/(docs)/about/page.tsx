import { ExcellenceInPractice } from '../../components/ExcellenceInPractice';

export const metadata = {
  title: 'About',
  description:
    'How two decades at the intersection of technical writing, engineering, and product design shaped a rare practitioner — and a builder.',
};

export default function AboutPage() {
  return (
    <main className="bg-neutral-white dark:bg-neutral-slate-900">
      <ExcellenceInPractice />
    </main>
  );
}
