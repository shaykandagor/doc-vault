import { useState } from "react";

function UploadForm({ addDocument }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoc = {
      id: Date.now(),
      name,
      type,
      date: new Date().toLocaleDateString(),
    };

    addDocument(newDoc);
    setName("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Document name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select a type</option> 
        <option value="Plans">Plans</option>
        <option value="Reports">Reports</option>
        <option value="Contracts">Contracts</option>
        <option value="Invoices">Invoices</option>
        <option value="Statements">Statements</option>
        <option value="Drawings">Drawings</option>
        <option value="Proposals">Proposals</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Add Document</button>
    </form>
  );
}

export default UploadForm;