const express = require('express');
const userRoute = require('./src/routes/user.route');
const app = express();
const port = 3000;
const connectDB = require('./src/database/db');

connectDB();

app.use(express.json());
app.use('/user', userRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});