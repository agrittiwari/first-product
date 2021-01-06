const express = require('express');


const app = express();
app.get('/', (req, res) => res.json({ msg : "started building backend"}))


//Defining Routes 

app.use('/myPortfolio/auth', require('./Routes/auth'));
app.use('/myPortfolio/register', require('./Routes/register'));
app.use('/myPortfolio/portfolio', require('./Routes/portfolio'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));