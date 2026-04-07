import { useEffect, useState } from "react";
import UploadForm from "./components/UploadForm";
import DocumentList from "./components/DocumentList";

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
    <div>
      <h1>DocVault</h1>
      <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
        <UploadForm addDocument={addDocument} />
        {filterOptions.map(option => (
        <button key={option} onClick={() => setFilter(option)}>{option}</button>
      ))}
        <DocumentList docs={searchMatches} deletedoc={deleteDocument}  />

      </div>
  );
}


export default App;