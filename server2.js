const mysql = require('mysql');

const data = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'demo'
})

data.connect((error)=>{
    if(error) throw error;
    console.log('connected');
    let sql = "insert into tuition (Id,Name,phone,Email) values ?";
    let values = [
        [4,'bonhi',19454,'2104@ku.ac.bd']
    ]

    data.query(sql,[values],(error,result)=>{
        if(error) throw error;
        console.log('record inserted successfully');
    })

    data.query(`select * from tuition where Id>=15`,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);
        }
    })
})
