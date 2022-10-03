import React from 'react'
import Loadingspinner from '../../components/loadingspinner/loadingspinner'
import './backendnotreachable.css'

function BackendNotReachable() {
  return (
    <div className="App align-center">
        <div className="login-box-small">
            <h3 id='header'>Warten auf Backend</h3>
            <Loadingspinner size='Big' />
        </div>
    </div>
  )
}

export default BackendNotReachable