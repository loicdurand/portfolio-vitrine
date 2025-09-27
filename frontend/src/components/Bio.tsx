// frontend/src/components/Bio.tsx
import React from "react";
import "../styles/Bio.scss";

const Bio: React.FC = () => {
  return (
    <section className="bio">
      <h1>[Ton Nom]</h1>
      <p>
        Développeur full-stack | PHP, Node.js, React, Rust | En route pour
        Singapour
      </p>
    </section>
  );
};
export default Bio;
