'use client';
import Link from 'next/link';import {useLocale} from 'next-intl';import {clinic,navItems} from '@/lib/site';import Aperture from '@/components/ui/Aperture';import {PhoneIcon,MapIcon} from '@/components/ui/Icon';
export default function Footer(){
  const locale=useLocale();
  const isTa=locale==='ta';
  return <footer className="relative overflow-hidden bg-[var(--ink)] text-white">
    <Aperture size={520} opacity={.14} className="-bottom-64 -right-56"/>
    <div className="shell relative z-10 py-20">
      <div className="grid gap-12 min-[520px]:grid-cols-2 min-[860px]:grid-cols-4">
        <div>
          <div className="text-[20px] font-bold">{isTa?'ஸ்ரீ ஆண்டவர்':'Shri Andavar'}</div>
          <div className={`mt-1 text-[11.5px] font-semibold text-[#8496A0] ${isTa?'tracking-normal leading-normal':'uppercase tracking-[.13em]'}`}>{isTa?'கண் மருத்துவமனை & விழித்திரை மையம்':'Eye Care & Retina Centre'}</div>
          <p className="mt-5 max-w-[34ch] text-[17px] leading-[1.65] text-[#C9D3D7]">{isTa?'2013 முதல் பொள்ளாச்சியில் கண்புரை மற்றும் விழித்திரை சிகிச்சை. முதல் பரிசோதனை முதல் இறுதி வரை ஒரே அறுவை சிகிச்சை நிபுணர்.':'Cataract and retina care in Pollachi since 2013, by one surgeon who sees you from the first examination to the last follow-up.'}</p>
        </div>
        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[.1em] text-[#7FBBDC]">{isTa?'சிகிச்சைகள்':'Treatments'}</h3>
          <div className="mt-4 grid gap-2 text-[16px] text-[#C9D3D7]">
            <Link href={`/${locale}/cataract-surgery`} className="transition-colors hover:text-white">{isTa?'கண்புரை அறுவை சிகிச்சை':'Cataract surgery'}</Link>
            <Link href={`/${locale}/treatments`} className="transition-colors hover:text-white">{isTa?'விழித்திரை சிகிச்சை':'Retina care'}</Link>
            <Link href={`/${locale}/treatments`} className="transition-colors hover:text-white">{isTa?'சர்க்கரை நோய் கண் சிகிச்சை':'Diabetic eye care'}</Link>
            <Link href={`/${locale}/treatments`} className="transition-colors hover:text-white">{isTa?'கிளௌகோமா':'Glaucoma'}</Link>
            <Link href={`/${locale}/treatments`} className="transition-colors hover:text-white">{isTa?'கண் பரிசோதனை':'Eye check-up'}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[.1em] text-[#7FBBDC]">{isTa?'மருத்துவமனை':'The hospital'}</h3>
          <div className="mt-4 grid gap-2 text-[16px] text-[#C9D3D7]">
            <Link href={`/${locale}/about`} className="transition-colors hover:text-white">{isTa?'எங்களைப் பற்றி':'About'}</Link>
            <Link href={`/${locale}/patient-stories`} className="transition-colors hover:text-white">{isTa?'நோயாளிகளின் அனுபவங்கள்':'Patient stories'}</Link>
            <Link href={`/${locale}/schemes`} className="transition-colors hover:text-white">{isTa?'காப்பீட்டுத் திட்டங்கள்':'Schemes & insurance'}</Link>
            <Link href={`/${locale}/eye-health`} className="transition-colors hover:text-white">{isTa?'கண் நலம்':'Eye health tips'}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[.1em] text-[#7FBBDC]">{isTa?'எங்களை சந்திக்க':'Visit us'}</h3>
          <address className="mt-4 whitespace-pre-line not-italic text-[16px] leading-[1.65] text-[#C9D3D7]">{isTa?'எண். 73, பல்லடம் சாலை, LMHSS பள்ளி எதிரில், டி. கோட்டாம்பட்டி, பொள்ளாச்சி 642002':clinic.address}</address>
          <div className="mt-5 space-y-2.5">
            <a className="flex items-center gap-2.5 text-[15.5px] font-medium text-white transition-colors hover:text-[#7FBBDC]" href="tel:04259221000">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,.08)] text-[#7FBBDC]"><PhoneIcon className="h-3.5 w-3.5"/></span>
              <span>{clinic.phone}</span>
              <span className="text-[12px] text-[#8496A0]">({isTa?'நிலையான எண்':'Landline'})</span>
            </a>
            <a className="flex items-center gap-2.5 text-[15.5px] font-medium text-white transition-colors hover:text-[#7FBBDC]" href="tel:9442056767">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,.08)] text-[#7FBBDC]"><PhoneIcon className="h-3.5 w-3.5"/></span>
              <span>{clinic.mobile}</span>
              <span className="text-[12px] text-[#8496A0]">({isTa?'கைபேசி':'Mobile'})</span>
            </a>
            <div className="pt-1">
              <a className="inline-flex items-center gap-2 rounded-xl border border-[#50616B] bg-[rgba(255,255,255,.06)] px-4 py-2 text-[14px] font-medium text-[#7FBBDC] transition-all hover:border-white hover:bg-[rgba(255,255,255,.14)] hover:text-white" href={clinic.maps} target="_blank" rel="noopener noreferrer">
                <MapIcon className="h-4 w-4"/>
                <span>{isTa?'வரைபடத்தில் வழிகாட்டி':'Get directions'}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[#8496A0]">{isTa?'திங்கள்–சனி · காலை 10:00 – பிற்பகல் 2:00 மற்றும் மாலை 5:00 – 7:00. ஞாயிறு விடுமுறை.':clinic.hours}</p>
        </div>
      </div>
      <div className="mt-12 border-t border-[#2A3237] pt-5 text-[14px] text-[#8496A0]">{isTa?'© 2026 ஸ்ரீ ஆண்டவர் கண் மருத்துவமனை & விழித்திரை மையம் · பொள்ளாச்சி, தமிழ்நாடு':'© 2026 Shri Andavar Eye Care and Retina Centre · Pollachi, Tamil Nadu'}</div>
    </div>
  </footer>;
}
