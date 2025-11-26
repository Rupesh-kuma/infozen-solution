const OurProject = () => {
    return (
        <>
            <div className="container py-5">
                <div className="py-4">
                    <h2 className="main_title text-center">Our Project</h2>
                    <h3 className="sub_title text-center">
                        Tech Solutions Driving Global Connectivity
                    </h3>
                </div>
                <div className="row">
                    <div
                        className="col-lg-4 col-xl-4 col-md-6 wow itfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".3s"
                    >
                        <div className="single-project-item mb-30">
                            <img
                                src="https://techor-html.netlify.app/assets/img/project/project-1-1.png"
                                alt=""
                            />
                            <span className="icon">
                                <a href="#">
                                    {" "}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </span>
                            <div className="single-project-content">
                                <h3>Marketing Agency Website</h3>
                                <div className="project-cat">
                                    <span>Developement, </span>
                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-xl-4 col-md-6 wow itfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".5s"
                    >
                        <div className="single-project-item mb-30">
                            <img
                                src="https://techor-html.netlify.app/assets/img/project/project-1-1.png"
                                alt=""
                            />
                            <span className="icon">
                                <a href="/project-details">
                                    {" "}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </span>
                            <div className="single-project-content">
                                <h3>Marketing Agency Website</h3>
                                <div className="project-cat">
                                    <span>Developement, </span>
                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-xl-4 col-md-6 wow itfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".7s"
                    >
                        <div className="single-project-item mb-30">
                            <img
                                src="https://techor-html.netlify.app/assets/img/project/project-1-1.png"
                                alt=""
                            />
                            <span className="icon">
                                <a href="/project-details">
                                    {" "}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </span>
                            <div className="single-project-content">
                                <h3>Marketing Agency Website</h3>
                                <div className="project-cat">
                                    <span>Developement, </span>
                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OurProject;
