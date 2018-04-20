import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row, CardTitle } from "react-materialize"

class DollarDates extends React.Component {
    render() {
        return (
            <div className="dollar-page">
                <Nav logout={this.props.logout} />
                <div className="container">
                    <Card className='blue-grey darken-1' title='Bike Date'></Card>
                    <Card className='small' header={<CardTitle image='/img/sunset1.jpg'>Bike Dates</CardTitle>} actions={[<a href='#'>This is a Link</a>]}>Lorem ipsum dolor sit amet, id fugit convenire iracundia quo. Affert nostro civibus cum ei. Vix accumsan delicata reprehendunt et, te convenire dissentiet mediocritatem has.
                        <p><strong>Cost:</strong> $ 0.00</p>
                    </Card>
                    <Card className='blue-grey darken-1' title='Bike Date'></Card>
                    <Card className='small' header={<CardTitle image='/img/sunset2.jpg'>Bike Dates</CardTitle>} actions={[<a href='#'>This is a Link</a>]}>Lorem ipsum dolor sit amet, id fugit convenire iracundia quo. Affert nostro civibus cum ei. Vix accumsan delicata reprehendunt et, te convenire dissentiet mediocritatem has.
                        <p><strong>Cost:</strong> $ 0.00</p>
                    </Card>
                    <Card className='blue-grey darken-1' title='Bike Date'></Card>
                    <Card className='small' header={<CardTitle image='/img/sunset3.jpg'>Bike Dates</CardTitle>} actions={[<a href='#'>This is a Link</a>]}>Lorem ipsum dolor sit amet, id fugit convenire iracundia quo. Affert nostro civibus cum ei. Vix accumsan delicata reprehendunt et, te convenire dissentiet mediocritatem has.
                        <p><strong>Cost:</strong> $ 0.00</p>
                    </Card>
                </div>
            </div>
        )
    }
}

export default DollarDates
