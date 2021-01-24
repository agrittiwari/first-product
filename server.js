const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express();
app.get('/', (req, res) => res.json({ msg : "started building backend"}))


//init middleware to use req.body


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

//Connecting Database

connectDB()



//Defining Routes 

app.use('/myPortfolio/auth', require('./Routes/auth'));
app.use('/myPortfolio/register', require('./Routes/register'));
app.use("/myPortfolio/", require('./Routes/portfolio'));
app.use("/myPortfolio", require('./Routes/individual'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));