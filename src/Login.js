import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [autoLogin, setAutoLogin] = useState(false);

    return (
        <div className="login-content">
            <div style={{ height: "80vh" }}>
                <div className="login-title">로그인</div>
                <div className="login-form">
                    <input type="text" placeholder="아이디" className="login-input" />
                    <input type="password" placeholder="비밀번호" className="login-input" />
                    <div className="login-options">
                        <label className="auto-login">
                            <input
                                type="checkbox"
                                checked={autoLogin}
                                onChange={() => setAutoLogin(!autoLogin)}
                            />
                            자동 로그인
                        </label>

                        <Link to="/Find" className="find-id">아이디 찾기</Link>
                    </div>
                    <button className="login-button"><Link to="/">로그인</Link></button>
                </div>
                <div className="sns-login">
                    <p>SNS 로그인</p>
                    <button className="kakao-login"><Link to="/">카카오 로그인</Link></button>
                </div>
            </div>
        </div>
    );
}

 export default Login;