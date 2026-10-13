import './globals.css'; import type {Metadata} from 'next';
export const metadata:Metadata={title:'OVERTHINK — Four minds. One AI. Zero chill.',description:'The cooperative party game about one very conflicted AI.',openGraph:{images:['/cover.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
