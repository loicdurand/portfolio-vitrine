// frontend/src/components/Bio.tsx
import React from "react";
import "../styles/Bio.scss";

const my_name = process.env.MY_NAME;
const my_description = process.env.MY_DESCRIPTION;
console.log(my_name);

const Bio: React.FC = () => {
  return (
    <section className="bio">
      <h1>{process.env.REACT_APP_MY_NAME}</h1>
      <p>{process.env.REACT_APP_MY_DESCRIPTION}</p>
    </section>
  );
};
export default Bio;
