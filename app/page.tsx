import { ArrowDownRight, ArrowUpRight, Clapperboard, Gauge, Scissors, Sparkles } from 'lucide-react';

const platforms = [
  { name: 'Instagram', handle: '@rithvikpennepalli', followers: '3,973', detail: 'followers · 146 posts', href: 'https://www.instagram.com/rithvikpennepalli/reel/Dcj5tQGCkk-/' },
  { name: 'TikTok', handle: '@rithvikpennepalli', followers: '856', detail: 'followers · 15.2K likes', href: 'https://www.tiktok.com/@rithvikpennepalli/video/7656885161929231629' },
  { name: 'YouTube', handle: '@rithvikpennepalli', followers: '492', detail: 'subscribers · 84 videos', href: 'https://www.youtube.com/shorts/VStjvYIIuM4' },
];

const ownWork = [
  { platform: 'Instagram', title: 'Latest reel', note: 'Watch on Instagram', href: 'https://www.instagram.com/rithvikpennepalli/reel/Dcj5tQGCkk-/', tone: 'lime' },
  { platform: 'YouTube', title: 'Now that I live w my girl', note: '4.5K views · watch Short', href: 'https://www.youtube.com/shorts/VStjvYIIuM4', tone: 'blue' },
  { platform: 'TikTok', title: 'Long distance era', note: '14K views · watch TikTok', href: 'https://www.tiktok.com/@rithvikpennepalli/video/7656885161929231629', tone: 'pink' },
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
          <p>Stories made with curiosity, intention, and a little bit of wonder.</p>
          <a href="#creator" className="circle-link" aria-label="Meet Rithvik"><ArrowDownRight size={28} /></a>
        </div>
      </section>

      <section className="creator-section" id="creator">
        <div className="creator-manifesto"><span className="section-kicker">This is Rithvik</span><h2>Creator first.<br />Always <em>curious.</em></h2></div>
        <div className="creator-copy"><p>I’ve been making videos since I was a kid—posting vlogs with family and friends throughout high school and college. I love every part of creating: sitting with a thought, finding the idea, bringing it to life with a camera, then shaping the feeling with my editing.</p><p>I tell simple stories in a way that makes you feel present: a grocery run, a morning run, a small moment of love or joy. My work is rooted in faith, guided by my inner child and inner divine, and made to help people feel closer to themselves. My feed is my playground. I’m just a kid who loves to create.</p></div>
        <div className="content-stage" aria-label="Rithvik's social content">
          {ownWork.map((video) => <a className={`content-placeholder ${video.tone}`} href={video.href} target="_blank" rel="noreferrer" key={video.href}><span>{video.platform}</span><strong>{video.title}</strong><small>{video.note} <ArrowUpRight size={13} /></small></a>)}
        </div>
      </section>

      <section className="numbers" id="numbers">
        <div className="section-kicker">Rithvik’s live audience</div>
        <div className="numbers-heading"><h2>Make them<br /><em>stay.</em></h2><p>Live performance and audience across Rithvik’s channels—where attention becomes connection, and connection becomes community.</p></div>
        <div className="platform-grid">
          {platforms.map((platform) => <article className="platform-card" key={platform.name}><div><span>{platform.name}</span><small>{platform.handle}</small></div><strong>{platform.followers}</strong><p>{platform.detail}</p>{platform.href && <a className="platform-link" href={platform.href} target="_blank" rel="noreferrer" aria-label={`Open Rithvik on ${platform.name}`}><ArrowUpRight size={15} /></a>}</article>)}
          <article className="platform-card total-card"><Sparkles size={20} /><span>Known audience</span><strong>5,321+</strong><p>followers + subscribers across all three channels</p></article>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-heading"><span className="section-kicker">The editor brain</span><h2>Earn their<br /><em>attention.</em></h2><p>I’m always looking for the better version. I study retention and hook performance, test different cuts, and refine the strategy until the story—and the product—has the best chance to land.</p></div>
        <div className="skills-list">{skills.map(({ icon: Icon, number, title, copy }) => <article key={number}><div><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <a className="case-study-link" href="#/editing"><span>Editing services</span><strong>Short-form and long-form, built to hold attention.</strong><ArrowUpRight /></a>
      </section>

      <section className="about" id="about">
        <span className="section-kicker">The work I love</span><h2>Stories with<br /><em>staying power.</em></h2>
        <div className="about-copy"><p>I’m Rithvik Pennepalli—a creator and freelance video editor open to both short-form and long-form work. I care about taste, momentum, honesty, and doing the thoughtful work behind the scenes that makes an audience lean in.</p><div className="credential"><span>Current brand partner</span><strong>Uber</strong></div></div>
      </section>

      <footer><p>For editing, UGC, creator campaigns, and brand partnerships.</p><a href="#/contact">Let’s make it move <ArrowUpRight size={24} /></a></footer>
    </main>
  );
}
