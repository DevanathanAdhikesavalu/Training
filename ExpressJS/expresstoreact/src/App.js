// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState(null);

//   // useEffect(() => {
//   //   fetch("http://localhost:5051/getAll")
//   //     .then(response => response.json())
//   //     .then(data => setData(data))
//   // }, []);

//   const handleButtonClick = () => {
//     console.log(data);
//   }

//   const[userid,setuserid]=useState('');
//   const[password,setpassword]=useState('');
//   const[emailid,setemailid]=useState('');
//   const updateUserid=(event)=>{
//     setuserid(event.target.value);
//   }
//   const updatePassword=(event)=>{
//     setpassword(event.target.value);
//   }
//   const updateEmail=(event)=>{
//     setemailid(event.target.value);
//   }
//   const insertUser=(event)=>{
//     event.preventDefault();
//     axios.post("http://localhost:5051/insertuser",{uid:userid,pwd:password,mail:emailid})
//     .then(res=>console.log(res));
//   }

//   return (
//     <div className="App">
//       <div>
//       <button onClick={handleButtonClick}>Show Data</button>
//       {data && data.map(item => (
//         <ul key={item.userid}>
//           <li>{item.userid}</li>
//           <li>{item.password}</li>
//         </ul>
//       ))}

//       </div>
//       <div>
//       <form onSubmit={insertUser}>
//         <label>UserID</label>
//         <input type="text" name="userid" value={userid} onChange={updateUserid} /><br/>
//         <label>password</label>
//         <input type="password" name="password" value={password} onChange={updatePassword} /><br/>
//         <label>EmailId</label>
//         <input type="email" name="emailid" value={emailid} onChange={updateEmail} /><br/>
//         <input type="submit" value="Add" />&nbsp;&nbsp;
//         <input type='reset' value="reset" />
//       </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [userid, setuserid] = useState('');
  const [password, setpassword] = useState('');
  const [emailid, setemailid] = useState('');

  const handleButtonClick = () => {
    axios.get("http://localhost:5051/getAll")
      .then(res => setData(res.data))
      .catch(error => console.error(error));
  }

  const updateUserid = (event) => {
    setuserid(event.target.value);
  }

  const updatePassword = (event) => {
    setpassword(event.target.value);
  }

  const updateEmail = (event) => {
    setemailid(event.target.value);
  }

  const insertUser = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5051/insertuser", { uid: userid, pwd: password, mail: emailid })
      .then(res => {
        console.log(res.data);
        handleButtonClick(); // Reload data after insertion
      })
      .catch(error => console.error(error));
  }

  const updateUser = (event) => {
    event.preventDefault();
    const updatedUser = {
      id: userid,
      pwd: password,
      mail: emailid
    };

    axios.put(`http://localhost:5051/updateuser`, updatedUser)
      .then(res => console.log(res.data))
      .catch(error => console.error(error));
  }

  const deleteUser = (event) => {
    event.preventDefault();

    axios.delete(`http://localhost:5051/deleteuser/${userid}`)
      .then(res => console.log(res.data))
      .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleButtonClick}>Show Data</button>
        <ul>
          {data.map(item => (
            <li key={item.userid}>
              {item.userid} - {item.password}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form onSubmit={insertUser}>
          <label>UserID</label>
          <input type="text" name="userid" value={userid} onChange={updateUserid} /><br />
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={updatePassword} /><br />
          <label>EmailId</label>
          <input type="email" name="emailid" value={emailid} onChange={updateEmail} /><br />
          <input type="submit" value="Add" />&nbsp;&nbsp;
          <input type='reset' value="Reset" />
          <button type="button" onClick={updateUser}>Update</button>
          <button type="button" onClick={deleteUser}>Delete</button>
        </form>
      </div>
    </div>
  );
}

export default App;

