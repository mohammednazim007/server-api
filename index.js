const express = require("express")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())

const catagory = require('./catagori.json')
const course = require('./course.json')


app.get('/all_catagory', (req, res) => {
    res.send(catagory)
    console.log('server');
})

app.get('/all_course', (req, res) => {
    res.send(course)
})

app.get('/course/:course_name', (req, res) => {
    const param = req.params.course_name
    const filter = course?.filter(e => e.course_name === param)
    console.log(filter);
    res.send(filter)
})

app.listen(port, () => {
    console.log('server is running on ', port);
})

module.exports =app