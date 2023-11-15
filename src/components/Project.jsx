import { Link, useLocation } from "react-router-dom";
import chatea from "../assets/images/chatea.png";
import vibrant from "../assets/images/vibrantvocabs.png";
import code from "../assets/images/codequiz.png";
import generator from "../assets/images/passwordgenerator.png";
import weather from "../assets/images/weatherapp.png";
import landing from "../assets/images/landingpage.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const projectData = [
  {
    name: 'ChaTea',
    imgSrc: chatea,
    description: 'An online web chat application',
    url: 'https://morning-spire-89765-733c4b62d1d7.herokuapp.com/',
    github: 'https://github.com/kthao21/ChaTea'
  },
  {
    name: 'Vibrant Vocabs',
    imgSrc: vibrant,
    description: 'Find the definitions with a pop of color',
    url: 'https://kthao21.github.io/Vibrant_Vocab/',
    github: 'https://github.com/kthao21/Vibrant_Vocab'
  },
  {
    name: 'Code Quiz',
    imgSrc: code,
    description: 'A timed code quiz that keeps track of your score',
    url: 'https://kthao21.github.io/code_quiz/',
    github: 'https://github.com/kthao21/code_quiz'
  },
  {
    name: 'Password Generator',
    imgSrc: generator,
    description: 'A random password generator',
    url: 'https://kthao21.github.io/password-generator/',
    github: 'https://github.com/kthao21/password-generator'
  },
  {
    name: 'Weather App',
    imgSrc: weather,
    description: 'A weather application that gives you a 5 day forecast of any city',
    url: 'https://kthao21.github.io/weather-app/',
    github: 'https://github.com/kthao21/weather-app'
  },
  {
    name: 'Landing Page',
    imgSrc: landing,
    description: 'My first portfolio page',
    url: 'https://kthao21.github.io/landing_page/',
    github: 'https://github.com/kthao21/landing_page'
  },
];

const Project = () => {
  return (
    <div>
    {projectData.map((project) => (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" img src={project.imgSrc} />
      <Card.Body>
        <Card.Title className='title'>{project.name}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <a href={project.url}>
        <Button className='my-buttons' variant="primary">Website</Button>
        </a>
        <a href={project.github}>
        <Button className='my-buttons' variant="primary">GitHub</Button>
        </a>
      </Card.Body>
    </Card>
       ))}
    </div>
  );
};

export default Project;
