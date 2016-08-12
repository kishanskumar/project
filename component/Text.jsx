import React from 'react';

export default class Text extends React.Component {
  handleChange(e){
    const text=e.target.value;
    this.props.changeText(text);
  }
  render(){
    // var style = {
    //   fontSize: '20px',
    //   color: 'red',
    // }
    return (
      <div>
      <p style={{ color: 'blue' }}>{this.props.text}</p>

      <input onChange={this.handleChange.bind(this)}/>
      </div>


);
  }
}
