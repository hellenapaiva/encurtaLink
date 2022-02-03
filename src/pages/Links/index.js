import { useState, useEffect } from 'react'
import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { getLink, deleteLink } from '../../services/storeLinks';
import ModalLink from '../../components/ModalLink';


function Links() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyLink, setEmptyLink] = useState(false);

    useEffect(() => {
        async function getLinks() {
            const resultLinks = await getLink('links');

            if (resultLinks.length === 0) {
                setEmptyLink(true);
            }
            setMyLinks(resultLinks);
        }
        getLinks();
    }, [])

    function handleOpenLink(link) {
        setData(link);
        setShowModal(true);
    }

    async function handleDeleteLink(id) {
        const resultDelete = await deleteLink(myLinks, id);

        if (resultDelete.length === 0) {
            setEmptyLink(true);
        }
        setMyLinks(resultDelete);
    }

    return (
        <div className="links-container">
            <div className="links-header">
                <Link to="/">
                    <FiArrowLeft size={38} color="#fff" />
                </Link>
                <h1>Meus Links</h1>
            </div>
            {emptyLink && (
                <div className="links-modal-empty">
                    <IoMdCloseCircle size={100} color="red" />
                    <h2 className="empty-text">Sua lista está vazia.</h2>
                </div>
            )
            }
            {myLinks.map(link => (
                <div key={link.id} className="links-item">
                    <button className="link" onClick={() => handleOpenLink(link)}>
                        <FiLink size={18} color="#fff" className="icon" />
                        {link.long_url}
                    </button>
                    <button className="link-delete" onClick={() => handleDeleteLink(link.id)}>
                        <FiTrash size={24} color="#FF5454" />
                    </button>

                </div>
            ))}
            {showModal && (
                <ModalLink
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}

        </div>
    );
}

export default Links
