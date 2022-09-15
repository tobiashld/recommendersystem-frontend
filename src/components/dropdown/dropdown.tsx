import React from 'react'
import { FilmitemType } from '../../types/filmitem'

function Dropdown(props:any) {
  return (
    <div>{props.items.map((value:FilmitemType)=>value.title)}</div>
  )
}

export default Dropdown