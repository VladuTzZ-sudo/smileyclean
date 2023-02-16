import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Logo from '../../assets/logo/LOGO_OFFICIAL.jpg';
import Medal from '../../assets/img/medal-solid.svg';
import Car from '../../assets/img/shipping-fast-solid.svg';
import Money from '../../assets/img/hand-holding-dollar-solid.svg'
// core components

function IndexHeaderPreturi() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/preturi2.jpg") + ")"
        }}
        id="acasa"
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Preturi</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              
            </h2>
          </Container>
        </div>
          {/* <div id="nav-container-top">
            <div id="honor">
              <img src={Medal} id="medal"></img>
              <p className="text-icon">Profesionalism</p>
            </div>

            <div id="honor">
              <img src={Car} id="car"></img>
              <p className="text-icon">Ajungem repede</p>
            </div>

            <div id="honor">
              <img src={Money} id="money"></img>
              <p className="text-icon">Economisiti bani</p>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default IndexHeaderPreturi;
