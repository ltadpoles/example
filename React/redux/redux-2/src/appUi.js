import React, { Component } from 'react';
 class AppUi extends Component {
     render() { 
         return ( 
             <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChange}></input>
                    <button style={{'marginLeft': '10px'}} onClick={this.props.btnClick}>click</button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.list.map((res, index) => (
                                <li key={index} onClick={this.props.delClick.bind(this, index)}>{res}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
          );
     }
 }
  
 export default AppUi;