import React, { useEffect, useState } from "react";
import axios from "axios";

const SubscriptionTable = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://invitationcardbackend.onrender.com/api/users/subscription"
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching subscription data:", err.message);
        setError("Failed to fetch user data. Please try again later.");
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", padding: "20px" }}>
      <h1>User Subscriptions</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table
          style={{
            width: "90%",
            height: "90%",
            textAlign: "left",
            borderCollapse: "collapse",
            border: "2px solid white",
            background: "linear-gradient(45deg, #6a11cb, #2575fc)", // Gradient background
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid white",
                  background:
                    "linear-gradient(45deg,rgb(39, 41, 164), #feb47b)", // Gradient background for header
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid white",
                  background:
                    "linear-gradient(45deg,rgb(77, 26, 185), #feb47b)", // Gradient background for header
                }}
              >
                Subscription Type
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid white",
                    background:
                      "linear-gradient(45deg,rgb(31, 29, 81),rgb(23, 77, 169))", // Gradient background for rows
                  }}
                >
                  {user.email}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid white",
                    background:
                      "linear-gradient(45deg,rgb(31, 29, 81),rgb(23, 77, 169))", // Gradient background for rows
                  }}
                >
                  {user.subscriptionType}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubscriptionTable;
