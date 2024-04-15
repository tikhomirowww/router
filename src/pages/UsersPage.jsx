import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    // return () => {
    //   alert("ne uhodite!");
    // };
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((item, index) => (
        <Link style={{ all: "unset" }} to={`/details/${item.id}`} key={index}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
        </Link>
      ))}
      {/* <button style={{ width: "50px" }} onClick={() => setCount(count - 1)}>
        -
      </button>
      <h1>{count}</h1>
      <button style={{ width: "50px" }} onClick={() => setCount(count + 1)}>
        +
      </button> */}
    </div>
  );
};

export default UsersPage;
