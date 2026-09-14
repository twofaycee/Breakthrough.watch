'use client'
import {useState,useEffect} from 'react'
import {FILMS,GENRES} from '../lib/films'
export default function Home(){
  const [films,setFilms]=useState(FILMS)
  const [genre,setGenre]=useState('All')
  const [selected,setSelected]=useState<any>(null)
  useEffect(()=>{fetch('/api/films').then(r=>r.json()).then(d=>{if(Array.isArray(d)&&d.length>0) setFilms(d)})},[])
  const filtered=genre==='All'?films:films.filter(f=>f.genre===genre)
  const featured=filtered.filter(f=>f.featured_score>300)[0]||filtered[0]
  return <main style={{background:'#050505',color:'#fff',minHeight:'100vh'}}>
    <nav style={{position:'fixed',top:0,width:'100%',zIndex:50,display:'flex',justifyContent:'space-between',padding:'16px 48px',background:'linear-gradient(rgba(0,0,0,.9),transparent)',backdropFilter:'blur(2px)'}}>
      <div style={{fontWeight:900,fontSize:22,letterSpacing:'-1px',color:'#E50914'}}>BREAKTHROUGH.WATCH</div>
      <div style={{display:'flex',gap:12}}>
        <a href='/bot' style={{background:'#22c55e',color:'#000',padding:'8px 16px',borderRadius:999,textDecoration:'none',fontWeight:900,fontSize:12}}>🤖 BOT</a>
        <a href='/studio' style={{background:'#fff',color:'#000',padding:'8px 16px',borderRadius:999,textDecoration:'none',fontWeight:900,fontSize:12}}>STUDIO</a>
      </div>
    </nav>
    {featured&&<div style={{position:'relative',height:'85vh',overflow:'hidden'}}>
      <video src={featured.video_url} autoPlay muted loop style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(77deg,rgba(0,0,0,.9) 30%,transparent 85%),linear-gradient(to top,#050505 5%,transparent 40%)'}}/>
      <div style={{position:'absolute',bottom:'20%',left:48,maxWidth:600}}>
        <div style={{background:'#E50914',display:'inline-block',padding:'2px 8px',fontSize:10,fontWeight:900,letterSpacing:2,marginBottom:12}}>FEATURED • AI GENERATED</div>
        <h1 style={{fontSize:56,fontWeight:900,lineHeight:.9,marginBottom:12}}>{featured.title}</h1>
        <p style={{color:'#ccc',fontSize:16,lineHeight:1.4,marginBottom:16}}>{featured.synopsis}</p>
        <div style={{display:'flex',gap:12}}>
          <button onClick={()=>setSelected(featured)} style={{background:'#fff',color:'#000',border:'none',padding:'10px 28px',borderRadius:4,fontWeight:900,fontSize:16}}>▶ Play</button>
          <button style={{background:'rgba(109,109,110,.7)',color:'#fff',border:'none',padding:'10px 28px',borderRadius:4,fontWeight:900,fontSize:16}}>ⓘ More Info</button>
        </div>
        <div style={{marginTop:12,fontSize:11,color:'#22c55e'}}>Match {featured.match}% • {featured.views?.toLocaleString()} views • Score {Math.round(featured.featured_score||0)}</div>
      </div>
    </div>}
    <div style={{padding:'0 48px',marginTop:-60,position:'relative',zIndex:2}}>
      <div style={{display:'flex',gap:8,marginBottom:20,overflowX:'auto'}}>{GENRES.map(g=><button key={g} onClick={()=>setGenre(g)} style={{background:genre===g?'#fff':'rgba(255,255,255,.15)',color:genre===g?'#000':'#fff',border:'none',padding:'6px 14px',borderRadius:999,fontSize:12,fontWeight:600,whiteSpace:'nowrap'}}>{g}</button>)}</div>
      <h3 style={{fontWeight:900,marginBottom:12}}>Trending Now • AI Films That Were Never Filmed</h3>
      <div className='netflix-row'>{filtered.map(f=><div key={f.id} className='film-card' onClick={()=>setSelected(f)}><img src={f.poster||'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500'} alt={f.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/><div className='film-overlay'><div style={{fontWeight:900,fontSize:12}}>{f.title}</div><div style={{fontSize:10,color:'#22c55e'}}>{f.match}% Match • {f.genre}</div></div></div>)}</div>
      <h3 style={{fontWeight:900,margin:'32px 0 12px'}}>Scheduled Releases • Bot Managed</h3>
      <div className='netflix-row'>{filtered.slice(0,5).map(f=><div key={f.id+'s'} className='film-card' style={{minWidth:200,height:120}}><div style={{padding:16}}><div style={{fontSize:11,color:'#888'}}>COMING {new Date(Date.now()+86400000*2).toLocaleDateString()}</div><div style={{fontWeight:900,marginTop:4}}>{f.title}</div><div style={{fontSize:11,color:'#ccc',marginTop:4}}>Bot scheduled</div></div></div>)}</div>
    </div>
    {selected&&<div onClick={()=>setSelected(null)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,.9)',zIndex:100,display:'flex',alignItems:'center',justifyContent:'center',padding:20}}><div onClick={e=>e.stopPropagation()} style={{background:'#181818',borderRadius:8,overflow:'hidden',maxWidth:800,width:'100%'}}><video src={selected.video_url} controls autoPlay style={{width:'100%',height:400,objectFit:'cover'}}/><div style={{padding:20}}><h2 style={{fontWeight:900,fontSize:24}}>{selected.title}</h2><p style={{color:'#ccc',marginTop:8}}>{selected.synopsis}</p><div style={{marginTop:12,display:'flex',gap:8}}><span style={{background:'#333',padding:'2px 8px',borderRadius:4,fontSize:11}}>{selected.genre}</span><span style={{color:'#22c55e',fontSize:11}}>{selected.match}% Match</span><span style={{color:'#888',fontSize:11}}>{selected.views} views</span></div><button onClick={()=>setSelected(null)} style={{marginTop:16,background:'#fff',color:'#000',border:'none',padding:'8px 16px',borderRadius:4,fontWeight:900}}>Close</button></div></div></div>}
    <footer style={{padding:'40px 48px',color:'#666',fontSize:11,marginTop:40}}>BREAKTHROUGH.WATCH © 2025 - Every film was never filmed. AI generated cinema. Hobby plan - bot runs daily at 1am.</footer>
  </main>
}
