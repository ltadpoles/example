import React from 'react';

export default  props => {
    return ( 
        <div>
            <div>
                <input value={props.inputValue} onChange={props.inputChange}></input>
                <button style={{'marginLeft': '10px'}} onClick={props.btnClick}>click</button>
            </div>
            <div>
                <ul>
                    {
                        props.list.map((res, index) => (
                                <li key={index} onClick={props.delClick.bind(this,index)}>{res}</li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );
}