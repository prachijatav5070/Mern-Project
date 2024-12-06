import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;  
    setInput((values) => ({ ...values, [name]: value }));
  };
  // alert(input.)
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior (page refresh)
    console.log(input);   // Log the input values to the console

    let api="http://localhost:7000/coustumer/datasave";
    axios.post(api, input).then((res)=>{
      alert("data save!!")
      console.log (res.data);
      res.send(ok)
    })
  };

  return (
    <>
    
      <div className="InsertPage">

      <Form onSubmit={handleSubmit} id='insertForm'>  {/* Use onSubmit instead of onClick */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Where</Form.Label>
          <Form.Control type="text" placeholder="Enter Where" name="where"   onChange={handleInput} />  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Check In</Form.Label>
          <Form.Control type="date" name="checkIn" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Enter Check Out</Form.Label>
          <Form.Control type="date" name="checkOut" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Enter Number of Rooms</Form.Label>
          <Form.Control type="text" name="room" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Number of Guests</Form.Label>
          <Form.Control type="text" name="guest" onChange={handleInput} />
        </Form.Group>
        
        <Button variant="primary" type="submit">Search Hotel</Button> {/* No need for onClick here */}
      </Form>
      </div>
    </>
  );
};

export default Insert;
