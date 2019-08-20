import React from 'react'
import ReactDom from 'react-dom'

const numbers = [1, 2, 3, 4, 5]

function NumberList(props) {
    let numbers = props.numbers

    let numberLists = numbers.map(res => <li key={res.toString()}>{ res }</li>)
    return ( <ul>{ numberLists }</ul> )
}
ReactDom.render(<NumberList numbers={ numbers } />, document.getElementById('app'))