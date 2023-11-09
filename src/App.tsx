import React from 'react';
import './App.css';
import { Tab, Tabs } from 'react-bootstrap';

function App() {
  const researchContent = `
    <div class="research-content">
      <h2>Descrição do Projeto</h2>
      <p>O projeto busca abordar uma barreira de interação e inclusão enfrentada por deficientes auditivos em eventos sociais onde a música é a principal forma de comunicação, como concertos e musicais. A música desempenha um papel crucial na transmissão de emoções e conexão entre pessoas, mas, para aqueles com deficiência auditiva, as ferramentas disponíveis para essa experiência são caras e inacessíveis. A solução proposta é um aplicativo que converte ondas sonoras de músicas em vibrações, tornando a música acessível a todos, independentemente da classe social.</p>

      <h2>Lista de Interessados</h2>
      <ol>
        <li>Deficientes Auditivos: Os principais usuários da solução, que enfrentam desafios para consumo de música</li>
        <li>Organizadores de Eventos: Partes interessadas que desejam criar eventos mais inclusivos e acessíveis.</li>
        <li>Patrocinadores: Contribuintes financeiros que podem apoiar o desenvolvimento e implementação da solução.</li>
        <li>Profissionais de Saúde: Especialistas que podem ajudar a orientar o desenvolvimento do aplicativo para atender às necessidades dos deficientes auditivos.</li>
      </ol>

      <h2>Métodos de Pesquisa de Usuários e Descobertas</h2>

      <h3>1. Observação</h3>
      <p><strong>Justificativa:</strong> A observação no ambiente de eventos musicais ajudará a compreender o contexto de uso e as interações dos deficientes auditivos com a música.</p>
      <p><strong>Descobertas:</strong> Durante a observação, notamos a frustração de deficientes auditivos ao tentar interagir com a música em eventos. Eles frequentemente ficam isolados e incapazes de sentir a música de forma satisfatória. (Os entrevistados não responderam às nossas perguntas)</p>

      <h3>2. Entrevistas</h3>
      <p><strong>Justificativa:</strong> Entrevistas são essenciais para entender as necessidades específicas dos deficientes auditivos em relação à música e para obter feedback sobre os recursos e funcionalidades desejados no aplicativo.</p>
      <p><strong>Descobertas:</strong> Entrevistas revelaram o desejo de uma solução acessível que permitisse uma experiência musical mais inclusiva. Os entrevistados destacaram a importância de vibrações sutis e personalizáveis.</p>

      <h2>Reflexão</h2>
      <p>Os métodos de observação e entrevistas forneceram uma compreensão aprofundada das necessidades dos deficientes auditivos em eventos musicais. No entanto, no futuro, poderia ser benéfico envolver mais organizadores de eventos e patrocinadores para garantir a viabilidade e aceitação da solução. Além disso, é importante garantir que a solução seja acessível financeiramente, alinhando-se com o objetivo de democratizar o acesso à música.</p>
    </div>
  `;

  const interviewResponses = `
    <div class="interview-responses">
    <div class="user-responses">
        <h4>Usuário 1:</h4>
        <ol>
            <li><strong>1. Como é minha relação com o celular?</strong><br>
                "Eu uso meu celular o tempo todo! É meu principal meio de comunicação e acesso a informações. Não precisa ser o último modelo, mas precisa funcionar bem."
            </li>
            <li><strong>2. O público-alvo sabe ler e escrever em português?</strong><br>
                "Sim, eu sei ler e escrever em português. A comunicação escrita é fundamental para mim."
            </li>
            <li><strong>3. Além das músicas religiosas, seriam interessantes outras opções de músicas no aplicativo?</strong><br>
                "Além das músicas religiosas, eu adoraria ter outras opções de músicas no aplicativo. Uma variedade seria ótimo!"
            </li>
            <li><strong>4. Costumam utilizar aplicativos/ferramentas para facilitar a interação com o celular ou computador? Quais?</strong><br>
                "Sim, uso alguns aplicativos para facilitar a interação com meu celular, especialmente aqueles que têm recursos de acessibilidade, como leitores de tela."
            </li>
            <li><strong>5. Como é a sua experiência em eventos sociais com música, como concertos e festivais? O que você sente?</strong><br>
                "Minha experiência em eventos sociais com música? Costuma ser frustrante. Eu me sinto excluído da diversão."
            </li>
            <!-- Adicione o restante das perguntas e respostas do Usuário 1 aqui -->
        </ol>
    </div>

    <div class="user-responses">
        <h4>Usuário 2:</h4>
        <ol>
            <li><strong>1. Como é a relação do público com o celular? Utilizam constantemente? Seus celulares são em média de última geração ou eles não se apegam muito aos modelos?</strong><br>
                "A minha relação com o celular é bastante próxima, pois ele desempenha um papel crucial na minha comunicação e interação com o mundo."
            </li>
            <li><strong>2. O público-alvo sabe ler e escrever em português?</strong><br>
                "Sim, sei ler e escrever em português. A comunicação escrita é uma parte fundamental da minha interação com o mundo, já que a audição é limitada."
            </li>
            <li><strong>3. Além das músicas religiosas, seriam interessantes outras opções de músicas no aplicativo?</strong><br>
                "Sim, seria muito interessante ter acesso a uma variedade de músicas além das religiosas. Isso proporcionaria uma experiência musical mais completa e inclusiva, permitindo que eu escolha músicas que se adequem ao meu gosto pessoal."
            </li>
            <!-- Adicione o restante das perguntas e respostas do Usuário 2 aqui -->
        </ol>
    </div>
  </div>
  `;

  const participants = [
    { name: 'Mateus Siqueira Carneiro', RA: '111824', Turma: 'Noturno' },
    { name: 'Participant 2', RA: 'RA002', Turma: 'Noturno'  },
    { name: 'Participant 3', RA: 'RA003', Turma: 'Noturno'  },
    { name: 'Participant 2', RA: 'RA002', Turma: 'Noturno'  },
    { name: 'Participant 3', RA: 'RA003', Turma: 'Noturno'  },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-title">IHC & UX</h1>
        <p className="sub-title">Inclusão e Interação para Deficientes Auditivos</p>
        <Tabs defaultActiveKey="content" id="research-tabs" className="custom-tabs">
          <Tab eventKey="content" title="Conteúdo" className="custom-tab">
            <Tab.Content>
              <div className="content-tab">
                <div className="research-content" dangerouslySetInnerHTML={{ __html: researchContent }} />
              </div>
            </Tab.Content>
          </Tab>
          <Tab eventKey="responses" title="Respostas" className="custom-tab">
            <Tab.Content>
              <div className="responses-tab">
                <div className="interview-responses" dangerouslySetInnerHTML={{ __html: interviewResponses }} />
              </div>
            </Tab.Content>
          </Tab>
        </Tabs>
      </header>
      <footer className="App-footer">
        <h2>Lista de Participantes:</h2>
        <ul>
          {participants.map((participant, index) => (
            <li key={index}>
              {participant.name} - {participant.RA}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default App;
