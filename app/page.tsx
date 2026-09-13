'use client'
import {useState,useEffect} from 'react'
import {FILMS,GENRES} from '../lib/films'
export default function Page(){const [films,setFilms]=useState(FILMS);return <main style={{background:'#050505',color:'#fff',padding:20}}><h1 style={{fontSize:48,fontWeight:900}}>BREAKTHROUGH.WATCH - Every film was never filmed</h1><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:12,marginTop:20}}>{films.map(x=><div key={x.id} style={{background:'#111',borderRadius:12}}><video src={x.video_url} muted style={{width:'100%',height:200,objectFit:'cover'}}/><div style={{padding:10}}>{x.title}</div></div>)}</div></main>}
