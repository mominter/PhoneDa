import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Order from "./Order";
import Galaxy from "./Galaxy";
import Iphone from "./Iphone";
import Watch from "./Watch";
import Member from "./Member";
import Login from "./Login";
import Request from "./Request";
import Store from "./Store";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

const galaxyUltra25 = ["#8e9fbc", "#b3ab9e", "#4a4a4d", "#d9d9d6"];

function Home() {
  return (
    <div className="content">
      <div style={{ height: "300vh" }}>
        <div className="banner-container">
          <div className="banner">
            <img src="./assets/images/PhonedaCompany.png" />
          </div>
        </div>

        <div className="item-box-container">
          <ul className="ul-box-container">
          <li className="ul-box">
            <div className="ul-photo-box">
              <img src="./assets/images/Black.png" />
            </div>
            <div className="ul-text-box">
              <div className="ul-color-box">
                {galaxyUltra25.map((color, index) => (
                  <div key={index} className="ul-circle" style={{ backgroundColor: color }}></div>
                ))}
              </div>
              <div className="ul-name">갤럭시 S25 Ultra</div>
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
            <div className="ul-photo-box">
              <img src="./assets/images/Silverblue.png" />
            </div>
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
            <div className="ul-photo-box">
              <img src="./assets/images/Gray.png" />
            </div>
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
            <div className="ul-photo-box">
              <img src="./assets/images/Whitesilver.png" />
            </div>
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
              <div className="ul-name">갤럭시 S25 Ultra</div>
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

        <div className="banner-container">
          <div className="banner">
            <img src="./assets/images/PhonedaCompany.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Navbar /> /* 고정 상단바 추가 */
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order/:phoneName" element={<Order />} />
        <Route path="/galaxy" element={<Galaxy />} />
        <Route path="/Iphone" element={<Iphone />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Request" element={<Request />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
