import { useState } from "react";

function UploadForm({ addDocument }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  
  const dateToday = new Date().toLocaleDateString().split("T")[0];
  const [uploadDate, setUploadDate] = useState(dateToday);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoc = {
      id: Date.now(),
      name,
      type,
      date: uploadDate,
    };

    addDocument(newDoc);
    setName("");
    setType("");
    setUploadDate(dateToday);
  };


  return (
    <form className="document-upload-form" onSubmit={handleSubmit}>

        <div className="document-upload-card">
          <label className="document-upload-card-label" htmlFor="name">Document Name</label>
          <input
            className="document-upload-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="e.g Foundation Plan v3"
            required
            />
        </div>

        <div className="document-upload-card">
          <label className="document-upload-card-label" htmlFor="type">Document Type</label>
          <select className="document-upload-select-input" value={type} onChange={(e) => setType(e.target.value)}>
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
          
        </div>

        <div className="document-upload-card">
          <label className="document-upload-card-label" htmlFor="date">Upload Date</label>
          <input
            id="date"
            className="document-upload-input-date"
            type="date"
            value={uploadDate}
            onChange={(e) => setUploadDate(e.target.value)}
            required
            />
        </div>
  
        <div className="document-upload-card">
          <button className="document-upload-button" type="submit">Add Document</button>
        </div>

    </form>
  );
}

export default UploadForm;