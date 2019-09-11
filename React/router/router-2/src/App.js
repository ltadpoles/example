import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/index'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <div>
                    <div>
                        <h3>导航</h3>
                        <ul>
                            <li><Link to='/'>首页</Link></li>
                            <li><Link to='/'>视频教程</Link></li>
                            <li><Link to='/'>工作技能</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Route path='/' component={Index} />
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default App;