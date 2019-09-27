import React from 'react'

export default props => {
    const { inputValue, inputChange, addItem, list, delItem} = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={addItem}>click</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((v,i) => (
                            <li key={i} onClick={delItem.bind(this, i)}>{v}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}