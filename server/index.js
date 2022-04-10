const express = require("express");
const cors = require("cors");
const { Pool, Client } = require("pg");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123123",
  database: "BytesAlgo"
})

client.connect();
// app.get('/users', (req, res)=>{
//   var temp;
//   client.query(`Select * from candidate`, (err, result)=>{
//       if(!err){
//           res.send(result.rows);
//       }
//   });
//   client.end;
// })


app.post("/login", (req, res) => {
    console.log(req.body);
    client.query(`Select * from users where email = '${req.body.emailId}' and pass = '${req.body.password}'`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
        else
        {
          res.send(err);
        }
    });
});

app.post("/register", (req, res) => {
    console.log(req.body);
    console.log(req.body.email);
    client.query(`Select email from users where email='${req.body.email}'`, (err, result)=>{
      if(!err)
      {
        if(result.rowCount > 0)
        {
          res.send("user_exists");
        }
        else{
          client.query(`Insert into users (name, email, pass, role) values ('${req.body.name}', '${req.body.email}', '${req.body.password}', '${req.body.role}')`, (err, result)=>{
            if(!err)
            {
              res.send("success");
            }
            else{
              res.send("error");
            }
          });
        }
      }
      else{
        res.send(err);
      }
    });
});    

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 