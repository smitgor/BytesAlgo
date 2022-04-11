const express = require("express");
const cors = require("cors");
const { Pool, Client } = require("pg");
const cli = require("nodemon/lib/cli");
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
            if(result.rows.length > 0){
                console.log(result.rows[0]);
                res.send(result.rows[0]);
              }
              else
              {
                res.send([]);
              }
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
          client.query(`Insert into users (name, email, pass, role) values ('${req.body.username}', '${req.body.email}', '${req.body.password}', '${req.body.role}')`, (err, result)=>{
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

app.post('/addjob',(req, res) => {
    console.log(req.body);
    var data = req.body;
    var job;
    async function count() {
      client.query(`select * from job_list`,(err, result)=>
      {
        if(!err)
        {
          job = result.rows.length+1;
          console.log(job);
          add();
        }
      })
    }
    count();
    async function add() {

    client.query(`
    INSERT INTO job_list(
      job_id, recruiter_email, description, job_title, salary, "numberOfPost")
      VALUES ('${job}', '${data.email}', '${data.desc}', '${data.title}', '${data.salary}', '${data.post}');`, 
      (err, result)=>{
        if(!err)
        {
          console.log("success");
          console.log(result);
          res.send("done")
        }
        else{
          console.log(err);
          res.send(err);
        }
      })
    }
});

app.get('/getjobs', (req, res)=>{
  client.query(`select * from job_list`,(err, result)=>{
    if(!err)
    {
      console.log(result.rows);
      res.send(result.rows);
    }
    else
    {
      res.send(err);
    }
  })
});
app.get('/getjob/:id',(req,res) => {
  var data = req.params;
  console.log(req.params.id);
  client.query(`select * from job_list where recruiter_email='${req.params.id}'`,
    (err, result)=>{
      if(!err)
      {
        res.send(result.rows);
      }
      else{
        res.send(err);
      }
    })
});

app.get('/job/:id',(req, res)=>{
  var data = req.params;
  console.log(req.params.id);
  client.query(`select * from job_list where job_id='${req.params.id}'`,
    (err, result)=>{
      if(!err)
      {
        res.send(result.rows);
        // console.log(result.rows);
      }
      else{
        res.send(err);
      }
    })
});

app.post('/addApplication',(req, res) => {
  var data = req.body;
  console.log(req.body);
  var app_id;
  async function count() {
    client.query(`select * from applications`,(err, result)=>
    {
      if(!err)
      {
        app_id = result.rows.length+1;
        console.log(app_id);
        add();
      }
    })
  }
  count();
  async function add() {
    client.query(`
      INSERT INTO applications(
        application_id, candidate_name, candidate_email, skills, experience, mobile_number, job_id)
        VALUES ('${app_id}', '${data.name}', '${data.email}', '${data.skills}', '${data.exp}', '${data.number}', '${data.jobid}')`,
        (err, result)=>{
      if(!err)
      {
        res.send("done");
      }
      else{
        res.send(err);
      }
    }
    );
  }
});

app.get('/getApplication/:id',(req,res) => {
  var data = req.params;
  console.log(req.params.id);
  client.query(`select * from applications where candidate_email='${req.params.id}'`,
    (err, result)=>{
      if(!err)
      {
        res.send(result.rows);
        console.log(result.rows);
      }
      else{
        res.send(err);
      }
    })
});
app.get('/getCandidate/:id',(req,res) => {
  var data = req.params;
  console.log(req.params.id);
  client.query(`select * from applications where job_id='${req.params.id}'`,
    (err, result)=>{
      if(!err)
      {
        res.send(result.rows);
        console.log(result.rows);
      }
      else{
        res.send(err);
      }
    })
});

app.get('/candicates/:id',(req, res)=>{
  var data = req.params;
  console.log(req.params.id);
  client.query(`select * from applciations where job_id='${req.params.id}'`,
    (err, result)=>{
      if(!err)
      {
        res.send(result.rows);
        // console.log(result.rows);
      }
      else{
        res.send(err);
      }
    })
});

app.put("/updateStatus", (req, res) => {
  console.log(req.body);
  var data = req.body;
  let updateQuery = 
  client.query(`update applications set status = '${data.status}' where application_id = ${data.appid}`,
   (err, result) => {
      if (!err) {
        console.log(result.rows);
        res.send(result.rows);
      }
      else
      {
        res.send(err);
      }
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});