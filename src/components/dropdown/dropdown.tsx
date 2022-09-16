import React, { Ref } from 'react'
import { FilmitemType } from '../../types/filmitem'
import Dropdownitem from '../dropdownitem/dropdownitem'
import './dropdown.css'

function Dropdown(props:{items:FilmitemType[]|undefined,onItemClick:((id:number)=>void)|undefined}) {
  if(!props || !props.items){
    return (
      <div className='dropdown-container'>
        <Dropdownitem item={undefined}/>
      </div>
    )
  }
  return (
    <div className='dropdown-container'>
      {props.items.map((item:FilmitemType)=><Dropdownitem item={item}/>)}
    </div>
  )
}

export default Dropdown