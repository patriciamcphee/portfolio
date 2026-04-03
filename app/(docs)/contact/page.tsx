import { ContactPage } from '../../components/ContactPage';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Patricia McPhee — email, LinkedIn, and other ways to connect.',
};

export default function Contact() {
  return (
    <main className="bg-neutral-white dark:bg-neutral-slate-900">
      <ContactPage />
    </main>
  );
}
