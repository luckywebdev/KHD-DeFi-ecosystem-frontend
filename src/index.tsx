import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'

ReactDOM.render(
  <div>
    
  <React.StrictMode>
    <Providers>
    <div 
      className="sticky"
      style={{
        position: "absolute", 
        top: 0, 
        left: 60, 
        width: "30%", 
        height: 60, 
        backgroundColor: "white", 
        zIndex: 1000000, 
        alignItems: "center",
        paddingLeft: 20,
        paddingTop: 15,
      }}
    >
      <span style={{fontSize: 30, fontWeight: 'bold', color: "gold"}}>KHDSwap</span>
    </div>
      <App />
    </Providers>
  </React.StrictMode>
  </div>,
  document.getElementById('root'),
)
