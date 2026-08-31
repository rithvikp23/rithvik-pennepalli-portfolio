'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '../site-config';

function briefFrom(form: HTMLFormElement) {
  const data = new FormData(form);
  return [`New ${data.get('projectType')} inquiry from ${data.get('name')}`, `Email: ${data.get('email')}`, `Brand / company: ${data.get('company') || 'Not provided'}`, `Budget: ${data.get('budget')}`, '', String(data.get('message'))].join('\n');
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [notice, setNotice] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const brief = briefFrom(event.currentTarget);
    if (siteConfig.contactEmail) {
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent('New creator / editing inquiry')}&body=${encodeURIComponent(brief)}`;
      setSent(true);
      return;
    }
    await navigator.clipboard.writeText(brief);
    setNotice('Your inquiry is copied. The direct inbox will switch on when the portfolio owner connects their email.');
    setSent(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row"><label>Name<Input name="name" required placeholder="Your name" /></label><label>Work email<Input name="email" required type="email" placeholder="you@brand.com" /></label></div>
      <label>Brand / company<Input name="company" placeholder="Optional" /></label>
      <div className="form-row">
        <label>Project type<select name="projectType" defaultValue="Video editing"><option>Video editing</option><option>UGC / creator campaign</option><option>Brand partnership</option><option>Something else</option></select></label>
        <label>Estimated budget<select name="budget" defaultValue="$1,000–$2,500"><option>Under $1,000</option><option>$1,000–$2,500</option><option>$2,500–$5,000</option><option>$5,000+</option><option>Let’s discuss</option></select></label>
      </div>
      <label>Tell me about it<Textarea name="message" required placeholder="What are you making, what do you need, and when do you need it?" rows={6} /></label>
      <Button type="submit" size="lg" className="contact-submit">{sent ? <><Check /> Brief ready</> : <>Send inquiry <ArrowUpRight /></>}</Button>
      {notice && <p className="form-notice" role="status"><Copy size={14} /> {notice}</p>}
    </form>
  );
}
