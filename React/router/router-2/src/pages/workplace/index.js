import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Getup from './getup';
import Money from './money';

class Workplace extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <div>
                <div>
                    <h4>工作导航</h4>
                    <ul>
                        <li><Link to={`${this.props.match.url}/getup`}>技能提升</Link></li>
                        <li><Link to='/workplace/money'>工资发放</Link></li>
                    </ul>
                </div>
                <div>
                    <Route path={`${this.props.match.url}/getup`} component={Getup} />
                    <Route path='/workplace/money' component={Money} />
                </div>
            </div>
         );
    }
}
 
export default Workplace;