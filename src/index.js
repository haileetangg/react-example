import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from './App'

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={{token: { colorPrimary: 'hotpink' }}}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)