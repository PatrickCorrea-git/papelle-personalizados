import './App.css'
import { FaWhatsapp } from 'react-icons/fa';
import {
    Heart,
    MessagesSquare,
    ArrowRight,
    Palette,
    HeartHandshake,
    PackageCheck
} from 'lucide-react';

function App() {
    return (
        <div>

            <header>
                <div className='logo'>
                    <img src='/coracao-rosa.png' alt='' className='logo-coracao'></img>

                    <h1>Papelle</h1>
                    <span>PERSONALIZADOS</span>
                </div>

                <nav>
                    <a href='#inicio' className='ativo'>Início</a>
                    <a href='#produtos'>Produtos</a>
                    <a href='#sobre'>Sobre</a>
                    <a href='#contato'>Contato</a>
                </nav>

                <a href='#contato' className='botao-contato'> <FaWhatsapp size={18} /> Fale Conosco</a>
            </header>

            <section className='banner' id='inicio'>
                <div className='banner-conteudo'>
                    <h2>Transformando momentos em lembranças especiais</h2>
                    <p>Na Papelle Personalizados, cada detalhe é feito com carinho para deixar sua festa ainda mais especial e inesquecível!</p>
                    <a href='#contato' className='banner-botao'><FaWhatsapp size={22} /> Solicite seu orçamento </a>
                </div>

                <div className='banner-imagem'>
                    <img src='/banner-papelle.jpg' alt='Bolo e personalizados para festas'></img>

                    <span className='banner-coracao banner-coracao-1'>♡</span>
                    <span className='banner-coracao banner-coracao-2'>♡</span>
                </div>
            </section>

            <section className='produtos' id='produtos'>
                <div className='divisoria-decorativa'><Heart /></div>

                <h2>Nossos Produtos</h2>
                <p className='produtos-descricao'>Tudo o que você precisa para tornar sua festa ainda mais especial, <br /> com muito carinho e personalização.</p>

                <div className='produtos-lista'>
                    <article className='categoria-card card-rosa'>
                        <span>🎂</span>
                        <h3>Topo de bolo</h3>
                        <p>Topo de bolo personalizado</p>
                        <span className="categoria-seta">→</span>
                    </article>

                    <article className='categoria-card card-azul'>
                        <span>🎁</span>
                        <h3>Caixas personalizadas</h3>
                        <p>Caixas em diversos modelos e temas</p>
                        <span className="categoria-seta">→</span>
                    </article>

                    <article className='categoria-card card-amarelo'>
                        <span>🍬</span>
                        <h3>Tubetes e latinhas</h3>
                        <p>Lembrancinhas criativas e cheias de charme</p>
                        <span className="categoria-seta">→</span>
                    </article>

                    <article className='categoria-card card-verde'>
                        <span>♡</span>
                        <h3>Adesivos em geral</h3>
                        <p>Personalize com seu tema favorito</p>
                        <span className="categoria-seta">→</span>
                    </article>

                    <article className='categoria-card card-lilas'>
                    <span>🎨</span>
                    <h3>Totens de mesa</h3>
                    <p>Deixe sua decoração ainda mais completa</p>
                    <span className="categoria-seta">→</span>
                    </article>
                </div>
            </section>

            <section className='destaques'>
                <div className='divisoria-decorativa'><Heart /></div>

                <h3 className='produtos-destaque'>Produtos em destaques</h3>
                <p className='destaques-descricao'>Confira alguns trabalhos que já encantaram nossos clientes!</p>

                <div className='destaques-lista'>
                    <article className='destaque-card'>
                        <img src="" alt="topo de bolo personalizado" />
                        <p>topo de bolo personalizado</p>
                    </article>

                    <article className='destaque-card'>
                        <img src="" alt="Caixas personalizadas" />
                        <p>Caixas personalizadas</p>
                    </article>

                    <article className='destaque-card'>
                        <img src="" alt="painel de mesa" />
                        <p>Painel de mesa</p>
                    </article>

                    <article className='destaque-card'>
                        <img src="" alt="Centro de mesa" />
                        <p>Centro de mesa</p>
                    </article>

                </div>
            </section>
        </div>
    )
}

export default App; 
