import React from 'react'
import { FilmitemType, RecommendFilmItem } from '../../types/filmitem'
import { CgClose } from 'react-icons/cg'
import './modal.css'
import BigFilmItem from '../big-filmitem/bigfilmitem'
import Loadingspinner from '../loadingspinner/loadingspinner'

function RecommendationModal(props:{
    items?:RecommendFilmItem[]|undefined,
    onClose:(()=>void)
}) {
    
    if(!props || !props.items){
        return (
            <div className='modal-bg'>
                <div className='modal-content-box'>
                    <h1>Hier sind die Empfehlungen für dich:</h1>
                    <div className='recommendation-loading-spinner'>
                        <Loadingspinner size='Big' />
                    </div>
                    <div className='modal-close-box' onClick={props.onClose}>    
                        <CgClose />
                    </div>
                </div>
            </div>
        )
    }
    let test = 0;
    //props.items.every(item=>console.log(item))


    return (
        <div className='modal-bg'>
            <div className='modal-content-box'>
                <h1>Hier sind die Empfehlungen für dich:</h1>

                {props.items.map((film,index)=>{
                    if(film.recommendations.length > 6){
                        film.recommendations = film.recommendations.slice(0,6)
                    }
                    return (
                        <div key={index} className="r-filmself">
                            <div className="r-filmself-header">
                                Aufgrund von <strong>{film.volltextName} </strong> empfehlen wir dir:
                            </div>
                            <div  className='modal-filmlist'>
                            {
                                film.recommendations.map(
                                    (recommendation,index)=>{
                                        return (
                                            <BigFilmItem item={recommendation} key={index} />
                                        )
                                    }
                                )
                            }
                            </div>
                        </div>
                        )
                    }
                
                )}
                <div className='modal-close-box' onClick={props.onClose}>    
                    <CgClose />
                </div>                
            </div>
                
        </div>
    )
}

export default RecommendationModal