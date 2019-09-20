import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/index'
import Video from './pages/video'
import Workplace from './pages/workplace'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <div>213</div>
                <div>
                    <div>
                        <h3>导航</h3>
                        <ul>
                            <li><Link to='/'>首页</Link></li>
                            <li><Link to='/video'>视频教程</Link></li>
                            <li><Link to='/workplace'>工作技能</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Route path='/' exact component={Index} />
                        <Route path='/video' component={Video} />
                        <Route path='/workplace' component={Workplace} />
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default App;