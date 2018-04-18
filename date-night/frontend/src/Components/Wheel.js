import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row } from "react-materialize"
import Spinner from "./Spinner/Spinner"
// import {test} from "../helpers"

class Wheel extends React.Component{
    render(){
<<<<<<< HEAD
        return(
            <div className="wheel-page">
                <Nav />
                <Spinner />

            </div>
        )
=======
        return <div className="wheel-page">
            <Nav logout={this.props.logout}/>
            <Spinner />
          </div>;
>>>>>>> 01a167eacc1b8b58c1b9ec43f62a62a49f9cf8ed
    }
}

export default Wheel