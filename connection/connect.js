var sql = require("mssql");  
var connect = function()  
{  
    
    var conn = new sql.ConnectionPool({  
        // user: 'sa',  
        // password: 'Pass@123',  
        // server: 'SAI-PC',  
        // database: 'TESTDB'  
        host:process.env.DB_host,
        user:process.env.DB_user,
        password:process.env.DB_password,
        database:process.env.DB
    });  
  
    return conn;  
};  
  
module.exports = connect;