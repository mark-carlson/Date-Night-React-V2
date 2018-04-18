import React from 'react';
import Nav from './Nav/Nav';
import { Button, Card, Col, Input, Row, CardTitle, MediaBox, CardPanel, Dropdown, NavItem } from "react-materialize";
import "../App.css";

class HomePage extends React.Component{
    render(){
        return(
            <div className="home-page">
                <Nav />
                
                <div class="circles-parent">
                    
                <div class="square"><img src="/img/moviedinner.jpg" style={{width: 250, height: 200}} /> 
                <p>Dinner & Movie</p>
            </div>
                    
        
            <div class="square"><img src="/img/spinthewheel3.jpg" style={{width: 250, height: 200}} />
            <p>Spin the Wheel</p>
            </div>


            <div class="square"><img src="/img/dollardates3.jpg" style={{width: 250, height: 200}} />
            <p>Dollar Dates</p>
            </div>

        
            <div class="square"><img src="/img/saved.jpg" style={{width: 250, height: 200}} />
            <p>Saved Dates</p>
            </div>

        </div>


        </div> 
        </div>

        
                    

        )
    }
}

export default HomePage;
