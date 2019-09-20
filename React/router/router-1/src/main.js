import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const Main = () => (
    <Router>
        <App />
    </Router>
)

ReactDom.render(<Main />, document.getElementById('app'))