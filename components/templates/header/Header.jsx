import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
    const [sidebarShow, setSidebarShow] = useState(false);

    const sidebarShowHandler = () => {
        setSidebarShow((prev) => !prev);
    };

    return (
        <>
            <div
                className={`sidebar-wrapper ${
                    sidebarShow ? "sidebar-show" : ""
                }`}
            >
                <div className="sidebar-title">
                    Parsa
                    <div onClick={sidebarShowHandler} className="toggle-icon">
                        <RxHamburgerMenu />
                    </div>
                </div>
                <ul className="sidebar-items">
                    <li className="sidebar-item">Home</li>
                    <li className="sidebar-item">Houses</li>
                    <li className="sidebar-item">Contact us</li>
                </ul>
            </div>
            <div className="container-wrapper"></div>

            <style jsx>{`
                .container-wrapper {
                    background-color: #000d16;
                    height: 100vh;
                    width: 100%;
                }
                .sidebar-wrapper {
                    width: 250px;
                    height: 100vh;
                    background-color: gray;
                    color: white;
                    position: fixed;
                    left: -250px;
                    transform: translate-X(250px);
                    transition: all 200ms linear;
                }
                .sidebar-show {
                    left: 0;
                }
                .sidebar-title {
                    padding: 20px 30px;
                    text-align: center;
                    font-size: 2rem;
                    cursor: pointer;
                    position: relative;
                }
                .toggle-icon {
                    position: absolute;
                    width: 50px;
                    right: -50px;
                    background-color: gray;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    padding: 7px;
                }
                .sidebar-items {
                    list-style: none;
                }
                .sidebar-item {
                    margin-bottom: 50px;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

export default Header;
