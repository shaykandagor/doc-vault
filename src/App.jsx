import { useState } from "react";
import UploadForm from "./components/UploadForm";
import DocumentList from "./components/DocumentList";

function App() {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(search.toLowerCase()));

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
      <DocumentList docs={filteredDocuments} deletedoc={deleteDocument} />

    </div>
  );
}


export default App;