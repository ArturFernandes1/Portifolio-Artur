import React from 'react';
import Navbar from "../components/Navbar"
import SessaoApresentacao from '../components/SessaoApresentacao';
import SessaoHabilid from '../components/SessaoHabilid';
import Footer from '../components/Footer';
import SobreCurso from '../components/SobreCurso';

function Home() {
  return (
    <>
      <Navbar/>
      <SessaoApresentacao/>
      <SessaoHabilid/>
      <SobreCurso/>
      <Footer/>
    </>
  );
}

export default Home;