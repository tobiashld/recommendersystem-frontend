import React, { useRef, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { BsPlayCircle } from 'react-icons/bs'
import useOutsideAlerter from '../../hooks/useOutsideAlert'
import serviceFunctions from '../../service/backendconnection'
import { APIGenre, APIGenreResponse } from '../../types/dbresponse'
import { FilmitemType } from '../../types/filmitem'
import Loadingspinner from '../loadingspinner/loadingspinner'
import filmpicnotfoundnonsvg from '../dropdownitem/images.jpeg'
import './filminfomodal.css'
import { isMobile } from 'react-device-detect'

function FilmInfoModal(props:{item:FilmitemType|undefined,onClose:()=>void}) {
    const infoContainerRef = useRef(null);
    const [genres,setGenres] = useState<APIGenre[]>([])
    useOutsideAlerter(infoContainerRef,false,()=>props.onClose())
  if(!props || !props.item || !props.onClose){
    return (
        <div>
            <Loadingspinner size='Small' />
        </div>
    )
  }
  serviceFunctions.getGenres((response:APIGenreResponse)=>setGenres(response.genres))
  const fullImgPath = "https://image.tmdb.org/t/p/w185"+props.item.picture;
  return (
    <div className='info-modal-container'>
        <div className='info-modal-content' ref={infoContainerRef}>
            <div className='info-modal-header'>
                {
                    !isMobile?
                    <div className='info-modal-img'>
                        <div className='filmitem-img' >
                            <img src={(!props.item.picture || props.item.picture === "undefined")?filmpicnotfoundnonsvg:fullImgPath} alt={props.item.volltextName} className="picture-auto-resize"/>
                        </div>
                    </div>:<></>
                }
                <div className='info-modal-header-infos'>
                    <h1>
                        {props.item.volltextName}
                    </h1>
                    <h3>
                        {props.item.releaseJahr}
                    </h3>
                    <div className='genre-container'>
                    {
                        props.item.genre_ids? 
                        
                            props.item.genre_ids.map((item:number)=>
                                {return <div className='genre-item'><div className='genre-item-shadow'></div>{genres.find((genre:APIGenre)=>genre.id===item)?.name}</div>}
                            )
                        
                        :<></>
                    }
                    {
                        props.item.adult?
                        <div className='genre-item'><div className='genre-item-shadow'></div>FSK-18</div>:<></>
                    }
                    {
                        props.item.original_language?
                        <div className='genre-item'><div className='genre-item-shadow'></div>Originale Sprache: {props.item.original_language}</div>
                        :<></>
                    }
                    {
                        props.item.vote_average?
                        <div className='genre-item'><div className='genre-item-shadow'></div>Bewertung {props.item.vote_average}/10</div>
                        :<></>
                    }
                    {
                        props.item.vote_count?
                        <div className='genre-item'><div className='genre-item-shadow'></div>{props.item.vote_count} Bewertungen</div>
                        :<></>
                    }   
                    <div className={'genre-item clickable-link-container'}><div className='genre-item-shadow'></div><a className="clickable-link" href={'https://www.youtube.com/results?search_query='+props.item.searchtitle.split(" ").join("+")+'+trailer'} target="_blank" rel="noopener noreferrer">Trailer <BsPlayCircle /></a></div>
                    </div>
                    
                </div>
            </div>
            <div className='info-modal-beschreibung'>
                {(props.item.beschreibung && props.item.beschreibung !== "undefined")?props.item.beschreibung:"Zu diesem Film liegen keine Informationen bereit"}
            </div>

            
            <div className='info-modal-close-box' onClick={props.onClose}>    
                    <CgClose />
            </div>
        </div>
    </div>
  )
}

export default FilmInfoModal