import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row, CardTitle } from "react-materialize"
import Container from './Container/Container';

class DollarDates extends React.Component{
    render(){

        return(
    <div className="dollar-page">
                <Nav />


   
     <Container>

        <Card className='blue-grey darken-1' title='Bike Date'>

        </Card>
        
                <Card className='small' header={<CardTitle image='/img/sunset1.jpg'>Bike Dates</CardTitle>} actions={[<a href='#'>This is a Link</a>]}>Lorem ipsum dolor sit amet, id fugit convenire iracundia quo. Affert nostro civibus cum ei. Vix accumsan delicata reprehendunt et, te convenire dissentiet mediocritatem has.
                <p><strong>Cost:</strong> $ 0.00</p>
        </Card>


        <Card className='blue-grey darken-1' title='Bike Date'>

        </Card>
        
                <Card className='small' header={<CardTitle image='/img/sunset2.jpg'>Bike Dates</CardTitle>} actions={[<a href='#'>This is a Link</a>]}>Lorem ipsum dolor sit amet, id fugit convenire iracundia quo. Affert nostro civibus cum ei. Vix accumsan delicata reprehendunt et, te convenire dissentiet mediocritatem has.
                <p><strong>Cost:</strong> $ 0.00</p>
        </Card>

        <Card className='blue-grey darken-1' title='Bike Date'>

        </Card>
        
                <Card className='small' header={<CardTitle image='/img/sunset3.jpg'>Bike Dates</CardTitle>} actions={[<a href='#'>This is a Link</a>]}>Lorem ipsum dolor sit amet, id fugit convenire iracundia quo. Affert nostro civibus cum ei. Vix accumsan delicata reprehendunt et, te convenire dissentiet mediocritatem has.
                <p><strong>Cost:</strong> $ 0.00</p>
        </Card>


        </Container>

        </div>

    )

        // return <div className="dollar-page">
        //     <Nav logout={this.props.logout}/>
        //     <h1>This is going to be the dollar dates page</h1>
        //   </div>;

    }
}

// const DollarDates = () => (
//     //Add selected items to search bar when they exist, input field collapses as selected items are added 
//     //onKeyUp used instead of onChange in order to capture delete/backspace key

//     <div className="dollar-date-container">
//         <div className="title">
//             <span> <strong>Title:</strong> Take a hike</span>
//         </div>

//         <div className="description">
//             <span> Description: A day trip to the trails is a great way to enjoy beautiful landscapes, chat, and sneak in some exercise while you’re at it. </span>
//         </div>
        
//         <div className="cost">
//             <span> Cost: 0</span>
//         </div>

//         <div className="photo">
//             <span><img src="http://via.placeholder.com/350x150" /></span>
//         </div>

//     </div>

//   );
  export default DollarDates
