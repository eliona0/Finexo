import React from 'react'
import error from '../Components/assets/images/errorr.avif'

const Error = () => {
  return (
    <div style={{width: "100%",textAlign:"center"}}>
      <h1>404 Page Not Found </h1>
      <img src={error} alt="error msg" />
    </div>
  )
}

export default Error