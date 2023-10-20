//Importing express / app
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
//Import Security middleware
const security = require('./middleware/security')
const authRoutes = require('./routes/auth')



//Create Express Application
const app = express();




//APP USE - Parse incoming request bodies
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
//APP USE - Security Middleware to authenticate user and create JWTs
app.use(security.extractUserFromJwt)
//APP USE - All authorization/registration routes including login, register, and me
app.use("/auth", authRoutes)





//Server Health Check
app.get('/', async(req,res,next) => {
    res.status(200).json({"ping":"pong"})
})

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    return res.status((status)).json({
        error: {message, status}
    })
})



//MODULE EXPORTS
module.exports = app