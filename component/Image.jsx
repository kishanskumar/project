import React from 'react';
import Style from '/home/kishan/project/Style.css';
export default class Image extends React.Component{
  constructor() {
    super();
    this.state = {
      url: 'http://a2.mzstatic.com/us/r30/Purple4/v4/78/82/dd/7882ddd0-c8ca-a024-4670-61e4ca8b41d6/icon256.png',
      name: '',
      tex:  'Upload',
      count: 1,
    };
  }

  handleChange(e) {
    const url = e.target.value;
    this.setState({ name: url });

    //this.props.changeImage(url);
  }

  handleClick(e) {
    this.setState({
      url: this.state.name,
    });

    //this.props.changeImage(this.state.url);
  }

  //changeImage(url)  {
  //  this.setState({ url });
  //}

  render() {
    return (
      <div>
      <p>Update image.Enter url:
      <input onChange={this.handleChange.bind(this)}/>
      <button className={Style.btn1} onClick={this.handleClick.bind(this)}>{this.state.tex}</button></p>
      <img src={this.state.url}/>
      </div>
    );
  }
}
