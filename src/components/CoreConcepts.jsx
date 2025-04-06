import {CORE_CONCEPTS} from '../data.js';


export default function CoreConcepts() {
    return CORE_CONCEPTS.map((concept,index) => {
      return <Concept {...concept} key={index} />
    })
  }

function Concept({ title, description, image, index }) {
  return <li>
  <img src={image} alt="" />
  <h3>{title}</h3>
  <p>{description}</p>
</li>
}