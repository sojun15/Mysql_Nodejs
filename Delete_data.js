let mysql = require('mysql');

let data = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'demo'
})

data.connect((error)=>{
    if(error) throw error;

    // if we want to write console statement with else and without else statement 
    data.query(`delete from tuition where Id=26`,(error)=>{
        if(error) throw error
        else
        {
            console.log('delete successfully');
        }
    })

    data.query(`select Name from tuition where Id<30`,(error,result)=>{
        if(error) throw error
        console.log('Name are:',result);
    })
})