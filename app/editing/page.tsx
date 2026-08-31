import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Editing — Rithvik Pennepalli', description: 'Freelance short- and long-form editing by Rithvik Pennepalli.' };

export default function EditingPage() {
  return <main className="editing-page">
    <header className="site-header"><a href="#/" className="name-mark">Rithvik Pennepalli</a><a href="#/" className="back-link"><ArrowLeft size={15} /> Back to Rithvik</a></header>
    <section className="editing-hero"><span className="section-kicker">Freelance editing · Short + long form</span><h1>Make it<br /><em>unmissable.</em></h1><p>I edit short-form and long-form content with the same goal: make the story clear, the pacing intentional, and the audience want the next moment. Bring me a rough idea or a full drive—I’ll help shape it into something people remember.</p></section>
    <section className="editing-services"><article><span>01</span><h2>Short-form</h2><p>Hooks, rhythm, captions, pattern interrupts, and platform-native cuts designed for retention.</p></article><article><span>02</span><h2>Long-form</h2><p>Vlogs, interviews, and story-led videos with room to breathe—and enough momentum to keep going.</p></article><article><span>03</span><h2>Creative partner</h2><p>Feedback on the idea, the structure, and the version most likely to connect with the people you want to reach.</p></article></section>
    <footer><p>Need an editor who understands what it feels like to create?</p><a href="#/contact">Work with Rithvik <ArrowUpRight size={24} /></a></footer>
  </main>;
}
