'use client';
import {useEffect, useState} from 'react';

type StatusInfo = {
  open: boolean;
  detail: string;
  detailTa: string;
};

function status(): StatusInfo {
  const p = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts();

  const wd = p.find(x => x.type === 'weekday')?.value;
  const h = Number(p.find(x => x.type === 'hour')?.value);
  const m = Number(p.find(x => x.type === 'minute')?.value);
  const t = h * 60 + m;

  if (wd === 'Sun') {
    return {
      open: false,
      detail: 'Opens Monday at 10:00 AM',
      detailTa: 'திங்கள் காலை 10:00 மணிக்கு திறக்கப்படும்',
    };
  }
  if (t >= 600 && t < 840) {
    return {
      open: true,
      detail: 'Closes 2:00 PM',
      detailTa: 'மதியம் 2:00 மணிக்கு மூடப்படும்',
    };
  }
  if (t >= 1020 && t < 1140) {
    return {
      open: true,
      detail: 'Closes 7:00 PM',
      detailTa: 'இரவு 7:00 மணிக்கு மூடப்படும்',
    };
  }
  if (t >= 840 && t < 1020) {
    return {
      open: false,
      detail: 'Opens 5:00 PM',
      detailTa: 'மாலை 5:00 மணிக்கு திறக்கப்படும்',
    };
  }
  return {
    open: false,
    detail: t < 600 ? 'Opens 10:00 AM' : 'Opens tomorrow at 10:00 AM',
    detailTa: t < 600 ? 'காலை 10:00 மணிக்கு திறக்கப்படும்' : 'நாளை காலை 10:00 மணிக்கு திறக்கப்படும்',
  };
}

export default function OpenNowPill({locale = 'en'}: {locale?: string}) {
  const [s, setS] = useState(status);
  const isTa = locale === 'ta';

  useEffect(() => {
    const id = setInterval(() => setS(status()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-3 py-1 text-[13.5px] leading-tight"
      style={{
        background: s.open ? 'var(--green-wash)' : 'var(--amber-wash)',
        color: s.open ? 'var(--green)' : 'var(--amber)',
      }}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{
          background: 'currentColor',
          animation: s.open ? 'pulse-open 2.6s infinite' : 'none',
        }}
      />
      <span className="font-semibold">{isTa ? (s.open ? 'திறந்துள்ளது' : 'மூடப்பட்டுள்ளது') : (s.open ? 'Open now' : 'Closed')}</span>
      <span className="opacity-40">·</span>
      <span>{isTa ? s.detailTa : s.detail}</span>
    </div>
  );
}

