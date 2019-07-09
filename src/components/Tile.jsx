import React from 'react';
import { PropTypes } from 'prop-types';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
    <h1>{this.props.label}</h1>
    </div>
    );
  }
}

Tile.propTypes = {
  label: PropTypes.string.isRequired
};

export default Tile;
