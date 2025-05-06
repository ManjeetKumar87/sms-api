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
            const result = await pool.query(`SELECT * FROM student`);
            res.json(result.rows);
        }catch(err){
           res.status(500).json({error: 'Internal server error'});
        }
    });
    app.get('/gettotalstd',async(req,res)=>{
        try{
            const result = await pool.query(`select count(sid) from student`);
            res.json(result.rows);
        }catch(err){
            res.status(500).json({Error:err.message});
        }
    });

    app.get('/emp', async (req, res) => {
        try {
            const result = await pool.query(`
                SELECT employee_id, job_id, start_date, end_date, department_id
                FROM job_history
            `);
            res.json(result.rows);
        } catch (err) {
            console.error("Query Error:", err);
            res.status(500).json({ Error: err.message });
        }
    });
    app.get('/jobs', async (req, res) => {
        try {
            const result = await pool.query(`
                select * from jobs
            `);
            res.json(result.rows);
        } catch (err) {
            console.error("Query Error:", err);
            res.status(500).json({ Error: err.message });
        }
    });

    app.get('/countemp', async (req, res) => {
        try {
            const result = await pool.query(`
                select count(employee_id) from employees
            `);
            res.json(result.rows);
        } catch (err) {
            console.error("Query Error:", err);
            res.status(500).json({ Error: err.message });
        }
    });
    app.get('/countloc', async (req, res) => {
        try {
            const result = await pool.query(`
                select count(location_id) from locations
            `);
            res.json(result.rows);
        } catch (err) {
            console.error("Query Error:", err);
            res.status(500).json({ Error: err.message });
        }
    });

    app.get('/countcountries', async (req, res) => {
        try {
            const result = await pool.query(`
                select count(country_id) from countries
            `);
            res.json(result.rows);
        } catch (err) {
            console.error("Query Error:", err);
            res.status(500).json({ Error: err.message });
        }
    });

    app.get('/countloc', async (req, res) => {
        try {
            const result = await pool.query(`
                select count(location_id) from locations
            `);
            res.json(result.rows);
        } catch (err) {
            console.error("Query Error:", err);
            res.status(500).json({ Error: err.message });
        }
    });
    app.get('/countregion', async (req, res) => {
        try {
            const result = await pool.query(`
                select count(region_id) from regions
            `);
            res.json(result.rows);
        } catch (err) {
            console.error("Query Error:", err);
            res.status(500).json({ Error: err.message });
        }
    });
    app.get('/countdep', async (req, res) => {
        try {
            const result = await pool.query(`
                select count(department_id) from departments
            `);
            res.json(result.rows);
        } catch (err) {
            console.error("Query Error:", err);
            res.status(500).json({ Error: err.message });
        }
    });





   


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`connected successfully.....Running on port ${PORT}`);
});


