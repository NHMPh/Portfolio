import background from './Background_placeholder.jpg';
import avatar from './avatar.jpg';
import fbicon from './icon/fb.png';
import githubicon from './icon/github.png';
import SYF from './PPP/SYF.PNG';
import ZomD from './PPP/ZomD2.PNG';
import MusicBot from './PPP/MUSICBOT.PNG';
import UtilityBot from './PPP/UTILITYBOT.PNG';
import React, { useState } from 'react';
import './App.css';
const socialLink =
  [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=100009408262327',
      icon: fbicon,
    },
    {
      name: 'Github',
      link: 'https://github.com/NHMPh',
      icon: githubicon,
    }
  ];
const cards = [
  {
    name: 'Should You Fight',
    img: SYF,
    description: 'An applications that calculate win rate vs. enemy based on items, level, and counter rate data.',
  },
  {
    name: 'ZomD',
    img: ZomD,
    description: 'A multiplayer co-op zombie defence game.',
  },
  {
    name: "Light's Music Bot",
    img: MusicBot,
    description: 'A discord bot that stream music from YouTube with voice recognition.',
  },
  {
    name: "Utility Bot",
    img: UtilityBot,
    description: 'A discord bot with some utility commands. Example: AI chatbot, web scraping, etc.',
  }
];
const Flashcard = ({ card }) => {
  return (
    <div className='flashcard hover'>
      <div className='flashcard-img'>
        <img src={card.img} alt='SYF' />
      </div>
      <div className='flashcard-cover'>
        <div className='flashcard-content'>
          <h3>{card.name}</h3>
          <p>
            {card.description}
          </p>
        </div>
      </div>
    </div>
  )
}
const SocialList = ({ link }) => {
  return (
    <li>
      <a href={link.link}>
        <img className='scale' src={link.icon} alt={link.name} title={link.name} />
      </a>
    </li>
  )

}

const App = () => {
  
  
  const [inputNameValue, setInputNameValue] = useState('Anomymous');
  const [inputEmailValue, setInputEmailValue] = useState('none');
  const [inputMessageValue, setInputMessageValue] = useState('empty');

  function handleSubmit() {

    fetch('https://discord.com/api/webhooks/1168144299515457586/DCK0W1gRUlN7fjodBYPM_UaJEMOvcPpDWtAoQSW0PmwHAxfYDWhGPNeqmRJiw0FWNkKc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: inputNameValue + ' - ' + inputEmailValue,
        content: inputMessageValue,
      }),
    })
      .then((res) => {
        console.log(`statusCode: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
    alert('Your message has been sent!');
  };
  return (
    <div>
      <div className='navbar'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#aboutme'>About Me</a></li>
          <li><a href='#technical-skill'>Technical Skills</a></li>
          <li><a href='#personal-project'>Personal Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <div id='home' className="info">
        <div className="background-container">
          <div className='filter'></div>
          <img className='background-img' src={background} alt="background" />
          <div className='background-title'>
            <h1>NHMPh</h1>
            <div className='line' />
            <h2>Software - Web - Game Developer</h2>
            <div className='social-link'>
              <ul>
                {socialLink.map((link) => (<SocialList link={link} />))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div id='aboutme'className="aboutme">
        <div className='aboutme-title'>
          <h1>ABOUT ME</h1>
          <div className='line' />
        </div>
        <div className='aboutme-content'>
          <div className='avatar-container'>
            <img src={avatar} alt='avatar' />
          </div>
          <div className='text'>
            <h3>Hi, I'M NHMPh</h3>
            <p>
              I'm a student at International University - VNU-HCM
            </p>
            <p>
              I'm currently learning about Web Development and Game Development and have made several project for demostration.
            </p>
            <p>
              If you are interested, you can view some of my projects in my portfolio down below.
            </p>
          </div>
          <div className='text'>
            <h3>MY PERSONAL INTERESTS</h3>
            <p>
              Guess what I'm interested in?
            </p>
            <p>
              Nothing at all.
            </p>
            <p>
              I'm just a normal person with normal interest.
            </p>
          </div>
        </div>


      </div>
      <div id='technical-skill' className='technical-skill'>
        <div className='aboutme-title'>
          <h1>TECHNICAL SKILLS</h1>
          <div className='line' />
        </div>
        <div className='img-container'>
          <img className='scale' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='JavaScript' />
          <img className='scale' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' alt='React' />
          <img className='scale' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' alt='Node.js' />
          <img className='scale' src='https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png' alt='C#' />
          <img className='scale' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png' alt='.NET' />
          <img className='scale' src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unity-512.png' alt='Unity' />
        </div>
        <div className='text-container'>
          <div className='text'>
            <p>
              I am familiar with 2 programming languages C# and Javascript. For web applications I use React and Javascript. For applications I use .Net and C#. For game development I use Unity.
            </p>
            <h2>Some Frameworks and Software that i used</h2>
            <div className='text-container'>
              <ul>
                <li>.NET</li>
                <li>Node.js</li>
                <li>React</li>
              </ul>
              <ul>
                <li>Git</li>
                <li>Unity Engine</li>
              </ul>
            </div>
          </ div>

        </div>
      </div>
      <div id="personal-project" className='personal-project'>
        <div className='aboutme-title'>
          <h1>PERSONAL PROJECTS</h1>
          <div className='line' />
          <div className='flashcard-container'>
            {cards.map((card) => (<Flashcard card={card} />))}
          </div>
        </div>
      </div>
      <div id="contact" className='contact'>
        <div className='aboutme-title'>
          <h1>CONTACT</h1>
          <div className='line' />
          <div className='text'>
            <p>
              If you have any question or want to contact me,
              send me an e-mail at ititiu21279@student.hcmiu.edu.vn or simply fill out the form below and I will reply to you soon!
            </p>
          </div>
          <div className='form'>
            <div>
              <div className='form-group'>
                <label for='name'>Name</label>
                <input type='text' id='name' onChange={(e) => { setInputNameValue(e.target.value) }} />
              </div>
              <div className='form-group'>
                <label for='email'>Email</label>
                <input type='text' id='email' onChange={(e) => { setInputEmailValue(e.target.value) }} />
              </div>
              <div className='form-group'>
                <label for='message'>Message</label>
                <textarea id='message' onChange={(e) => { setInputMessageValue(e.target.value) }} />
              </div>
              <button onClick={() => handleSubmit()}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
