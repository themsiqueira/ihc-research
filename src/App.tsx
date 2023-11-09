import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const researchContent = `
    Descrição do Projeto:

    O projeto busca abordar uma barreira de interação e inclusão enfrentada por deficientes auditivos em eventos sociais onde a música é a principal forma de comunicação, como concertos e musicais. A música desempenha um papel crucial na transmissão de emoções e conexão entre pessoas, mas, para aqueles com deficiência auditiva, as ferramentas disponíveis para essa experiência são caras e inacessíveis. A solução proposta é um aplicativo que converte ondas sonoras de músicas em vibrações, tornando a música acessível a todos, independentemente da classe social.

    Lista de Interessados:

    1. Deficientes Auditivos: Os principais usuários da solução, que enfrentam desafios para consumo de música
    2. Organizadores de Eventos: Partes interessadas que desejam criar eventos mais inclusivos e acessíveis.
    3. Patrocinadores: Contribuintes financeiros que podem apoiar o desenvolvimento e implementação da solução.
    4. Profissionais de Saúde: Especialistas que podem ajudar a orientar o desenvolvimento do aplicativo para atender às necessidades dos deficientes auditivos.

    Métodos de Pesquisa de Usuários e Descobertas:

    1. Observação:
       - Justificativa: A observação no ambiente de eventos musicais ajudará a compreender o contexto de uso e as interações dos deficientes auditivos com a música.
       - Descobertas: Durante a observação, notamos a frustração de deficientes auditivos ao tentar interagir com a música em eventos. Eles frequentemente ficam isolados e incapazes de sentir a música de forma satisfatória. (Os entrevistados não responderam às nossas perguntas)

    2. Entrevistas:
       - Justificativa: Entrevistas são essenciais para entender as necessidades específicas dos deficientes auditivos em relação à música e para obter feedback sobre os recursos e funcionalidades desejados no aplicativo.
       - Descobertas: Entrevistas revelaram o desejo de uma solução acessível que permitisse uma experiência musical mais inclusiva. Os entrevistados destacaram a importância de vibrações sutis e personalizáveis.

    Reflexão:

    Os métodos de observação e entrevistas forneceram uma compreensão aprofundada das necessidades dos deficientes auditivos em eventos musicais. No entanto, no futuro, poderia ser benéfico envolver mais organizadores de eventos e patrocinadores para garantir a viabilidade e aceitação da solução. Além disso, é importante garantir que a solução seja acessível financeiramente, alinhando-se com o objetivo de democratizar o acesso à música.
  `;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Our Research Page</h1>
        <p>{researchContent}</p>
        {/* You can add additional elements for displaying links or further details here */}
      </header>
    </div>
  );
}

export default App;
