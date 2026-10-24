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

                <a href='#contato' className='botao-contato'> <FaWhatsapp size={18}/> Fale Conosco</a>
            </header>

            <section className='banner' id='inicio'>
                <div className='banner-conteudo'>
                    <h2>Transformando momentos em lembranças especiais</h2>
                    <p>Na Papelle Personalizados, cada detalhe é feito com carinho para deixar sua festa ainda mais especial e inesquecível!</p>
                    <a href='#contato' className='banner-botao'><FaWhatsapp size={22}/> Solicite seu orçamento </a>
                </div>

                <div className='banner-imagem'>
                    <img src='/banner-papelle.jpg' alt='Bolo e personalizados para festas'></img>

                    <span className='banner-coracao banner-coracao-1'>♡</span>
                    <span className='banner-coracao banner-coracao-2'>♡</span>
                </div>
            </section>  
        </div>
    )
}

export default App; 
