import React from 'react';
import {Card} from 'react-bootstrap';

// (1): Creating first component: 

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
   const date = new Date(dt);
   return (
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
         
         <Card.Body>
            <Card.Title>{main}Card Title</Card.Title>
            {/* Date time is recieved in milliseconds, need to turn it into local date time: */}
            <p>
               {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </p>

            {/* Minimum temprature */}
            <p>Min: {temp_min}</p>

            {/* Maximum temprature */}
            <p>Max: {temp_max}</p>

         </Card.Body>
      </Card>
   )
}

export default WeatherCard;
