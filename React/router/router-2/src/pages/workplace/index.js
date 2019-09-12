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
        return ( 
            <div>
                <div>
                    <h4>工作导航</h4>
                    <ul>
                        <li><Link to='/workplace/getup'>技能提升</Link></li>
                        <li><Link to='/workplace/money'>工资发放</Link></li>
                    </ul>
                </div>
                <div>
                    <Route path='/workplace/getup' component={Getup} />
                    <Route path='/workplace/money' component={Money} />
                </div>
            </div>
         );
    }
}
 
export default Workplace;