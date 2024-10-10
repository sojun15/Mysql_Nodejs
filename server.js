const {createPool} = require('mysql');

const pool = createPool({
    host:"localhost",
    user:'root',
    password:'',
    database:"demo",
    connectionLimit:10
})

pool.query(`select * from tuition where Id>=15`,(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(result);
    }
})