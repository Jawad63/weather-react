import React, { useState } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
   const [city, setCity] = useState('');

   return (
      <>
         
         <Row>
            <Col>
               <h1>Search your City:</h1>
            </Col>
         </Row>

         <Row>
            <Col xs={4}>
               <FormControl
                  placeholder="Enter City:"
               // update your city with user input: 
                  onChange={(event) => setCity(event.target.value)}
               // value will be the currently selected city:
                  value={city}
               />
            </Col>
         </Row>

         <Row>
            <Col>
               {/* Event handler for button clicks:  */}
               <Button onClick = {() => onSearch (city)}>Check Weather</Button>
            </Col>
         </Row>

      </>
   );
};






export default CitySelector;