import React, { useContext, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import MyContext from "../useContext/Context";
import SmokeTitle from "./SmokeTitle";
import "../assets/Css/ProjectCard.css";
import adminPanelimg from "../assets/ProjectCardImages/intrvl-admn-pnl.png";
import mypersonalportfolio from "../assets/ProjectCardImages/my-personal-portfolio.png";
import dynamicform from "../assets/ProjectCardImages/dynamic-form.png";
import ImageSlider from "./ImageSlider";

export default function ProjectBox() {
    const { data, setData } = useContext(MyContext);
    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal(".element-to-animate", {
            duration: 1000, // Animation duration in milliseconds
            origin: "top", // Animation starting point (top, bottom, left, right, etc.)
            distance: "20px", // Distance the element moves during the animation
            delay: 200, // Delay before the animation starts (in milliseconds)
        });
    }, []);
    return (
        <>
            <div className="element-to-animate">
                <div style={{ backgroundColor: data }}>
                    <main className="wrapper">
                        {/* <!-- -------------- PROJECT BOX ---------------- --> */}
                        <div className="top-header">
                            <h2>P R O J E C T S</h2>
                        </div>

                        <section className="section" id="projects">
                            <div className="project-container">
                                <div className="pro-box">
                                    <img
                                        className="card-img"
                                        src={adminPanelimg}
                                        alt="project"
                                    />
                                    <div className="card-body">
                                        <h1 className="card-title">
                                            Admin Panel
                                        </h1>
                                        <p className="card-sub-title">React</p>
                                        <p className="card-info">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Facere repellat dicta perspiciatis
                                            perferendis a suscipit. Nobis
                                            molestias placeat sit! Fugiat ad,
                                            pariatur{" "}
                                        </p>
                                        <button className="card-btn">
                                            Demo
                                        </button>
                                    </div>
                                </div>

                                <div className="pro-box">
                                    <img
                                        className="card-img"
                                        src={mypersonalportfolio}
                                        alt="project"
                                    />
                                    <div className="card-body">
                                        <h1 className="card-title">
                                            Personal Portfolio
                                        </h1>
                                        <p className="card-sub-title">
                                            React + Vite
                                        </p>
                                        <p className="card-info">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Facere repellat dicta perspiciatis
                                            perferendis a suscipit. Nobis
                                            molestias placeat sit! Fugiat ad,
                                            pariatur
                                        </p>
                                        <button className="card-btn">
                                            Demo
                                        </button>
                                    </div>
                                </div>

                                <div className="pro-box">
                                    <img
                                        className="card-img"
                                        src={dynamicform}
                                        alt="project"
                                    />
                                    <div className="card-body">
                                        <h1 className="card-title">
                                            Dynamic Form
                                        </h1>
                                        <p className="card-sub-title">
                                            React & Formik
                                        </p>
                                        <p className="card-info">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Facere repellat dicta perspiciatis
                                            perferendis a suscipit. Nobis
                                            molestias placeat sit! Fugiat ad,
                                            pariatur{" "}
                                        </p>
                                        <button className="card-btn">
                                            Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
