import React, { useState } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

const CitySelector = () => {
   const [city, setCity] = useState('');
   return (
      <>
         <Row>
            <Col>
               <h1>Search your City:</h1>
            </Col>
         </Row>

         <Row>
            <Col xs={4} className="text-center">
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
               <Button onClick= {onSearch}>Check Weather</Button>
            </Col>
         </Row>
      
      </>
   );
};

export default CitySelector;