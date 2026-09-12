'use client';
import Link from 'next/link';
import {useLocale} from 'next-intl';
import {usePathname} from '@/src/i18n/navigation';
import {useEffect,useState} from 'react';
import {navItems} from '@/lib/site';
export default function Header(){
 const locale=useLocale(); const pathname=usePathname(); const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 const isTa=locale==='ta';
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>10); f(); window.addEventListener('scroll',f,{passive:true}); return()=>window.removeEventListener('scroll',f)},[]);
 useEffect(()=>setOpen(false),[pathname]); const other=locale==='en'?'ta':'en';
 return <header className={`sticky top-0 z-50 border-b ${scrolled?'border-[var(--line)] shadow-[0_8px_22px_rgba(21,26,28,.05)]':'border-transparent'}`} style={{background:'rgba(251,248,243,.86)',backdropFilter:'blur(14px)'}}>
  <div className="mx-auto flex min-h-[78px] w-[min(1180px,calc(100%-40px))] items-center gap-4">
   <Link href={`/${locale}`} className="flex min-w-0 shrink items-center gap-3 no-underline" aria-label={isTa?'ஸ்ரீ ஆண்டவர் முகப்பு':'Shri Andavar home'}><span className="relative block h-10 w-10 shrink-0" aria-hidden="true"><span className="absolute inset-0 rounded-full border border-[var(--line)]"/><span className="absolute inset-[7px] rounded-full border border-[var(--line)]"/><span className="absolute inset-[14px] rounded-full bg-[var(--blue)]"/><span className="absolute left-[16px] top-[15px] h-1.5 w-1.5 rounded-full bg-[var(--ground)]"/></span><span className="min-w-0"><span className="block truncate text-[18px] font-bold leading-none">{isTa?'ஸ்ரீ ஆண்டவர்':'Shri Andavar'}</span><span className="hidden text-[11.5px] font-semibold uppercase tracking-[.13em] text-[var(--ink-3)] min-[430px]:block">{isTa?'கண் மருத்துவமனை & விழித்திரை மையம்':'Eye Care & Retina Centre'}</span></span></Link>
   <nav className="ml-auto hidden items-center gap-1 min-[1041px]:flex" aria-label="Primary navigation">{navItems.map(n=><Link key={n.href} href={`/${locale}${n.href}`} aria-current={pathname===n.href?'page':undefined} className={`rounded-full px-3 py-2 text-[16.5px] font-medium no-underline ${pathname===n.href?'text-[var(--blue)]':'hover:bg-[var(--blue-wash)]'}`}>{isTa?n.labelTa:n.label}</Link>)}</nav>
    <div className="ml-auto flex items-center gap-2 min-[1041px]:ml-2"><Link href={`/${other}${pathname==='/'?'':(pathname||'')}`} className="flex h-10 overflow-hidden rounded-full border-[1.5px] border-[var(--line)] no-underline" aria-label={`Switch to ${other==='en'?'English':'Tamil'}`}><span className={`grid min-w-11 place-items-center text-sm ${locale==='en'?'bg-[var(--blue)] text-white':''}`}>EN</span><span className={`grid min-w-11 place-items-center text-sm ${locale==='ta'?'bg-[var(--blue)] text-white':''}`}>த</span></Link><button type="button" className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--line)] bg-transparent min-[1041px]:hidden" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Close menu':'Open menu'}><span className="relative h-4 w-5"><span className={`absolute left-0 top-0 h-px w-5 bg-[var(--ink)] transition ${open?'translate-y-2 rotate-45':''}`}/><span className={`absolute left-0 top-2 h-px w-5 bg-[var(--ink)] transition ${open?'opacity-0':''}`}/><span className={`absolute left-0 top-4 h-px w-5 bg-[var(--ink)] transition ${open?'-translate-y-2 -rotate-45':''}`}/></span></button></div>
  </div>
  {open&&<div id="mobile-menu" className="border-t border-[var(--line)] bg-[rgba(251,248,243,.98)] min-[1041px]:hidden"><div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-1 py-4">{navItems.map(n=><Link key={n.href} href={`/${locale}${n.href}`} className="rounded-2xl px-4 py-3 text-[18px] font-medium no-underline hover:bg-[var(--blue-wash)]">{isTa?n.labelTa:n.label}</Link>)}</div></div>}
 </header>;
}
