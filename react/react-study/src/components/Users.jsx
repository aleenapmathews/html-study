import styles from "./users.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState();

  async function getUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <table className={styles["user-table"]}>
      <thead>
        <tr>
          <th rowSpan={2}>id</th>
          <th rowSpan={2}>name</th>
          <th rowSpan={2}>email</th>
          <th rowSpan={2}>phone</th>
          <th colSpan={3}>address</th>
        </tr>
        <tr>
            <th>street</th>
            <th>city</th>
            <th>zipcode</th>
            <th>map</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
                <td>
                    <a href={`https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`} target="_blank">view</a>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
export default Users;
