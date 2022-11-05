const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

var Port = 1337;

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.sendFile('C:/Users/MAS/Desktop/QBCore/server/index.html');
});

// Connection String
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "alfa",
});

// Connection Log 
db.connect((err) => {
    if(err){
      throw err;
    }
    console.log('MySql Database Connected......')
});


app.post('/register', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      if (err) {
      res.send({err: err});
      }

      if (result.length > 0) {
        res.send(result) 
      } else {
        res.send({ message: "Wrong usernam,password Combination!!!"});
      }
    }
  );
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      (err, result) => {
        if (err) {
        res.send({err: err});
        }

        if (result) {
          res.send(result)
        } else {
          res.send({ message: "Wrong usernam,password Combination!!!"});
        }
      }
    );
});


// App Running Log
app.listen(Port, () => {
  console.log("Server is running on Port " + Port + ".......");
});
