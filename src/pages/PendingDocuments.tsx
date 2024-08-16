import { SetStateAction, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


const rows = [
  { document: 'Document 1', dateCreated: '2024-05-13', status: 'Pending', UploadedBy: 'Prescious Moyo', url: 'https://example.com/document1.pdf' },
  { document: 'Document 2', dateCreated: '2024-05-12', status: 'Approved', UploadedBy: 'Wilson Simwanza', url: 'https://example.com/document2.pdf' },
  { document: 'Document 3', dateCreated: '2024-05-11', status: 'Rejected', UploadedBy: 'Nashon Kampamba', url: 'https://example.com/document3.pdf' },
  // Add more rows as needed
];

const MyTable = () => {
  const [editorContent, setEditorContent] = useState(""); // State to hold the content of the document

  // Custom event handler to open document in custom editor
  const openInEditor = (url: SetStateAction<string>) => {
    // Implement logic to fetch document content from URL and set it to the editor content state
    // For simplicity, let's just set the URL to the editor content state
    setEditorContent(url);
  };


  
  return (
    <div>
      <br />
      <br />
      <h1 className="mb-8 mt-5 font-bold text-xl md:text-2xl">
        Pending Documents
      </h1>
      {/* Custom editor component */}
      <div className="custom-editor">
        {/* Render document content in custom editor */}
        {editorContent && (
          <iframe src={editorContent} width="100%" height="600px" title="Custom Editor"></iframe>
        )}
      </div>
      <TableContainer component={Paper}>
        <Table className={''} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Document Name</TableCell>
              <TableCell className="font-semibold">Date Created</TableCell>
              <TableCell className="font-semibold">Assigned to</TableCell>
              <TableCell className="font-semibold">Status</TableCell>
              {/* Add more table headers as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.document}>
                <TableCell component="th" scope="row">
                  {/* Add onClick event to trigger opening in custom editor */}
                  <a href="#" onClick={() => openInEditor(row.url)}>{row.document}</a>
                </TableCell>
                <TableCell>{row.dateCreated}</TableCell>
                <TableCell>{row.UploadedBy}</TableCell>
                <TableCell>{row.status}</TableCell>
                {/* Add more table cells for additional columns */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyTable;
