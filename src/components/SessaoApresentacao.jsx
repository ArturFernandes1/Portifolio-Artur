import React, { useEffect, useState } from "react";
import avatar1 from "../assets/avatar1.jpg";
import hello from "../assets/hello.png";
import "../components/SessaoApresentacao.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar o FontAwesome
import "../components/ClassFonts.css";

function SessaoApresentacao() {
    const phrases = [
        "React Developer",
        "Front-End Developer",
        "Designer UX/UI"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % phrases.length);
        }, 5000); // Muda a frase a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
    }, [phrases.length]);

    return (
        <div className="compfond">
            <div className="parte-apresentacao">
                <h1 className="frase-ola kanit-bold">Artur Fernandes </h1>
                <p>Olá! <img className="hello" src={hello} alt="imagem de hello" /> Seja bem-vindo ao meu portfólio!</p>
                <h2 className="frase-interativa kanit-bold" id="phrases">{phrases[currentIndex]}</h2>
                <p>Meu nome é Artur Fernandes, tenho 24 anos e sou apaixonado por tecnologia. Atualmente, estou cursando Superior de Tecnologia em Telemática. Meu objetivo é aplicar meus conhecimentos para criar soluções inovadoras e eficientes.</p>
            </div>
            <div className="parte-imagem">
                <img src={avatar1} alt="imagem do meu avatar" className="img-avatar" />
            </div>
        </div>
    );
}

export default SessaoApresentacao;
