import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left-link">
            <Link to="/galaxy" className="left-text">갤럭시</Link>
            <Link to="/iphone" className="left-text">아이폰</Link>
            <Link to="/watch" className="left-text">워치</Link>
            <a href="https://example.com" className="left-text">인터넷+TV</a>
            <Link to ="/Store" className="left-text">지점 찾기</Link>
            </div>
            
            <Link to="/">
            <img src="./assets/images/PhonedaLogo.png" alt="로고" className="logo" />
            </Link>

            <div className="right-link">
            <Link to="/Store" className="right-text">고객센터</Link> {/* Customer */}
            <Link to="/Member" className="right-text">회원가입</Link>
            <Link to="/Login" className="right-text">로그인</Link>
            </div>
        </div>
    );
}

export default Navbar;