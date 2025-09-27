import React, { useState } from "react";

function Form({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Form;
