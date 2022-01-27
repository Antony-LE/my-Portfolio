import React from 'react';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import SocialMediaNavbar from '../SocialMediaNavbar/SocialMediaNavbar';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Title from '../Title/Title';
import Biography from '../Biography/Biography';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import ButtonCV from '../ButtonCV/ButtonCV';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Navbar className="navbar" />
      <SocialMediaNavbar className="socialMediaNavbar" />
      <Logo className="logo" />
      <Title className="title" title="Antony LE, Développeur Web Fullstack JS" />
      <ProfilePicture className="profile-picture" />
      <ButtonCV className="buttonCV" />
      <Biography className="biography" />
      <Projects className="projects" />
      <Skills className="skills" />
      <Contact className="contact" title="Contact" description="Je suis disponible dans ce secteur, mais le mieux c'est de me m'envoyer un mail à l'adresse suivante : le.antony.l@gmail.com" />
    </div>
  );
}

export default App;
