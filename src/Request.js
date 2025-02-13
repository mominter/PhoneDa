import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Request.css";

function Request() {
    const location = useLocation();
    const {
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
        totalBill
    } = location.state || {};

    return(
        <div className="request-content">
            <div className="request-box">
                <div className="request-title-box">
                    <div className="request-title">갤럭시 S25 Ultra</div>
                </div>
                <div className="request-info-content">
                    <div className="request-info-box">
                        <div className="request-image-box">
                            <div className="request-image-main">
                                <img src="./assets/images/Silverblue.png" alt="갤럭시 S25 Ultra" />
                            </div>
                            <div className="request-image-name">
                                갤럭시 S25 Ultra
                            </div>
                            <div className="request-image-info">
                                <div className="request-image-info-item">
                                    <span>가입유형</span>
                                    <span>번호이동</span>
                                </div>
                                <div className="request-image-info-item">
                                    <span>요금제</span>
                                    <span>5G 프리미어 슈퍼</span>
                                </div>
                                <div className="request-image-info-item">
                                    <span>할부개월</span>
                                    <span>24개월 할부</span>
                                </div>
                                <div className="request-image-info-item">
                                    <span>할인방법</span>
                                    <span>공시지원할인</span>
                                </div>
                            </div>
                        </div>

                        <div className="request-user-box">
                            <div className="request-user-title-box">
                                <div className="request-user-title">가입자 정보</div>
                            </div>
                            <dl className="request-user-list">
                                <div className="request-item">
                                    <dt className="request-titles">이름 *</dt>
                                    <dd className="request-contents">
                                        <input type="text" name="member-name" />
                                    </dd>
                                </div>
                                <div className="request-item">
                                    <dt className="request-titles">생년월일 *</dt>
                                    <dd className="request-contents">
                                        <input type="number" placeholder="ex) 19980206" name="member-birth" />
                                    </dd>
                                </div>
                                <div className="request-item">
                                    <dt className="request-titles">개통할 휴대폰 번호 *</dt>
                                    <dd className="request-contents">
                                        <input type="number" name="member-nphone" />
                                    </dd>
                                </div>
                                <div className="request-item">
                                    <dt className="request-titles">추가 연락처 *</dt>
                                    <dd className="request-contents">
                                        <input type="number" name="member-phone" />
                                    </dd>
                                </div>
                                <div className="request-item">
                                    <dt className="request-titles">이메일 *</dt>
                                    <dd className="request-contents">
                                        <input type="email" name="member-email" />
                                    </dd>
                                </div>
                                <div className="request-item">
                                    <dt className="request-titles">비밀번호 *</dt>
                                    <dd className="request-contents">
                                        <input type="password" name="member-password" />
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="request-deliver-box">
                            <div className="request-deliver-title-box">
                                <div className="request-deliver-title">배송지 정보</div>
                            </div>
                            <dl className="request-user-list">
                                <div className="request-item">
                                    <dt className="request-titles">주소 *</dt>
                                    <dd className="request-contents">
                                        <input type="text" placeholder="우편번호" name="member-addr1" />
                                    </dd>
                                </div>
                                <div className="request-item">
                                    <dt className="request-titles"></dt>
                                    <dd className="request-contents-addr">
                                        <input type="text" name="member-addr2" />
                                    </dd>
                                </div>
                                <div className="request-item">
                                    <dt className="request-titles"></dt>
                                    <dd className="request-contents-addr">
                                        <input type="text" name="member-addr3" />
                                    </dd>
                                </div>
                                <div className="request-item">
                                    <dt className="request-titles"></dt>
                                    <dd className="request-contents-addr">
                                        <input type="text" placeholder="상세주소" name="member-addr4" />
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="request-button-box">
                            <button type="submit"><Link to="/galaxy">뒤로가기</Link></button>
                            <button type="submit"><Link to="/">가입하기</Link></button>
                        </div>
                    </div>

                    <div className="request-calc-box">
                        <div className="request-bill-box">
                            <div className="request-bill-item">
                                <span>정상가</span>
                                <span>{normalPrice ? normalPrice.toLocaleString() : "0원"}원</span>
                            </div>
                            <div className="request-bill-item">
                                <span>할부원금</span>
                                <span>{installmentPrice ? installmentPrice.toLocaleString() : "0원"}원</span>
                            </div>
                            <div className="request-bill-item">
                                <span>할부개월</span>
                                <span>{selectMonthly || "0개월"}</span>
                            </div>
                            <div className="request-bill-item">
                                <span>할부수수료</span>
                                <span>{installmentFee ? installmentFee.toLocaleString() : "0원"}원</span>
                            </div>
                            <div className="request-bill-item">
                                <span>월 할부금</span>
                                <span>{monthlyInstallment ? monthlyInstallment.toLocaleString() : "0원"}원</span>
                            </div>
                        </div>
                        <div className="request-sale-box">
                            <div className="request-calc-title">기기값 할인 내역</div>
                            <div className="request-bill-item">
                                <span>공시지원금</span>
                                <span>{officialSubsidy ? officialSubsidy.toLocaleString() : "0원"}원</span>
                            </div>
                            <div className="request-bill-item">
                                <span>프로모션할인</span>
                                <span>{promotionDiscount ? promotionDiscount.toLocaleString() : "0원"}원</span>
                            </div>
                            <div className="request-bill-item">
                                <span>총 할인금액</span>
                                <span>{totalDiscount ? totalDiscount.toLocaleString() : "0원"}원</span>
                            </div>
                        </div>
                        <div className="request-fee-box">
                            <div className="request-calc-title">월 통신내역</div>
                            <div className="request-bill-item">
                                <span>기본료</span>
                                <span>{selectBill ? selectBill.price.toLocaleString() : "0원"}원</span>
                            </div>
                            <div className="request-bill-item">
                                <span>선택약정할인</span>
                                <span>{contractDiscount ? contractDiscount.toLocaleString() : "0원"}</span>
                            </div>
                            <div className="request-bill-item">
                                <span>월 통신요금</span>
                                <span>{totalBill ? totalBill.toLocaleString() : "0원"}원</span>
                            </div>
                        </div>
                        <div className="request-total-box">
                            <div className="request-total-item">월 예상납부금액</div>
                            <div className="request-total-item">{totalBill ? totalBill.toLocaleString() : "0원"}원</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Request;