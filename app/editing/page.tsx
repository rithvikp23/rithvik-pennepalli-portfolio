import { ArrowLeft, ArrowUpRight, Play } from 'lucide-react';

const selectedWork = [
  { id: '7ubrBbP9BK0', views: '1.6B', date: 'Jun 23', title: 'The locals know best', label: 'Meta campaign' },
  { id: 'gje9dusUnPs', views: '300M', date: 'Jun 23', title: 'Find vintage items', label: 'Meta campaign' },
  { id: 'xikmUmNHDYY', views: '60K', date: 'Jun 20', title: 'Slingshot interlude', label: 'Lifestyle' },
  { id: '6hbAzhDow6k', views: '44K', date: 'Jul 25', title: 'Putting together my room', label: 'Home' },
  { id: 'A6eoFn5eAtA', views: '43K', date: 'Jul 28', title: 'My new reason to wake up', label: 'Lifestyle' },
  { id: '4Y-ZrExl_eY', views: '30K', date: 'Jun 23', title: 'What it costs to live in Miami', label: 'Storytelling' },
  { id: 'LPiZ7TYYnTY', views: '27K', date: 'Jun 24', title: 'NYC apartment hunting', label: 'Vlog' },
  { id: '8jqTvZTG02I', views: '26K', date: 'Jun 22', title: 'The end of an era', label: 'Lifestyle' },
  { id: '-coBuDCtX58', views: '23K', date: 'Jul 9', title: 'Designing my own watch', label: 'Product' },
  { id: 'u-riqDyz1io', views: '21K', date: 'Jun 15', title: 'Rejection = redirection', label: 'Travel' },
];

export const metadata = { title: 'Editing — Rithvik Pennepalli', description: 'Selected short-form editing work by Rithvik Pennepalli.' };

export default function EditingPage() {
  return <main className="editing-page">
    <header className="site-header"><a href="/" className="name-mark">Rithvik Pennepalli</a><a href="/" className="back-link"><ArrowLeft size={15} /> Back to Rithvik</a></header>
    <section className="editing-hero"><span className="section-kicker">Selected editing · Jun–Aug 2026</span><h1>Editor brain.<br /><em>Creator instinct.</em></h1><p>For the past three months, I’ve edited short-form work for lifestyle creator Armaan Talreja. The job: find the hook, protect the personality, and make every second earn the next.</p></section>
    <section className="proof-band"><div><strong>371K+</strong><span>YouTube subscribers</span></div><div><strong>1.87B+</strong><span>YouTube channel views</span></div><div><strong>184K+</strong><span>Instagram followers</span></div><p>Current public audience for <a href="https://www.instagram.com/armaant/" target="_blank" rel="noreferrer">@armaant <ArrowUpRight size={13} /></a></p></section>
    <section className="work-grid"><div className="work-grid-header"><h2>Top 10 selected edits</h2><p>Ranked by current public YouTube views · last checked Aug 31, 2026</p></div><div className="video-list">{selectedWork.map((video,index)=><a className="video-card" href={`https://www.youtube.com/shorts/${video.id}`} target="_blank" rel="noreferrer" key={video.id}><div className="video-thumb"><img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" /><span className="video-rank">{String(index+1).padStart(2,'0')}</span><span className="video-play"><Play size={18} fill="currentColor" /></span></div><div className="video-meta"><small>{video.label} · {video.date}</small><h3>{video.title}</h3></div><div className="video-views"><strong>{video.views}</strong><span>views</span></div></a>)}</div><p className="work-note">Performance shown reflects public YouTube posts. Final editor credit and cross-platform results will be confirmed against Rithvik’s source list.</p></section>
    <footer><p>Need an editor who understands what it feels like to create?</p><a href="/contact">Work with Rithvik <ArrowUpRight size={24} /></a></footer>
  </main>;
}
