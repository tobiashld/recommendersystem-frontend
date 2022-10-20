import { useState } from 'react'
import {  FilmitemType, FilmitemTypeBewertet } from '../../types/filmitem'
import { AiFillDelete, AiOutlineInfoCircle } from 'react-icons/ai'
import { BiChevronDown,BiChevronUp } from 'react-icons/bi'
import './filmitem.css'
import filmpicnotfoundnonsvg from '../dropdownitem/images.jpeg'

interface FilmitemTypeErweitert extends FilmitemTypeBewertet {
  changeRating:((value:number)=>void),
  onDelete:((item:FilmitemTypeBewertet)=>void),
  setInfoContent:((item:FilmitemType)=>void)
}


function Filmitem(props:FilmitemTypeErweitert) {
  const [isExpanded,setIsExpanded] = useState(false)
  if(!props || !props.volltextName || !props.beschreibung){

    throw new Error("filmitem props überprüfen!")
  }
  let beschreibungClasses = "full-width description ".concat(isExpanded?"filmitem-desc-full":"gradient")
  let beschreibungBoxClasses = "flex-fuenf column text ".concat(isExpanded?"":"filmitem-container-relative")
  let chevronClasses = "filmitem-chevron ".concat(isExpanded?"":"fimitem-chevron-absolute")
  let bereinigteBeschreibung = props.beschreibung.toString()
  let unbereinigteBeschreibung = props.beschreibung.toString()
  if(props.beschreibung.split(" ").length >= 45){
    bereinigteBeschreibung = props.beschreibung.split(" ").slice(0,45).join(" ")+ " ";
  }else if(props.beschreibung.split(" ").length === 1){
    bereinigteBeschreibung = "Es liegt keine Beschreibung vor!"
    unbereinigteBeschreibung = "Es liegt keine Beschreibung vor!"
  }
  const fullImgPath = "https://image.tmdb.org/t/p/w92"+props.picture;
  return (
    
    <div className={"filmitem-container filmitem-container-box"}>
      <div className={'big row flex '}>
        <div className='delete-container' onClick={()=>{props.onDelete(props)}}>
          <AiFillDelete className='delete'/>
        </div>
        <div className='infoButton-filmitem' onClick={()=>{props.setInfoContent({
          id:props.id,
          adult:props.adult,
          backdrop:props.backdrop,
          beschreibung:props.beschreibung,
          genre_ids:props.genre_ids,
          isFromTmdb:props.isFromTmdb,
          netflixid:props.netflixid,
          original_language:props.original_language,
          picture:props.picture,
          popularity:props.popularity,
          releaseJahr:props.releaseJahr,
          searchtitle:props.searchtitle,
          tmdb_id:props.tmdb_id,
          volltextName:props.volltextName,
          vote_average:props.vote_average,
          vote_count:props.vote_count
        })}}>
            <AiOutlineInfoCircle className='info'/>
        </div>
        <div className={'flex-eins picture filmpic'} >
            <img src={(!props.picture || props.picture === "undefined")?filmpicnotfoundnonsvg:fullImgPath} alt={props.volltextName+" bild"} className="picture-auto-resize"/>
        </div>
        <div className={beschreibungBoxClasses}>
          <div className={"full-width title top-line"}>
            <div className='flex-vier'>
              {props.volltextName}
              
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