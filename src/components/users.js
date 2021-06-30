import React, { useState, useEffect } from "react";
import Main from "./main";
const Users = () => {
  const [data, setData] = useState([]);
  const [newData, setnewData] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setData(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setData(newData);
  }, [newData]);

  const sortByIdUp = () => {
    setnewData(
      [...data].sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      })
    );
  };

  const sortByIdDown = () => {
    setnewData(
      [...data].sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      })
    );
  };

  const sortByNameUp = () => {
    setnewData(
      [...data].sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      })
    );
  };

  const sortByNameDown = () => {
    setnewData(
      [...data].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
    );
  };

  return (
    <>
      <Main />
      <div className="users-buttons">
        <button onClick={sortByIdUp}>Сортування з кінця по id</button>
        <button onClick={sortByIdDown}>Сортування з початку по Id</button>
        <br />
        <button onClick={sortByNameUp}>Сортування з початку по name</button>
        <button onClick={sortByNameDown}>Сортування з кінця по name</button>
      </div>
      <div className="users-wraper">
        {data.map((user) => {
          return (
            <div className="users-field" key={user.id}>
              <p>Email: {user.email} </p>
              <p>Name: {user.name} </p>
              <p>Phone: {user.phone} </p>
              <p>Username: {user.username} </p>
              <p>Website: {user.website} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Users;
