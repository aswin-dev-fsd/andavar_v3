import type {ReactNode} from 'react';
import {hasLocale,NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyCallBar from '@/components/layout/StickyCallBar';
import Reveal from '@/components/ui/Reveal';
import LocaleDocument from '@/components/ui/LocaleDocument';

export function generateStaticParams(){return routing.locales.map(locale=>({locale}))}
export default async function LocaleLayout({children,params}:{children:ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!hasLocale(routing.locales,locale))notFound();const messages=await getMessages();return <NextIntlClientProvider messages={messages}><LocaleDocument locale={locale}/><Header/><main>{children}</main><Footer/><StickyCallBar/><Reveal/></NextIntlClientProvider>}
