import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (name) => {
    setUsers([...users, { id: users.length + 1, name }]);
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <Form onSubmit={addUser} />
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
