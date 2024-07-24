import React from "react";
import "../components/SessaoHabilid.css";
import avatar1 from "../assets/avatar1.jpg";
import "../components/ClassFonts.css"
import "../components/Acordion"
import Acordion from "../components/Acordion";
import "../components/ClassFonts.css"

function SessaoHabilid() {
    return (
        <> 
        <div id="conteudoprin">
            <h1 id="titleh1" className="kanit-bold">Habilidades & Experiencias</h1>
            <p id="textop">Conheça minhas Habilidades
            e Experiencias</p>
            <div className="barra-titulos">
                <div className="conteudo-principal">
                    <div id="text-sobre">
                        <h1 className="kanit-bold">Sobre mim</h1>
                        <p>Sou Artur Fernandes, tenho 24 anos e estou cursando Tecnologia em Telemática. Tenho conhecimentos avançados em redes de computadores, gerenciamento de redes, e também sou apaixonado por design de UI/UX. Minha experiência prática em desenvolvimento front-end complementa minha formação técnica, tornando-me um profissional versátil e preparado para enfrentar os desafios no mundo da tecnologia.</p>
                    </div>
                </div>
                <div className="conteudo-conhecimento">
                    <Acordion/>
                </div>
            </div>

        </div>
        </>
    );
}

export default SessaoHabilid;
