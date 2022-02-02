import { FiClipboard, FiX } from 'react-icons/fi';
import './modalLink.css';

function ModalLink({ closeModal, content }) {

    async function copyLink() {
        await navigator.clipboard.writeText(content.link);
    }

    return (
        <div className="modal-container">
            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#132742" />
                </button>
            </div>
            <span>
                {content.long_url}
            </span>
            <button className="modal-button">
                {content.link}
                <FiClipboard size={20} color="#fff" onClick={copyLink} />
            </button>
        </div>
    );
};

export default ModalLink;
