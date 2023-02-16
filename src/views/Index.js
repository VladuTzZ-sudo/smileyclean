import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// index sections
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import SectionButtons from "views/index-sections/SectionButtons.js";
import CardMeu from "views/index-sections/CardMeu.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import Slider from "views/index-sections/SlideMeu.js"
import SectionDownload from "views/index-sections/SectionDownload.js";
import Serie from "views/index-sections/Serie.js";
import Logo from '../assets/logo/LOGO_OFFICIAL.jpg';
import Avatar from '@mui/material/Avatar';
import { color } from "@mui/system";
import Stickyfill from 'stickyfilljs';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FaMedal } from "react-icons/fa";
import Medal from '../assets/img/medal-solid.svg';
import Car from '../assets/img/shipping-fast-solid.svg';
import Money from '../assets/img/hand-holding-dollar-solid.svg'
import { breadcrumbsClasses } from "@mui/material";

library.add(faUser);

function getLogo() {
  return (
    <div>
      {/* Logo is an actual React component */}
      <Logo />
    </div>
  );
}

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    // document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });

    var target = document.querySelector('.main-content');

    //to check when element get's position sticky
    var observer = new IntersectionObserver(function (entries) {
      // no intersection 
      if (entries[0].intersectionRatio === 0) {
        document.querySelector('.main-content').classList.add("main-content-sticky");

        if (window.scrollY > 50) {
          document.getElementById('primu').classList.add("concept-two");
        }
        // setTimeout(function () {
        //   if (entries[0].intersectionRatio === 0) {
        //     document.getElementById('primu').classList.add("concept-two");
        //   }
        // }, 500);
        //document.getElementById('primu').focus();
        // fully intersects 
      }
      else if (entries[0].intersectionRatio === 1) {
        document.querySelector('.main-content').classList.remove("main-content-sticky");

        document.getElementById('primu').classList.remove("concept-two");
      }

    }, {
      threshold: [0, 1]
    });

    observer.observe(document.querySelector("#nav-doi"));

    //document.getElementById('primu').classList.remove("concept-two");

    // Timer, used to detect whether the horizontal scrolling is over
    var timer = null;
    // last scroll distance
    var scrollLeft = 0, scrollTop = 0;
    // scroll event starts
    target.addEventListener('scroll', function () {
      clearInterval(timer);
      // restart the timer
      timer = setInterval(function () {
        //console.log(target.scrollTop % (target.scrollHeight / 8), "hOOP");
        if (target.scrollTop % (target.scrollHeight / 8) == 0) {
          // The scrolling distance is equal, it is considered to stop scrolling
          clearInterval(timer);
          //console.log(target.scrollTop / (target.scrollHeight / 8), "haha");
          // ... do what you want, like callback handling
          switch (target.scrollTop / (target.scrollHeight / 8)) {
            case 0:
              document.getElementById('primu').classList.add("concept-two");
              document.getElementById('doi').classList.remove("concept-two2");
              document.getElementById('trei').classList.remove("concept-three");
              document.getElementById('patru').classList.remove("concept-four");
              document.getElementById('cinci').classList.remove("concept-five");
              document.getElementById('sase').classList.remove("concept-six");
              document.getElementById('sapte').classList.remove("concept-seven");
              document.getElementById('opt').classList.remove("concept-eight");
              break;
            case 1:
              document.getElementById('primu').classList.remove("concept-two");
              document.getElementById('doi').classList.add("concept-two2");
              document.getElementById('trei').classList.remove("concept-three");
              document.getElementById('patru').classList.remove("concept-four");
              document.getElementById('cinci').classList.remove("concept-five");
              document.getElementById('sase').classList.remove("concept-six");
              document.getElementById('sapte').classList.remove("concept-seven");
              document.getElementById('opt').classList.remove("concept-eight");
              break;
            case 2:
              document.getElementById('primu').classList.remove("concept-two");
              document.getElementById('doi').classList.remove("concept-two2");
              document.getElementById('trei').classList.add("concept-three");
              document.getElementById('patru').classList.remove("concept-four");
              document.getElementById('cinci').classList.remove("concept-five");
              document.getElementById('sase').classList.remove("concept-six");
              document.getElementById('sapte').classList.remove("concept-seven");
              document.getElementById('opt').classList.remove("concept-eight");
              break;
            case 3:
              document.getElementById('primu').classList.remove("concept-two");
              document.getElementById('doi').classList.remove("concept-two2");
              document.getElementById('trei').classList.remove("concept-three");
              document.getElementById('patru').classList.add("concept-four");
              document.getElementById('cinci').classList.remove("concept-five");
              document.getElementById('sase').classList.remove("concept-six");
              document.getElementById('sapte').classList.remove("concept-seven");
              document.getElementById('opt').classList.remove("concept-eight");
              break;
            case 4:
              document.getElementById('primu').classList.remove("concept-two");
              document.getElementById('doi').classList.remove("concept-two2");
              document.getElementById('trei').classList.remove("concept-three");
              document.getElementById('patru').classList.remove("concept-four");
              document.getElementById('cinci').classList.add("concept-five");
              document.getElementById('sase').classList.remove("concept-six");
              document.getElementById('sapte').classList.remove("concept-seven");
              document.getElementById('opt').classList.remove("concept-eight");
              break;
            case 5:
              document.getElementById('primu').classList.remove("concept-two");
              document.getElementById('doi').classList.remove("concept-two2");
              document.getElementById('trei').classList.remove("concept-three");
              document.getElementById('patru').classList.remove("concept-four");
              document.getElementById('cinci').classList.remove("concept-five");
              document.getElementById('sase').classList.add("concept-six");
              document.getElementById('sapte').classList.remove("concept-seven");
              document.getElementById('opt').classList.remove("concept-eight");
              break;
            case 6:
              document.getElementById('primu').classList.remove("concept-two");
              document.getElementById('doi').classList.remove("concept-two2");
              document.getElementById('trei').classList.remove("concept-three");
              document.getElementById('patru').classList.remove("concept-four");
              document.getElementById('cinci').classList.remove("concept-five");
              document.getElementById('sase').classList.remove("concept-six");
              document.getElementById('sapte').classList.add("concept-seven");
              document.getElementById('opt').classList.remove("concept-eight");
              break;
            case 7:
              document.getElementById('primu').classList.remove("concept-two");
              document.getElementById('doi').classList.remove("concept-two2");
              document.getElementById('trei').classList.remove("concept-three");
              document.getElementById('patru').classList.remove("concept-four");
              document.getElementById('cinci').classList.remove("concept-five");
              document.getElementById('sase').classList.remove("concept-six");
              document.getElementById('sapte').classList.remove("concept-seven");
              document.getElementById('opt').classList.add("concept-eight");
              break;
          }
        }
      }, 50);
    });

    return function cleanup() {
      document.body.classList.remove("index");

    };
  });

  return (
    <div className="main-meu">
      <IndexNavbar />
      <IndexHeader />
      <div id="nav-doi">
      </div>

      <Serie />
      <div >
        {/* <NavItem>
            <NavLink> */}
        <FloatingWhatsApp
          phoneNumber="+40766326277"
          accountName="Smiley Clean Office"
          statusMessage="Raspundem in cel mai scurt timp."
          avatar={Logo}
          chatMessage="Buna ziua ! Cum va putem ajuta ?"
          notification="true"
        // buttonStyle={{ animationIterationCount: "3 !important", animationDuration: "1s !important", webkitAnimationFillMode: "forward" }}
        // style={{ animationIterationCount: "3 !important", animationDuration: "1s !important", webkitAnimationFillMode: "forward" }}
        />
        {/* <i className="fa fa-instagram fa-5x" /> */}
        {/* </NavLink>
          </NavItem> */}
      </div>
      {/* <DemoFooter /> */}
    </div>
  );
}

export default Index;
