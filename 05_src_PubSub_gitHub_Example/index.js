import React from 'react'
import ReactDON from 'react-dom/client'
import App from './App'

ReactDON.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)