import React from 'react';
import { Link } from "react-router-dom";
import GalaxyPhones from "./GalaxyPhones";
import './Galaxy.css';

function Galaxy() {
    return (
        <div className="content">
            <div style={{ height: "280vh" }}>
                <div className="galaxy-title">
                    갤럭시
                </div>

                <div className="galaxy-box-container">
                    <ul className="galaxy-container">
                        {Object.entries(GalaxyPhones).map(([phoneName, phone], index) => (
                            <li key={index} className="galaxy-box">
                                <div className="galaxy-photo-box">
                                    <img src={phone.mainImage} alt="휴대폰 메인 이미지" />
                                </div>

                                <div className="galaxy-text-box">
                                    <div className="galaxy-color-box">
                                        {phone.colors.map((color, idx) => (
                                            <div key={idx} className="galaxy-circle" style={{ backgroundColor: color.code }}></div>
                                        ))}
                                    </div>

                                    <div className="galaxy-name">{phoneName}</div>

                                    <div className="galaxy-pricebox">
                                        <div className="galaxy-modelprice">
                                            <div className="galaxy-span">
                                            <span>출고가</span><span>{phone.mainPrice.toLocaleString() || "1650000"}원</span>
                                            </div>
                                        </div>
                                        <div className="galaxy-sale">
                                            <div className="galaxy-span">
                                            <span>할인</span><span>{phone?.discount?.toLocaleString() || "0"}원</span>
                                            </div>
                                        </div>
                                        <div className="galaxy-saleprice">
                                            <div className="galaxy-span">
                                            <span>할인가</span><span>{((phone.mainPrice || 1650000) - (phone?.discount || 0)).toLocaleString()}원</span>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="galaxy-order-box">
                                        <div className="galaxy-order-text">
                                            <Link to={`/order/${phoneName}`}>주문하기</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Galaxy;