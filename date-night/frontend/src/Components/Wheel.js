import React, { Component } from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row } from "react-materialize"
import Spinner from "./Spinner/Spinner"
// import {test} from "../helpers"

class Wheel extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="wheel-page">
                <Nav />
                <Spinner setWheelDate={this.props.setWheelDate} />
            </div>
        )
    }
}

export default Wheel