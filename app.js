const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const app = express()

const activities = require('./routes/activities')
const campingTools = require('./routes/campingApi')
const hikingTools = require('./routes/hikingApi')
const backpackingTools = require('./routes/backpackingApi')
const rockClimbingTools = require('./routes/rockClimbingApi')
const skiingTools = require('./routes/skiingApi')
const snowboardingTools = require('./routes/snowboardingApi')
const mountainBikingTools = require('./routes/mountainBikingApi')
const snowshoeingTools = require('./routes/snowshoeingApi')
const iceClimbingTools = require('./routes/iceClimbingApi')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/', activities)
app.use('/camping', campingTools)
app.use('/hiking', hikingTools)
app.use('/backpacking', backpackingTools)
app.use('/rock-climbing', rockClimbingTools)
app.use('/skiing', skiingTools)
app.use('/snowboarding', snowboardingTools)
app.use('/mountain-biking', mountainBikingTools)
app.use('/snowshoeing', snowshoeingTools)
app.use('/ice-climbing', iceClimbingTools)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
})

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
})

module.exports = app
