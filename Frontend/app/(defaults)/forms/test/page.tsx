'use client';
import { useEffect, useState } from "react";

import axios from "axios";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<string[]>([]);
//   const API_URL = "https://RoiMyFunctionApp.azurewebsites.net/api";
const API_URL = "http://localhost:7071"
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const uploadFile = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${API_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data);
      fetchFiles(); // Refresh file list after upload
    } catch (error) {
      setMessage("Error uploading file.");
      console.error(error);
    }
  };

  const uploadText = async () => {
    if (!text) {
      setMessage("Please enter text to upload.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/upload`,
        { text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage(response.data);
      fetchFiles(); // Refresh file list after upload
    } catch (error) {
      setMessage("Error uploading text.");
      console.error(error);
    }
  };

  // Fetch List of Uploaded Files (GET)
  const fetchFiles = async () => {
    try {
      const response = await axios.get(`${API_URL}/files`); // GET request to fetch file list
      setFiles(response.data.files);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Fetch files on component mount
  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h1>Upload to Azure Blob Storage</h1>

      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload File</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter text to upload"
          value={text}
          onChange={handleTextChange}
        />
        <button onClick={uploadText}>Upload Text</button>
      </div>

      {message && <p style={{ marginTop: "20px", color: "blue" }}>{message}</p>}
      <h2 style={{ marginTop: "30px" }}>Uploaded Files</h2>
      <ul>
        {files.length > 0 ? (
          files.map((file, index) => <li key={index}>{file}</li>)
        ) : (
          <p>No files found.</p>
        )}
      </ul>
    </div>
  );
}

// export default function Home() {
//   const [file, setFile] = useState(null);
//   const [text, setText] = useState("");
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const uploadFile = async () => {
//     if (!file) {
//       setMessage("Please select a file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("https://RoiMyFunctionApp.azurewebsites.net/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.text();
//       setMessage(result);
//     } catch (error) {
//       setMessage("Error uploading file.");
//       console.error(error);
//     }
//   };

//   const uploadText = async () => {
//     if (!text) {
//       setMessage("Please enter text to upload.");
//       return;
//     }

//     try {
//       const response = await fetch("https://RoiMyFunctionApp.azurewebsites.net/api/upload", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text }),
//       });

//       const result = await response.text();
//       setMessage(result);
//     } catch (error) {
//       setMessage("Error uploading text.");
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
//       <h1>Upload to Azure Blob Storage</h1>

//       <div>
//         <input type="file" onChange={handleFileChange} />
//         <button onClick={uploadFile}>Upload File</button>
//       </div>

//       <div style={{ marginTop: "20px" }}>
//         <input
//           type="text"
//           placeholder="Enter text to upload"
//           value={text}
//           onChange={handleTextChange}
//         />
//         <button onClick={uploadText}>Upload Text</button>
//       </div>

//       {message && <p style={{ marginTop: "20px", color: "blue" }}>{message}</p>}
//     </div>
//   );
// }


// import { useState } from "react";

// export default function Home() {
//     const [file, setFile] = useState(null);
//     const [message, setMessage] = useState("");

//     const handleFileChange = (e:any) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append("file", file);

//         const response = await fetch("/api/upload", {
//             method: "POST",
//             body: formData,
//         });

//         const data = await response.json();
//         setMessage(data.message);
//     };

//     return (
//         <div>
//             <h1>Upload to Azure Blob Storage</h1>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Upload</button>
//             <p>{message}</p>
//         </div>
//     );
// }

// import { useEffect, useState } from "react";

// export default function Home() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch("https://ROIBackendFunction.azurewebsites.net/api/myFunction?name=Winnie")  // Direct API call
//             .then((res) => res.json())
//             .then((data) => setData(data))
//             .catch((err) => console.error("Error:", err));
//     }, []);

//     return (
//         <div>
//             <h1>Azure Function Response</h1>
//             <p>{data ? data.message : "Loading..."}</p>
//         </div>
//     );
// }

// import { useState } from "react";
// import axios from "axios";
// const URL = "https://ROIBackendFunction.azurewebsites.net/api/myFunction"

// export default function Home() {
//     const [file, setFile] = useState(null);
//     const [files, setFiles] = useState([]);

//     const handleFileChange = (e:any) => {
//         setFile(e.target.files[0]);
//     };

//     const uploadFile = async () => {
//         if (!file) return alert("Please select a file");

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             await axios.post(URL, formData);
//             alert("File uploaded");
//             fetchFiles();
//         } catch (error) {
//             console.error(error);
//             alert("Upload failed");
//         }
//     };

//     const fetchFiles = async () => {
//         try {
//             const response = await axios.get(URL);
//             setFiles(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const deleteFile = async (filename:any) => {
//         try {
//             await axios.delete(`https://ROIBackendFunction.azurewebsites.net/api/myFunction?filename=${filename}`);
//             alert("File deleted");
//             fetchFiles();
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <h1>Azure Blob Storage CRUD</h1>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={uploadFile}>Upload</button>
//             <button onClick={fetchFiles}>Fetch Files</button>
//             <ul>
//                 {files.map((file, index) => (
//                     <li key={index}>
//                         {file} <button onClick={() => deleteFile(file)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
