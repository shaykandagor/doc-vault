function DocumentList({ docs, deletedoc }) {
    return (
      <div>
        <h2>docs</h2>
  
        {docs.length === 0 ? (
          <p>No docs yet</p>
        ) : (
          <ul>
            {docs.map((doc) => (
              <li key={doc.id}>
                <strong>{doc.name}</strong> - {doc.type} - {doc.date}
                <button onClick={() => deletedoc(doc.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default DocumentList;