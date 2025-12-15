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

            <div className="our_team">
                    <div className="row">
                        <div className="col-12">
                            <div><h2 class="main_title text-center">TEAM MEMBER</h2><h3 class="sub_title text-center">See Our Skilled Expert Team</h3></div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default AboutUs;