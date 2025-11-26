const OurServices = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2 className="main_title text-center">Our Services</h2>
          <h3 className="sub_title text-center">
            Smart Solutions for a Digital World
          </h3>
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
    </>
  );
};
export default OurServices;
