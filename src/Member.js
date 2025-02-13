import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Member.css";

function Member() {
    const [formData, setFormData] = useState({
        "member-id" : "",
        "member-pw" : "",
        "member-pwc" : "",
        "member-name" : "",
        "member-num" : "",
        "member-email" : "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("회원가입 데이터:", formData);

        if (formData["member-pw"] !== formData["member-pwc"]) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        alert("회원가입이 완료되었습니다.");
    }

    return (
        <div className="member-content">
            <div style={{ height: "80vh" }}>
                <form onSubmit={handleSubmit}>
                    <div className="member-title">
                        정보 입력
                    </div>

                    <div className="member-input">
                        <input type="text" name="member-id" placeholder="아이디" value={formData["member-id"]} onChange={handleChange} required />
                    </div>

                    <div className="member-input">
                        <input type="password" name="member-pw" placeholder="비밀번호" value={formData["member-pw"]} onChange={handleChange} required />
                    </div>

                    <div className="member-input">
                        <input type="password" name="member-pwc" placeholder="비밀번호 확인" value={formData["member-pwc"]} onChange={handleChange} required />
                    </div>

                    <div className="member-input">
                        <input type="text" name="member-name" placeholder="이름" value={formData["member-name"]} onChange={handleChange} required />
                    </div>

                    <div className="member-input">
                        <input type="tel" name="member-num" placeholder="연락처" value={formData["member-num"]} onChange={handleChange} required />
                    </div>

                    <div className="member-input">
                        <input type="email" name="member-email" placeholder="이메일" value={formData["member-email"]} onChange={handleChange} required />
                    </div>

                    <button type="submit"><Link to="/">가입하기</Link></button>
                </form>
            </div>
        </div>
    );
}

export default Member;