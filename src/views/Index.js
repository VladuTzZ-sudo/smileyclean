import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Serie from "views/index-sections/Serie.js";
import Logo from '../assets/logo/LOGO_OFFICIAL.jpg';


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    var observer = new IntersectionObserver(function (entries) {
      // no intersection 
      if (entries[0].intersectionRatio === 0) {
        document.querySelector('.main-content').classList.add("main-content-sticky");

        if (window.scrollY > 50) {
          document.getElementById('primu').classList.add("concept-two");
        }
      }
      else if (entries[0].intersectionRatio === 1) {
        document.querySelector('.main-content').classList.remove("main-content-sticky");
        document.getElementById('primu').classList.remove("concept-two");
      }

    }, {
      threshold: [0, 1]
    });

    observer.observe(document.querySelector("#nav-doi"));

    var timer = null;
    var target = document.getElementById('parinte');

    target.addEventListener('scroll', function () {
      console.log("O DA", target.scrollTop)
      clearInterval(timer);
      // restart the timer
      timer = setInterval(function () {
        console.log(target.scrollTop % (target.scrollHeight / 8), "hOOP", target.scrollTop);
        //if (target.scrollTop % (target.scrollHeight / 8) <= 100) {
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
        //     } else {
        //       clearInterval(timer);
        //     }
      }, 600);
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
        <FloatingWhatsApp
          phoneNumber="+40766326277"
          accountName="Smiley Clean Office"
          statusMessage="Raspundem in cel mai scurt timp."
          avatar={Logo}
          chatMessage="Buna ziua ! Cum va putem ajuta ?"
          notification="true"
        />
      </div>
    </div>
  );
}

export default Index;
