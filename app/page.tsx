import { ArrowDownRight, ArrowUpRight, Clapperboard, Gauge, Scissors, Sparkles } from 'lucide-react';

const platforms = [
  { name: 'Instagram', handle: '@rithvikpennepalli', followers: '3,973', detail: 'followers · 146 posts', href: 'https://www.instagram.com/rithvikpennepalli/' },
  { name: 'TikTok', handle: 'Sign-in pending', followers: '—', detail: 'live profile connection pending', href: '' },
  { name: 'YouTube', handle: '@rithvikpennepalli', followers: '492', detail: 'subscribers · 84 videos', href: 'https://www.youtube.com/@rithvikpennepalli' },
];

const ownWork = [
  { platform: 'Instagram', title: 'Latest reel', note: 'Watch on Instagram', href: 'https://www.instagram.com/rithvikpennepalli/reel/Dcj5tQGCkk-/', tone: 'lime' },
  { platform: 'YouTube', title: 'Now that I live w my girl', note: '4.5K views · watch Short', href: 'https://www.youtube.com/shorts/VStjvYIIuM4', tone: 'blue' },
  { platform: 'Instagram', title: 'Creator diary', note: 'Watch on Instagram', href: 'https://www.instagram.com/rithvikpennepalli/reel/Dceh4xZKQMq/', tone: 'pink' },
];

const skills = [
  { icon: Scissors, number: '01', title: 'Short-form editing', copy: 'Tight, story-first cuts engineered for the feed—without editing the personality out of the person.' },
  { icon: Gauge, number: '02', title: 'Hooks & retention', copy: 'Stronger openings, better pattern interrupts, and pacing that earns the next second.' },
  { icon: Clapperboard, number: '03', title: 'Creator storytelling', copy: 'Turning routines, opinions, travel, and real-life moments into content people remember.' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="name-mark" aria-label="Rithvik Pennepalli home">Rithvik Pennepalli</a>
        <nav aria-label="Primary navigation"><a href="#creator">Creator</a><a href="#numbers">Numbers</a><a href="#/editing">Editing</a><a href="#about">About</a></nav>
        <a className="pill pill-dark" href="#/contact">Work with me <ArrowUpRight size={15} /></a>
      </header>

      <section className="rithvik-hero" id="top">
        <div className="eyebrow"><span className="status-dot" /> Creator · Editor · Brand partner</div>
        <h1>RITHVIK<br /><span>PENNEPALLI</span></h1>
        <div className="rithvik-hero-copy">
          <p>I’m building a life worth watching—and turning it into content worth sharing.</p>
          <a href="#creator" className="circle-link" aria-label="Meet Rithvik"><ArrowDownRight size={28} /></a>
        </div>
        <div className="identity-tape"><span>MAIN CHARACTER ENERGY</span><span>CREATOR INSTINCT</span><span>EDITOR DISCIPLINE</span></div>
      </section>

      <section className="creator-section" id="creator">
        <div className="creator-manifesto"><span className="section-kicker">This is Rithvik</span><h2>Creator first.<br />Always <em>curious.</em></h2></div>
        <div className="creator-copy"><p>I’m an up-and-coming creator documenting the ideas, experiences, and choices shaping who I become. The camera isn’t the point—it’s the permission to notice more, try more, and bring people along.</p><p>My own feed is the playground. I test hooks, formats, rhythms, and stories on myself before I bring those instincts into client work.</p></div>
        <div className="content-stage" aria-label="Rithvik's social content">
          {ownWork.map((video) => <a className={`content-placeholder ${video.tone}`} href={video.href} target="_blank" rel="noreferrer" key={video.href}><span>{video.platform}</span><strong>{video.title}</strong><small>{video.note} <ArrowUpRight size={13} /></small></a>)}
        </div>
      </section>

      <section className="numbers" id="numbers">
        <div className="section-kicker">Rithvik’s live audience</div>
        <div className="numbers-heading"><h2>Every view starts<br />with a <em>choice.</em></h2><p>Current public snapshots from Rithvik’s channels. True live aggregate views require official analytics access and will switch on after the remaining account connection.</p></div>
        <div className="platform-grid">
          {platforms.map((platform) => <article className="platform-card" key={platform.name}><div><span>{platform.name}</span><small>{platform.handle}</small></div><strong>{platform.followers}</strong><p>{platform.detail}</p>{platform.href && <a className="platform-link" href={platform.href} target="_blank" rel="noreferrer" aria-label={`Open Rithvik on ${platform.name}`}><ArrowUpRight size={15} /></a>}</article>)}
          <article className="platform-card total-card"><Sparkles size={20} /><span>Known audience</span><strong>4,465+</strong><p>Instagram followers + YouTube subscribers; TikTok pending</p></article>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-heading"><span className="section-kicker">The editor brain</span><h2>I know where<br />the <em>cut belongs.</em></h2><p>Because I create my own content, I don’t just see footage. I see the hook, the turn, the payoff—and the frame where someone might swipe.</p></div>
        <div className="skills-list">{skills.map(({ icon: Icon, number, title, copy }) => <article key={number}><div><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <a className="case-study-link" href="#/editing"><span>Editing case study</span><strong>Three months shaping content for Armaan Talreja</strong><ArrowUpRight /></a>
      </section>

      <section className="about" id="about">
        <span className="section-kicker">More than one lane</span><h2>Ambition, with<br /><em>range.</em></h2>
        <div className="about-copy"><p>I’m Rithvik Pennepalli: an emerging creator, freelance video editor, and someone who’s happiest when an idea becomes a thing people can actually feel. I care about taste, momentum, and doing the work behind the scenes.</p><div className="credential"><span>Current brand partner</span><strong>Uber</strong></div></div>
      </section>

      <footer><p>For editing, UGC, creator campaigns, and brand partnerships.</p><a href="#/contact">Let’s make it move <ArrowUpRight size={24} /></a></footer>
    </main>
  );
}
