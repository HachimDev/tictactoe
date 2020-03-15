import React from 'react';
import './ScoreBoardStyle.css';
import {Connect, connect} from 'react-redux';

class ScoreBoard extends React.Component {

    constructor(props) {
        super(props);
    }

    renderScore() {
        return this.props.matches.map((match, index) => {
            return (
                <tr key={index}>
                    <td> {index + 1} </td>
                    <td>{match.playerX}</td>
                    <td>{match.playerO}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className='table tableStyle'>
                    <thead>
                        <tr>
                            <th>Match #</th>
                            <th>Player X</th>
                            <th>Player O</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderScore()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        matches: state.matches
    };
};

export default connect(mapStateToProps)(ScoreBoard);