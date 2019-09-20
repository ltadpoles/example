import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import ReactDom from 'react-dom'

const Index = () => <div>Index页面</div>

const User = () => <div>User页面</div>

const App = () => (
    <Router>
        {/* <div> */}
            <ul>
                <li><Link to='/'>Index</Link></li>
                <li><Link to='/user'>User</Link></li>
            </ul>
            <div>
                <Switch>
                    <Route path='/user' render={()=><div>user页面1</div>} />
                    <Route path='/:id' render={()=><div>子成员</div>} />
                    <Route render={()=><div>about页面</div>} />
                </Switch>

                <Switch>
                    <Route render={()=><div>第二个Switch中的页面</div>} />
                </Switch>
                
                {/* <Route path='/' exact component={Index} /> */}
            </div>
        {/* </div> */}
    </Router>
)

ReactDom.render(<App />, document.getElementById('app'))