const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db")

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Shopix backend is running..');
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
// app.use('/api/payment', require('./routes/paymentRoutes'));
// app.use('/api/analytics', require('./routes/analyticsRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})