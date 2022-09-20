import React, { useState } from 'react'
import { FilmitemType } from '../../types/filmitem'
import TextInput from '../input/textinput'
import { AiFillDelete } from 'react-icons/ai'
import './filmitem.css'

interface FilmitemTypeErweitert extends FilmitemType {
  changeRating:((value:number)=>void),
  onDelete:((item:FilmitemType)=>void)
}


function Filmitem(props:FilmitemTypeErweitert) {
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
              <AiFillDelete className='delete' onClick={()=>{props.onDelete(props)}}/>
            </div>
            <div className='flex-eins relative'>
              <div className={'row flex bewertung'}>
                <TextInput pattern={"[0-9]"} placeholder={props.userGivenRating.toString()} onKeyUp={(e)=>{if(props.changeRating)props.changeRating(Number(e.currentTarget.value))}} size='Small'/>
                 <p className=''>
                  /5
                  </p> 
              </div>
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