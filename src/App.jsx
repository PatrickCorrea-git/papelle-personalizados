import { MessagesSquare, Palette, HeartHandshake, PackageCheck } from 'lucide-react';
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

        <section className="destaques">
          <h2>Produtos em destaques</h2>
          <p>Confira alguns dos nossos produtos mais populares e encantadores!</p>

          <div className="destaques-lista">
            <article className="destaque-card">
              <div>
                <span className="destaque-imagem">Foto do produto 1</span>
              </div>
              <h3>Topo de bolo personalizado</h3>
            </article>

            <article className="destaque-card">
              <div>
                <span className="destaque-imagem">Foto do produto 2</span>
              </div>
              <h3>Caixa personalizada</h3>
            </article>

            <article className="destaque-card">
              <div>
                <span className="destaque-imagem">Foto do produto 3</span>
              </div>
              <h3>Lembrancinhas personalizadas</h3>
            </article>

            <article className="destaque-card">
              <div>
                <span className="destaque-imagem">Foto do produto 4</span>
              </div>
              <h3>Papelaria para eventos</h3>
            </article>
          </div>

          <section className="como-funciona">
            <h2>Como funciona?</h2>
            <p>É muito simples! Basta escolher o produto que deseja, personalizar conforme sua preferência e acompanhar pelo WhatsApp.</p>
            <div className="etapas-lista">

              <article className="etapa-card">
                <div className="etapa-icone">
                <MessagesSquare size={32} />
                </div>
                <h3>1. Entre em contato</h3>
                <p>Entre em contato conosco pelo WhatsApp ou Instagram para iniciar o processo de personalização.</p>
              </article>

              <article className="etapa-card">
                <div className="etapa-icone">
                  <Palette size={32} />
                </div>
                <h3>2. Forneça os detalhes</h3>
                <p>Compartilhe suas ideias, preferências e qualquer detalhe específico que deseja incluir no produto.</p>
              </article>

              <article className="etapa-card">
                <div className="etapa-icone">
                  <HeartHandshake size={32} />
                </div>
                <h3>3. Receba o orçamento</h3>
                <p>Forneceremos um orçamento personalizado para o seu pedido.</p>
              </article>

              <article className="etapa-card">
                <div className="etapa-icone">
                  <PackageCheck size={32} />
                </div>
                <h3>4. Recebimento do pedido</h3>
                <p>Assim que seu pedido estiver pronto, você poderá retirá-lo no local combinado ou solicitar um transporte por aplicativo.</p>
              </article>
            </div>

            <p>Obs.: Os custos de entrega são de responsabilidade do cliente.</p>
          </section>
        </section>

      </main>
    </div>
  )
};

export default App;