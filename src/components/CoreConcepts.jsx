import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {
          CORE_CONCEPTS.map((concept) => <Concept key={concept.title} {...concept}/>)
        }
      </ul>
    </section>
  );
}

function Concept({ title, description, image, index }) {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
