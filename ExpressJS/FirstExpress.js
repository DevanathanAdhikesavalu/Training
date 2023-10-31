var express = require('express');   //importing expressjs
var app = express();   //initialize expressjs environment
var bparser = require('body-parser'); // body-parser is required to retrive data sent through POST request
bparserinit = bparser.urlencoded({extended:false}); //Initializing the body parser
var users = [
            {userID:"100",firstName:"Sanjay",lastName:"srivasta"},
            {userID:"101",firstName:"Gaurav",lastName:"Akash"},
            {userID:"102",firstName:"Deva",lastName:"Nathan"}
        ];
function retrieveUser(request,response){
    var status = false;        
    var userid = request.query.uid;
    var firstName = request.query.fname;
    for(var user of users)
    {
        if(userid == user.userID && firstName == user.firstName){
            status = true;
            break;
        }
    }
        if(status)
            response.send(user);
        else
            response.end("<b>No employee with Id </b>  "  + userid);
}
app.get("/getUser",retrieveUser);

function retrieveAllUsers(request,response){
    response.send(users);
}

app.get("/getAllUsers", retrieveAllUsers);

function addUser(request, response){ //FisrtMethod
    var newUser = request.body;  // Assuming you're sending the user object in the request body

    // Check if the user already exists
    var userExists = users.some(user => user.userID === newUser.userID);

    if(userExists){
        response.send(`User with ID ${newUser.userID} already exists.`);
    } else {
        users.push(newUser);
        response.send(`User with ID ${newUser.userID} has been added successfully.`);
    }
}
app.use(express.json());
app.post("/addUser", addUser);

function addNewUser(request, response){ //Second method to add user
    var user_id = request.body.uid;
    var first_Name = request.body.fName;
    var last_Name = request.body.lName;
    var resp =  users.push({userID:user_id , firstName: first_Name , lastName:last_Name})
    response.send("<b>Added new User and the total user Count is : </b>" + resp);
}
app.post("/addNewUser",bparserinit ,addNewUser);

function deleteUser(request, response){
    var userId = request.params.id;
    var index = users.findIndex(user => user.userID === userId);

    if(index !== -1){
        users.splice(index, 1);
        response.send(`User with ID ${userId} has been deleted successfully.`);
    } else {
        response.send(`User with ID ${userId} does not exist.`);
    }
}

app.delete("/deleteUser/:id", deleteUser);

function updateUser(request, response){
    var userId = request.params.id;
    var updatedUser = request.body;

    var Index = users.findIndex(user => user.userID === userId);

    if(Index !== -1){
        users[Index] = updatedUser;
        response.send(`User with ID ${userId} has been updated successfully.`);
    } else {
        response.send(`User with ID ${userId} does not exist.`);
    }
}
app.put("/updateUser/:id", express.json(), updateUser);

function updateOldUser(request,response){
    var user_Id = request.body.uid;
    var first_Name = request.body.fName;
    var last_Name = request.body.lName;
    var index = users.findIndex(user => user.userID === user_Id);
    if(index !== -1){
        users[index] = {userID: user_Id, firstName: first_Name, lastName: last_Name};
        response.send(`User with ID ${user_Id} has been updated successfully.`);
    } else {
        response.send(`User with ID ${user_Id} does not exist.`);
    }
}

app.put("/updateOldUser",bparserinit, updateOldUser);


 //request, response represents the http request, response
function  welcome(request,response){         
   var today = new Date();
   var visitorCount=0; visitorCount++;
   var resp = "<html><body><b>Today : "+today;
   resp += "<b><br><b>Visitor count </b> : "+visitorCount;
   resp  += "</body></html>";
    response.send(resp);
}
app.get('/Welcome',welcome);
function home(request,response){
    var resp = "<html><body><b>Welcome to our site..<br>";
    resp += "<a href=/welcome>Welcome to Home Page</a></body></html>";
    response.end(resp);
}
app.get('/Home',home);

function feedback(){
    console.log("Server started on port 8000...");
    console.log("open the browser and visit http://localhost:8000");
}
app.listen(8000,feedback)