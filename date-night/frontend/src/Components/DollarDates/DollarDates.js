import React from "react";
// import Button from "react-materialize";
import { Button } from "react-materialize";

const DollarDates = () => (
    //Add selected items to search bar when they exist, input field collapses as selected items are added 
    //onKeyUp used instead of onChange in order to capture delete/backspace key

    <div className="dollar-date-container">
        <div className="title">
            <span> Title: goes here</span>
        </div>

        <div className="photo">
            <span> Photo: <img src="http://via.placeholder.com/200x200" /></span>
        </div>

        <div className="description">
            <span> Description: goes here</span>
        </div>
        
        <div className="cost">
            <span> Cost: goes here</span>
        </div>
        <Button>hiiii</Button>
    </div>

  );
  export default DollarDates