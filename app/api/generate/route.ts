import {supabaseAdmin} from '../../../lib/supabase'
import {createGeneration} from '../../../lib/runway'
export const dynamic='force-dynamic'
export async function POST(req:Request){const {prompt,genre}=await req.json();if(!supabaseAdmin) return Response.json({error:'Add Supabase env vars'},{status:500});const g:any=await createGeneration(prompt,genre);const film={id:`bt-${Date.now()}`,title:prompt.slice(0,60).toUpperCase(),genre,synopsis:prompt,video_url:g.videoUrl,status:'scheduled',scheduled_release_at:new Date(Date.now()+2*60*60*1000).toISOString(),featured_score:100,views:0,likes:0,match:95};await supabaseAdmin.from('films').insert(film);return Response.json({film,video_url:g.videoUrl})}
