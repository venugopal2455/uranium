const express = require('express');
var bodyParser = require('body-parser');
// var address=require('address');
const moment=require("moment")

const route = require('./routes/route');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://venu2455:DHm29UVwJHB7glUZ@cluster0.8dmyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
useNewUrlParser: true
})
.then( ()=> console.log('mongoDb is connected'))
.catch(err => console.log(err))
// app.use (
//     function (req, res, next) {
//         let timestamp=moment().format('YYYY-MM-DD HH:mm:ss');
        
//         console.log (timestamp,req.ip,req.path);
    
//   }
//   );
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
