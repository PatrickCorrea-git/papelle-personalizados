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
        </div>
    )
}

export default App; 
