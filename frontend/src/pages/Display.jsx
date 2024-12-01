import axios from "axios";
import { useState, useEffect } from "react";


const Display=()=>{
  const[mydata,setMydata]=useState([]);

  const loadData=()=>{
    let api="http://localhost:7000/coustumer/datadisplay";
    axios.get(api).then((res)=>{
      setMydata(res.data)
    //  console.log(res.data);
    //  console.log(mydata)
    })
  }
  useEffect(()=>{
    loadData();
  },[]);
  

  const ans=mydata.map((key)=>{

return(
  <>
  <tr>
    <td> {key.where} </td>
    <td> {key.chekOut} </td>
    <td> {key.checkIn} </td>
    <td> {key.room} </td>
    <td> {key.guest} </td>
  </tr>
  
  </>
)

  })
    return(
      <>
    <div className="disTable">
    <h1>this a display page</h1>
      <hr />

      <table>
        <tr>
          <th>WHERE </th>
          <th> CHECKIN </th>
          <th>CHECKOUT </th>
          <th>ROOM </th>
          <th>GUEST </th>
        </tr>
        {ans}
      </table>
    </div>
      </>
    )
  }
  export default Display;