import React from 'react';
import ReactDOM from 'react-dom';
import Styles from '/home/kishan/project/Style.css';

export default class Header extends React.Component{

  constructor() {
    super();
    this.state = {
      heading:  'Hello',
    };

    //}componentWillMount() {
    //console.log('Will mount');
    //this.setState({heading: this.props.head});
    //}
    //componentDidMount() {
    //console.log('Did mount');
    //this.setState({heading: this.props.head});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      heading: nextProps.head,
    });
  }

  render() {
    return (
      <div className={Styles.id2}>
      <h1>{this.state.heading}</h1>
      </div>
    );
  }
}
