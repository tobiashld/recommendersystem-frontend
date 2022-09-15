import React from 'react'
import globals from '../../globals'
import './filmitem.css'

type FilmitemType = {
  title: string, beschreibung: string, imgPath:string, releaseJahr:string
} | null


function Filmitem(props?:FilmitemType) {
  if(!props || !props.title || !props.beschreibung || !props.imgPath){
    console.log('filmitem props überprüfen!')

    throw new Error("filmitem props überprüfen!")
  }
    
  let bereinigteBeschreibung = new String(props.beschreibung)


  if(props.beschreibung.split(" ").length >= 45){
    bereinigteBeschreibung = props.beschreibung.split(" ").slice(0,45).join(" ")+ " ";
  }
  const fullImgPath = "https://image.tmdb.org/t/p/w92"+props.imgPath;

  return (
    <div className="filmitem-container">
      <div className={'big row flex'}>
        <div className={'flex-eins picture'} >
            <img src={fullImgPath} alt={props.title+" bild"}/>
        </div>
        <div className={"flex-fuenf column text"}>
          <div className={"full-width title top-line"}>
            <div className='flex-vier'>
              {props.title}
            </div>
            <div className='flex-eins'>
              3/5
            </div>
          </div>
          <div className={"full-width description"}>
            {props.releaseJahr}
          </div>
          <div className={"full-width description gradient"}>
            <p>  
              {bereinigteBeschreibung}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filmitem