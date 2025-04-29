const express=require('express');
const cors= require('cors');
const pool =require('./db');
require('dotenv').config();

const app =express();
app.use(cors());
app.use(express.json());
app.get( '/',async(req,res)=>{
    try{
        res.json('Welcome to the student API');
    }catch(err){
     res.status
    }
    });

    app.get('/students',async(req,res)=>{
        try{
            const result = await pool.query('SELECT * FROM student');
            res.json(result.rows);
        }catch(err){
           res.status(500).json({error: 'Internal server error'});
        }
    });
    pp.get('/gettotalstd',async(req,res)=>{
        try{
            const result = await pool.query('SELECT count(ID) FROM student');
            res.json(result.rows);
        }catch(err){
           res.status(500).json({error: 'Internal server error'});
        }
    });

    


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`connected successfully.....Running on port ${PORT}`);
});