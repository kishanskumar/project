import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './Style.css';
import Hello from './hello.jsx';
import World from './World.jsx';

class Main extends React.Component {

  render() {
    return (
        <div className={Styles.id1}>
        <Hello/>
        <World/>
        </div>
      );
  }
}

ReactDOM.render(<Main/>, app);
