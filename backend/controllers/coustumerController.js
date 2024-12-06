const coutModel = require('../models/coustumerModel');

const dataSave = async (req, res) => {
 
    const { where, checkIn, checkOut, room, guest } = req.body;

    // Convert checkIn and checkOut to Date objects if needed (optional)
   // const checkInDate = new Date(checkIn);   // Convert string to Date object
    //const checkOutDate = new Date(checkOut); // Convert string to Date object

    // Create a new entry in MongoDB
    const data = await coutModel.create({
      where: where,
      checkIn: checkIn,   // Save as Date
      checkOut: checkOut,  // Save as Date
      room: room,
      guest: guest,
    });
    //respose front end ko send karna jaroori h
    res.send(data);
};

//datadishplay function is here
const dataDisplay=async(req,res)=>{
  const myData=await coutModel.find();
  res.send(myData);
  console.log(myData);
}

const dataSearch=async(req,res)=>{
  const{where}=req.body;  //destructure the data so create key
   const mydata=await coutModel.find({where:where}) //{phle backend key : jo destrauture me key hai wo}
   res.send(mydata);
   console.log(req.body)

  }

  const deleteDataDisplay=async(req,res)=>{
    const Data=await coutModel.find();
    res.send(Data);
  }

  const recordDelete=async(req,res)=>{
    console.log(req.body);
    const {myid}= req.body     //destrucrure
    const myRes=await coutModel.findByIdAndDelete(myid);   //delete k liye ye function chalaya
    res.send(myRes);
  }

  const editDisplay=async(req,res)=>{
    
  const {id}=req.query; //data aaega jo bhi wo query me aaega kyu ki hme query string k m liya hai data 
  // console.log(id);
  //   res.send("ok")
   const Data=await coutModel.findById(id);
   res.send(Data);
}

const editDataSave=async(req,res)=>{
   const {id, _id, where, checkIn,checkOut,room,guest}=req.body;
  const myres=await coutModel.findByIdAndUpdate(id,{

    where :where,
    checkIn:checkIn,
    checkOut:checkOut,
    room:room,
    guest:guest
  })
  console.log(req.body);
  res.send("okk")
}

module.exports = {
  dataSave,
  dataDisplay,
  dataSearch,
  deleteDataDisplay,
  recordDelete,
  editDisplay,
  editDataSave
};
