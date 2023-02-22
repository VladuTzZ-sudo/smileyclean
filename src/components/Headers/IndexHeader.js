import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Logo from '../../assets/logo/LOGO_OFFICIAL.jpg';
import Medal from '../../assets/img/medal-solid.svg';
import Car from '../../assets/img/shipping-fast-solid.svg';
import Money from '../../assets/img/hand-holding-dollar-solid.svg'
// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sofa3.jpg") + ")"
        }}
        id="acasa"
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Smiley Clean</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Facem canapelele curate !
            </h2>
          </Container>
        </div>
        {/* <h6 className="category category-absolute"> */}
          {/* OFERIM SERIOZITATE{" "}
            <img
              alt="..."
              className="creative-tim-logo"
              src={Logo}
            /> */}
          <div id="nav-container-top">
            <div id="honor">
              <img src={Medal} id="medal" alt="Profesionalism"></img>
              <p className="text-icon">Profesionalism</p>
            </div>

            <div id="honor">
              <img src={Car} id="car" alt="Ajungem repede"></img>
              <p className="text-icon">Ajungem repede</p>
            </div>

            <div id="honor">
              <img src={Money} id="money" alt="Economisiti bani"></img>
              <p className="text-icon">Economisiti bani</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default IndexHeader;
