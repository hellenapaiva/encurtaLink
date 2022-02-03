import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import api from '../../services/api';
import { saveLink } from '../../services/storeLinks'

function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false);

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })
            setData(response.data);
            setShowModal(true);
            saveLink('links', response.data);
            setLink('');
        } catch (err) {
            console.log(err)
            setLink('');
        }

    }

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
                    <input
                        value={link}
                        placeholder="Cole o seu link aqui..."
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>Encurtar Link</button>

            </div>

            <Menu />
            {showModal && (
                <ModalLink
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div>
    );
}

export default Home;