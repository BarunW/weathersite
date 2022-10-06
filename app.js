const express = require('express')
const https = require('https')
const app = express()
const port = 8000

const cors = require('cors')


// Static 
app.use(express.static('public_static'))
app.use('/css', express.static(__dirname +'public_static/css'))
app.use('/js', express.static(__dirname +'public_static/js'))
app.use('/images', express.static(__dirname +'public_static/images'))
app.use('/icons',express.static(__dirname+'public_static/icons'))
// Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) =>{
    res.render("index")
})










//packages
app.use(cors())

app.listen(port, () => console.log("Listening on port"))

