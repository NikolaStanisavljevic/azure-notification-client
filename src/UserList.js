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
        console.log(response);
        setUsers(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return <div className="user-list-page"></div>;
}

export default UserList;
