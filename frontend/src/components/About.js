import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import '../css/About.css';

function About() {
  return (
    <>
      <NavBar />
    <div>
          <div className="about-1">
            <h1>Welcome To DevPay</h1>
          </div>
      <div id="about-2">
      <div className="content-box-lg">
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <i className="fa fa-book"></i>
                      <h3>MISSION</h3>
                      <hr></hr>
                      <p>DevPay is a Professional Payment app Platform. Here we will provide you with opportunities and services, which you will like very much. We're dedicated to providing you the best, with a focus on dependability and accountability . We're working to turn our passion for Developing apps into a booming online website. </p>
                      </div>
                      
                  </div>
                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <i className="fa fa-globe"></i>
                      <h3>VISION</h3>
                      <hr></hr>
                      <p>We believe that good design is powerful, hardwork is esseintial and exploring the unknown is important.Our vision mainly focuses on ensuring providing a platform where a developer gets benefits for his or her work and also providing a platform where the developer can get many job opportunities.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <i className="fa fa-pencil"></i>
                      <h3>ACHIEVEMENTS</h3>
                      <hr></hr>
                      <p>We as DevPay have managed to solve the problem of many Developers not getting paid for their hardwork through offering services that ensure that every developer that uses our platform is fully compensated.We have been complimented by top freelancing platforms like UpStack,UpWork for our exemplary services.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <Footer />
</>

  );
}

export default About;