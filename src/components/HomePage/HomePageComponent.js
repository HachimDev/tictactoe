import React from 'react';
import { withRouter } from 'react-router-dom'
import logo from '../../assets/Images/logotic.png'
import './HomePageStyle.css'

class HomePage extends React.Component {


    constructor(props){
        super(props);
        this.handleNewGame = this.handleNewGame.bind(this);
    }

    handleNewGame(){
        this.props.history.push('/game')
    }
    render() {

        return (
            <div className="bgPage">
                <h4>Bienvenue !</h4>
                <img className="imageStyle" src={logo} alt="logo" />
                <button onClick={this.handleNewGame} >Nouvelle partie</button>
            </div>
        )
    }
}

export default withRouter(HomePage);