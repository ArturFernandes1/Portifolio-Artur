import React from "react";
import './SobreCurso.css'
import internetglobal from '../assets/internetglobal.png'

export default function(){
    return(
        <>
        <div className="container-sobrec">
            <img className="img-global" src={internetglobal} alt="imagem que representa globalização da telecomunicação"/>
            <section>
                <h1> Sobre o curso de Tecnologia em Telemática</h1>
                <p className="texto-sobre-curso kanit-bold">A Telemática é uma área de estudo que integra telecomunicações e informática, focando na transmissão, processamento e armazenamento de informações. Esta disciplina abrange diversas tecnologias, como redes de computadores, internet, comunicação sem fio e sistemas embarcados. Com a crescente demanda por conectividade e a rápida evolução dos dispositivos inteligentes, a telemática se torna crucial para o desenvolvimento de soluções inovadoras em diversas indústrias, desde a automotiva até a saúde. Profissionais dessa área são responsáveis por projetar, implementar e gerenciar infraestruturas de comunicação que suportam o mundo digital, tornando-se peças-chave na transformação digital e na construção de uma sociedade mais conectada.</p>
            </section>
        </div>
        </>
    )
}