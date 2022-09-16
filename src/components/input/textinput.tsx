import React, { JSXElementConstructor, ReactNode } from 'react'
import './textinput.css'

type params = {
    onClick?: ((event:React.MouseEvent<HTMLInputElement, MouseEvent>)=>void),
    onChange?: ((event:React.ChangeEvent<HTMLInputElement>)=>void),
    onKeyDown?: ((event:React.KeyboardEvent<HTMLInputElement>)=>void),
    onKeyUp?: ((event:React.KeyboardEvent<HTMLInputElement>)=>void),
    onBlur?: ((event:React.FocusEvent<HTMLInputElement, Element>)=>void)
    style?: string,
    pattern?: string,
    placeholder?:string,
    children?:any,
    icon?:any,
    size?:'Big' | 'Small'
}

function TextInput(props:params) {
  if(!props){
    return (<div className='container'><input className='Big input'/></div>)
  }


  let classNames = props.size && props.size === 'Small'?'Small':'Big';
  classNames += props.icon?' input input-icon':' input input-wo-icon';

  return (
    <div className='container'>
        {props.icon?<div className="icon">{props.icon}</div>:<></>}
        <input 
            type="text"
            className={classNames}
            onClick={(event)=>{if(props.onClick)props.onClick(event)}}
            onChange={(event)=>{if(props.onChange)props.onChange(event)}}
            onKeyDown={(event)=>{if(props.onKeyDown)props.onKeyDown(event)}}
            onKeyUp={(event)=>{if(props.onKeyUp)props.onKeyUp(event)}}
            placeholder={props.placeholder?props.placeholder:undefined}     
            pattern={props.pattern?props.pattern:undefined}   
            onBlur={(event)=>{if(props.onBlur)props.onBlur(event)}}
        >{props.children}</input>
    </div>
  )
}

export default TextInput