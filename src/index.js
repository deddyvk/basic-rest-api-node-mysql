require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/users.js');
const middlewarelogRequest = require('./middleware/logs.js');
const upload =  require('./middleware/multer.js');
const port = process.env.port || 3000;

const app = express();

app.use(middlewarelogRequest);

app.use(express.json());
app.use('/assets',express.static('public/image'));

app.use('/users', usersRoutes);
app.post('/upload',upload.single('photo'),(req,res)=>{
    res.json({message:'Upload Berhasil'})
});
app.use((err,re,res,next)=>{
    res.json({message:err.message})
});

app.listen(port,()=>{
    console.log(`Server running on port : ${port}`);
});