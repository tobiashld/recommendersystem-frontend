import { useRef,useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Slider from 'react-slick'
import { FilmitemTypeBewertet } from '../../types/filmitem'
import Dropdownitem from '../dropdownitem/dropdownitem'
import './dropdown.css'

function Dropdown(props:{items:FilmitemTypeBewertet[]|undefined,onItemClick:((item:FilmitemTypeBewertet|undefined)=>void)|undefined}) {
  const [slideIndex,setSlideIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  if(!props || !props.items){
    return (
      <div className='dropdown-container show'>
        <Dropdownitem item={undefined} />
      </div>
    )
  }

  var settings =  {
      accessibility:true,
      dots:false,
      speed: 500,
      slidesToShow: 4,
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
    <div className='dropdown-container' >
      <div className='search-arrow-up' onClick={()=>{
        if(sliderRef !== null && sliderRef.current !== null )sliderRef.current.slickGoTo(slideIndex-3)}}
      >
          {slideIndex !== 0?
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