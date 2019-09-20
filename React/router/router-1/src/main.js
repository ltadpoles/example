import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import ReactDom from 'react-dom'

const App = () =>　(
    <Router>
        <ul>
            <li><Link to='/'>Index</Link></li>
            <li><Link to={{pathname: '/about',search: 'sort=name', hash: '#users'}}>About</Link></li>
            <li><Link to='/user/1'>User</Link></li>
            <li><Link to='/user12'>User12</Link></li>
        </ul>
        <div>
            <Switch>
                <Redirect from='/user' exact strict to='/about' />
                <Route path='/' exact render={()=><div>Index页面</div>} />
                <Route path='/user/:id' render={()=><div>User页面</div>} />
                <Route path='/about' render={()=><div>About页面</div>} />
                <Route render={() => <div>测试页面</div>} />
            </Switch>
        </div>
    </Router>
)

ReactDom.render(<App />, document.getElementById('app'))