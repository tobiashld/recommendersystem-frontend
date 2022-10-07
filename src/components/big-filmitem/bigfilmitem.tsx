import React,{useState} from 'react'
import { FilmitemType } from '../../types/filmitem'
import './bigfilmitem.css'
import filmpicnotfoundnonsvg from '../dropdownitem/images.jpeg'
import { GrCircleInformation } from 'react-icons/gr'
import InfoModal from '../infomodal/infomodal'

enum HoverCase{
    MouseIn,
    MouseOut,
}

function BigFilmItem(props:{
    item:FilmitemType|undefined
}) {
    const [infopopup,setinfopopup] = useState((props && props.item && props.item.picture !== "undefined")?false:true);
    //console.log(props.item)
    if(!props || !props.item){
        return (
            <div className='bigfilmitem-box'>
                <p>Props.item fehlt!</p>
            </div>
        )
    }

    let handleHover = (isCase:HoverCase) => {
        if(props.item?.picture === "undefined"){
            return
        }
        switch(isCase){
            case HoverCase.MouseIn:
                setinfopopup(true);
                break;
            case HoverCase.MouseOut:
                setinfopopup(false);
                break;
            default:
                setinfopopup(false);
                break;
        }
    }
    
    const fullImgPath = "https://image.tmdb.org/t/p/w500"+props.item.picture;
  return (
    <div className='bigfilmitem-box' >
        {infopopup?<InfoModal item={props.item} />:<></>}
        
        <div className='filmitem-img' >
            <img src={props.item.picture=== "undefined"?filmpicnotfoundnonsvg:fullImgPath} alt={props.item.volltextName} className="picture-auto-resize"/>
        </div>
        <div className='infoButton' onClick={()=>{setinfopopup(!infopopup)}}>
            <GrCircleInformation />
        </div>
        <div className='volltext-bigfilm'>
            {props.item.volltextName}
        </div>
    </div>
  )
}



export default BigFilmItem