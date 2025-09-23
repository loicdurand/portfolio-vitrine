import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Projects: React.FC = () => {
  const context = useContext(AppContext);
  const [hasFetched, setHasFetched] = useState(false); // Évite les fetch multiples

  useEffect(() => {
    if (!context || hasFetched) return; // Ne fetch que si pas déjà fait
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log("Fetched projects:", res.data);
        context.setProjects(res.data);
        setHasFetched(true); // Marque comme fetché
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [context, hasFetched]); // Dépendances explicites

  if (!context) return null;

  return (
    <ul>
      {context.projects.map((p) => (
        <li key={p.id}>
          {p.name}: {p.description}
        </li>
      ))}
    </ul>
  );
};

export default Projects;
