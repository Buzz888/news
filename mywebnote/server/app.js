const express = require('express')
const app = express()
app.use(require('cors')())
app.use(express.json())
app.set('secret','3qroqnrfnao24ioqn')
require('./plugins/db')(app)
require('./router/admin')(app)
require('./router/web')(app)
app.use('/admin',express.static(__dirname+'/admin'))
app.use('/',express.static(__dirname+'/web'))
app.listen('3001',(req,res)=>{
    console.log('hello ok 3000')
})