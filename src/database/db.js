const mongoose = require('mongoose');

const connectDB = async () => {
    console.log('Connecting to MongoDB...');
    
    mongoose.connect("mongodb+srv://lipegx:root@cluster0.2zudajc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

     )
     .then(() => console.log('Connected to MongoDB'))
     .catch((error) => console.log('Error connecting to MongoDB', error.message))
};

module.exports = connectDB;