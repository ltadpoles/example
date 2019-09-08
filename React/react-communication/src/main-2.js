import React from 'react'
import ReactDom from 'react-dom'

// 评论输入组件
class CommentData extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: '123' }
    }

    commentChange = (data) => {
        this.setState({
            data: data.target.value
        })
    }

    submit = () => {
        this.props.newList(this.state)
    }

    render() {
        return (
            <div>
                <textarea rows='6' cols='50' value={this.state.data} onChange={this.commentChange}></textarea>
                <br />
                <button onClick={this.submit}>发表评论</button>
            </div>
        )
    }
}

// 评论列表显示组件
function CommentList(props) {
    return (
        <ul>
            {
                props.list.map((res, index) => {
                    return (
                        <li key={index}>
                            <p>用户{index + 1}</p>
                            <p>{res.data}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

// 父组件
class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'commemt',
            list: [
                {data: '这个好棒啊！'},
                {data: '我也是这么觉得'}
            ]
        }
    }
    listChange = data => {
        this.setState((state, props) => {
            let list = state.list.push(data)
            return list
        })
    }
    render() {
        let commentLists = <CommentList  list={this.state.list} />
        let commentData = <CommentData newList={this.listChange} />
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>{commentData}</div>
                <div>{commentLists}</div>
            </div>
        )
    }
}

ReactDom.render(<Comment />, document.getElementById('app'))