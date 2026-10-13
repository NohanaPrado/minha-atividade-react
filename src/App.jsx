
import { useState } from "react";
import "./App.css";

// 1. Componente de cabeçalho
function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1>Minha Página React</h1>
      <p>Atividade prática de componentes</p>
    </header>
  );
}

// 2. Componente de boas-vindas
function BoasVindas() {
  return (
    <section className="card">
      <h2>Bem-vindo(a)!</h2>
      <p>Esta página foi criada usando React e Vite.</p>
    </section>
  );
}

// 3. Componente de perfil
function Perfil() {
  return (
    <section className="card">
      <h2>Meu Perfil</h2>
      <p>Nome: Estudante de React</p>
      <p>Profissão: Desenvolvedor(a) em formação</p>
    </section>
  );
}

// 4. Componente de produto
function Produto() {
  return (
    <section className="card">
      <h2>Produto</h2>
      <p>Notebook para programação</p>
      <p>Preço: R$ 2.500,00</p>
    </section>
  );
}

// 5. Componente de relógio
function Relogio() {
  return (
    <section className="card">
      <h2>Relógio</h2>
      <p>Horário de exemplo: 14:30</p>
    </section>
  );
}

// 6. Componente de clima
function Clima() {
  return (
    <section className="card">
      <h2>Previsão do Tempo</h2>
      <p>Clima demonstrativo: Ensolarado ☀️</p>
      <p>Temperatura de exemplo: 28 °C</p>
    </section>
  );
}

// 7. Componente de lista de tarefas
function ListaTarefas() {
  return (
    <section className="card">
      <h2>Minhas Tarefas</h2>
      <ul>
        <li>Estudar React</li>
        <li>Aprender JSX</li>
        <li>Praticar componentes</li>
      </ul>
    </section>
  );
}

// 8. Componente de contador
function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <section className="card">
      <h2>Contador</h2>
      <p>Valor atual: {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>
        Aumentar
      </button>
      <button onClick={() => setNumero(numero - 1)}>
        Diminuir
      </button>
    </section>
  );
}

// 9. Componente de mensagem
function Mensagem() {
  return (
    <section className="card mensagem">
      <h2>Mensagem</h2>
      <p>Continue praticando! Você está aprendendo React.</p>
    </section>
  );
}

// 10. Componente de rodapé
function Rodape() {
  return (
    <footer className="rodape">
      <p>Atividade acadêmica - Criação de Componentes em React</p>
    </footer>
  );
}

// Componente principal que exibe os dez componentes
function App() {
  return (
    <div className="pagina">
      <Cabecalho />

      <main className="conteudo">
        <BoasVindas />
        <Perfil />
        <Produto />
        <Relogio />
        <Clima />
        <ListaTarefas />
        <Contador />
        <Mensagem />
      </main>

      <Rodape />
    </div>
  );
}

export default App;
