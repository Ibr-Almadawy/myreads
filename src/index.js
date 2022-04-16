import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    // Add BrowserRouter to render App inside it
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'))
