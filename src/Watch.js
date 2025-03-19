import React from 'react';
import { Link } from "react-router-dom";
import GalaxyWatches from "./GalaxyWatches";
import './Watch.css';

function Watch() {
    return (
        <div className="content">
            <div style={{ height: "130vh" }}>
                <div className="galaxyw-title">
                    워치
                </div>

                <div className="galaxyw-box-container">
                    <ul className="galaxyw-container">
                        {Object.entries(GalaxyWatches).map(([phoneName, phone], index) => (
                            <li key={index} className="galaxyw-box">
                                <div className="galaxyw-photo-box">
                                    <img src={phone.mainImage} alt="휴대폰 메인 이미지" />
                                </div>

                                <div className="galaxyw-text-box">
                                    <div className="galaxyw-color-box">
                                        {phone.colors.map((color, idx) => (
                                            <div key={idx} className="galaxyw-circle" style={{ backgroundColor: color.code }}></div>
                                        ))}
                                    </div>

                                    <div className="galaxyw-name">{phoneName}</div>

                                    <div className="galaxyw-pricebox">
                                        <div className="galaxyw-modelprice">
                                            <div className="galaxyw-span">
                                            <span>출고가</span><span>{phone.mainPrice.toLocaleString() || "1650000"}원</span>
                                            </div>
                                        </div>
                                        <div className="galaxyw-sale">
                                            <div className="galaxyw-span">
                                            <span>할인</span><span>{phone?.discount?.toLocaleString() || "0"}원</span>
                                            </div>
                                        </div>
                                        <div className="galaxyw-saleprice">
                                            <div className="galaxyw-span">
                                            <span>할인가</span><span>{((phone.mainPrice || 1650000) - (phone?.discount || 0)).toLocaleString()}원</span>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="galaxyw-order-box">
                                        <div className="galaxyw-order-text">
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

export default Watch;