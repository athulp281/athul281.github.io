import React, { useContext } from "react";
import MyContext from "../useContext/Context";

export default function Footer() {
    const { data, setData } = useContext(MyContext);
    return (
        <div style={{ backgroundColor: data }}>
            <main className="wrapper">
                <footer style={{ backgroundColor: data }}>
                    <div className="top-footer">
                        <p>Athul P .</p>
                    </div>
                    <div className="middle-footer">
                        <ul className="footer-menu">
                            <li className="footer_menu_list">
                                <a href="#home">Home</a>
                            </li>
                            <li className="footer_menu_list">
                                <a href="#about">About</a>
                            </li>
                            <li className="footer_menu_list">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="footer_menu_list">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-social-icons">
                        <div className="icon">
                            <i className="uil uil-instagram"></i>
                        </div>
                        <div className="icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </div>
                        <div className="icon">
                            <i className="uil uil-twitter"></i>
                        </div>
                        <div className="icon">
                            <i className="uil uil-github-alt"></i>
                        </div>
                    </div>
                    {/* <div className="bottom-footer">
                    <p>
                        Copyright &copy;{" "}
                        <a href="#home" style="text-decoration: none;">
                            John Doe
                        </a>{" "}
                        - All rights reserved
                    </p>
                </div> */}
                </footer>
            </main>
        </div>
    );
}
