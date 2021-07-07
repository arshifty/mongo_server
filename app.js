const express = require('express');
var app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//middleware
app.use(bodyParser.json());

//import routes
const userRoute = require('./router/userroute');
app.use('/user', userRoute);

const studentRoute = require('./router/studentroute');
app.use('/student', studentRoute);



app.get('/', (req, res) => {
  console.log('test sss');
  res.send('home test');
});



// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       ssl: true,
//       sslValidate: true,
//       sslCA: require('fs').readFileSync(`/etc/ssl/mongo_new/cert.pem`)
//     });
//   } catch (err) {
//     console.log('Failed to connect to MongoDB', err);
//   }
// };

// connectDB();




app.listen(3006);