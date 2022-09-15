import React, { JSXElementConstructor, ReactNode } from 'react'
import './textinput.css'

type params = {
    onClick?: ((event:React.MouseEvent<HTMLInputElement, MouseEvent>)=>void),
    onChange?: ((event:React.ChangeEvent<HTMLInputElement>)=>void),
    onKeyDown?: ((event:React.KeyboardEvent<HTMLInputElement>)=>void),
    onKeyUp?: ((event:React.KeyboardEvent<HTMLInputElement>)=>void),
    placeholder?:string,
    children?:any,
    icon?:any
}

function TextInput(props:params) {


  return (
    <div className='container'>
        <div className="icon">{props.icon}</div>
        <input 
            type="text"
            className='input'
            onClick={(event)=>{if(props.onClick)props.onClick(event)}}
            onChange={(event)=>{if(props.onChange)props.onChange(event)}}
            onKeyDown={(event)=>{if(props.onKeyDown)props.onKeyDown(event)}}
            onKeyUp={(event)=>{if(props.onKeyUp)props.onKeyUp(event)}}
            placeholder={props.placeholder?props.placeholder:undefined}        
        >{props.children}</input>
    </div>
  )
}

export default TextInput