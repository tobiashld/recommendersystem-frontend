import { FilmitemType, RecommendFilmItem } from '../../types/filmitem'
import { CgClose } from 'react-icons/cg'
import './modal.css'
import Slider from 'react-slick'
import BigFilmItem from '../big-filmitem/bigfilmitem'
import Loadingspinner from '../loadingspinner/loadingspinner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GrNext, GrPrevious } from 'react-icons/gr'
import useOutsideAlerter from '../../hooks/useOutsideAlert'
import {useRef} from 'react'
function RecommendationModal(props:{
    itemsEinzelnd?:RecommendFilmItem[] | undefined,
    itemsGesamt?:FilmitemType[] | undefined,
    recommendationFlag?:boolean|undefined,
    onClose:(()=>void)
}) {
    const modalRef = useRef(null)
   useOutsideAlerter(modalRef,()=>{if(props.onClose)props.onClose()})
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        nextArrow: <GrNext />,
        prevArrow: <GrPrevious />,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        ]
      };

      var settingsGesamt = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        nextArrow: <GrNext />,
        prevArrow: <GrPrevious />,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        ]
      };

    return (
        <div className='modal-bg' >
            <div className='modal-content-box' ref={modalRef}>
                <h1>Hier sind die Empfehlungen für dich:</h1>
                {
                    (!props || (!props.itemsEinzelnd && !props.itemsGesamt))?
                    <div className='recommendation-loading-spinner'>
                        <Loadingspinner size='Big' />
                    </div>
                    :
                    (props && props.recommendationFlag && props.itemsGesamt)?
                    <div className={"r-filmself "}>
                        <div className="r-filmself-header">
                            Aufgrund von den selektierten Filmen empfehlen wir dir:
                        </div>
                        <Slider {...settingsGesamt}>
                        {
                            props.itemsGesamt.map((film,index)=>{
                                return (
                                    <BigFilmItem item={film} key={index} />
                                    )
                            })
                        }
                        </Slider>
                    </div>
                    
                   :
                   (props && !props.recommendationFlag && props.itemsEinzelnd)?
                    props.itemsEinzelnd.map((film,index)=>{  return (
                            <div key={index} className={"r-filmself "}>
                                <div className="r-filmself-header">
                                    Aufgrund von <strong>{film.volltextName} </strong> empfehlen wir dir:
                                </div>
                                <Slider {...settings}>
                                {
                                    film.recommendations.map(
                                        (recommendation,index)=>{
                                            return (
                                                    <BigFilmItem item={recommendation} key={index} />
                                                
                                            )
                                        }
                                    )
                                }
                                </Slider>
                            </div>)
                        })
                        :
                        <div className='recommendation-loading-spinner'>
                            <Loadingspinner size='Big' />
                        </div>
                }
                            
                        
                   
                
                
                
                <div className='modal-close-box' onClick={props.onClose}>    
                    <CgClose />
                </div>                
            </div>
                
        </div>
    )
}



export default RecommendationModal