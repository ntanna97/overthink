import './globals.css'; import type {Metadata} from 'next';
export const metadata:Metadata={title:'OVERTHINK — Four minds. One AI. Zero chill.',description:'The cooperative party game about one very conflicted AI.',metadataBase:new URL('https://overthink-neil-fete.vercel.app'),openGraph:{images:[{url:'/cover.png',width:1200,height:630,alt:'OVERTHINK: Big feelings. Little brains. Bad ideas.'}]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
