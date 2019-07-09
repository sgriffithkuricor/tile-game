import React from 'react';
import Tile from './Tile';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
    	 <div>
       <h1>Hello 4 {this.state.date.toLocaleTimeString()}</h1>
       <Tile label="1" />
       </div>
    );
  }
}

export default Sample;
