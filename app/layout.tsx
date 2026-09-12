import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {default: 'Shri Andavar Eye Care and Retina Centre | Pollachi', template: '%s | Shri Andavar Eye Care and Retina Centre'},
  description: 'Cataract and retina care in Pollachi, by the surgeon who examines you.',
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
