import React from "react";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
            <div className="container-fluid about_main_section">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center">
                            <img src="../aboutmain.png" alt="about main" className="w-100" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="main_title">About Your Company</h2>
                            <h3 className="sub_title">We Execute Ideas From Start to Finish</h3>
                            <p>Monotonectally synergize granular markets and front market Collaboratively visualize strat fomediaries after based models, Synergistically task state of the art infrastructures.</p>
                            <ul className="about_list">
                                <li><i className="fa-solid fa-circle-check"></i>Created 40+ unique sections with responsiveness.</li>
                                <li><i className="fa-solid fa-circle-check"></i>You will able to build a new site with an ease.</li>
                                <li><i className="fa-solid fa-circle-check"></i>Booster is made for stay ahead from the compitition.</li>
                            </ul>
                            <Link className="tv-btn-secondary" to="/contact">
                                <span className="btn-wrap">
                                    <span className="btn-text1">Know More</span>
                                    <span className="btn-text2">Know More</span>
                                </span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About;