import React, {useEffect} from 'react'
import { Error, ErrorList } from '../../types/errortypes';
import ErrorPortal from '../errorportal/errorportal';
import './errorComponent.css'


function ErrorComponent(props:{errorListe:ErrorList}) {

    
    if(!props || !props.errorListe){
        return null;
    }

    

  return (
    <ErrorPortal wrapperId="react-portal-modal-container">
        <div className='error-wrapper'>
            {props.errorListe.map((error:Error)=>{
                return(
                <div className={error.type + ' error-box'}>
                    <div className='error-box-title'>
                        {error.title}
                    </div>
                    <p>
                        {error.message}
                    </p>
                </div>
            ) })}
        </div>
       
        
    </ErrorPortal>
  )
}


export default ErrorComponent