import { useEffect, useState } from "react";
import UploadForm from "./components/UploadForm";
import DocumentList from "./components/DocumentList";
import "./App.css";

function App() {
  const [documents, setDocuments] = useState(() => {
    const storedDocuments = localStorage.getItem("documents");
    return storedDocuments ? JSON.parse(storedDocuments) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const filterOptions = ["All", "Plans", "Reports", "Contracts", "Invoices", "Statements", "Drawings", "Proposals", "Other"];

  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(documents));
  }, [documents]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilter("All");
  }
  const filterMatches = documents.filter(doc => 
    (filter === "All" || doc.type === filter)
  );
  const searchTerm = search.toLowerCase();
  const searchMatches = filterMatches.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm) || doc.type.toLowerCase().includes(searchTerm)
    
  );
  const addDocument = (doc) => {
    setDocuments([...documents, doc]);
  };
  const deleteDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }


  return (
    <div clasName="app-container">
      <h1 className="app-title">DocVault</h1>
      <div className="app-heading-container">
        <h1 className="app-heading">Document Dashboard</h1>
        <input className="app-search-input" type="text" placeholder="Search documents..." value={search} onChange={handleSearch} />
      </div>

      <div className="app-upload-container">
        <h2 className="document-upload-heading">Upload Document</h2>
        <UploadForm addDocument={addDocument} />
      </div>

      <div className="app-filter-container">
        {filterOptions.map(option => (
        <button className="app-filter-button" key={option} onClick={() => setFilter(option)}>{option}</button>
      ))}
      </div >
      <div className="app-document-list-container">
        <DocumentList docs={searchMatches} deleteDoc={deleteDocument}  />
      </div>
     

      </div>
  );
}


export default App;