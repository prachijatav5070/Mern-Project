const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose=require("mongoose");

// Import routes
const coutRoute = require("./routes/coustumerRoute");

// Use CORS middleware first
app.use(cors());

// Body-parser middleware to handle JSON and URL-encoded data
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Use routes
app.use("/coustumer", coutRoute);


mongoose.connect("mongodb://127.0.0.1:27017/mernDB").then(()=>{
    console.log("Db connected!!!")
})


// Error handling middleware (Optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(7000, () => {
    console.log("Server is running on http://localhost:7000");
});
