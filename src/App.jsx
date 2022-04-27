import React, {useState} from 'react';
import './App.css';
import Container from './components/container/Container';
import Botao from './components/botoes/Botao';
import Perguntas from './components/texto/Perguntas';
import If from './components/condicionais/If';
import arrayPerguntas from './components/texto/arrayPerguntas';
import Baleia from './components/imgs/baleia.jpg'

function App() {

  const [resposta, setResposta] = useState('');
  const [ imagem, setImagem] = useState(Baleia);
  function fornecebotao(resposta, imagem){
    setResposta(resposta);
    setImagem(imagem);
    
  }
  return (
    <>
      <Container className="envolve1">
        <Container className="centro">
            <h1>Perguntas e Respostas</h1>
            <Perguntas pergunta={arrayPerguntas[0].pergunta}></Perguntas>
            <img src={imagem} />
            <Perguntas pergunta={resposta}></Perguntas>
            <Container className="organizaBotao">
                <Botao name="botaoSim" resposta="Sim" click={fornecebotao}>
                    
                </Botao>
              
              
              <Botao name="botaoNao" resposta="Não" click={fornecebotao}></Botao>
            </Container>    
        </Container>
      </Container>
      <Container className="envolve2">
          <Container className="lado">
              <h1>Placar</h1>
                
          </Container>
      </Container>

    </>

  );
}

export default App;
