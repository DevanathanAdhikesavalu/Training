// var mysql = require('mysql');
// var bparser = require('body-parser'); // body-parser is required to retrive data sent through POST request
// bparserinit = bparser.urlencoded({ extended: false }); //Initializing the body parser
// var exp = require('express');
// var expinit = exp(); // initializing expressjs
// var app = expinit;

// mysqlconnection = mysql.createConnection({
//     host: 'localhost',
//     database: "world",
//     user: "root",
//     password: "root",
//     port: "3306"
// });

// function checkConnection(error) {
//     if (error == undefined) {
//         console.log("connected to the database");
//     }
//     else {
//         console.log("Error code" + error.errno)
//         console.log(error.message);
//     }
// }

// function feedback(error) {
//     if (error == undefined) {
//         console.log("open the browser and visit the url http://localhost:5051/getAllUsers");

//     }
//     else {
//         console.log(error.errno);
//         console.log(error.message);
//     }
// }
// var queryResults = undefined;

// function processResults(error, results) {
//     queryResults = results;
//     console.log(queryResults);
//     response.send(queryResults);
// }
// function checkStatus(error, results) {
//     if (error) {
//         console.log("Error updating user: " + error.message);
//         response.status(500).send("Error updating user");
//     } else {
//         console.log("In users One Row affected ");
//         queryResults = results;
//         response.send(queryResults);
//     }
// }
// function displayAllUsers(request, response) {
//     mysqlconnection.connect(checkConnection);
//     mysqlconnection.query('select * from Users', processResults);

// }

// function getUserById(request, response) {
//     var userid = request.query.uid;
//     mysqlconnection.query('select * from users where userid=?', [userid], processResults);

// }

// function getUserByEmail(request, response) {
//     var userEmail = request.query.uemail;
//     mysqlconnection.query('select * from users where emailid=?', [userEmail], processResults);
// }
// function addNewUser(request, response) {
//     var userId = request.body.uid;
//     var userPassword = request.body.upassword; // Assuming you're sending the name in the request body
//     var userEmail = request.body.email; // Assuming you're sending the email in the request body

//     var insertQuery = 'INSERT INTO users (userid,password,emailid) VALUES (?,?,?)';

//     mysqlconnection.query(insertQuery, [userId,userPassword,userEmail], checkStatus);
// }
// function updateUserById(request, response) {
//     var userId = request.query.uid;
//     var userPassword = request.body.upassword; // Assuming you're sending the name in the request body
//     var userEmail = request.body.email; // Assuming you're sending the email in the request body
//     var updateQuery = 'UPDATE users SET name=?, email=? WHERE userid=?';

//     mysqlconnection.query(updateQuery, [userId,userPassword,userEmail], checkStatus);
// }

// app.listen(5051, feedback);
// app.get('/getAllUsers', displayAllUsers);
// app.get('/getUserById', getUserById);
// app.get('/getUserByEmail', getUserByEmail);
// app.post('/insert', bparserinit, addNewUser);
// app.put('/updateUser', updateUserById);
// mysqlconnection.connect(checkConnection)

var mysql = require('mysql');
var exp = require('express');
var cors = require('cors');
var app = exp();
app.use(exp.json());
app.use(cors());
var bparser = require("body-parser");
bparserInit = bparser.urlencoded({ extended: true });
mssqlconnection = mysql.createConnection({
  host: 'localhost',
  database: 'world',
  user: 'root',
  password: 'root',
  port: 3306,
});

function checkConnection(error) {
  if (error == undefined) {
    console.log("connected to the database");
  } else {
    console.log("Error code" + error.errno)
    console.log(error.message);
  }
}

function feedback(error) {
  if (error == undefined) {
    console.log("open the browser and visit the url http://localhost:5051/getAll");

  } else {
    console.log(error.errno);
    console.log(error.message);
  }
}

var queryResults = undefined;

function processResults(error, results) {
  queryResults = results;
  console.log(results);
}

function displayAllUsers(request, response) {
  mssqlconnection.connect(checkConnection);
  mssqlconnection.query('select * from users', processResults);
  response.send(queryResults);
}

function getUserById(request, response) {
  var userid = request.query.uid;
  mssqlconnection.query('select * from users where userid=?', [userid], processResults);
  response.send(queryResults);
}

function getUserByEmail(request, response) {
  var emailId = request.query.mail;
  mssqlconnection.query('select * from users where emailid=?', [emailId], processResults);
  response.send(queryResults);
}

var statusMessage = "";

function checkInsertStatus(error) {
  (error == undefined) ?
    statusMessage = "<b>Insert successsful</b>" :
    statusMessage = "<b>Insert failure" + error.message + "</b>";

}

function insertUser(request, response) {
  userid = request.body.uid;
  password = request.body.pwd;
  emailId = request.body.mail;
  mssqlconnection.connect(checkConnection);
  console.log(userid + "\t\t" + password + "\t\t" + emailId);
  mssqlconnection.query('insert into users values(?,?,?)',
    [userid, password, emailId], checkInsertStatus);
  response.send(statusMessage);
}

function updateUser(request, response) {
  var userid = request.body.uid;
  var newPassWord = request.body.pwd;
  var newEmail = request.body.mail
  var updatedUser = {
    password: newPassWord,
    emailid: newEmail
  };

  mssqlconnection.query('update users set ? where userid = ?',  [updatedUser, userid], checkInsertStatus);
  response.send(statusMessage);
}

function deleteUser(request, response) {
  var userid = request.params.uid;
  mssqlconnection.query('delete from users where userid = ?', [userid], checkInsertStatus);
  response.send(statusMessage);
}

function allcontacts(request,response){
  mssqlconnection.connect(checkConnection);
  mssqlconnection.query("select * from contactus",processResults);
  response.send(JSON.stringify(queryResults));
}
app.get("/getallcontact",allcontacts);

function AddContact(request,response){
  var firstname=request.body.fname;
  var lastname=request.body.lname;
  var emailid=request.body.email;
  var phonenumber=request.body.number;
  mssqlconnection.connect(checkConnection);
  mssqlconnection.query("insert into contactus values(?,?,?,?)",[firstname,lastname,emailid,phonenumber],checkInsertStatus);
  response.send(statusmessage);
}
app.post("/addcontact",bparserInit,AddContact);


// function updatecontact(request,response){
 
//   var firstname=request.body.fname;
//   var lastname=request.body.lname;
//   var emailid=request.body.email;
//   var phonenumber=request.body.number;
//   mssqlconnection.connect(checkConnection);
//   mssqlconnection.query("update contactus set lastname=?,emailid=?,phonenumber=? where firstname=?",[lastname,emailid,phonenumber,firstname],processResult);
//   response.send(statusmessage);
// }
// app.post("/updatecontact",bparserInit,UpdateUser);

app.listen(5051, feedback);
app.get('/getAll', displayAllUsers);
app.get('/getById', getUserById);
app.get('/getByEmail', getUserByEmail);
app.post('/insertuser', bparserInit, insertUser);
app.put('/updateuser', bparserInit, updateUser); // New route for updating a user
app.delete('/deleteuser/:id', deleteUser); // New route for deleting a user
mssqlconnection.connect(checkConnection);


 