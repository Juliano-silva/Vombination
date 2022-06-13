import style from './Wiki.module.css'
import React from 'react';
export default function Novidade({May}){
    const {personagem,armas,historia,slug,dmcProtagonistas} = May.fields
    return(
        <div className={style.CorpoDmc}>
        <img src={'https:'+dmcProtagonistas[0].fields.file.url} className={style.DmcImg}/>
        <img src={'https:'+dmcProtagonistas[1].fields.file.url} className={style.DmcImg}/>
        <img src={'https:'+dmcProtagonistas[2].fields.file.url} className={style.DmcImg}/>
        <img src={'https:'+dmcProtagonistas[3].fields.file.url} className={style.DmcImg}/>
        <img src={'https:'+dmcProtagonistas[4].fields.file.url} className={style.DmcImg}/>
        <img src={'https:'+dmcProtagonistas[5].fields.file.url} className={style.DmcImg}/>
        <div className={style.DmcConteúdo}>
            <h1>{"Personagem: "+personagem}</h1>
            <h2>{"ARMAS: "+armas+";"}</h2>
            <h1>História</h1>
            <p>{historia}</p>
            </div>
        </div>
    )
}