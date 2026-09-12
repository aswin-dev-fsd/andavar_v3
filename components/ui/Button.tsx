import Link from 'next/link';
export default function Button({href,children,variant='primary'}:{href:string;children:React.ReactNode;variant?:'primary'|'ghost'|'dark'|'darkGhost'}){const c=variant==='primary'?'button-primary':variant==='ghost'?'button-ghost':variant==='dark'?'button-dark':'button-dark-ghost';return <Link href={href} className={`button ${c}`}>{children}</Link>}
