import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row, CardTitle } from "react-materialize"

class DollarDates extends React.Component{
    render(){
        return(
    
    <div>
    
            <div className="dollar-page">
                <Nav />


   
        <div class="container">
        <div><h2>Awesome Date Ideas Under Budget</h2></div>
        <Card className='blue-grey darken-1' title='Bike Date'>

        </Card>
        
                <Card className='large' header={<CardTitle image='/img/sunset1.jpg'></CardTitle>} actions={[<a href='#'>This is a Link</a>]}><div style={{backgroundColor: "#ABB2B9"}}>Grab some bike and explore the local scene for a few hours.<p><strong>Cost:</strong> $ 0.00</p></div>
                <p><strong>Cost:</strong> $ 0.00</p>
        </Card>

 

        <Card className='blue-grey darken-1' title='Discover a new museum'>

        </Card>
        
        <Card className='large' header={<CardTitle image='/img/sunset1.jpg'></CardTitle>} actions={[<a href='#'>This is a Link</a>]}><div style={{backgroundColor: "#ABB2B9"}}>Many cultural hubs offer free or discounted days so you can ponder Impressionism or dive into ancient Egypt on the cheap. Bank of America cardholders can also enjoy free general admission to more than 150 museums nationwide with the Museums on Us program.<p><strong>Cost:</strong> $ 0.00</p></div>
        <p><strong>Cost:</strong> $ 0.00</p>
</Card>

        <Card className='blue-grey darken-1' title='Take a hike'>

        </Card>
        
        <Card className='large' header={<CardTitle image='/img/sunset1.jpg'></CardTitle>} actions={[<a href='#'>This is a Link</a>]}><div style={{backgroundColor: "#ABB2B9"}}>A day trip to the trails is a great way to enjoy beautiful landscapes, chat, and sneak in some exercise while you’re at it. Plus, a couple hours in nature can boost creativity and reduce cortisol levels. And there’s no need to seek out mountains—just a walk in the park, surrounded by greenery, has been shown to have similar health perks.<p><strong>Cost:</strong> $ 0.00</p></div>
        <p><strong>Cost:</strong> $ 0.00</p>
</Card>



        </div>

    </div>


{/* Footer Start */}
<div class="Footer">
Date Night 2018. All Rights Reserved.
</div>
{/* Footer End */}

    </div>
        )

        return <div className="dollar-page">
            <Nav logout={this.props.logout}/>
            <h1>This is going to be the dollar dates page</h1>
          </div>;

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
