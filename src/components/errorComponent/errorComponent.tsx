import { Error, ErrorList } from '../../types/errortypes';
import ErrorPortal from '../errorportal/errorportal';
import './errorComponent.css'


function ErrorComponent(props:{errorListe:ErrorList}) {

    
    if(!props || !props.errorListe){
        return null;
    }

    

  return (
    <ErrorPortal wrapperId="react-portal-modal-container">
        <div className='error-wrapper '>
            {props.errorListe.map((error:Error,index:number)=>{
                return(
                <div key={index} className={error.type + ' error-box show-vertical'}>
                    
                    <div className='error-box-title'>
                        {error.title}
                    </div>
                    <p>
                        {error.message}
                    </p>
                    <div className='loading-bar-container'>
                        <div className="loading-bar-content">
                        </div>
                    </div>
                </div>
            ) })}
        </div>
       
        
    </ErrorPortal>
  )
}


export default ErrorComponent