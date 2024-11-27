import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Spinner, Alert } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error)
    return (
      <Container>
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">User List</h1>
      {users.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert variant="info">No users found</Alert>
      )}
    </Container>
  );
}

export default App;