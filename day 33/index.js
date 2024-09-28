const express = require('express');
const dotenv = require('dotenv');
const router = require('./router/router');
const run = require('./db/connection');
dotenv.config();
// require('dotenv').config()

const app = express();

app.use("/",router)
console.log(process.env.MONGODBURI)
run(process.env.MONGODBURI)
const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`server listening on port ${port} `)
})
