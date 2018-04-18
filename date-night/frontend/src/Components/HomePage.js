import React from 'react';
import Nav from './Nav/Nav';
import { Button, Card, Col, Input, Row, CardTitle, MediaBox, CardPanel, Dropdown, NavItem } from "react-materialize";
import "../App.css";

class HomePage extends React.Component{
    render(){
        return(


            
                <div className="home-page">
                <Nav />

<div className="mainBG">
<div class="content" >


    <div class="row">
        <div class="row">
            <div class="col s12 m4 l2"><p></p></div>
            <div class="col s12 m4 l8"><p><h2>Find the Best Date Places in Town</h2></p></div>
            <div class="col s12 m4 l2"><p></p></div>
        </div>
    </div>


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

            </div>       
            

            <div className="home-page">
                <Nav logout={this.props.logout}/>
                <div>this is the homepage</div>
            </div>

        )
    }
}

export default HomePage;