import React from 'react';
import { Link } from "react-router-dom";
import IPhones from "./IPhones";
import './Iphone.css';

function Iphone() {
    return (
        <div className="content">
        <div style={{ height: "280vh" }}>
                <div className="iphone-title">
                    아이폰폰
                </div>

                <div className="iphone-box-container">
                    <ul className="iphone-container">
                        {Object.entries(IPhones).map(([phoneName, phone], index) => (
                            <li key={index} className="iphone-box">
                                <div className="iphone-photo-box">
                                    <img src={phone.mainImage} alt="휴대폰 메인 이미지" />
                                </div>

                                <div className="iphone-text-box">
                                    <div className="iphone-color-box">
                                        {phone.colors.map((color, idx) => (
                                            <div key={idx} className="iphone-circle" style={{ backgroundColor: color.code }}></div>
                                        ))}
                                    </div>

                                    <div className="iphone-name">{phoneName}</div>

                                    <div className="iphone-pricebox">
                                        <div className="iphone-modelprice">
                                            <div className="iphone-span">
                                            <span>출고가</span><span>{phone.mainPrice.toLocaleString() || "1650000"}원</span>
                                            </div>
                                        </div>
                                        <div className="iphone-sale">
                                            <div className="iphone-span">
                                            <span>할인</span><span>{phone?.discount?.toLocaleString() || "0"}원</span>
                                            </div>
                                        </div>
                                        <div className="iphone-saleprice">
                                            <div className="iphone-span">
                                            <span>할인가</span><span>{((phone.mainPrice || 1650000) - (phone?.discount || 0)).toLocaleString()}원</span>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="iphone-order-box">
                                        <div className="iphone-order-text">
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

export default Iphone;