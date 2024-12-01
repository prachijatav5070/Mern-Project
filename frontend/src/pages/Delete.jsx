import axios from "axios";
import { useEffect, useState } from "react"
import myimg from "../images/delete.png";
import imgedit from "../images/edit.png";
import {useNavigate} from "react-router-dom";

 const Delete=()=>{
    const[mydata, setMydata]=useState([]);


    const loadData=()=>{
        let api="http://localhost:7000/coustumer/deletedisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const myDel=(id)=>{
        //alert(id);
        let api="http://localhost:7000/coustumer/recorddelete";
        axios.post(api,{myid:id}).then((res)=>{
            alert("Data deleted!!")
        })
        loadData(); //ye usi page ko fir se dikhane k liye use kiya 
    }


    const navigate=useNavigate();
    const myEdit=(id)=>{
        //alert(id)
        navigate(`/edit/${id}`);
        
    }
    

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
              <td> {key.where} </td>
              <td> {key.chekOut} </td>
              <td> {key.checkIn} </td>
              <td> {key.room} </td>
              <td> {key.guest} </td>
              <td>
                <a href="#" onClick={()=>{myDel(key._id)}}>  
                <img src={myimg} width="20" height="20" /> 
                </a>
              </td>
              <td>
                <a href="#" onClick={()=>{myEdit(key._id)}}>
                <img src={imgedit} width="20" height="20" />
                </a>
              </td>
            </tr> 
            </>
        )
    })

 return(
    <>
    <div className="deltbl">
    <h1> This is update page</h1>
    <hr />
   <table >
   <tr>
    <th>WHERE </th>
    <th> CHECKIN </th>
    <th>CHECKOUT </th>
    <th>ROOM </th>
    <th>GUEST </th>
    <th>Delete</th>
    <th>Update</th>
   </tr>
    {ans}
   </table>
    </div>
</>
 )

 }
 export default Delete;

