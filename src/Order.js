import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import OrderSlider from "./OrderSlider";
import Dropbox from "./Dropbox";
import GalaxyPhones from "./GalaxyPhones";
import IPhones from "./IPhones";
import GalaxyWatches from "./GalaxyWatches";
import Phoneplans from "./Phoneplans";
import './Order.css';

const Types = ["사용하는 번호 그대로 Telecom 통신사로 이동하고 싶어요.", "통신사는 그대로 Telecom 그대로 휴대폰만 바꾸고 싶어요"];

function Order() {
    const { phoneName } = useParams();
    const location = useLocation();
    const phoneData = GalaxyPhones[phoneName] || IPhones[phoneName] || GalaxyWatches[phoneName] || {};

    /* 이미지 클릭 핸들러 */
    const handleImageClick = (clickImage) => {
        const matchedColor = phoneData.colors.find(color => color.image === clickImage);
        if (matchedColor) {
            setSelectColorName(matchedColor.name);
            setSelectImg(matchedColor.image);
        }
    }

    /* 통신사 클릭 핸들러 */
    const handleTelecomChange = (clickTelecom) => {
        setSelectTelecom(clickTelecom);
        setSelectBill(Phoneplans[clickTelecom]?.[0] || { name: "요금제 없음", price: 0, call: "", sms: "", data: ""});
    }

    const savedImg = sessionStorage.getItem("selectImg");
    const savedColorName = sessionStorage.getItem("selectColorName");
    const savedStorage = sessionStorage.getItem("selectStorage");
    const savedTelecom = sessionStorage.getItem("selectTelecom");
    const savedType = sessionStorage.getItem("selectType");
    const savedMonthly = sessionStorage.getItem("selectMonthly");
    const savedBill = sessionStorage.getItem("selectBill");
    const savedService = sessionStorage.getItem("selectService");
    const savedInternet = sessionStorage.getItem("selectInternet");

    const [selectImg, setSelectImg] = useState(savedImg || phoneData.colors[0].image);
    const [selectColorName, setSelectColorName] = useState(savedColorName || phoneData.colors[0].name);
    const [selectStorage, setSelectStorage] = useState(savedStorage ? savedStorage : Object.keys(phoneData.storage)[0]);
    const [selectTelecom, setSelectTelecom] = useState(savedTelecom || phoneData.telecom[0]);
    const [selectType, setSelectType] = useState(savedType || phoneData.type[0]);
    const [selectMonthly, setSelectMonthly] = useState(savedMonthly || phoneData.monthly[0]);
    const [selectBill, setSelectBill] = useState(savedBill ? JSON.parse(savedBill) : Phoneplans[selectTelecom]?.[0] || { name: "기본요금제", price: 0 });
    const [selectSale, setSelectSale] = useState("공시지원할인\n총 0원");
    const [selectService, setSelectService] = useState(savedService || phoneData.service[0]);
    const [selectInternet, setSelectInternet] = useState(savedInternet || phoneData.internet[0]);

    useEffect(() => {
        if(!savedBill) {
            setSelectBill(Phoneplans[selectTelecom]?.[0] || { name: "기본요금제", price: 0});
        }
    }, [selectTelecom]);

    useEffect(() => {
        sessionStorage.setItem("selectImg", selectImg);
        sessionStorage.setItem("selectColorName", selectColorName);
        sessionStorage.setItem("selectStorage", selectStorage);
        sessionStorage.setItem("selectTelecom", selectTelecom);
        sessionStorage.setItem("selectType", selectType);
        sessionStorage.setItem("selectMonthly", selectMonthly);
        sessionStorage.setItem("selectBill", JSON.stringify(selectBill));
        sessionStorage.setItem("selectService", selectService);
        sessionStorage.setItem("selectInternet", selectInternet);
    }, [selectImg, selectColorName, selectStorage, selectTelecom, selectType, selectMonthly, selectBill, selectService, selectInternet]);

    useEffect(() => {
        if (!phoneData) return;
        
        sessionStorage.removeItem("selectImg");
        sessionStorage.removeItem("selectColorName");
        sessionStorage.removeItem("selectStorage");
        sessionStorage.removeItem("selectTelecom");
        sessionStorage.removeItem("selectType");
        sessionStorage.removeItem("selectMonthly");
        sessionStorage.removeItem("selectBill");
        sessionStorage.removeItem("selectService");
        sessionStorage.removeItem("selectInternet");

        setSelectImg(phoneData.colors[0].image);
        setSelectColorName(phoneData.colors[0].name);
        setSelectStorage(Object.keys(phoneData.storage)[0]);
        setSelectTelecom(phoneData.telecom[0]);
        setSelectType(phoneData.type[0]);
        setSelectMonthly(phoneData.monthly[0]);
        setSelectBill(phoneData.bill[0]);
        setSelectService(phoneData.service[0]);
        setSelectInternet(phoneData.internet[0]);

        sessionStorage.setItem("selectImg", phoneData.colors[0].image);
        sessionStorage.setItem("selectColorName", phoneData.colors[0].name);
        sessionStorage.setItem("selectStorage", Object.keys(phoneData.storage)[0]);
        sessionStorage.setItem("selectTelecom", phoneData.Telecom[0]);
        sessionStorage.setItem("selectType", phoneData.type[0]);
        sessionStorage.setItem("selectMonthly", phoneData.monthly[0]);
        sessionStorage.setItem("selectBill", phoneData.bill[0]);
        sessionStorage.setItem("selectService", phoneData.Service[0]);
        sessionStorage.setItem("selectInternet", phoneData.internet[0]);
    }, [phoneData]);

    const typeIndex = ["번호이동", "기기변경"].indexOf(selectType);
    const selectedTypeText = typeIndex !== -1 ? Types[typeIndex].replace("Telecom", selectTelecom) : "";

    /* 휴대폰 가격 설정 */
    const normalPrice = Object.values(phoneData.storage)[0] || 0;
    const monthlyValue = parseInt((selectMonthly || "").replace("개월", ""), 10);
    const installmentPrice = normalPrice / 2;
    const installmentFee = Math.floor(normalPrice / monthlyValue);
    const monthlyInstallment = Math.floor(installmentFee * 0.8); 

    /* 기기값 할인내역 */
    const subsidies = {
        "32GB" : 20000,
        "128GB" : 70000,
        "256GB" : 60000,
        "512GB" : 50000,
    };
    const officialSubsidy = subsidies[selectStorage];
    const promotionDiscount = 20000;
    const totalDiscount = officialSubsidy + promotionDiscount;

    /* 월 통신내역 */
    const contractDiscount = 0;
    const monthlyPlanFee = (selectBill?.price || 0) - contractDiscount;
    const totalBill = (monthlyInstallment + ((selectBill?.price || 0) - contractDiscount)).toLocaleString();

    return (
        <div className="order-content">
            <div style={{ height: "150vh" }}>
                <div className="order-box">
                    <div className="order-title-box">
                        <div className="order-title">{phoneName}</div>
                    </div>
                    <div className="order-option-box">
                        <div className="order-image-box">
                            <div className="order-image-main">
                                <img src={selectImg} alt="휴대폰 메인 이미지" />
                            </div>
                            
                            <div className="order-slider-box">
                                <OrderSlider 
                                    images={[
                                        ...phoneData.colors.map(color => color.image), 
                                        ...phoneData.colors.map(color => color.image)
                                    ]}
                                    onImageClick={handleImageClick} />
                            </div>
                        </div>
                        <dl className="order-list">

                            {/* 색상 */}
                            <div className="order-item">
                                <dt className="order-titles">색상</dt>
                                <dd className="order-content-color">
                                    <div className="order-color-types">
                                        {phoneData.colors.map((color, index) => (
                                            <div
                                            key={index}
                                            className={`order-color-type ${selectColorName === color.name ? "selected" : ""}`}
                                            style={{ backgroundColor: color.code }}
                                            onClick={() => {
                                                setSelectColorName(color.name);
                                                setSelectImg(color.image);
                                            }}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="order-color-choice">{selectColorName}</div>
                                </dd>
                            </div>

                            {/* 용량 */}
                            <div className="order-item">
                                <dt className="order-titles">용량</dt>
                                <dd className="order-contents">
                                    {Object.keys(phoneData.storage).map((storage) => (
                                        <label
                                            key={storage}
                                            className={`order-button ${selectStorage === storage ? "order-button-selected" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name="storage"
                                                value={storage}
                                                checked={selectStorage === storage}
                                                onChange={() => setSelectStorage(storage)}
                                            />
                                            {storage}
                                        </label>
                                    ))}
                                </dd>
                            </div>

                            {/* 통신사 */}
                            <div className="order-item">
                                <dt className="order-titles">통신사</dt>
                                <dd className="order-contents">
                                    {phoneData.telecom.map((telecom) => (
                                        <label
                                            key={telecom}
                                            className={`order-button ${selectTelecom === telecom ? "order-button-selected" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name="telecom"
                                                value={telecom}
                                                checked={selectTelecom === telecom}
                                                onChange={() => handleTelecomChange(telecom)}
                                            />
                                            {telecom}
                                        </label>
                                    ))}
                                </dd>
                            </div>

                            {/* 가입 유형 */}
                            <div className="order-item">
                                <dt className="order-titles">가입 유형</dt>
                                <dd className="order-content-type">
                                    <div className="order-color-types">
                                        {phoneData.type.map((type) => (
                                            <label
                                                key={type}
                                                className={`order-button ${selectType === type ? "order-button-selected" : ""}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    value={type}
                                                    checked={selectType === type}
                                                    onChange={() => setSelectType(type)}
                                                />
                                                {type}
                                            </label>
                                        ))}
                                    </div>
                                    <div className="order-type-choice">
                                        {/* {selectType && Types[["번호이동", "기기변경"].indexOf(selectType)].replace("Telecom", selectTelecom)} */}
                                        {/* {selectType && (Types[["번호이동", "기기변경"].indexOf(selectType)] || "").replace("Telecom", selectTelecom)} */}
                                        {selectedTypeText}
                                    </div>
                                </dd>
                            </div>

                            {/* 할부개월 */}
                            <div className="order-item">
                                <dt className="order-titles">할부개월</dt>
                                <dd className="order-contents">
                                    {phoneData.monthly.map((monthly) => (
                                        <label
                                            key={monthly}
                                            className={`order-button ${selectMonthly === monthly ? "order-button-selected" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name="monthly"
                                                value={monthly}
                                                checked={selectMonthly === monthly}
                                                onChange={() => setSelectMonthly(monthly)}
                                            />
                                            {monthly}
                                        </label>
                                    ))}
                                </dd>
                            </div>

                            {/* 요금제 선택 */}
                            <div className="order-item">
                                <dt className="order-titles">요금제 선택</dt>
                                <dd className="order-content-type">
                                    <div className="order-color-types">
                                        <Dropbox Bills={Phoneplans[selectTelecom]} selectBill={selectBill} setSelectBill={setSelectBill} />
                                    </div>
                                </dd>
                            </div>

                            {/* 할인방법 */}
                            <div className="order-item">
                                <dt className="order-titles">할인방법</dt>
                                <dd className="order-contents">
                                    {["공시지원할인\n총 0원", "선택약정할인\n총 0원"].map((sale) => (
                                        <label
                                            key={sale}
                                            className={`order-button ${selectSale === sale ? "order-button-selected" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name="sale"
                                                value={sale}
                                                checked={selectSale === sale}
                                                onChange={() => setSelectSale(sale)}
                                            />
                                            <span className="order-sale-text">
                                                {sale.split("\n").map((line, index) => (
                                                    <span key={index} className="order-sale-line">{line}</span>
                                                ))}
                                            </span>
                                        </label>
                                    ))}
                                </dd>
                            </div>

                            {/* 추가할인 */}
                            <div className="order-item">
                                <dt className="order-titles">추가할인</dt>
                                <dd className="order-contents">
                                    {phoneData.service.map((service) => (
                                        <label
                                            key={service}
                                            className={`order-button ${selectService === service ? "order-button-selected" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name="service"
                                                value={service}
                                                checked={selectService === service}
                                                onChange={() => setSelectService(service)}
                                            />
                                            {service}
                                        </label>
                                    ))}
                                </dd>
                            </div>

                            {/* 인터넷+TV */}
                            <div className="order-item">
                                <dt className="order-titles">인터넷+TV</dt>
                                <dd className="order-contents">
                                    {phoneData.internet.map((internet) => (
                                        <label
                                            key={internet}
                                            className={`order-button ${selectInternet === internet ? "order-button-selected" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name="internet"
                                                value={internet}
                                                checked={selectInternet === internet}
                                                onChange={() => setSelectInternet(internet)}
                                            />
                                            {internet}
                                        </label>
                                    ))}
                                </dd>
                            </div>
                        </dl>

                        <div className="order-calc-box">
                            <div className="order-bill-box">
                                <div className="order-bill-item">
                                    <span>정상가</span>
                                    <span>{(normalPrice || 0).toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>할부원금</span>
                                    <span>{(installmentPrice || 0).toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>할부개월</span>
                                    <span>{selectMonthly}</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>할부수수료</span>
                                    <span>{(installmentFee || 0).toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>월 할부금</span>
                                    <span>{(monthlyInstallment || 0).toLocaleString()}원</span>
                                </div>
                            </div>
                            <div className="order-sale-box">
                                <div className="order-calc-title">기기값 할인 내역</div>
                                <div className="order-bill-item">
                                    <span>공시지원금</span>
                                    <span>{(officialSubsidy || 0).toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>프로모션할인</span>
                                    <span>{(promotionDiscount || 0).toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>총 할인금액</span>
                                    <span>{(totalDiscount || 0).toLocaleString()}원</span>
                                </div>
                            </div>
                            <div className="order-fee-box">
                                <div className="order-calc-title">월 통신내역</div>
                                <div className="order-bill-item">
                                    <span>기본료</span>
                                    <span>{(selectBill?.price ?? 0).toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>선택약정할인</span>
                                    <span>{(contractDiscount ?? 0).toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>월 통신요금</span>
                                    <span>{(monthlyPlanFee ?? 0).toLocaleString()}원</span>
                                </div>
                            </div>
                            <div className="order-total-box">
                                <div className="order-total-item">월 예상납부금액</div>
                                <div className="order-total-item">{(totalBill ?? 0).toLocaleString()}원</div>
                            </div>
                            <button className="order-request">
                                <Link to="/Request"
                                    state={{
                                        phoneName, phoneData: JSON.stringify(phoneData), selectImg, selectColorName, selectStorage, selectTelecom, selectType, selectMonthly, selectBill, selectSale, selectService, selectInternet,
                                        normalPrice, monthlyValue, installmentPrice, installmentFee, monthlyInstallment, officialSubsidy, promotionDiscount, totalDiscount, contractDiscount, monthlyPlanFee, totalBill}}>
                                    신청하기</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;