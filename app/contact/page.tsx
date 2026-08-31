import { ArrowLeft, Clock3, Mail } from 'lucide-react';
import { ContactForm } from './contact-form';

export const metadata = { title: 'Start a project — RP', description: 'Creator, UGC, brand partnership, and video editing inquiries.' };

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="site-header contact-header"><a href="/" className="name-mark" aria-label="Rithvik Pennepalli home">Rithvik Pennepalli</a><a href="/" className="back-link"><ArrowLeft size={15} /> Back to Rithvik</a></header>
      <section className="contact-layout">
        <div className="contact-intro">
          <span className="section-kicker">Start a project</span><h1>Let’s make<br />something <em>move.</em></h1>
          <p>Editing, creator campaigns, UGC, and brand partnerships. Share the shape of the project and I’ll take it from there.</p>
          <div className="contact-details"><div><Clock3 size={18} /><span><strong>Typical response</strong>Within 1–2 business days</span></div><div><Mail size={18} /><span><strong>Best for</strong>Short-form, UGC & creator work</span></div></div>
        </div>
        <ContactForm />
      </section>
      <div className="contact-marquee"><span>CREATOR · EDITOR · STORYTELLER · BRAND PARTNER · </span><span>CREATOR · EDITOR · STORYTELLER · BRAND PARTNER · </span></div>
    </main>
  );
}
