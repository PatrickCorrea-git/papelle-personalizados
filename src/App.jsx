import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Papelle personalizados</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section>
          <h2>Do seu sonho ao detalhe que encanta!</h2>
          <p>
            Papelaria personalizada para momentos incríveis.
          </p>
        </section>

        <section className="beneficios">
          
          <article>
            <h3>🎨 Personalização do seu jeito</h3>
            <p>Detalhes pensados para combinar com sua comemoração.</p>
          </article>

          <article>
            <h3>💖 Feitos com carinho</h3>
            <p>Cada detalhe preparado com atenção e cuidado.</p>
          </article>

          <article>
            <h3>🎉 Momentos especiais</h3>
            <p>Papelaria personalizada para celebrar suas melhores memórias.</p>
          </article>


        </section>  
      
      </main>
    </div>
  )
};

export default App;