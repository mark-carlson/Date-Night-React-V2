import React from 'react';

class DollarDates extends React.Component{

    render () {
        return(
        <div className='dollar-date-container'>
            <div className='title'>
                <span> Title: goes here</span>
            </div>

            <div className='photo'>
                <span> Photo: 
                    <img src='http://via.placeholder.com/200x200' />
                </span>
            </div>

            <div className='description'>
                <span> Description: goes here</span>
            </div>

            <div className='cost'>
                <span> Cost: goes here</span>
            </div>
        </div>

    )};
}
export default DollarDates;
