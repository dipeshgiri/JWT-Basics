require('dotenv').config();
require('express-async-errors')

const express = require('express');
const app = express();

const mainRouter=require('./routes/main')
const notFoundMiddleware=require('./middleware/not-found')
const errorMiddleware=require('./middleware/errorhandler')

//middleware

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1',mainRouter)

app.use(errorMiddleware)
app.use(notFoundMiddleware)



const port=process.env.PORT || 5500

const start=async()=>{
    try{
        app.listen(port,console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}
start()