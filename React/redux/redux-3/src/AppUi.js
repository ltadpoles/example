import React from 'react'

export default props => (
    <div>
        <div>
            <input value={props.inputValue} onChange={props.inputChange}></input>
            <button onClick={props.addItem}>click me</button>
        </div>
        <div>
            <ul>
                {
                    props.list.map((res, index) => (
                        <li key={index} onClick={props.delItem.bind(this, index)}>{res}</li>
                    ))
                }
            </ul>
        </div>
    </div>
)