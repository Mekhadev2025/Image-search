
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const app=express()
const routerUrls = require("./routes/routes.js");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database is connected');
  // Continue with your code after successful connection
})
.catch((error) => {
  console.error('Error connecting to database:', error);
  // Handle the error appropriately
});

app.use(cors())
app.use(express.json()); // Fix: Correctly invoke express.json()

app.use("/app", routerUrls);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
