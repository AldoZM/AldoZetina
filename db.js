const Pool = require("pg").Pool;


const pool = new Pool({
    user: "postgres",
    password: "ipoD3597",
    host: "localhost",
    port: 5432,
    database: "papeleria"
  });
  
  module.exports = pool;
