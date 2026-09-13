import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '../data/site';
import Section from './ui/Section';

export default function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const mailto = () => {
    const title = subject || `Note from ${name || 'the portfolio'}`;
    const body = [name && `From: ${name}`, '', message].filter(Boolean).join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section
      id="contact"
      kicker="08 — Contact"
      title="Write directly. There is no inbox backend here."
      lede="This site is static. The form opens your mail client. Email, phone, GitHub, and LinkedIn all go to me."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-4 rounded-2xl border border-slate-line bg-soot p-5 hover:border-mint/40"
          >
            <Mail className="mt-0.5 text-mint" size={18} />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Email</p>
              <p className="mt-1 text-paper">{site.email}</p>
            </div>
          </a>
          <a
            href={site.phoneHref}
            className="flex items-start gap-4 rounded-2xl border border-slate-line bg-soot p-5 hover:border-mint/40"
          >
            <Phone className="mt-0.5 text-mint" size={18} />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Phone</p>
              <p className="mt-1 text-paper">{site.phone}</p>
            </div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-slate-line bg-soot p-5">
            <MapPin className="mt-0.5 text-mint" size={18} />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Location</p>
              <p className="mt-1 text-paper">{site.location}</p>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-line px-4 py-2 text-sm text-paper hover:border-mint hover:text-mint"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-line px-4 py-2 text-sm text-paper hover:border-mint hover:text-mint"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-slate-line bg-slate-panel/60 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            mailto();
          }}
        >
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-line bg-ink px-4 py-3 text-paper outline-none focus:border-mint"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">Subject</span>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-line bg-ink px-4 py-3 text-paper outline-none focus:border-mint"
              placeholder="Role, collaboration, or a question"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">Message</span>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-2 w-full rounded-xl border border-slate-line bg-ink px-4 py-3 text-paper outline-none focus:border-mint"
              placeholder="Write like a person."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-mint py-3 text-sm font-medium text-ink hover:bg-paper"
          >
            Open email draft
          </button>
        </form>
      </div>
    </Section>
  );
}
