import {supabaseAdmin} from '../../../../lib/supabase'
import {analyzeCatalog,generateStrategicPlan} from '../../../../lib/bot'
export const dynamic='force-dynamic'
export async function GET(){if(!supabaseAdmin) return Response.json({weeklyPlan:[]});const {data:films}=await supabaseAdmin.from('films').select('*');const a=await analyzeCatalog(films||[]);const p=await generateStrategicPlan(a);return Response.json(p)}
