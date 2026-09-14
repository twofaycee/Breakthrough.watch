'use client'
import {useState} from 'react'
export default function BotPage(){
  const [log,setLog]=useState<any>(null)
  const [loading,setLoading]=useState(false)
  const run=async()=>{setLoading(true);try{const r=await fetch('/api/bot/run');const d=await r.json();setLog(d)}catch(e:any){setLog({error:e.message})}setLoading(false)}
  return <main style={{background:'#050505',color:'#fff',minHeight:'100vh',padding:'32px 48px'}}>
    <a href='/' style={{color:'#E50914',textDecoration:'none',fontWeight:900}}>← BREAKTHROUGH.WATCH</a>
    <h1 style={{fontSize:48,fontWeight:900,marginTop:20}}>🤖 BREAKTHROUGH BOT</h1>
    <p style={{color:'#888',maxWidth:600,marginTop:8}}>Autonomous AI film scheduler - Prevents frontend-backend mismatches, syncs versions, schedules 3 films strategically, archives flops, features longest-viewed.</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:24,maxWidth:800}}>
      <div style={{background:'#111',padding:16,borderRadius:8}}><div style={{fontSize:11,color:'#888'}}>STATUS</div><div style={{color:'#22c55e',fontWeight:900,marginTop:4}}>● LIVE - Hobby</div><div style={{fontSize:11,marginTop:4}}>Runs daily 1am</div></div>
      <div style={{background:'#111',padding:16,borderRadius:8}}><div style={{fontSize:11,color:'#888'}}>BUILD MODE</div><div style={{fontWeight:900,marginTop:4}}>Multiple Deployments</div><div style={{fontSize:11,marginTop:4}}>Never wait for queued build</div></div>
      <div style={{background:'#111',padding:16,borderRadius:8}}><div style={{fontSize:11,color:'#888'}}>SYNC</div><div style={{fontWeight:900,marginTop:4}}>Frontend-Backend</div><div style={{fontSize:11,marginTop:4}}>Auto-synced versions</div></div>
    </div>
    <button onClick={run} disabled={loading} style={{marginTop:24,background:'#22c55e',color:'#000',border:'none',padding:'14px 28px',borderRadius:999,fontWeight:900,fontSize:16,cursor:'pointer'}}>{loading?'Running...':'▶ Run Bot Now'}</button>
    {log&&<pre style={{marginTop:24,background:'#111',padding:16,borderRadius:8,fontSize:11,whiteSpace:'pre-wrap',maxWidth:800,overflowX:'auto'}}>{JSON.stringify(log,null,2)}</pre>}
    <div style={{marginTop:32,background:'#111',padding:16,borderRadius:8,maxWidth:800}}>
      <h3 style={{fontWeight:900}}>How Bot Works (Hobby Plan)</h3>
      <ul style={{marginTop:8,color:'#aaa',fontSize:12,lineHeight:1.8,paddingLeft:16}}>
        <li>Analyzes catalog: views, likes, featured_score, age</li>
        <li>Schedules 3 new films with strategic release (bot generated prompts)</li>
        <li>Archives films under 50 views after 14 days (flop removal)</li>
        <li>Features film with longest views (score {'>'} 300)</li>
        <li>Cron: 0 1 * * * daily - Hobby allows daily only</li>
        <li>Upgrade to Pro for every 6h: 0 */6 * * *</li>
      </ul>
    </div>
  </main>
}
