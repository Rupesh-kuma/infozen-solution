import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
            <div className="about_hero">
                <div className="container">
                    <div className="contact_hero_text">
                        <h1>About Us</h1>
                        <p><Link to="/">Home</Link> / About Us</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-5 my-4">
                    <div className="col-5">
                        <img src="../about1.png" alt="About Us" className="img-fluid" />
                    </div>
                    <div className="col-7 ">
                        <h2 className="about_title_main">About Infozen Solution</h2>
                        <p className="about_titles">Innovating with a Digital Mindset</p>
                        <p>
                            Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solutions.</p>
                        <p>Our team of experts is dedicated to delivering innovative solutions that drive business growth and enhance customer experiences. We specialize in a wide range of services, including custom software development, mobile app development, web development, cloud solutions, and digital transformation consulting.</p>
                    </div>
                </div>

            </div>
            {/* team section */}
            <div className="container pb-5">
                <div className="our_team p-5">
                    <div className="row">
                        <div className="col-12">
                            <div><h2 className="main_title text-center">Tailored hosting solutions for every business need
                            </h2>
                                <h3 class="sub_title text-center">Switch to a better host today! Migrate your website effortlessly with our expert support. Get started now!

                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-col-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 hosting__item">
                            <img src="../WebHosting.webp" className="hosting__icon" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Web Hosting</h5>
                                <p className="card-text">Web hosting providers deliver fast, secure, and reliable hosting solutions for websites, email, and online businesses.</p>
                                <a href="#">See More <i class="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 hosting__item">
                            <img src="../website.webp" className="hosting__icon" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">WordPress Hosting</h5>
                                <p className="card-text">WordPress hosting providers offer optimized, secure, and high-performance hosting solutions for seamless website management</p>
                                <a href="#">See More <i class="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 hosting__item">
                            <img src="../CloudHosting.webp" className="hosting__icon" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cloud Hosting</h5>
                                <p className="card-text">Web hosting providers deliver fast, secure, and reliable hosting solutions for websites, email, and online businesses.</p>
                                <a href="#">See More <i class="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 hosting__item">
                            <img src="../DedicatedHosting.webp" className="hosting__icon" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dedicated Hosting</h5>
                                <p className="card-text">Dedicated Web hosting providers deliver fast, secure, and reliable hosting solutions for websites, email, and online businesses.</p>
                                <a href="#">See More <i class="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 hosting__item">
                            <img src="../SharedHosting.webp" className="hosting__icon" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Shared Hosting</h5>
                                <p className="card-text">Web hosting providers deliver fast, secure, and reliable hosting solutions for websites, email, and online businesses.</p>
                                <a href="#">See More <i class="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 hosting__item">
                            <img src="../VPSHosting.webp" className="hosting__icon" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">VPS Hosting</h5>
                                <p className="card-text">VPS hosting deliver fast, secure, and reliable hosting solutions for websites, email, and online businesses.</p>
                                <a href="#">See More <i class="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ’S */}
            <div className="container">
                <div className="faq_section my-5">
                    <div className="row">
                        <div className="col-5">
                            <img src="../faq.webp" alt="FAQ'S" className="img-fluid" />
                        </div>
                        <div className="col-7">
                            <div><h2 className="main_title ">FAQ’S
                            </h2>
                                <h3 className="sub_title ">Prioritize Your Site’s Safety and Security</h3>
                            </div>

                            <div class="accordion mt-4" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How to Install WordPress theme on cPanel?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Do you have Custom Hosting Service?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Better Security And Faster Server?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Deployment Within Few Minutes
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">

                                            Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices euismod. Vivamus porta justo ex.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs;