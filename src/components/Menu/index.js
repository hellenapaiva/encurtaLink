import './menu.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <a className="social" target="_blank" href="https://www.linkedin.com/in/helena-paiva-oliveira-94b64927/" rel="noreferrer">
                <BsLinkedin color="#fff" size={24} />
            </a>
            <a className="social" target="_blank" href="https://www.github.com/hellenapaiva" rel="noreferrer">
                <BsGithub color="#fff" size={24} />
            </a>
            <a className="social" target="_blank" href="https://www.instagram.com/hellenapaivaa" rel="noreferrer">
                <BsInstagram color="#fff" size={24} />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>

    );
};

export default Menu;
