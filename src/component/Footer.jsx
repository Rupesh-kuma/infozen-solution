import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer pt-5">
                <div class="container">
                    <div class="f-items default-padding">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 item">
                                <div class="f-item about">
                                    <img src="../infozen_solution.png" alt="Logo" className="w-75" />
                                    <p>
                                        Happen active county. Winding for the morning am shyness evident to poor. Garrets because elderly new.                            </p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 item">
                                <div class="f-item link">
                                    <h4 class="widget-title">Solutions</h4>
                                    <ul>
                                        <li><Link to="#">Our Services</Link></li>
                                        <li><Link to="#">Our Services V2</Link></li>
                                        <li><Link to="#">Our Services V3</Link></li>
                                        <li><Link to="#">Case Studies</Link></li>
                                        <li><Link to="#">Case Studies V2</Link></li>
                                    </ul>
                                </div>
                            </div>
                           
                            <div class="col-lg-3 col-md-6 item">
                                <div class="f-item">
                                    <h4 class="widget-title">Contact Info</h4>
                                    <div class="address">
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <i class="flaticon-pin"></i>
                                                </div>
                                                <div class="info">
                                                    5919 Trussville Crossings Pkwy, Birmingham AL 35235                                    </div>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <i class="flaticon-email-1"></i>
                                                </div>
                                                <div class="info">
                                                    <a href="mailto:http://Info@gmail.com">Info@gmail.com</a> <br /> <a href="mailto:http://support@gmail.com">support@gmail.com</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <i class="flaticon-telephone"></i>
                                                </div>
                                                <div class="info">
                                                    +123 456 7890 <br /> +456 123 4455                                    </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-md-6 item">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.156700701273!2d77.33435707499821!3d28.354111696670465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzE0LjgiTiA3N8KwMjAnMTMuMCJF!5e0!3m2!1sen!2sin!4v1765384334056!5m2!1sen!2sin" width="100%" height="300px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_end_line">
                    <p className="text-center my-1">© 2025 Infozen Solution. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}
export default Footer;