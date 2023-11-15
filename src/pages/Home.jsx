import profilepic from '../assets/images/profile.jpg';

export default function Home() {
  return (
    <div className='bio'>
        <img src={profilepic} className='profile'/>
        <p>
        I am a part time student learning full stack web development through UC Davis bootcamp. Skills I have learned so far include HTML, CSS, JavaScript, NodeJS and MySQL. I aspire to design websites for small businesses to expand my portfolio. Outside of school, I work in a dental office as receptionist and dental assistant.
      </p>
    </div>
  );
}
