const express = require("express")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())

const catagory = require('./catagori.json')
const all_courses = require('./course.json')


app.get('/all_catagory', (req, res) => {
    res.send(catagory)
    console.log('server');
})

app.get('/all_course', (req, res) => {
    res.send(all_courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const find = all_courses.find(item => item.id == id)

    res.send(find)
})

app.get('/all_course/:course_name', (req, res) => {
    const param = req.params.course_name

    // const filter = courses.filter(e => e.course_name === param)
    console.log(param);
    // res.send(filter)
})

app.listen(port, () => {
    console.log('server is running on ', port);
})

module.exports = app