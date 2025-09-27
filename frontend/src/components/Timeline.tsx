import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import "../styles/Timeline.scss";

const Timeline: React.FC = () => {
  const context = useContext(AppContext);
  const [hasFetched, setHasFetched] = useState(false); // Évite les fetch multiples
  const dateFormatFR = (ISOStringDate: string) => {
    const date = new Date(ISOStringDate);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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
    <ul id="timeline">
      {context.projects.map((p) => (
        <li key={p.id} className="project">
          <input
            className="radio"
            id={`project-${p.id}`}
            name="projects"
            type="radio"
          />
          <div className="label-ctnr">
            <label htmlFor={`project-${p.id}`}>
              <i className="fa-brands fa-js"></i>
              {p.name}
            </label>
            <span className="date">{dateFormatFR(p.date)}</span>
            <span className="circle"></span>
          </div>
          <div className="content">
            <p>{p.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
