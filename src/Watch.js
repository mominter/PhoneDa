import React from 'react';
import { Link } from "react-router-dom";
import './Watch.css';

const galaxyUltra25 = ["#8e9fbc", "#b3ab9e", "#4a4a4d", "#d9d9d6"];

function Watch() {
    return (
        <div className="content">
        <div style={{ height: "300vh" }}>
            <div className="iphone-title">
                워치
            </div>
            <div className="item-box-container">
            <ul className="ul-box-container">
            <li className="ul-box">
                <div className="ul-photo-box"></div>
                <div className="ul-text-box">
                <div className="ul-color-box">
                    {galaxyUltra25.map((color, index) => (
                    <div key={index} className="ul-circle" style={{ backgroundColor: color }}></div>
                    ))}
                </div>
                <div className="ul-name">갤럭시 워치 울트라</div>
                <div className="ul-pricebox">
                    <div className="ul-saleprice">1,650,000 원</div>
                    <div className="ul-modelprice">출고가 1,650,000 원</div>
                </div>
                <div className="ul-order-box">
                    <div className="ul-order-text">
                    <Link to="/order">주문하기</Link>
                    </div>
                </div>
                </div>
            </li>
            <li className="ul-box">
                <div className="ul-photo-box"></div>
                <div className="ul-text-box">
                <div className="ul-color-box">
                    {galaxyUltra25.map((color, index) => (
                    <div key={index} className="ul-circle" style={{ backgroundColor: color }}></div>
                    ))}
                </div>
                <div className="ul-name">갤럭시</div>
                <div className="ul-pricebox">
                    <div className="ul-saleprice">0 원</div>
                    <div className="ul-modelprice">출고가 0 원</div>
                </div>
                <div className="ul-order-box">
                    <div className="ul-order-text">
                    <Link to="/order">주문하기</Link>
                    </div>
                </div>
                </div>
            </li>
            <li className="ul-box">
                <div className="ul-photo-box"></div>
                <div className="ul-text-box">
                <div className="ul-color-box">
                    {galaxyUltra25.map((color, index) => (
                    <div key={index} className="ul-circle" style={{ backgroundColor: color}}></div>
                    ))}
                </div>
                <div className="ul-name">갤럭시</div>
                <div className="ul-pricebox">
                    <div className="ul-saleprice">0 원</div>
                    <div className="ul-modelprice">출고가 0 원</div>
                </div>
                <div className="ul-order-box">
                    <div className="ul-order-text">주문하기</div>
                </div>
                </div>
            </li>
            <li className="ul-box">
                <div className="ul-photo-box"></div>
                <div className="ul-text-box">
                <div className="ul-color-box">
                    {galaxyUltra25.map((color, index) => (
                    <div key={index} className="ul-circle" style={{ backgroundColor: color}}></div>
                    ))}
                </div>
                <div className="ul-name">갤럭시</div>
                <div className="ul-pricebox">
                    <div className="ul-saleprice">0 원</div>
                    <div className="ul-modelprice">출고가 0 원</div>
                </div>
                <div className="ul-order-box">
                    <div className="ul-order-text">주문하기</div>
                </div>
                </div>
            </li>
            </ul>
            </div>
        </div>
        </div>
    );
}

export default Watch;