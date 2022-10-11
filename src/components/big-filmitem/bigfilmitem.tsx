import { FilmitemType } from '../../types/filmitem'
import './bigfilmitem.css'
import filmpicnotfoundnonsvg from '../dropdownitem/images.jpeg'
import { GrCircleInformation } from 'react-icons/gr'


function BigFilmItem(props:{
    item:FilmitemType|undefined,
    setInfoContent:(item:FilmitemType|undefined)=>void
}) {
    if(!props || !props.item){
        return (
            <div className='bigfilmitem-box'>
                <p>Props.item fehlt!</p>
            </div>
        )
    }
    
    const fullImgPath = "https://image.tmdb.org/t/p/w185"+props.item.picture;
  return (
    <div className='bigfilmitem-box' >
        
        <div className='filmitem-img' >
            <img src={(!props.item.picture || props.item.picture === "undefined")?filmpicnotfoundnonsvg:fullImgPath} alt={props.item.volltextName} className="picture-auto-resize"/>
        </div>
        <div className='infoButton' onClick={()=>{props.setInfoContent(props.item)}}>
            <GrCircleInformation />
        </div>
        <div className='volltext-bigfilm'>
            {props.item.volltextName}
        </div>
    </div>
  )
}



export default BigFilmItem