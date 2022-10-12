import React from 'react'
import {RiCloudOffLine} from 'react-icons/ri'

function OfflineHomescreen() {
  return (
    <div className="App align-center">
        <div className="login-box-small">
            <h3 id='header'>Sie sind Offline</h3>
            <RiCloudOffLine />
        </div>
    </div>
  )
}

export default OfflineHomescreen