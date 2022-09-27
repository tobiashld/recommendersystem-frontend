import React from 'react'
import Loadingspinner from '../../components/loadingspinner/loadingspinner'

function BackendNotReachable() {
  return (
    <div className="App">
        <div className="login-box">
            <h3>Warten auf Backend</h3>
            <Loadingspinner size='Big' />
        </div>
    </div>
  )
}

export default BackendNotReachable