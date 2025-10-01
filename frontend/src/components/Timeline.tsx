import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import utils from "../utils";
import Icon from "./Icon";
import "../styles/Timeline.scss";

const Timeline: React.FC = () => {
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
    <ul id="timeline">
      {context.projects.map((project) => (
        <li key={project.id} className="project">
          <input
            className="radio"
            id={`project-${project.id}`}
            name="projects"
            type="radio"
          />
          <div className="label-ctnr">
            <label htmlFor={`project-${project.id}`}>
              <p className="project-icons">
                {[...project.langs.backend, ...project.langs.frontend].map(
                  (lang) => (
                    <Icon key={`project-icon-${project.id}`} name={lang} />
                  )
                )}
              </p>
              {project.name}
            </label>
            <span className="date">
              {utils.pipe(
                utils.date.formatDateToFrench,
                utils.string.capitalize
              )(project.startedAt)}
            </span>
            <span className="circle"></span>
          </div>
          <div className="content">
            <small className="langs">
              Développé avec&nbsp;
              {project.langs.backend.join(", ")}
              {project.langs.frontend.length
                ? (() => (
                    <>
                      &nbsp;+
                      <br />
                      {project.langs.frontend.join(", ")}
                    </>
                  ))()
                : ""}
            </small>
            <p className="description">{project.description}</p>
            {project.source !== null ? (
              <p className="links">
                <a
                  title="Afficher le code source - Nouvelle fenêtre"
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Afficher le code source
                  <Icon name="external_link" />
                </a>
              </p>
            ) : (
              ""
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
