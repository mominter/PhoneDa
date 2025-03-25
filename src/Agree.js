import React, { useState } from 'react';
import './Agree.css';
import Modal from './Modal';

function Agree() {
    const [termsChecked, setTermsChecked] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: ''});

    const allChecked = termsChecked && privacyChecked;

    const handleAllChecked = () => {
        const newChecked = !allChecked;
        setTermsChecked(newChecked);
        setPrivacyChecked(newChecked);
    };

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalOpen(true);
    };

    return (
        <div className="agree-content">
            <div style={{ height: "70vh" }}>
                <div className="agree-title">
                    이용 약관 동의
                </div>
                <div className="agree-checkes">
                    {/* 전체 동의 체크박스 */}
                    <div className="checkbox-container all-agree">
                        <input 
                            type="checkbox"
                            id="allAgree"
                            checked={allChecked}
                            onChange={handleAllChecked}
                        />
                        <label htmlFor="allAgree">전체 약관 동의</label>
                    </div>

                    {/* 개별 약관 체크박스 */}
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsChecked}
                            onChange={() => setTermsChecked(prev => !prev)}
                        />
                        <label htmlFor="terms">
                            <span className="required">(필수)</span> 사이트 이용약관
                        </label>
                        <a href="#" className="view-link" onClick={(e) => {e.preventDefault(); openModal("사이트 이용약관", "여기에 이용약관 내용을 입력하세요.")}}>내용보기</a>
                    </div>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="privacy"
                            checked={privacyChecked}
                            onChange={() => setPrivacyChecked(prev => !prev)}
                        />
                        <label htmlFor="privacy">
                            <span className="required">(필수)</span> 개인정보 수집 및 이용 동의
                        </label>
                        <a href="#" className="view-link" onClick={(e) => {e.preventDefault(); openModal("개인정보 수집 및 이용 동의", "여기에 이용 동의 내용을 입력하세요.")}}>내용보기</a>
                    </div>

                    <button
                        className={`submit ${allChecked ? "active" : ""}`}
                        disable={!allChecked}
                    >
                        동의하고 가입하기
                    </button>
                </div>
            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} content={modalContent.content} />
        </div>
    )
}

export default Agree;