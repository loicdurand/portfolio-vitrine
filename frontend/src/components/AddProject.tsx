// frontend/src/components/AddProject.tsx
import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const AddProject: React.FC = () => {
  const context = useContext(AppContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/projects", {
      name,
      description,
    });
    context?.setProjects([...(context?.projects || []), res.data]);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom du projet"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};
export default AddProject;
