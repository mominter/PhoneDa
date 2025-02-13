import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/terms">이용약관</a>
                <span>|</span>
                <a href="/privacy">개인정보보호정책</a>
                <span>|</span>
                <a href="/contact">고객센터</a>
            </div>
            <p className="footer-text">@ 2025 회사명. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;