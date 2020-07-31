import React, { Component } from "react";
// import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div classname="navbarHeader">
        <div classname="logo">
          <img src="https://tix.vn/app/assets/img/icons/web-logo.png" />
        </div>
        <div classname="navbarCenter">
          <a href="#">Lịch Chiếu</a>
          <a href="#">Cụm rạp</a>
          <a href="#">Góc điện ảnh</a>
          <a href="#">Liên hệ</a>
        </div>
        <div classname="navbarRight">
          <div id="account" classname="imgCircle">
            <a href="#" classname="menu titleDisplay ng-scope">
              <img
                classname="btnLogin"
                src="https://tix.vn/app/assets/img/avatar.png"
              />
              <p classname="white">Đăng Nhập</p>
            </a>
            <div classname="selectLocation dropdown">
              <img
                classname="place-header white"
                src="app/assets/img/icons/location-header.png"
              />
              <div
                classname="dropdown-toggle selectMenu white ng-binding"
                data-toggle="dropdown"
              >
                Hồ Chí Minh
              </div>
              <ul classname="dropdown-menu selectScroll">
                <li classname="ng-scope">
                  <a data-name="Hồ Chí Minh">Hồ Chí Minh</a>
                </li>
                <li classname="ng-scope">
                  <a data-name="Hà Nội">Hà Nội</a>
                </li>
                <li classname="ng-scope">
                  <a data-name="Đà Nẵng">Đà Nẵng</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      // <div className="nav-header">
      //   <div className="nav-brand">
      //     <img src="https://s3-us-west-2.amazonaws.com/parallax-theme/assets/bradlogo2.png" />
      //   </div>
      //   <i className="fa fa-bars fa-3x" />
      //   <div className="header-links">
      //     <ul>
      //       <li><a href="#contact">CONTACT</a></li>
      //       <li><a href="#portfolio">PORTFOLIO</a></li>
      //       <li ><a href="#about">ABOUT</a></li>
      //     </ul>
      //   </div>
      // </div>

    );
  }
}
