import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom'

class App extends Component {
    render() { 
        console.log(this.props)
        return ( 
            <div>
                <Link to='/'>Index</Link>
                <Link to='/about'>About</Link>
                <Switch>
                    <Route path='/' exact render={()=> <div>Index页面</div>} />
                    <Route path='/about' render={()=> <div>About页面</div>} />
                </Switch>
            </div>
         );
    }
}
 
export default withRouter(App)