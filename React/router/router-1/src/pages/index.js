import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 0, title: 'tadpole一号文章-1'},
                {id: 1, title: 'tadpole二号文章-2'},
                {id: 2, title: 'tadpole三号文章-3'}
            ]
        }
    }
    render() { 
        return ( 
            <div>Index页面</div>
            // <ul>
            //     {
            //         this.state.list.map(res => {
            //             return <li key={ res.id }><Link to={ `/list/${res.id}/${ res.title }` }>{ res.title }</Link></li>
            //         })
            //     }
            // </ul>
         );
    }
}
 
export default Index;