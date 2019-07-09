import React from 'react';
import { PropTypes } from 'prop-types';
import styles from "styles/components/tile.scss"

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
  	if (this.props.onClick) {
  	  this.props.onClick(this.props.label);
    }
  }

  render() {
    return (
    <div className={styles.Tile} onClick={this.handleClick}>
    <div className={styles.TileLabel}>
    {this.props.label}
    </div>
    </div>
    );
  }
}

Tile.propTypes = {
  label: PropTypes.string.isRequired
};

