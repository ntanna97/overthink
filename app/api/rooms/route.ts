import {NextResponse} from 'next/server';
import {createRoom,storageReady} from '../../../lib/rooms';
export const runtime='nodejs';
export async function POST(req:Request){try{if(!storageReady())return NextResponse.json({error:'Multiplayer requires Supabase configuration; solo mode is available.'},{status:503});const {name}=await req.json();const {room,secret}=await createRoom(String(name||'Host'));const res=NextResponse.json({code:room.code});res.cookies.set(`ot_${room.code}`,secret,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:7200});return res}catch(e){return NextResponse.json({error:String(e)},{status:400})}}
