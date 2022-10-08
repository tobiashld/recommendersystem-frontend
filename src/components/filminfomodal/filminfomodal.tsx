import React, { useRef, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import useOutsideAlerter from '../../hooks/useOutsideAlert'
import serviceFunctions from '../../service/backendconnection'
import { APIGenre, APIGenreResponse } from '../../types/dbresponse'
import { FilmitemType } from '../../types/filmitem'
import Loadingspinner from '../loadingspinner/loadingspinner'
import './filminfomodal.css'

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
  console.log(props.item)
  return (
    <div className='info-modal-container'>
        <div className='info-modal-content' ref={infoContainerRef}>
            <h3>
                {props.item.volltextName}
            </h3>
            <div className='info-modal-close-box' onClick={props.onClose}>    
                    <CgClose />
            </div>
        </div>
    </div>
  )
}

export default FilmInfoModal