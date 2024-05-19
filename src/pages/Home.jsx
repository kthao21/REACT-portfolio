import profilepic from '../assets/images/profile.jpg';

export default function Home() {
  return (
    <div className='bio'>
        <img src={profilepic} className='profile'/>
        <p>
        Hello there! I am Kalia, a web developer with a passion for coding. I recently earned a certificate in web coding, which has given me a solid foundation in HTML, CSS and JavaScript. I'm currently searching for a long-term career where I can continue to learn and expand my knowledge as a developer.
      </p>
    </div>
  );
}
