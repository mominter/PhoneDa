import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderSlider from "./OrderSlider";
import Dropbox from "./Dropbox";
import './Order.css';

const Color = ["#8e9fbc", "#b3ab9e", "#4a4a4d", "#d9d9d6"];
const ColorNames = ["티타늄 실버블루", "티타늄 그레이", "티타늄 블랙", "티타늄 화이트실버"];
const Types = ["사용하는 번호 그대로 Telecom 통신사로 이동하고 싶어요.", "통신사는 그대로 Telecom 그대로 휴대폰만 바꾸고 싶어요"];

const Bills = [
    { name: "5G 시그니처", price: "130,000", data: "무제한"},
    { name: "5G 프리미어 슈퍼", price: "115,000", data: "무제한"},
    { name: "5G 프리미어 플러스", price: "105,000", data: "무제한"},
    { name: "5G 프리미어 레귤러", price: "95,000", data: "무제한"},
    { name: "5G 프리미어 에센셜", price: "85,000", data: "무제한"},
];

function Order() {
    const prices ={
        "256GB": 1650000,
        "512GB": 1850000,
    };

    const [selectImg, setSelectImg] = useState("./assets/images/Silverblue.png");
    const [selectColorName, setSelectColorName] = useState("티타늄 실버블루");
    const [selectStorage, setSelectStorage] = useState("256GB");
    const [selectTelecom, setSelectTelecom] = useState("SKT");
    const [selectType, setSelectType] = useState("번호이동");
    const [selectMonthly, setSelectMonthly] = useState("24개월");
    const [selectBill, setSelectBill] = useState(Bills[0]);
    const [selectSale, setSelectSale] = useState("공시지원할인\n총 0원");
    const [selectService, setSelectService] = useState("제휴카드 할인");
    const [selectInternet, setSelectInternet] = useState("상담신청");

    {/* 휴대폰 가격 설정 */}
    const normalPrice = prices[selectStorage];
    const monthlyValue = parseInt(selectMonthly.replace("개월", ""), 10);
    const installmentPrice = normalPrice / 2;
    const installmentFee = Math.floor(normalPrice / monthlyValue);
    const monthlyInstallment = Math.floor(installmentFee * 0.8);

    {/* 기기값 할인내역 */}
    const subsidies = {
        "256GB" : 60000,
        "512GB" : 50000,
    };
    const officialSubsidy = subsidies[selectStorage];
    const promotionDiscount = 20000;
    const totalDiscount = officialSubsidy + promotionDiscount;

    {/* 월 통신내역 */}
    const contractDiscount = 0;
    const monthlyPlanFee = parseInt(selectBill.price.replace(/[^\d]/g, ''), 10) - contractDiscount;
    const totalBill = monthlyInstallment + monthlyPlanFee;

    return (
        <div className="order-content">
            <div style={{ height: "150vh" }}>
                <div className="order-box">
                    <div className="order-title-box">
                        <div className="order-title">갤럭시 S25 Ultra</div>
                    </div>
                    <div className="order-option-box">
                        <div className="order-image-box">
                            <div className="order-image-main">
                                <img src={selectImg} alt="갤럭시 S25 Ultra" />
                            </div>
                            <div className="order-slider-box">
                                <OrderSlider onImageClick={setSelectImg} />
                            </div>
                        </div>
                        <dl className="order-list">

                            {/* 색상 */}
                            <div className="order-item">
                                <dt className="order-titles">색상</dt>
                                <dd className="order-content-color">
                                    <div className="order-color-types">
                                        {Color.map((color, index) => (
                                            <div
                                                key={index}
                                                className="order-color-type"
                                                style={{ backgroundColor: color }}
                                                onClick={() => setSelectColorName(ColorNames[index])}
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
                                    {["256GB", "512GB"].map((storage) => (
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
                                    {["SKT", "KT", "LG U+"].map((telecom) => (
                                        <label
                                            key={telecom}
                                            className={`order-button ${selectTelecom === telecom ? "order-button-selected" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name="telecom"
                                                value={telecom}
                                                checked={selectTelecom === telecom}
                                                onChange={() => setSelectTelecom(telecom)}
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
                                        {["번호이동", "기기변경"].map((type) => (
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
                                        {selectType && Types[["번호이동", "기기변경"].indexOf(selectType)].replace("Telecom", selectTelecom)}
                                    </div>
                                </dd>
                            </div>

                            {/* 할부개월 */}
                            <div className="order-item">
                                <dt className="order-titles">할부개월</dt>
                                <dd className="order-contents">
                                    {["24개월", "30개월", "36개월"].map((monthly) => (
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
                                        <Dropbox Bills={Bills} selectBill={selectBill} setSelectBill={setSelectBill} />
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
                                    {["제휴카드 할인", "결합 할인", "복지 할인"].map((service) => (
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
                                    {["상담신청", "신청안함"].map((internet) => (
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
                                    <span>{normalPrice.toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>할부원금</span>
                                    <span>{installmentPrice.toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>할부개월</span>
                                    <span>{selectMonthly}</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>할부수수료</span>
                                    <span>{installmentFee.toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>월 할부금</span>
                                    <span>{monthlyInstallment.toLocaleString()}원</span>
                                </div>
                            </div>
                            <div className="order-sale-box">
                                <div className="order-calc-title">기기값 할인 내역</div>
                                <div className="order-bill-item">
                                    <span>공시지원금</span>
                                    <span>{officialSubsidy.toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>프로모션할인</span>
                                    <span>{promotionDiscount.toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>총 할인금액</span>
                                    <span>{totalDiscount.toLocaleString()}원</span>
                                </div>
                            </div>
                            <div className="order-fee-box">
                                <div className="order-calc-title">월 통신내역</div>
                                <div className="order-bill-item">
                                    <span>기본료</span>
                                    <span>{selectBill.price.toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>선택약정할인</span>
                                    <span>{contractDiscount.toLocaleString()}원</span>
                                </div>
                                <div className="order-bill-item">
                                    <span>월 통신요금</span>
                                    <span>{monthlyPlanFee.toLocaleString()}원</span>
                                </div>
                            </div>
                            <div className="order-total-box">
                                <div className="order-total-item">월 예상납부금액</div>
                                <div className="order-total-item">{totalBill.toLocaleString()}원</div>
                            </div>
                            <button className="order-request">
                                <Link to="/Request"
                                    state={{
                                    normalPrice,
                                    installmentPrice,
                                    selectMonthly,
                                    installmentFee,
                                    monthlyInstallment,
                                    officialSubsidy,
                                    promotionDiscount,
                                    totalDiscount,
                                    contractDiscount,
                                    selectBill,
                                    totalBill}}>신청하기</Link>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;