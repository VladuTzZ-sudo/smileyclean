/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import IndexHeaderPreturi from "components/Headers/IndexHeaderPreturi";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React from "react";
import SPreturi from "./index-sections/SPreturi";
import Serie from "./index-sections/Serie";

function Preturi() {
  React.useEffect(() => {
    // var target = document.querySelector('.main-content');

    // Stickyfill.add(target);

    //to check when element get's position sticky
    // var observer = new IntersectionObserver(function (entries) {
    //   // no intersection 
    //   if (entries[0].intersectionRatio === 0)
    //     document.querySelector('.main-content').classList.add("main-content-sticky");

    //   // fully intersects 
    //   else if (entries[0].intersectionRatio === 1)
    //     document.querySelector('.main-content').classList.remove("main-content-sticky");
    // }, {
    //   threshold: [0, 1]
    // });

    // observer.observe(document.querySelector("#nav-doi"));

    return function cleanup() {
      document.body.classList.remove("index");

    };
  });

  return (
    //<div className="main-meu">
    <div className="main-meu">
      <IndexNavbar />
      <IndexHeaderPreturi />
      {/* <div id="nav-doi">
      </div> */}
      <SPreturi />
    </div>
    //</div>
  );
}

export default Preturi;
