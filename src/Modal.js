import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    )
}

export default Modal;