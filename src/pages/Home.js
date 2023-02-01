import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    //fetch user data
    const fetchUserData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      return setUserInfo(data);
    };
    fetchUserData();
  }, []);
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Contact</th>
            <th scope="col">City</th>
            <th scope="col">Street</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {userInfo?.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address?.city}</td>
              <td>{user.address?.street}</td>
              <td>
                <Link
                  to={`/user-details/${user.id}`}
                  className="btn btn-primary text-dark btn-sm rounded"
                >
                  View Details
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Home;
