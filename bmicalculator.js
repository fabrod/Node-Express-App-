const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

//routes plus call back function 

app.get('/bmicalculator', (req, res) => res.sendFile(__dirname + "/bmicalculator.html"))//bmi



app.post("/bmicalculator", function(req, res){ //bmi block
   
    var weight = parseFloat(req.body.num1)
    var height = parseFloat(req.body.num2)

    var bmi = weight / (height * height)


    res.send("Your BMI is  " + bmi)
})











app.listen(port, () => console.log(`Example app listening on port ${port}!`))