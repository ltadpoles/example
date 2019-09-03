import React from 'react'
import ReactDom from 'react-dom'

// 评论组件

class CommentData extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <textarea rows='6' cols='50'></textarea>
                <br />
                <button>发表评论</button>
            </div>
        )
    }
}

// 列表显示组件
function CommentList(props) {
    return (
        <ul>
            {
                props.list.map((res, index) => {
                    return (
                        <li key={index}>
                            <p>{res.name}</p>
                            <p>{res.data}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}


class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {name: '小二', data: '这个好棒啊！'},
                {name: 'lucky', data: '我也是这么觉得'}
            ]
        }
    }
    render() {
        let commentLists = <CommentList  list={this.state.list}/>
        let commentData = <CommentData />
        return (
            <div>
                <div>{commentData}</div>
                <div>{commentLists}</div>
            </div>
        )
    }
}

ReactDom.render(<Comment />, document.getElementById('app'))