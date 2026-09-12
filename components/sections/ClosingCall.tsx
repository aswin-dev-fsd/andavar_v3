'use client';
import {useLocale} from 'next-intl';
import Aperture from '@/components/ui/Aperture';
import Eyebrow from '@/components/ui/Eyebrow';
import {PhoneIcon} from '@/components/ui/Icon';
export default function ClosingCall({title,lede,dark=false,secondary,secondaryHref}:{title:string;lede?:string;dark?:boolean;secondary?:string;secondaryHref?:string}){
  const locale=useLocale();
  const isTa=locale==='ta';
  return <section className={`section ${dark?'band-ink':'band-ground'}`}>
    <Aperture size={560} opacity={dark?.18:.45} className={dark?'-bottom-72 -left-64':'-bottom-72 -right-72'}/>
    <div className="shell relative z-10 flex justify-center text-center">
      <div className="max-w-[720px]">
        <Eyebrow light={dark}>{isTa?'எங்களை சந்திக்க':'Come and see us'}</Eyebrow>
        <h2 className="h2 mt-5">{title}</h2>
        {lede&&<p className={`lede mx-auto mt-6 max-w-[46ch] ${dark?'text-[#C9D3D7]':'text-[var(--ink-2)]'}`}>{lede}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a className={`button ${dark?'button-dark':'button-primary'}`} href="tel:04259221000">
            <PhoneIcon/>
            <span>{isTa?'அழைக்க: 04259 221 000':'Call 04259 221 000'}</span>
          </a>
          {secondary&&secondaryHref&&<a className={`button ${dark?'button-dark-ghost':'button-ghost'}`} href={secondaryHref}>{secondary}</a>}
        </div>
      </div>
    </div>
  </section>;
}
