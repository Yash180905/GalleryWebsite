const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const galleryRoutes = require('./galleryRoutes')
const app = express()
const formidableMiddleware = require('express-formidable');

//connection with db
mongoose.connect("mongodb://localhost:27017/myRandomDB", {
    useUnifiedTopology: true,
    // useFindAndModify: true,
    useNewUrlParser: true
}).then(() => console.log("Connected to DB"))
.catch((err) => console.log("not able to connect with Db",err))

//middleWare
app.use(cors())
app.use(bodyParser.json())
app.use(formidableMiddleware())



//routes
app.use('/api', galleryRoutes);


const port = 5000;
app.listen(port, () => {
    console.log("app is listning on 5000 ")
})
