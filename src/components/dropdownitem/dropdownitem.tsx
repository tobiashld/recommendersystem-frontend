import React from 'react'
import { FilmitemType, FilmitemTypeBewertet } from '../../types/filmitem'
import Loadingspinner from '../loadingspinner/loadingspinner'
import './dropdownitem.css'
import filmpicnotfoundsvg from './filmpicnotfound.svg'
function Dropdownitem(props:{item:FilmitemTypeBewertet|undefined,onChoice?:((item:FilmitemTypeBewertet|undefined)=>void)},) {
    if(!props || !props.item){
        return (<div className='item-wrapper loading-container'><Loadingspinner size='Medium'/></div>)
    }

    const fullImgPath = "https://image.tmdb.org/t/p/w45"+props.item.picture;

  return (
    <div className='item-wrapper' onClick={()=>{
        if(props && props.onChoice){
            props.onChoice(props.item)
        }
    }}>
        <div className='picture'>
            <img src={props.item.picture=== "undefined"?filmpicnotfoundsvg:fullImgPath} alt={props.item.volltextName}/>
        </div>
        <div className='flex column dropdown-item-text'>
            <h5>{props.item.volltextName}</h5>
            <p>{props.item.releaseJahr}</p>
        </div>
    </div>
  )
}

export default Dropdownitem