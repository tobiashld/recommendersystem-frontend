import React,{useState} from 'react'
import { FilmitemType } from '../../types/filmitem'
import './bigfilmitem.css'
import filmpicnotfoundnonsvg from '../dropdownitem/images.jpg'

enum HoverCase {
    MouseIn,
    MouseOut,
}

function BigFilmItem(props:{
    item:FilmitemType|undefined
}) {
    const [isHovering,setisHovering] = useState(false);
    //console.log(props.item)
    if(!props || !props.item){
        return (
            <div className='bigfilmitem-box'>
                <p>Props.item fehlt!</p>
            </div>
        )
    }

    let handleHover = (isCase:HoverCase) => {
        switch(isCase){
            case HoverCase.MouseIn:
                setisHovering(true);
                break;
            case HoverCase.MouseOut:
                setisHovering(false);
                break;
            default:
                setisHovering(false);
                break;
        }
    }
    
    const fullImgPath = "https://image.tmdb.org/t/p/w154"+props.item.picture;
  return (
    <div className='bigfilmitem-box' onMouseOver={()=>handleHover(HoverCase.MouseIn)} onMouseOut={()=>handleHover(HoverCase.MouseOut)}>
        <div>
            <img src={props.item.picture=== "undefined"?filmpicnotfoundnonsvg:fullImgPath} alt={props.item.volltextName}/>
        </div>
        {isHovering?
        <div className='bigfilmitem-information'>
            <h6>{props.item.volltextName}</h6>
        </div>:<></>}
    </div>
  )
}



export default BigFilmItem