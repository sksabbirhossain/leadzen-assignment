import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [open, setOpen] = useState(false);
  const { userid } = useParams();
  useEffect(() => {
    //fetch user data
    const fetchUserData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      //find user by user id
      const user = data.find((item) => item.id == userid);
      setUserInfo(user);
    };
    fetchUserData();
  }, [userid]);

  return (
    <div className="container mt-4">
      <div className="shadow rounded py-2 text-center">
        <h4>user details</h4>
        <Link to="/" className="btn btn-primary btn-sm">
          Go to Home
        </Link>
      </div>

      <div className="shadow mt-4 p-2">
        <div className="">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Contact</th>
                <th scope="col">City</th>
                <th scope="col">Street</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userInfo.name}</td>
                <td>{userInfo.address?.city}</td>
                <td>{userInfo.address?.street}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? "See Details " : "Hide details"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={`border rounded p-4 mx-4 mt-5 ${
            open ? "d-none" : "d-block"
          }`}
        >
          <h5 className="mb-5">Description</h5>

          <div className="row">
            <div className="col-md-4">
              <h6>Contact Person</h6>
              <h6>Name</h6>
              <p>{userInfo.name}</p>
              <h6>Email</h6>
              <p>{userInfo.email}</p>
              <h6>Phone</h6>
              <p>{userInfo.phone}</p>
              <h6>Website</h6>
              <p>{userInfo.website}</p>
            </div>
            <div className="col-md-4">
              <h6>Address</h6>
              <p>
                {userInfo.address?.city}, {userInfo.address?.street},{" "}
                {userInfo.address?.zipcode}
              </p>
              <h6>City</h6>
              <p>{userInfo.address?.city}</p>
              <h6>Street</h6>
              <p>{userInfo.address?.street}</p>
              <h6>Suite</h6>
              <p>{userInfo.address?.suite}</p>
              <h6>Zipcode</h6>
              <p>{userInfo.address?.zipcode}</p>
            </div>
            <div className="col-md-4">
              <h6>Company Details</h6>
              <h6>Company Name</h6>
              <p>{userInfo.company?.name}</p>
              <h6>BS</h6>
              <p>{userInfo.company?.bs}</p>
              <h6>Catch Phrase</h6>
              <p>{userInfo.company?.catchPhrase}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
