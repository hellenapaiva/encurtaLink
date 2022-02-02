import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';

function Home() {
    return (
        <div className="container-home">
            <div className="logo">
                <img src="logo.png" alt="logo" />
                <h1>ShorterLinks</h1>
                <span>Cole abaixo o link que deseja encurtar 👇</span>
            </div>
            <div className="area-input">
                <div>
                    <FiLink size={24} color="#fff" />
                    <input placeholder="Cole o seu link aqui..." />
                </div>
                <button>Encurtar Link</button>

            </div>

            <Menu />
        </div>
    );
}

export default Home;