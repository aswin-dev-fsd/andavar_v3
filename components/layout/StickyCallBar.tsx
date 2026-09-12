'use client';
import {useLocale} from 'next-intl';
import {PhoneIcon,MapIcon} from '@/components/ui/Icon';
import {clinic} from '@/lib/site';
export default function StickyCallBar(){
  const locale=useLocale();
  const isTa=locale==='ta';
  return <div className="fixed inset-x-0 bottom-0 z-50 hidden border-t border-[var(--line)] bg-[rgba(251,248,243,.94)] p-2 pb-[max(8px,env(safe-area-inset-bottom))] backdrop-blur-[16px] min-[860px]:hidden"><div className="mx-auto grid max-w-[640px] grid-cols-2 gap-2"><a className="button button-primary h-14" href="tel:04259221000"><PhoneIcon/>{isTa?'அழைக்கவும்':'Call the hospital'}</a><a className="button button-ghost h-14" href={clinic.maps}><MapIcon/>{isTa?'வழிகாட்டி':'Directions'}</a></div></div>;
}
