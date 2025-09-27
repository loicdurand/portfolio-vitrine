// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AppContext } from "../context/AppContext";

// const Posts: React.FC = () => {
//   const context = useContext(AppContext);
//   const [hasFetched, setHasFetched] = useState(false); // Évite les fetch multiples

//   useEffect(() => {
//     if (!context || hasFetched) return; // Ne fetch que si pas déjà fait
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((res) => {
//         console.log("Fetched posts:", res.data);
//         context.setPosts(res.data);
//         setHasFetched(true); // Marque comme fetché
//       })
//       .catch((err) => console.error("Fetch error:", err));
//   }, [context, hasFetched]); // Dépendances explicites

//   if (!context) return null;

//   return (
//     <div>
//       <h2>Blog</h2>
//       {context.posts.map((p) => (
//         <article key={p.id}>
//           <h3>{p.title}</h3>
//           <p>{p.content}</p>
//           <small>{new Date(p.date).toLocaleDateString()}</small>
//         </article>
//       ))}
//     </div>
//   );
// };

// export default Posts;
