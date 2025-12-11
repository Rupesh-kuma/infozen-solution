import { Link, Links } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className="contact_hero">
                <div className="container">
                    <div className="contact_hero_text">
                        <h1>Contact Us</h1>
                        <p><Link to="/">Home</Link> / Contact Us</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row py-4">
                    <div className="col-12">
                        <div className="our_contact">
                            <p>OUR CONTACTS</p>
                            <h2>We’re Here to Help You</h2>
                            <p>Got a project in mind? We’d love to hear about it. Take five minutes to fill out our project form so that we can get to know you and understand your project.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact_info_box">
                            <i className="fa fa-phone"></i>
                            <h4>Phone</h4>
                            <Link to="tel:+1234567890">+123 456 7890</Link><br />
                            <Link to="tel:+4561234455">+456 123 4455</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact_info_box">
                            <i className="fa fa-envelope"></i>
                            <h4>Location</h4>
                            <Link to={"#"}> 5919 Trussville Crossings Pkwy, Birmingham AL 35235</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact_info_box">
                            <i className="fa fa-envelope"></i>
                            <h4>Location</h4>
                            <Link to={"#"}> 5919 Trussville Crossings Pkwy, Birmingham AL 35235</Link>
                        </div>
                    </div>
                    <div className="col-6 mt-3">
                            <div className="our_contact form_contact pb-1">
                            <p>GET IN TOUCH</p>
                            <h2>Send Us a Message</h2>
                            <p>Have some suggestions or just want to say hi? Contact us:</p>
                        </div>
                        <form className="form_section">
                            <div className="mb-3">
                                <input type="text" className="form-control py-3" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    <div className="col-5 mt-3">
                        <img src="../contact_bg_remove.png" alt="contact us background remove" className="img-fluid w-100" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;