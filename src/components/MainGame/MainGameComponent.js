import React from 'react';
import Board from '../Board/BoardComponent';
import ScoreBoard from '../scoreBoard/ScoreBoardComponent';

export default class MainGame extends React.Component {
    render() {
        return (
            <div>
                <Board />
                <ScoreBoard />
            </div>
        )
    }
}