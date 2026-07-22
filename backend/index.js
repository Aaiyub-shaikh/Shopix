const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db")

const app = express();
dotenv.config();
connectDB();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Shopix backend is running..');
});

app.use('api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})