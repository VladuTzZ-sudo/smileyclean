import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import Logo from '../../assets/logo/LOGO_OFFICIAL.jpg';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    UncontrolledDropdown,
    NavLink,
    Nav,
    Container
} from "reactstrap";

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarColor2, setNavbarColor2] = React.useState("navbar-transparent2");

    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        var oldTransition = 0;
        var ok = 0;

        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                // if (ok == 0) {
                //     var elem = document.getElementById('scroll-to-element');
                //     //document.body.style.overflow = "hidden";

                //     console.log(oldTransition, document.documentElement.scrollTop, document.body.scrollTop);
                //     if (document.documentElement.scrollTop < 3000) {
                //         if (oldTransition < document.documentElement.scrollTop) {
                //             // console.log("INTR")
                //             // scroller.scrollTo('scroll-to-element', {
                //             //     duration: 15,
                //             //     delay: 0,
                //             //     smooth: 'easeInOutQuart'
                //             // })

                //             // var elem = document.getElementById('scroll-to-element');
                //             // elem.scrollIntoView({ behavior: 'smooth' });
                //             // scroll.scrollMore(1000);
                //         }
                //     }
                // }



                setNavbarColor("");
                setNavbarColor2("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
                setNavbarColor2("navbar-transparent2")
            }

            // if (oldTransition < document.documentElement.scrollTop) {
            //     ok = 0;
            // }

            // oldTransition = document.documentElement.scrollTop;
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });

    return (
        <div className="test">
            <Navbar className={classnames("fixed-top second", navbarColor2)} expand="lg">
                {/* <Container>
                    <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                        Danger Color
                    </NavbarBrand> */}
                <ul className="container--inline-flex">
                    <div className="container--inline-scurt">
                        <NavItem className="flex-child telefon">
                            <NavLink
                                data-placement="bottom"
                                href="tel:+400766326277"
                                target="_blank"
                                title="Call us here"
                                className="menu-second"
                            >
                                <i className="fa fa-phone fa-2x" />
                            </NavLink>
                        </NavItem>
                        <NavItem className="nrtel flex-child">
                            <a
                                href="tel:+400766326277"
                                className="tel">
                                0766326277
                            </a>
                        </NavItem>
                    </div>
                    <NavItem className="flex-child">
                        <NavLink
                            data-placement="bottom"
                            href="https://www.facebook.com/smileyclean.official"
                            target="_blank"
                            title="Like us on Facebook"
                            className="menu-second"
                        >
                            <i className="fa fa-facebook-square fa-2x" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="flex-child">
                        <NavLink
                            data-placement="bottom"
                            href="https://www.instagram.com/smileyclean.official/"
                            target="_blank"
                            title="Follow us on Instagram"
                            className="menu-second"
                        >
                            <i className="fa fa-instagram fa-2x" />
                        </NavLink>
                    </NavItem>
                </ul>
                {/* </Container> */}
            </Navbar>
            <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
                <Container>
                    <div className="navbar-translate">
                        <div id="culogo">
                            <div>
                                <section className="one-one" id="html">
                                    <img src={Logo} alt="Avatar" className="avatar" />
                                </section>
                            </div>
                            <NavbarBrand
                                data-placement="bottom"
                                href="/"
                                target="_blank"
                                title="Smiley Clean"
                            >
                                Smiley Clean
                            </NavbarBrand>
                        </div>
                        <button
                            aria-expanded={navbarCollapse}
                            className={classnames("navbar-toggler navbar-toggler", {
                                toggled: navbarCollapse
                            })}
                            onClick={toggleNavbarCollapse}
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        navbar
                        isOpen={navbarCollapse}
                    >
                        <Nav navbar>
                            <NavItem id="phone-id">
                                <NavLink
                                    data-placement="bottom"
                                    href="tel:+400766326277"
                                    target="_blank"
                                    title="Call us here"
                                >
                                    <i className="fa fa-phone fa-5x" />
                                    <p className="d-lg-none" id="nr">0766326277</p>
                                </NavLink>
                            </NavItem>
                            <NavItem className="nrtel" id="tel-id">
                                <a
                                    href="tel:+400766326277"
                                    className="tel">
                                    0766326277
                                </a>
                            </NavItem>
                            <NavItem id="facebook-id">
                                <NavLink
                                    data-placement="bottom"
                                    href="https://www.facebook.com/smileyclean.official"
                                    target="_blank"
                                    title="Like us on Facebook"
                                >
                                    <i className="fa fa-facebook-square" />
                                    <p className="d-lg-none" id="nr">Facebook</p>
                                </NavLink>
                            </NavItem>
                            <NavItem id="instagram-id">
                                <NavLink
                                    data-placement="bottom"
                                    href="https://www.instagram.com/smileyclean.official/"
                                    target="_blank"
                                    title="Follow us on Instagram"
                                >
                                    <i className="fa fa-instagram fa-5x" />
                                    <p className="d-lg-none" id="nr">Instagram</p>
                                </NavLink>
                            </NavItem>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink
                                        href="/"
                                        onClick={(e) => {
                                            toggleNavbarCollapse();
                                            scroller.scrollTo('acasa', {
                                                duration: 2000,
                                                delay: 2,
                                                smooth: 'easeInOutQuart'
                                            })
                                        }}
                                    >
                                        <p className="nav-text">Acasa</p>
                                    </NavLink>
                                </NavItem>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle
                                        aria-expanded={true}
                                        aria-haspopup={true}
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        href="#pablo"
                                        id="dropdownMenuButton"
                                        nav
                                        onClick={(e) => e.preventDefault()}
                                        role="button"
                                    >
                                        Servicii
                                    </DropdownToggle>
                                    <DropdownMenu
                                        aria-labelledby="dropdownMenuButton"
                                        className="dropdown-info"
                                    >
                                        {/* <DropdownItem header tag="span">
                                        Servicii
                                    </DropdownItem> */}
                                        <DropdownItem
                                            href="/#canapele"
                                            onClick={(e) => {
                                                toggleNavbarCollapse();
                                                
                                                var myTarget = document.getElementById('primu');
                                                myTarget.scrollIntoView({ behavior: "smooth" });
                                                myTarget.scrollIntoViewIfNeeded(true);

                                            }}
                                        >
                                            Curatare Canapele
                                        </DropdownItem>
                                        <DropdownItem
                                            href="/#coltare"
                                            onClick={(e) => {
                                                toggleNavbarCollapse();

                                                var myTarget = document.getElementById('doi');
                                                myTarget.scrollIntoView({ behavior: "smooth" });
                                                myTarget.scrollIntoViewIfNeeded(true);

                                            }}                                          >
                                            Curatare Coltare
                                        </DropdownItem>
                                        <DropdownItem
                                            href="/#fotolii"
                                            onClick={(e) => {
                                                toggleNavbarCollapse();

                                                var myTarget = document.getElementById('trei');
                                                myTarget.scrollIntoView({ behavior: "smooth" });
                                                myTarget.scrollIntoViewIfNeeded(true);
                                            }}
                                        >
                                            Curatare Fotolii
                                        </DropdownItem>
                                        <DropdownItem
                                            href="/#scaune"
                                            onClick={(e) => {
                                                toggleNavbarCollapse();

                                                var myTarget = document.getElementById('patru');
                                                myTarget.scrollIntoView({ behavior: "smooth" });
                                                myTarget.scrollIntoViewIfNeeded(true);
                                            }}                                         >
                                            Curatare Scaune
                                        </DropdownItem>
                                        <DropdownItem
                                            href="/#covoare"
                                            onClick={(e) => {
                                                toggleNavbarCollapse();

                                                var myTarget = document.getElementById('cinci');
                                                myTarget.scrollIntoView({ behavior: "smooth" });
                                                myTarget.scrollIntoViewIfNeeded(true);

                                            }}                                        >
                                            Curatare Covoare
                                        </DropdownItem>
                                        <DropdownItem
                                            href="/#mochete"
                                            onClick={(e) => {
                                                toggleNavbarCollapse();

                                                var myTarget = document.getElementById('sase');
                                                myTarget.scrollIntoView({ behavior: "smooth" });
                                                myTarget.scrollIntoViewIfNeeded(true);

                                            }}                                          >
                                            Curatare Mochete
                                        </DropdownItem>
                                        <DropdownItem
                                            href="/#saltele"
                                            onClick={(e) => {
                                                toggleNavbarCollapse();

                                                var myTarget = document.getElementById('sapte');
                                                myTarget.scrollIntoView({ behavior: "smooth" });
                                                myTarget.scrollIntoViewIfNeeded(true);

                                            }}                                         >
                                            Curatare Saltele
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            href="/#business"
                                            onClick={(e) => {
                                                toggleNavbarCollapse();

                                                var myTarget = document.getElementById('opt');
                                                myTarget.scrollIntoView({ behavior: "smooth" });
                                                myTarget.scrollIntoViewIfNeeded(true);

                                            }}                                        >
                                            Servicii Business
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <NavItem>
                                    <NavLink
                                        href="/preturi"
                                        onClick={(e) => {
                                        }}
                                        id="preturi"
                                        className="preturi"
                                    >
                                        <p className="nav-text">Preturi</p>
                                    </NavLink>
                                </NavItem>
                                <div className="container--inline-scurt2">
                                    <NavItem id="phone-id2">
                                        <NavLink
                                            data-placement="bottom"
                                            href="tel:+400766326277"
                                            target="_blank"
                                            title="Call us here"
                                            className="flex-child2"
                                        >
                                            <i className="fa fa-phone fa-5x" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem id="facebook-id2">
                                        <NavLink
                                            data-placement="bottom"
                                            href="https://www.facebook.com/smileyclean.official"
                                            target="_blank"
                                            title="Like us on Facebook"
                                            className="flex-child2"
                                        >
                                            <i className="fa fa-facebook-square" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem id="instagram-id2">
                                        <NavLink
                                            data-placement="bottom"
                                            href="https://www.instagram.com/smileyclean.official/"
                                            target="_blank"
                                            title="Follow us on Instagram"
                                            className="flex-child2"
                                        >
                                            <i className="fa fa-instagram fa-5x" />
                                        </NavLink>
                                    </NavItem>
                                </div>
                            </Nav>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default IndexNavbar;
