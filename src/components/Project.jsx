import { Link, useLocation } from "react-router-dom";
import chatea from "../assets/images/chatea.png";
import vibrant from "../assets/images/vibrantvocabs.png";

const projectData = [
  {
    link: "https://morning-spire-89765-733c4b62d1d7.herokuapp.com/",
    imgSrc: chatea,
  },
  {
    link: "https://kthao21.github.io/Vibrant_Vocab/",
    imgSrc: vibrant,
  },
];

const Project = () => {
  return (
    <div>
      {projectData.map((project) => (
        <a href={project.link} target="_blank" rel="noreferrer" className="project">
          <img src={project.imgSrc} alt="ChaTea"  />
        </a>
      ))}
      {/* <a href="https://morning-spire-89765-733c4b62d1d7.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={chatea} alt="ChaTea" />
        </a>
        <a href="https://kthao21.github.io/Vibrant_Vocab/" target="_blank" rel="noreferrer">
          <img src={vibrant} alt="Vibrant Vocabs" />
        </a> */}
    </div>
  );
};

export default Project;
