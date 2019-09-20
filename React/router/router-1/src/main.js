import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import ReactDom from 'react-dom'

const App = () =>　(
    <Router>
        <ul>
            <li><Link to='/'>Index</Link></li>
            <li><Link to={{pathname: '/about',search: 'sort=name', hash: '#users'}}>About</Link></li>
            <li><NavLink to='/user' activeStyle={{fontWeight: 'bold',color: 'red'}}>user</NavLink></li>
        </ul>
        <div>
            <Route path='/' exact render={()=><div>Index页面</div>} />
            <Route path='/about' render={(props)=>{
                console.log(props)
                return <div>About页面</div>
            }} />
            <Route path='/user' render={()=> <div>User页面</div>} />
        </div>
    </Router>
)

ReactDom.render(<App />, document.getElementById('app'))