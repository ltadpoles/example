import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import ReactVideo from './react-video'
import VueVideo from './vue-video'
import AngularVideo from './angular-video'

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                    <h4>视频导航</h4>
                    <ul>
                        <li><Link to='/video/react'>React视频</Link></li>
                        <li><Link to='/video/vue'>Vue视频</Link></li>
                        <li><Link to='/video/angular'>Angular视频</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>视频课程</h4>
                    <Route path='/video/react' component={ReactVideo} />
                    <Route path='/video/vue' component={VueVideo} />
                    <Route path='/video/angular' component={AngularVideo} />
                </div>
            </div>
         );
    }
}
 
export default Video;