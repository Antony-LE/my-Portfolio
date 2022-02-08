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
  // Hook permettant de gérer le state du Darkmode
  const [darkmode, setDarkmode] = useState(true);

  const handleDarkModeButton = () => {
    setDarkmode(!darkmode);
  };

  return (

    <div className={`${darkmode ? 'App' : 'App-alt-style'}`}>
      <Header className={`${darkmode ? 'header' : 'header-alt-style'}`} darkmode={darkmode} />
      <Title className={`${darkmode ? 'title' : 'title-alt-style'}`} title="Développeur Web Fullstack JS" />
      <ProfilePicture className={`${darkmode ? 'profile-picture' : 'profile-picture-alt-style'}`} sourcePix={`${darkmode ? '../../maPhoto.png' : '../../maPhotoLunette.png'}`} />
      <BiographyTypical className={`${darkmode ? 'typical' : 'typical-alt-style'}`} />
      <Biography className={`${darkmode ? 'biography' : 'biography-alt-style'}`} />
      <ButtonCV className={`${darkmode ? 'buttonCV' : 'buttonCV-alt-style'}`} />
      <ButtonDarkMode className={`${darkmode ? 'buttonDarkMode' : 'buttonDarkMode-alt-style'}`} toggleDarkMode={handleDarkModeButton} darkmode={darkmode} />
      <Projects className={`${darkmode ? 'projects' : 'projects-alt-style'}`} />
      <Skills className={`${darkmode ? 'skills' : 'skills-alt-style'}`} title="Skills" description="JavaScript et React 🤤🤤🤤... Et je ne compte pas m'arrêter en si bon chemin ! Adepte du fail fast, learn fast j'aime me prendre la tête sur des projets complexes avec l'aide de ma fidèle tasse de café " />
      <Contact className={`${darkmode ? 'contact' : 'contact-alt-style'}`} title="Contact" description="Je suis disponible dans ce secteur, mais le mieux c'est de me m'envoyer un mail à l'adresse suivante : " email="le.antony.@gmail.com" />
      <Footer className={`${darkmode ? 'footer' : 'footer-alt-style'}`} />
    </div>
  );
}

export default React.memo(App);
