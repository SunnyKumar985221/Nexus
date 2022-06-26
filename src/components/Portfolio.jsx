import React from "react";
import { Link } from "react-scroll"
import sunny from '../images/sunny.jpg'
import './about.css';

const Portfolio = () => {

  return (
    <div
      name="project" className="h-max">
      <h1 className="port2" style={{ fontSize: "40px", backgroundColor: "#1a1d1a", color: "white" }}>Have a look on my Projects</h1>
      <div className="row port1" style={{ backgroundColor: "#1a1d1a" }}>

        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Hotel Management</h5>
              <p className="card-text p-2"><b>Tech Used</b> - React.Js , Node.Js , MongoDB</p>
              <Link to="/" className="btn btn-primary d-flex justify-content-center text-light">Site Coming Soon</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Employee Management System</h5>
              <p className="card-text p-2"><b>Tech Used</b> - React.Js , Node.Js , MongoDB</p>
              <Link to="/" className="btn btn-primary d-flex justify-content-center text-light">Site Coming Soon</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Vehicle System</h5>
              <p className="card-text p-2"><b>Tech Used</b> - React.Js , Node.Js , MongoDB</p>
              <Link to="/" className="btn btn-primary d-flex justify-content-center text-light">Site Coming Soon</Link>
            </div>
          </div>
        </div>
      </div>




    </div>

  );
};

export default Portfolio;
