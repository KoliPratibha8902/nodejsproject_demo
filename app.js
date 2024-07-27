const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// MongoDB connection
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('Failed to connect to MongoDB Atlas', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// User model
const User = require('./models/User');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  
  try {
    await newUser.save();
    res.send('Registration successful');
  } catch (err) {
    res.send('Error registering user');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/registrationDB')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log('Failed to connect to MongoDB', err));

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.use(express.static('public'));

// // User model
// const User = require('./models/User');

// // Routes
// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   const newUser = new User({ username, password });
  
//   try {
//     await newUser.save();
//     res.send('Registration successful');
//   } catch (err) {
//     res.send('Error registering user');
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');

// // const app = express();

// // // MongoDB connection
// // mongoose.connect('mongodb://localhost:27017/registrationDB', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // }).then(() => console.log('Connected to MongoDB'))
// //   .catch(err => console.log('Failed to connect to MongoDB', err));

// // // Middleware
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.set('view engine', 'ejs');
// // app.use(express.static('public'));

// // // User model
// // const User = require('./models/User');

// // // Routes
// // app.get('/', (req, res) => {
// //   res.render('index');
// // });

// // app.post('/register', async (req, res) => {
// //   const { username, password } = req.body;
// //   const newUser = new User({ username, password });
  
// //   try {
// //     await newUser.save();
// //     res.send('Registration successful');
// //   } catch (err) {
// //     res.send('Error registering user');
// //   }
// // });

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
