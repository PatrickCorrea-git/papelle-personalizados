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

        <section className="produtos">
          <h2>Nossos Produtos</h2>
          <p>Tudo o que você precisa para deixar sua festa ainda mais especial!</p>

          <div className="produtos-lista">
            <article className="categoria-card card-rosa">
              <span>🎂</span>
              <h3>Topo de bolo</h3>
              <p>topo de bolo personalizado</p>
            </article>

            <article className="categoria-card card-azul">
              <span>🎁</span>
              <h3>Caixas personalizadas</h3>
              <p>caixas personalizadas para presentes</p>
            </article>

            <article className="categoria-card card-verde">
              <span>🍬</span>
              <h3>Tubetes, latinhas e caixa acrílica</h3>
              <p>tubetes, latinhas e caixa acrílica personalizadas</p>
            </article>

            <article className="categoria-card card-pessego">
              <span>✨</span>
              <h3>Adesivos em geral</h3>
              <p>adesivos personalizados para diversos usos</p>
            </article>

            <article className="categoria-card card-lilas">
              <span>🎉</span>
              <h3>Totens de mesa</h3>
              <p>totens de mesa personalizados para eventos</p>
            </article>
          </div>

        </section>

      </main>
    </div>
  )
};

export default App;