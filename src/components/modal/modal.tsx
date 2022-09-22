import React from 'react'
import { FilmitemType } from '../../types/filmitem'
import { CgClose } from 'react-icons/cg'
import './modal.css'
import BigFilmItem from '../big-filmitem/bigfilmitem'

function RecommendationModal(props:{
    items?:FilmitemType[]|undefined,
    onClose:(()=>void)
}) {
    if(!props || !props.items){
        return (
            <div className='modal-bg'>
                <div className='modal-content-box'>
                    <h1>Es gab ein Problem. Lade die Seite neu.</h1>
                    <div className='modal-close-box' onClick={props.onClose}>    
                        <CgClose />
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='modal-bg'>
            <div className='modal-content-box'>
                <h1>Hier sind die Empfehlungen für dich:</h1>
                <div className='modal-filmlist'>
                    {props.items.map(item=><BigFilmItem item={item} />)}                
                </div>
                <div className='modal-close-box' onClick={props.onClose}>    
                    <CgClose />
                </div>
            </div>
        </div>
    )
}

export default RecommendationModal