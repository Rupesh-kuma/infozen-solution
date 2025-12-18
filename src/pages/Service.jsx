import { Link } from "react-router-dom";

const Service = () => {
    return (
        <>
            <div className="about_hero">
                <div className="container">
                    <div className="contact_hero_text">
                        <h1>Service</h1>
                        <p><Link to="/">Home</Link> / Service</p>
                    </div>
                </div>
            </div>
            <div className="service_main" style={{paddingBottom:'100px'}}>
                <div className="container">
                    <div className="my-5">
                        <h2 className="about_title_main text-center">How we work</h2>
                        <p className="about_titles text-center">Service We Provide</p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-4 g-4 my-3">
                        <div className="col">
                            <div className="service_box">
                                <i class="fa-solid fa-people-roof"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Managed IT Services</h5>
                                    <p className="card-text">
                                        It is a long established fact that reader will be distracte readable content of a when looking.
                                    </p>
                                    <a href="#" className="read_btn">Read more <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service_box">
                                <i class="fa-solid fa-people-roof"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Cloud Services</h5>
                                    <p className="card-text">
                                        It is a long established fact that reader will be distracte readable content of a when looking.
                                    </p>
                                    <a href="#" className="read_btn">Read more <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service_box">
                                <i class="fa-solid fa-people-roof"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Machine Learning</h5>
                                    <p className="card-text">
                                        It is a long established fact that reader will be distracte readable content of a when looking.
                                    </p>
                                    <a href="#" className="read_btn">Read more <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service_box">
                                <i class="fa-solid fa-people-roof"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Data Security</h5>
                                    <p className="card-text">
                                        It is a long established fact that reader will be distracte readable content of a when looking.
                                    </p>
                                    <a href="#" className="read_btn">Read more <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            
        </>
    )
}
export default Service;