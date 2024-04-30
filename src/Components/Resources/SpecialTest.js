// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../Assets/css/Pdf.css";
// import axios from 'axios';


// const SpecialTest = () => {
//     const [documents, setDocuments] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("/document");
//                 setDocuments(response.data.documents);
//             } catch (error) {
//                 console.error("Error fetching documents:", error);
//             }
//         };
//         fetchData();
//     }, []);

//     const openST1 = () => {
//         const linkUrl = 'https://drive.google.com/file/d/16j2qzVt8TeOxeJci5YF6KIm1y9g-6XcA/view?usp=sharing';
//         window.open(linkUrl, '_blank');
//     };

//     return (
//         <div>
//             <div className="col-lg-12 d-flex align-items-center justify-content-center notes">
//                 <div className="col-lg-4 p-3">
//                     <div className="card p-2 pdffile" onClick={openST1}>
//                         Special Test SFS Academy
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 {documents.map(doc => (
//                     <div key={doc.id}>
//                         <div>{doc.caption}</div>
//                         <a href={`http://localhost:3000/api/documents/${doc.id}`} target="_blank">
//                             View Document
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     )
// }

// export default SpecialTest;


import { useEffect, useState } from "react";
import instance from "../../Config/axiosconfig.js";
import DocumentList from "./DocumentLists.js";





const SpecialTest = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {

                const response = await instance.get("/document");



                setData(response.data.documents);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };
        loadData();
    }, []);

    return (
        <div>
            {
                data?.length > 0 ? <DocumentList documents={data} /> : <p> No Data </p>
            }
        </div>
    );
};

export default SpecialTest;
