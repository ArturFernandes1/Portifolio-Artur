import React from 'react';
import Navbar from "../components/Navbar"
import SessaoApresentacao from '../components/SessaoApresentacao';
import SessaoHabilid from '../components/SessaoHabilid';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar/>
      <SessaoApresentacao/>
      <SessaoHabilid/>
      <Footer/>
    </>
  );
}

export default Home;