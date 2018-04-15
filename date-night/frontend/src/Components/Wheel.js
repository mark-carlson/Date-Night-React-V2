import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row } from "react-materialize"

class Wheel extends React.Component{
    render(){
        return(
            <div className="wheel-page">
                <Nav />
                <h1>This is going to be the wheel page</h1>

            </div>
        )
    }
}

export default Wheel