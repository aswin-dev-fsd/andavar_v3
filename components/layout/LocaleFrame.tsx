import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyCallBar from './StickyCallBar';
export default function LocaleFrame({children}:{children:ReactNode}) { return <><Header/><main>{children}</main><Footer/><StickyCallBar/></>; }
