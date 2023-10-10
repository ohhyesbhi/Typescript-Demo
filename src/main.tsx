import React from 'react'
import ReactDOM from 'react-dom/client'
import Child from "../src/Child.tsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Child/>
  </React.StrictMode>,
)
