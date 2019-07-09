import React from 'react';
import Tile from './Tile';
import styles from "styles/components/game.scss"

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	date: new Date(),
	    tiles: {
	    	"0": "1",
	    	"1": "2",
	    	"2": "3",
	    	"3": "4",
	    	"4": "5",
	    	"5": "6",
	    	"6": "7",
	    	"7": "8",
	    	"8": ""
	    } 
    };
  }

  getKeyByValue(tileNumber) {
    return Object.keys(this.state.tiles).find(key => this.state.tiles[key] === tileNumber);
  }

  handleClick = (tileNumber) => {
    console.log('The tile was clicked.', tileNumber, this.getKeyByValue(tileNumber), this.getKeyByValue(""));
    const blank_key = this.getKeyByValue("");
    const tile_key = this.getKeyByValue(tileNumber);
    this.state.tiles[blank_key] = tileNumber;
    this.state.tiles[tile_key] = "";
    this.setState({ tiles: this.state.tiles });
  };

  render() {
    return (
    	 <div>
       <h1>Hello 4 {this.state.date.toLocaleTimeString()}</h1>
       <div className={styles.GameBoard}>
       <div className={styles.GameRow}>
	       <Tile label={this.state.tiles["0"]} onClick={this.handleClick} />
	       <Tile label={this.state.tiles["1"]} onClick={this.handleClick} />
	       <Tile label={this.state.tiles["2"]} onClick={this.handleClick} />
       </div>
       <div className={styles.GameRow}>
	       <Tile label={this.state.tiles["3"]} onClick={this.handleClick} />
	       <Tile label={this.state.tiles["4"]} onClick={this.handleClick} />
	       <Tile label={this.state.tiles["5"]} onClick={this.handleClick} />
       </div>
       <div className={styles.GameRow}>
	       <Tile label={this.state.tiles["6"]} onClick={this.handleClick} />
	       <Tile label={this.state.tiles["7"]} onClick={this.handleClick} />
	       <Tile label={this.state.tiles["8"]} onClick={this.handleClick} />
       </div>              
       </div>
       </div>
    );
  }
}
