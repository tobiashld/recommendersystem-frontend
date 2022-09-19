import React, { JSXElementConstructor, ReactNode, useState } from 'react'
import './textinput.css'

type params = {
    onClick?: ((event:React.MouseEvent<HTMLInputElement, MouseEvent>)=>void),
    onChange?: ((event:React.ChangeEvent<HTMLInputElement>)=>void),
    onKeyDown?: ((event:React.KeyboardEvent<HTMLInputElement>)=>void),
    onKeyUp?: ((event:React.KeyboardEvent<HTMLInputElement>)=>void),
    onBlur?: (()=>void)
    style?: string,
    pattern?: string,
    onFocusPointOut?: boolean,
    placeholder?:string,
    children?:any,
    icon?:any,
    size?:'Big' | 'Small'
}

function TextInput(props:params) {
  const [focus,setFocus] = useState(false)

  if(!props){
    return (<div className='container'><input className='Big input'/></div>)
  }
  

  let classNames = props.size && props.size === 'Small'?'Small':'Big';
  classNames += props.icon?' input input-icon':' input input-wo-icon';

  return (
    <>
      {props.onFocusPointOut?<><div className={focus?'coverup':'coverup-gone'} onClick={()=>{if(props.onBlur)props.onBlur()}}></div></>:<></>}
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
              onFocus={()=>{setFocus(true)}}  
              pattern={props.pattern?props.pattern:undefined}   
              onBlur={(event)=>{if(props.onBlur){
                setFocus(false)
                //props.onBlur(event)
              }}}
              >{props.children}</input>
      </div>
    </>
  )
}

export default TextInput