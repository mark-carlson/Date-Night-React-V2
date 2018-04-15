import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row } from "react-materialize"

class MovieNight extends React.Component{
    render(){
        return(
            <div className="movie-page">
                <Nav />
                <h1>This is going to be the movie night page</h1>

            </div>
        )
    }
}

export default MovieNight
