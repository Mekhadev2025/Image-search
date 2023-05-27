import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeName = (event) => {
    setFullname(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const registered = {
      fullName: fullName,
      email: email,
      username: username,
      password: password,
    };

    axios.post('http://localhost:4000/app/signup', registered)
      .then(response => {
        console.log(response.data);
        // Display success message or perform any desired actions
      })
      .catch(error => {
        console.error(error);
        // Display error message or perform any desired actions
      });

    setFullname("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div className="container">
        <div className="form-div">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={changeName}
              value={fullName}
              className="form-control form group"
            />

            <input
              type="text"
              placeholder="Email"
              onChange={changeEmail}
              value={email}
              className="form-control form group"
            />

            <input
              type="text"
              placeholder="UserName"
              onChange={changeUsername}
              value={username}
              className="form-control form group"
            />

            <input
              type="password"
              placeholder="Password"
              onChange={changePassword}
              value={password}
              className="form-control form group"
            />

            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
