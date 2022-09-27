import React, { useState } from 'react'
import { FilmitemType, FilmitemTypeBewertet } from '../../types/filmitem'
import TextInput from '../input/textinput'
import { AiFillDelete } from 'react-icons/ai'
import { BiChevronDown,BiChevronUp } from 'react-icons/bi'
import './filmitem.css'
import filmnotfoundsvg from './filmpicnotfound.svg'

interface FilmitemTypeErweitert extends FilmitemTypeBewertet {
  changeRating:((value:number)=>void),
  onDelete:((item:FilmitemTypeBewertet)=>void)
}


function Filmitem(props:FilmitemTypeErweitert) {
  const [isExpanded,setIsExpanded] = useState(false)

  if(!props || !props.volltextName || !props.beschreibung || !props.picture){
    console.log('filmitem props überprüfen!')

    throw new Error("filmitem props überprüfen!")
  }
  let beschreibungClasses = "full-width description ".concat(isExpanded?"filmitem-desc-full":"gradient")
  let beschreibungBoxClasses = "flex-fuenf column text ".concat(isExpanded?"":"filmitem-container-relative")
  let chevronClasses = "filmitem-chevron ".concat(isExpanded?"":"fimitem-chevron-absolute")
  let bereinigteBeschreibung = new String(props.beschreibung)
  let unbereinigteBeschreibung = new String(props.beschreibung)
  if(props.beschreibung.split(" ").length >= 45){
    bereinigteBeschreibung = props.beschreibung.split(" ").slice(0,45).join(" ")+ " ";
  }else if(props.beschreibung.split(" ").length === 1){
    bereinigteBeschreibung = "Es liegt keine Beschreibung vor!"
    unbereinigteBeschreibung = "Es liegt keine Beschreibung vor!"
  }
  const fullImgPath = "https://image.tmdb.org/t/p/w92"+props.picture;
  return (
    <div className="filmitem-container">
      <div className={'big row flex'}>
        <div className={'flex-eins picture filmpic'} >
            <img src={(!props.picture || props.picture === "undefined")?filmnotfoundsvg:fullImgPath} alt={props.volltextName+" bild"}/>
        </div>
        <div className={beschreibungBoxClasses}>
          <div className={"full-width title top-line"}>
            <div className='flex-vier'>
              {props.volltextName}
              <AiFillDelete className='delete' onClick={()=>{props.onDelete(props)}}/>
            </div>
            {/* <div className='flex-eins relative'>
              <div className={'row flex bewertung'}>
                <TextInput regexValidator='^$|(?<!\S)[1-5](?!\S)' placeholder={props.userGivenRating.toString()} onKeyUp={(e)=>{if(props.changeRating)props.changeRating(Number(e.currentTarget.value))}} size='Small'/>
                 <h3 className=''>
                  /5
                  </h3> 
              </div>
            </div> */}
          </div>
          <div className={"full-width description"}>
            {props.releaseJahr}
          </div>
          <div className={beschreibungClasses}>
            <p>  
              {isExpanded?unbereinigteBeschreibung:bereinigteBeschreibung}
            </p>
          </div>
          {
            props.beschreibung === "undefined"?<></>:
            <div className={chevronClasses} onClick={()=>setIsExpanded(!isExpanded)}>
            {
              isExpanded?<BiChevronUp />:<BiChevronDown />
            }
            
          </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default Filmitem