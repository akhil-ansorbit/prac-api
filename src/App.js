import axios from "axios";
import React, { useEffect, useState } from "react";
import Prac from "./StarLoop";

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const axiosPost = async () => {
      const respo = await axios("https://jsonplaceholder.typicode.com/users");
      setUser(respo.data);
    };
    axiosPost();
  }, []);

  return (
    <div>
      {/* {console.log(user)} */}
      {user.map((val, id) => {
        return <div key={val.id}>{val.email}</div>;
      })}
    </div>
  );
};

export default App;
