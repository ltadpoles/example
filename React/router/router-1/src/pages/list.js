import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { data: 'List页面' }
    }
    render() { 
        return ( <div>list页面</div> );
        // return ( <div>这个是{this.state.data}</div> );
    }
    componentDidMount() {
        // 组件挂载完成
        // 这里就可以拿到组件传递过来的值 

        //  - location 对象
        //  - match 对象
        //  - history 对象
        console.log(this.props.match)
        this.setState({
            data: this.props.match.params.id
        })
    }
}
 
export default List;