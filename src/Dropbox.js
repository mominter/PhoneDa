import React, { useState } from "react";
import "./Dropbox.css";

const Dropbox = ({ Bills, selectBill, setSelectBill }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            {/* 요금제 선택 */}
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectBill.name}</span>
                <span>{selectBill.price.toLocaleString()}</span>
                <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
            </div>

            {isOpen && (
                <ul className="dropdown-list">
                    {Bills.map((bill, index) => (
                        <li
                            key={index}
                            className={`dropdown-item ${selectBill.name === bill.name ? "selected" : ""}`}
                            onClick={() => {
                                setSelectBill(bill);
                                setIsOpen(false);
                            }}
                        >
                            <div className="bill-name">
                                {bill.name} <span className="bill-price">₩{bill.price.toLocaleString()}</span></div>
                            <div className="bill-info">
                                <span>📞 {bill.call}</span>
                                <span>💬 {bill.sms}</span>
                                <span>📶 {bill.data}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropbox;