<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> 01a167eacc1b8b58c1b9ec43f62a62a49f9cf8ed
import { Button, Table, Col, Card, CardTitle, MediaBox, Row, CardPanel, Dropdown, NavItem } from "react-materialize";
import Nav from './Nav/Nav'
import {searchRestaurant} from "../helpers"



class MovieNight extends React.Component{
    render()
    {
<<<<<<< HEAD
        return(
            <div>
            {searchRestaurant()}
                <Nav />
            <h1>This is going to be the movie night page.</h1>
            
            <Row>
                <Col s={3}>
                    <h5>Movie</h5>
                    <div>
                    <Dropdown trigger={
                        <Button>Select</Button>
                      }>
                      <NavItem>Action</NavItem>
                      <NavItem>Adventure</NavItem>
                      <NavItem>Animation</NavItem>
                      <NavItem>Documentary</NavItem>
                      <NavItem>Science Fiction</NavItem>
                    </Dropdown>
                    </div>      
                    <Card header={<CardTitle image="http://lorempixel.com/100/100/"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
                        <p>I am a very simple card. I am good at containing small bits of information</p>
                    </Card>


                </Col>

                <Col s={3}>                        
                    <div>
                        <h2>OR</h2>
                    </div>
                </Col>

                <Col s={3}>
                <h5>Dinner</h5>   
                <Dropdown trigger={
                    <Button>Select</Button>
                  }>
=======
        return <div>
            {searchRestaurant()}
            <Nav logout={this.props.logout}/>
            <h1>This is going to be the movie night page.</h1>

            <Row>
              <Col s={3}>
                <h5>Movie</h5>
                <div>
                  <Dropdown trigger={<Button>Select</Button>}>
                    <NavItem>Action</NavItem>
                    <NavItem>Adventure</NavItem>
                    <NavItem>Animation</NavItem>
                    <NavItem>Documentary</NavItem>
                    <NavItem>Science Fiction</NavItem>
                  </Dropdown>
                </div>
                <Card header={<CardTitle image="http://lorempixel.com/100/100/" />} actions={[<a href="#">
                      This is a link
                    </a>]}>
                  <p>
                    I am a very simple card. I am good at containing
                    small bits of information
                  </p>
                </Card>
              </Col>

              <Col s={3}>
                <div>
                  <h2>OR</h2>
                </div>
              </Col>

              <Col s={3}>
                <h5>Dinner</h5>
                <Dropdown trigger={<Button>Select</Button>}>
>>>>>>> 01a167eacc1b8b58c1b9ec43f62a62a49f9cf8ed
                  <NavItem>American</NavItem>
                  <NavItem>BBQ</NavItem>
                  <NavItem>Brewery</NavItem>
                  <NavItem>Chinese</NavItem>
                  <NavItem>Ethiophian</NavItem>
                  <NavItem>Indian</NavItem>
                  <NavItem>Italian</NavItem>
                  <NavItem>Japanese</NavItem>
                  <NavItem>Mediterranean</NavItem>
                  <NavItem>Mexican</NavItem>
                  <NavItem>Nepalese</NavItem>
<<<<<<< HEAD
                </Dropdown> 
                <Card header={<CardTitle image="http://lorempixel.com/100/100/"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
                    <p>I am a very simple card. I am good at containing small bits of information</p>
                </Card>


            </Col>

            </Row>

            <Button>Go!</Button>
            </div>
            
        )
=======
                </Dropdown>
                <Card header={<CardTitle image="http://lorempixel.com/100/100/" />} actions={[<a href="#">
                      This is a link
                    </a>]}>
                  <p>
                    I am a very simple card. I am good at containing
                    small bits of information
                  </p>
                </Card>
              </Col>
            </Row>

            <Button>Go!</Button>
          </div>;
>>>>>>> 01a167eacc1b8b58c1b9ec43f62a62a49f9cf8ed
    }
}

export default MovieNight
