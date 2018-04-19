import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row } from "react-materialize"
import Spinner from "./Spinner/Spinner"
import {searchActivity} from "../helpers"
import Result from "./Result"
import $ from 'jquery'

class Wheel extends React.Component{
    activity=(dataFromSpinner)=>{
        searchActivity(dataFromSpinner)
        console.log('hi')
    }
    render(){
        return(
            <div className="wheel-page">
                <Nav />
                <Spinner randomActivity={this.activity.bind(this)}/>
            </div>
        )
    }
}

export default Wheel