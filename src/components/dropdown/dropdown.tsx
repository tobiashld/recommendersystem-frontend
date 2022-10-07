import { useEffect, useRef,useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Slider from 'react-slick'
import useOutsideAlerter from '../../hooks/useOutsideAlert'
import { FilmitemTypeBewertet } from '../../types/filmitem'
import Dropdownitem from '../dropdownitem/dropdownitem'
import './dropdown.css'

function Dropdown(props:{setTextinputfocus?:(value:boolean)=>void,items:FilmitemTypeBewertet[]|undefined,onItemClick:((item:FilmitemTypeBewertet|undefined)=>void)|undefined}) {
  const [slideIndex,setSlideIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);
  const dropdownRef = useRef(null)
  useOutsideAlerter(dropdownRef,()=>{
    if(props && props.setTextinputfocus)props.setTextinputfocus(false)
    console.log("test")
  }
    
  )
  useEffect(()=>{
    sliderRef.current?.slickGoTo(0)
    setSlideIndex(0)
  },[props.items,props])

  if(!props || !props.items){
    return (
      <div className='dropdown-container show'>
        <Dropdownitem item={undefined} />
      </div>
    )
  }else if(props.items.length === 0){

    return(
    <div ref={dropdownRef} className='dropdown-container show no-result'>
        <h6>Keine Suchergebnisse</h6>
      </div>)
  }

  var settings =  {
      accessibility:true,
      dots:false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      dragable:true,
      arrows:false,
      infinite:false,
      className:"slider-box-custom",
      vertical: true,
      beforeChange:(current:any,next:any)=>setSlideIndex(next)
  }
  return (
    <div className='dropdown-container' ref={dropdownRef}>
      <div className='search-arrow-up' onClick={()=>{
        if(sliderRef !== null && sliderRef.current !== null )sliderRef.current.slickGoTo(slideIndex-3)}}
      >
          {slideIndex > 0?
          <FiChevronUp />
          :
          <></>
          }
      </div>
      <Slider {...settings} ref={sliderRef} >
      
      {props.items.map((item:FilmitemTypeBewertet,index)=><Dropdownitem key={index} item={item} onChoice={props.onItemClick}/>)}
      </Slider>
      <div className='search-arrow-down' onClick={()=>{
        if(sliderRef !== null && sliderRef.current !== null )sliderRef.current.slickGoTo(slideIndex+3)}}>
          {slideIndex < (props.items.length-4)?
          <FiChevronDown />
          :
          <></>  }
      </div>
    
      
    </div>
  )
}

export default Dropdown