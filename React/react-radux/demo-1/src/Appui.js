import React from 'react'

export default props => {
    return (
        <div>
            <div>
                <input value={props.inputValue} onChange={props.inputChange} />
                <button onClick={props.addItem}>click</button>
            </div>
            <div>
                <ul>
                    {
                        props.list.map((v,i) => (
                            <li key={i} onClick={props.delItem.bind(this, i)}>{v}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}