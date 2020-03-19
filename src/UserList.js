import React, { useState, useEffect } from "react";
const axios = require("axios");

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("https://azure-test-apis.azurewebsites.net/api/getAllUsers")
      .then(function(response) {
        setUsers(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="user-list-page">
      <div>
        <p className="users-header">
          List connected with our azure test application
        </p>
        <ul>
          {users.map(user => {
            return <li>{user.name}</li>;
          })}
        </ul>
      </div>
      <div className="users-background"></div>
    </div>
  );
}

export default UserList;
