import React, { useState } from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Title from '../Title/Title';
import Biography from '../Biography/Biography';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import ButtonCV from '../ButtonCV/ButtonCV';
import ButtonDarkMode from '../ButtonDarkMode/ButtonDarkMode';
import BiographyTypical from '../BiographyTypical/BiographyTypical';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [darkmode, setDarkmode] = useState(true);

  const handleDarkModeButton = () => {
    setDarkmode(!darkmode);
  };

  return (

    <div className={`${darkmode ? 'App' : 'alt-style'}`}>
      <Header className="header" />
      <Title className="title" title="Développeur Web Fullstack JS" />
      <ProfilePicture className="profile-picture" sourcePix={`${darkmode ? '../../maPhoto.png' : '../../maPhotoLunette.png'}`} />
      <BiographyTypical className="typical" />
      <Biography className="biography" />
      <ButtonCV className="buttonCV" />
      <ButtonDarkMode className="buttonDarkMode" toggleDarkMode={handleDarkModeButton} />
      <Projects className="projects" />
      <Skills className="skills" title="Skills" description="JavaScript et React 🤤🤤🤤... Et je ne compte pas m'arrêter en si bon chemin ! Adepte du fail fast, learn fast j'aime me prendre la tête sur des projets complexes avec l'aide de ma fidèle tasse de café " />
      <Contact className="contact" title="Contact" description="Je suis disponible dans ce secteur, mais le mieux c'est de me m'envoyer un mail à l'adresse suivante : " email="le.antony.@gmail.com" />
      <Footer className="footer" />
    </div>
  );
}

export default React.memo(App);
