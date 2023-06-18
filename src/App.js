import React, { useEffect, useState } from "react";
import "./styles.css";

const userData = [
  { name: "Australia" },
  { name: "Bermuda" },
  { name: "Canada" },
  { name: "Cameroon" },
  { name: "Denmark" },
  { name: "France" },
  { name: "Finland" },
  { name: "Germany" }
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "selectall") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div className="container">
      <form className="multiselect-form">
        <h3>Please Select from Below</h3>
        <h4>e.g. Canada</h4>
        <div className="checkbox-item">
          <input
            type="checkbox"
            name="selectall"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
            id="selectall"
          />
          <label htmlFor="selectall">
            <b>Select All</b>
          </label>
        </div>
        {users.map((user, index) => (
          <div className="checkbox-item" key={index}>
            <input
              type="checkbox"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
              id={user.name}
            />
            <label htmlFor={user.name}>{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App;
