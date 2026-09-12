export default function Eyebrow({children,light=false}:{children:React.ReactNode;light?:boolean}){return <div className={`eyebrow ${light?'light':''}`}>{children}</div>}
