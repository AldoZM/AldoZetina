const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//rutas


//create a todo
app.post("/todos",async(req,res)=>{
    //await
    try {
        //console.log(req.body);
        const{rfc} = req.body;
        const{nombre} = req.body;
        const{apellido_paterno} = req.body;
        const{apellido_materno} = req.body;
        const{calle} = req.body;
        const{numero} = req.body;
        const{colonia} = req.body;
        const{codigo_postal} = req.body;
        const{estado} = req.body;
        const newTodo = await pool.query(
            "insert into cliente (rfc,nombre,apellido_paterno,apellido_materno,calle,numero,colonia,codigo_postal,estado) values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning*;",
            [rfc,nombre,apellido_paterno,apellido_materno,calle,numero,colonia,codigo_postal,estado]);
        res.json(newTodo.rows[9]);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todos
app.get("/todos",async(req,res)=>{
    try {
        const allTodos = await pool.query("select*from cliente");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo
app.get("/todos/:rfc",async(req,res)=>{ // el id puede ser un nombre cualquiera
    try {
        //console.log(req.params);
        const {rfc} = req.params;
        const todo = await pool.query("select*from cliente where rfc = $1",[rfc]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo
app.put("/todos/:rfc",async(req,res)=>{
    try {
       const {rfc} =req.params;
       const {nombre} = req.body;
       const updateTodo = await pool.query("update cliente set nombre = $1 where rfc = $2",[nombre,rfc]);
        res.json("todo was updated");
    } catch (err) {
        console.error(err.message);
    }
});

// delete todo
app.delete("/todos/:rfc",async(req,res)=>{
    try {
        const{rfc} = req.params;
        const deleteTodo = await pool.query("delete from cliente where rfc = $1",[rfc]);
        res.json("todo was deleted");
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () =>{
    console.log("Server has started on port 5000")
});