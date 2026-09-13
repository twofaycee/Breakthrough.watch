'use client'
import {useState} from 'react'
export default function Bot(){const [l,setL]=useState<any>(null);return <main style={{background:'#050505',color:'#fff',padding:20}}><h1>Bot - Green Build</h1><button onClick={async()=>{const r=await fetch('/api/bot/run');setL(await r.json())}} style={{background:'#22c55e',padding:'10px 20px',borderRadius:999,border:'none',fontWeight:900}}>Run Bot</button>{l&&<pre>{JSON.stringify(l,null,2)}</pre>}</main>}
