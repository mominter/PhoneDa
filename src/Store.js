import React from "react";
import GoogleMapComponent from "./Map";
import './Store.css';

const Store = () => {
    return (
        <div style={{ height: "80vh" }}>
            <div className="store-map-container">
                <GoogleMapComponent />
                <div className="store-list">
                    <h2>위치 리스트</h2>
                    <ul>
                        <li>서울역</li>
                        <li>강남역</li>
                        <li>홍대입구역</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Store;