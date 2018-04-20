import React from 'react'
import { Button, Table, Col, Card, CardTitle, MediaBox, Row, CardPanel, Dropdown, NavItem } from "react-materialize";
import Nav from './Nav/Nav'
import {searchRestaurant} from "../helpers"
import Yelp from './Yelp/Yelp'
import './MovieNight.css';
import Config from './Yelp/Config'

class MovieNight extends React.Component{

    state = {
        genre: '',
        foodType: '',
        zipcode: '',
        haveAllUserData: false,
        data: [{}]
    }

    handleUserSelection(type, selection) {
        console.log("selection", selection)
        this.setState({
            [type]: selection
        }, () => {
            this.haveAllUserData();
        })
    }

    haveAllUserData(){
        if(this.state.genre.length > 0 && this.state.foodType.length > 0 && this.state.zipcode.length === 5) {
            this.setState({haveAllUserData: true});
        } else {
            this.setState({haveAllUserData: false})
        }
    }

    returnYelp(yelpData){
        this.setState({
            data: yelpData
        })
    }

    getYelpData() {
        fetch('api/search', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                genre: this.state.genre,
                foodType: this.state.foodType,
                zipcode: this.state.zipcode,
            })
        }).then((res) => {
            if (res.status === 503) {
                this.setState({
                    sendSuccessful: false,
                    isSent: false,
                    isSending: false,
                    sendFailure: true
                });
            }
            // console.log('res.json',res.json())
            return res.json();
        }).then((data) => {
            console.log('data', data)
            this.returnYelp(data.businesses);
            if (data.message === 'mail sent') {
                this.setState({
                    sendSuccessful: true,
                    sendFailure: false,
                    email: '',
                    subject: '',
                    body: '',
                    isSent: true,
                    isSending: false,
                    emailValid: false
                });
            }
        });
    }
    render()
    {
        console.log('State from MovieNight', this.state.data[0].name)
        return(
            <div>
                <Nav />
                <Row>
                    <Col s={4}>
                        <div className="movieDiv">
                            <Card header={<CardTitle key="movie" image="/img/movieposter.jpg">Movie Options</CardTitle>} actions={[<a key="movie" href='#'>Results</a>]}>
                                <Dropdown trigger={<Button>Movie Genre</Button>}>
                                    <NavItem className="action" onClick={() => {this.handleUserSelection('genre', 'Action')}}>Action</NavItem>
                                    <NavItem className="adventure" onClick={() => {this.handleUserSelection('genre', 'Adventure')}}>Adventure</NavItem>
                                    <NavItem className="animation" onClick={() => {this.handleUserSelection('genre', 'Animation')}}>Animation</NavItem>
                                    <NavItem className="documentary" onClick={() => {this.handleUserSelection('genre', 'Documentary')}}>Documentary</NavItem>
                                    <NavItem className="sciencFiction" onClick={() => {this.handleUserSelection('genre', 'Science Fiction')}}>Science Fiction</NavItem>
                                </Dropdown>
                                <Button className="findMovie" disabled={!this.state.haveAllUserData} onClick={this.getYelpData.bind(this)}>Find Movie</Button>
                            </Card>
                        </div>      
                    </Col>

                    <Col s={4}>                        
                        <div>
                            <h3>Enter Zipcode</h3>
                            <div>
                                <input name='zipcode' value={this.state.zipcode} onChange={(event) => {this.handleUserSelection('zipcode', event.target.value)}} className="zipcode"></input>
                            </div>
                            {this.state.data.map((business, i)=>(
                                    <div key={i}>
                                        {business.name}
                                    </div>
                                )
                            )}
                        </div>
                    </Col>

                    <Col s={4}>
                        <div className="dinnerDiv">    
                            <Card header={<CardTitle image="/img/foodimage.jpg">Dinner Options</CardTitle>} actions={[<a key="food" href='#'>Results</a>]}>
                                <Dropdown trigger={<Button>Food Type</Button>} >
                                    <NavItem className="america" onClick={() => {this.handleUserSelection('foodType', 'american')}} >American</NavItem>
                                    <NavItem className="bbq" onClick={() => {this.handleUserSelection('foodType', 'bbq')}}>BBQ</NavItem>
                                    <NavItem className="brewery" onClick={() => {this.handleUserSelection('foodType', 'brewery')}}>Brewery</NavItem>
                                    <NavItem className="chinese" onClick={() => {this.handleUserSelection('foodType', 'chinese')}}>Chinese</NavItem>
                                    <NavItem className="ethiopian" onClick={() => {this.handleUserSelection('foodType', 'ethiopian')}}>Ethiopian</NavItem>
                                    <NavItem className="indian" onClick={() => {this.handleUserSelection('foodType', 'indian')}}>Indian</NavItem>
                                    <NavItem className="italian" onClick={() => {this.handleUserSelection('foodType', 'italian')}}>Italian</NavItem>
                                    <NavItem className="japanese" onClick={() => {this.handleUserSelection('foodType', 'japanese')}}>Japanese</NavItem>
                                    <NavItem className="mediterranean" onClick={() => {this.handleUserSelection('foodType', 'mediterranean')}}>Mediterranean</NavItem>
                                    <NavItem className="mexican" onClick={() => {this.handleUserSelection('foodType', 'mexican')}}>Mexican</NavItem>
                                    <NavItem className="nepalese" onClick={() => {this.handleUserSelection('foodType', 'nepalese')}}>Nepalese</NavItem>
                                </Dropdown>
                                <Button className="findDate" disabled={!this.state.haveAllUserData} onClick={this.getYelpData.bind(this)} >Find Restaurant</Button> 
                                
                            </Card>
                        </div>
                    </Col>
                </Row>

                
            </div>
            
        )
    }
}

export default MovieNight;