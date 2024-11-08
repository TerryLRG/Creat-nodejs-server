const mySql = require("mysql2");
const connection = mySql.createConnection({
    host:"localhost",
    user:"root",
    password:"ZXCVbnm11223311",
    port:3306,
    database:"blogdatabase"
});
connection.connect();

// const sql = "insert into blogs_table(title,content,author,creatAt) values('标题3','内容1','赵五',1234567890456);";
const sql = "select * from blogs_table;";

connection.query(sql,(err,result)=>{
    if(err){
        console.error("error:",err);
        return;
    }
    console.log("result:",result);
});
connection.end();