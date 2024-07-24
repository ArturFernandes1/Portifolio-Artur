import "../components/Acordion.css"
import "../components/ClassFonts.css"
import book1 from "../assets/book1.png"
import proficiency from "../assets/proficiency.png"
import logoifpb from "../assets/logoifpb.png"
import suitcase from "../assets/suitcase.png"
import python from "../assets/python.svg"
import Javascript  from "../assets/javascript.svg" 
import react from "../assets/react.svg"
import css3 from "../assets/css3.svg"
import html5 from "../assets/html5.svg"
import angular from "../assets/angular.svg"
import bootstrap from "../assets/bootstrap.svg"
import figma from "../assets/figma.svg"
import mysql from "../assets/mysql.svg"
import IEEE from "../assets/IEEE.png"

function Acordion(){
    return(
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header accordion-item-heigth" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <img src={suitcase} className="icones" alt="" /> Experiencias
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="container-conteudo">
                        <img src={IEEE} className="logoempresa" alt="" />
                        <div className="texto">
                            <p className="cargo">Frontend Web Developer</p>
                            <p className="descricao">Projeto de extensão Ramo Estudantil - IFPB</p>
                            <p className="duracao">8 meses</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header accordion-item-heigth" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                   <img src={proficiency} className="icones" alt="" /> Habilidades
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="container1-conteudo">
                        <div className="partcards">
                            <ul>
                                 <p className="title-technology">Front-End</p>
                                <img className="icons-technology" src={html5}></img>
                                <img className="icons-technology" src={css3}></img>
                                <img className="icons-technology" src={Javascript}></img>
                                <img className="icons-technology" src={react}></img>
                                <img className="icons-technology" src={angular}></img>
                                <img className="icons-technology" src={bootstrap}></img>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <p className="title-technology">Design</p>
                                <img className="icons-technology" src={figma}></img>
                                <img className="icons-technology" src={css3}></img>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <p className="title-technology">Back-End</p>
                                <img className="icons-technology" src={python}></img>
                                <img className="icons-technology-my" src={mysql}></img>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header accordion-item-heigth" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> 
                <img src={book1} className="icones" alt="Ícone Exemplo" /> Educação
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="container-conteudo">
                        <img src={logoifpb} className="logoinstituto" alt="" />
                        <div className="texto">
                            <p className="paragf1">Graduando de Tecnologia em Telemática</p>
                            <p className="paragf2">Instituto Federal de Campina Grande-IFPB</p>
                            <p className="paragf3">mai de 2023 - o momento </p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default Acordion