import React from 'react';
import Text from './component/Text.jsx';
import Header from './component/Header.jsx';
import Image from './component/Image.jsx';

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      head: 'Header',
      text: 'This is a  sample text',

      //url: 'http://a2.mzstatic.com/us/r30/Purple4/v4/78/82/dd/7882ddd0-c8ca-a024-4670-61e4ca8b41d6/icon256.png',
    };
  }

  changeText(text)  {
    this.setState({ text });
  }

  render() {
    return (
      <div>
        <Header head={this.state.head}/>
        <Text changeText={this.changeText.bind(this)} text={this.state.text} />
        <Image value='Hello'/>
        </div>
    );
  }
}
