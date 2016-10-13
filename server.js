const express = require('express')
const app = express()

//GET port
app.set('port', (process.env.PORT || 3000))
//VIEWS folder
app.set('views', __dirname + '/views')
//SETUP pug
app.set('view engine', 'pug')
app.engine('pug', require('pug').__express)

//PUBLIC folder
app.use('/public', express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
  res.render("page")
})

app.listen(app.get('port'))
console.log(`Running on 0.0.0.0/${app.get('port')}`)
