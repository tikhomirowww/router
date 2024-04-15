import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    // return () => {
    //   alert("ne uhodite!");
    // };
  }, []);
  console.log(params);
  console.log(user);
  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Phone: {user?.phone}</p>
    </div>
  );
};

export default Details;
