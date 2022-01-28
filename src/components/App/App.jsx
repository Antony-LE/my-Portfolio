import React, { useState } from 'react';
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
import ButtonDarkMode from '../ButtonDarkMode/ButtonDarkMode';
import BiographyTypical from '../BiographyTypical/BiographyTypical';
import './App.css';

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const handleDarkModeButton = () => {
    setDarkmode(!darkmode);
  };

  return (

    <div className={`${darkmode ? 'App' : 'alt-style'}`}>
      <Navbar className="navbar" />
      <SocialMediaNavbar className="socialMediaNavbar" />
      <Logo className="logo" />
      <Title className="title" title="Antony LE, Développeur Web Fullstack JS" />
      <ProfilePicture className="profile-picture" sourcePix={`${darkmode ? '../../maPhoto.png' : '../../maPhotoLunette.png'}`} />
      <ButtonCV className="buttonCV" />
      <ButtonDarkMode className="buttonDarkMode" toggleDarkMode={handleDarkModeButton} />
      <BiographyTypical className="typical" />
      <Biography className="biography" />
      <Projects className="projects" />
      <Skills className="skills" title="Skills et Technologies" description="JavaScript et React 🤤🤤🤤... Et je ne compte pas m'arrêter en si bon chemin ! Adepte du fail fast, learn fast j'aime me prendre la tête sur des projets complexes avec l'aide de ma fidèle tasse de café " />
      <Contact className="contact" title="Contact" description="Je suis disponible dans ce secteur, mais le mieux c'est de me m'envoyer un mail à l'adresse suivante : le.antony.l@gmail.com" />
    </div>
  );
}

export default App;
