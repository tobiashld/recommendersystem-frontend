import React from 'react'
import { CgClose } from 'react-icons/cg'
import './navbar.css'

function NavBar(props:{
    onClose:()=>void,
    items?:{link:any,title:string}[]
}) {
  return (
    <div className='navbar-complete'>
        <div className={"navbar-container"}>
            <h2>Menue</h2>
            <div className='modal-close-box' onClick={props.onClose}>    
                <CgClose />
            </div>
            {
              /*  props.items.map(item)*/
            }
        </div>
        <div className='navbar-shadow' onClick={props.onClose}></div>
    </div>
  )
}

export default NavBar