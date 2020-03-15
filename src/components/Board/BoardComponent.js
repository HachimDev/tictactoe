import React from 'react';
import Tile from '../Tile/TileComponent';
import * as utils from '../../Utils/functions';
import './BoardStyle.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ADD_SCORE } from '../../store/actions'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tiles: Array(9).fill(null),
            isXNext: true,
            status: 'Que la partie commence !',
        }
    }

    handleTileClick(i) {
        let tiles = this.state.tiles;

        if (utils.isWinnerCombinations(tiles)) {
            if(utils.isWinnerCombinations(tiles) == 'X'){
            this.props.dispatch({ type: ADD_SCORE, payload:{ playerX: 1, playerO: 0 }});
            }else {
                this.props.dispatch({ type: ADD_SCORE, payload:{ playerX: 0, playerO: 1 }});
            }
            return null;
        }

        if (utils.areAllTilesClicked(tiles)) {
            this.setState(() => {
                return {
                    status: 'Egalité'
                }
            });
            return null;
        }

        if (this.state.isXNext) {
            tiles[i] = 'X';
        } else {
            tiles[i] = 'O';
        }




        this.setState((previousState) => {
            return {
                tiles,
                isXNext: !previousState.isXNext
            }
        })
    }

    restartGame() {
        this.setState(() => {
            return {
                tiles: Array(9).fill(null),
                isXNext: true,
                status: 'Que la partie commence !'
            }
        })
    }

    render() {

        let status = this.state.status;
        if (utils.isWinnerCombinations(this.state.tiles)) {
            status = 'Le gagnant est : ' + utils.isWinnerCombinations(this.state.tiles);
        }
        return (
            <div className="pageWrapper">
                <h2>{status}</h2>
                <h3></h3>

                <table className="boardWrapper">
                    <tbody>
                        <tr>
                            <td><Tile value={this.state.tiles[0]} onClick={() => this.handleTileClick(0)} /></td>
                            <td><Tile value={this.state.tiles[1]} onClick={() => this.handleTileClick(1)} /></td>
                            <td><Tile value={this.state.tiles[2]} onClick={() => this.handleTileClick(2)} /></td>
                        </tr>
                        <tr>
                            <td><Tile value={this.state.tiles[3]} onClick={() => this.handleTileClick(3)} /></td>
                            <td><Tile value={this.state.tiles[4]} onClick={() => this.handleTileClick(4)} /></td>
                            <td><Tile value={this.state.tiles[5]} onClick={() => this.handleTileClick(5)} /></td>
                        </tr>
                        <tr>
                            <td><Tile value={this.state.tiles[6]} onClick={() => this.handleTileClick(6)} /></td>
                            <td><Tile value={this.state.tiles[7]} onClick={() => this.handleTileClick(7)} /></td>
                            <td><Tile value={this.state.tiles[8]} onClick={() => this.handleTileClick(8)} /></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.restartGame.bind(this)}>Nouvelle Partie</button>
                <button onClick={() => { this.props.history.push('/') }} >Retour au menu</button>
            </div>
        )
    }
}
export default compose(withRouter, connect())(Board);