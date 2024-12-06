import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useParams } from "react-router-dom";
import { useState ,useEffect } from "react";
import axios from 'axios'



const Edit=()=>{

     const {id} = useParams();
    const [mydata , setMydata]=useState({});

     
     const loadData=()=>{ 
        let api=`http://localhost:7000/coustumer/editdisplay/?id=${id}`;   //get k thorough bhi data bhej sakte hain ek quary string lagani padti hai
         axios.get(api).then((res)=>{
            //console.log(res.data);
            setMydata(res.data);
         }) 
     }

     useEffect(()=>{
        loadData()
     },[])

     const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}))
      }

      const handleSubmit=()=>{
        let api="http://localhost:7000/coustumer/editsave";
        axios.post(api,{id:id, ...mydata}).then((res)=>{    
          alert("Data updated!!!");
        })
      }


    return(
        <>  
      <div className="Editform">

      <Form onSubmit={handleSubmit} id='edit'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label id='fl'>Enter Where</Form.Label>
          <Form.Control type="text" placeholder="Enter Where" name="where" value={mydata.where}  onChange={handleInput} />  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label id='fl'>Enter Check In</Form.Label>
          <Form.Control type="date" name="checkIn" value={mydata.checkIn} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  id='fl'>Enter Check Out</Form.Label>
          <Form.Control type="date" name="checkOut" value={mydata.checkOut} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect"  id='fl'>Enter Number of Rooms</Form.Label>
          <Form.Control type="text" name="room" value={mydata.room} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect"  id='fl'>Number of Guests</Form.Label>
          <Form.Control type="text" name="guest" value={mydata.guest} onChange={handleInput} />
        </Form.Group>
        
        <Button variant="primary" type="submit">Update</Button>      {/* No need for onClick here */}
      </Form>
      </div>
    </>
    )
}
export default Edit;

