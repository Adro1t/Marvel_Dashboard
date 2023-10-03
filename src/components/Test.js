// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getCharacters } from "../config";
// import "./Table.css";

// const Table = () => {
//   const itemsPerPage = 20;

//   const [characters, setCharacters] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [error, setError] = useState(false);

//   const fetchData = () => {
//     getCharacters().then((data) => {
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setCharacters(data);
//       }
//     });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Thumbnails</th>
//           </tr>
//         </thead>
//         <tbody>
//           {characters.map((item, i) => (
//             <tr key={i}>
//               <td>{i}</td>
//               <td>
//                 <Link to={`/profile/${item.id}`} className="profile-link">
//                   {item.name}
//                 </Link>
//               </td>
//               <td>{item.description || "Description not available"}</td>
//               <td>
//                 <img
//                   src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
//                   alt="Character Thumbnail"
//                   className="characterImage"
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Pagination */}
//       <div className="pagination">
//         <button className="page-item" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//           &laquo; Prev
//         </button>
//         <span>Page {currentPage}</span>
//         <button className="page-item" onClick={() => setCurrentPage(currentPage + 1)}>
//           Next &raquo;
//         </button>
//       </div>
//     </>
//   );
// };

// export default Table;
