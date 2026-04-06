import { useState } from "react";
import UploadForm from "./components/UploadForm";
import DocumentList from "./components/DocumentList";

function App() {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const filterOptions = ["All", "Plans", "Reports", "Contracts", "Invoices", "Statements", "Drawings", "Proposals", "Other"];
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const finalDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(search.toLowerCase()) && (filter === "All" || doc.type === filter)
  );

  const addDocument = (doc) => {
    setDocuments([...documents, doc]);
  };
  const deleteDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }


  return (
    <div>
      <h1>DocVault</h1>
      <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
        <UploadForm addDocument={addDocument} />
        {filterOptions.map(option => (
        <button key={option} onClick={() => setFilter(option)}>{option}</button>
      ))}
        <DocumentList docs={finalDocuments} deletedoc={deleteDocument} />
      </div>
  );
}


export default App;