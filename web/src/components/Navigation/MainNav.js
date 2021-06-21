import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import styled from "@emotion/styled";
import tw from "twin.macro";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
// import ButtonGhost from "../Button/ButtonGhost";
import Accordion from "./Accordion";

const StyledMainNav = styled.nav`
  &[data-fixed="true"] {
    ${tw`fixed top-0 left-0 w-full bg-primary-900 z-50`}
    #navigation-desktop {
      > li {
        > a {
          ${tw`text-white`}
        }
      }
    }
    .logo-initial {
      ${tw`hidden`}
    }
    .logo-fixed {
      ${tw`block`}
    }
  }
  #navigation-desktop {
    > li {
      > a {
        ${({ headerLinkColor }) =>
          headerLinkColor === "white" ? tw`text-white` : tw`text-white`};
        ${tw`relative font-body text-sm uppercase font-bold no-underline pb-8`}
        &:hover {
          ${tw`text-primary-300`}
        }
      }
      &.active {
        ${tw`text-primary-300`}
      }
    }
    .submenu-parent {
      ${tw`relative`}
      .submenu {
        ${tw`absolute flex flex-col space-y-0.5 w-auto bg-primary-900 shadow-3xl rounded-3xl pt-4 pb-8 px-6 opacity-0 invisible z-10 transform -translate-x-10 translate-y-8 transition-all duration-300 ease-linear`}
        li {
          ${tw`whitespace-nowrap`}
          a {
            ${tw`relative font-body text-lg font-semibold text-white hover:text-primary-300 no-underline`}
          }
        }
      }
      &:hover {
        .submenu {
          ${tw`opacity-100 visible translate-y-4`}
        }
      }
    }
  }

  #navigation-mobile {
    > li {
      ${tw`flex justify-center text-center space-y-10`}
      > a,
      button {
        ${tw`font-heading text-6xl text-gray-600 hover:text-gray-600 font-bold no-underline text-left focus:outline-none transition-colors duration-300 ease-linear`}
      }
    }
    .submenu {
      li {
        a {
          ${tw`font-body tracking-wider leading-5 text-gray-600 text-opacity-80 hover:text-opacity-100 no-underline`}
        }
      }
    }
  }
`;

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  const notHoveringSubMenu3 = () => setSubMenuHovering3(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/logo.svg" }) {
        publicURL
      }
      lightLogo: file(relativePath: { eq: "global/logo.svg" }) {
        publicURL
      }
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.lightLogo.publicURL;
    stickyLogo = data.darkLogo.publicURL;
    className = "absolute";
  } else {
    initialLogo = data.darkLogo.publicURL;
    stickyLogo = data.darkLogo.publicURL;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.publicURL;
    stickyLogo = data.darkLogo.publicURL;
  }

  return (
    <StyledMainNav
      id="main-navigation"
      className={`py-2.5 lg:py-4 w-full rounded-b-4xl lg:rounded-b-8xl bg-primary-900 transition duration-300 ease-linear ${
        headerStyle === "overlap-hero" && "lg:bg-transparent"
      } ${headerStyle === "overlap" && "lg:bg-primary-900"} ${
        headerHasBorder &&
        "border-b border-solid border-white border-opacity-40"
      } ${offcanvasOpen && "bg-white"} ${className}`}
      role="navigation"
      aria-label="main-navigation"
      data-fixed={scrolled}
      headerStyle={headerStyle}
      headerHasBorder={headerHasBorder}
      headerLinkColor={headerLinkColor}
      offcanvasOpen={offcanvasOpen}
    >
      <div className="container flex justify-between items-center">
        <div className="flex-auto flex items-center lg:hidden">
          <a href="tel:619-430-3981">
            <i
              className={`fas fa-phone-alt text-lg ${
                headerStyle === "overlap" ? "text-white" : "text-white"
              } ${offcanvasOpen || scrolled ? "text-white" : null}`}
            ></i>
          </a>
        </div>
        <div className="flex-auto flex items-center justify-center lg:justify-start">
          <AniLink fade to="/">
            <div className="logo-initial">
              <img
                src={initialLogo}
                alt="Inner Balance Institute Logo"
                className="w-[112px] md:w-[188px]"
              />
            </div>
            <div className="logo-fixed hidden">
              <img
                src={stickyLogo}
                alt="Inner Balance Institute Logo"
                className="w-[112px] md:w-[188px]"
              />
            </div>
          </AniLink>

          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center lg:justify-end lg:ml-6 xl:ml-12"
          >
            <li
              className={`submenu-parent ${subMenuHovering1 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/injuries-we-treat/"
                onMouseEnter={isHoveringSubMenu1}
                onMouseLeave={notHoveringSubMenu1}
              >
                Injuries We Treat
              </AniLink>
              <ul className="submenu">
                <li>
                  <AniLink fade to="/car-accident-chiropractor/">
                    Auto Accident
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/sciatica-chiropractor/">
                    Sciatica
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/back-pain-chiropractor/">
                    Back Pain
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/shoulder-pain-chiropractor/">
                    Shoulder Pain
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/spinal-stenosis-chiropractor/">
                    Spinal Stenosis
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/herniated-bulging-discs-chiropractor/">
                    Herniated or Bulging Discs
                  </AniLink>
                </li>
              </ul>
            </li>

            <li
              className={`submenu-parent ${subMenuHovering2 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/chiropractic-treatments/"
                onMouseEnter={isHoveringSubMenu2}
                onMouseLeave={notHoveringSubMenu2}
              >
                Treatments
              </AniLink>
              <ul className="submenu">
                <li>
                  <AniLink fade to="/chiropractic-care-san-diego/">
                    Chiropractic Care
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/spinal-decompression-therapy-san-diego/">
                    Spinal Decompression Therapy
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/physiotherapy-san-diego/">
                    Physiotherapy
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/massage-therapy-san-diego/">
                    Massage Therapy
                  </AniLink>
                </li>
              </ul>
            </li>

            <li
              className={`submenu-parent ${subMenuHovering3 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/about/"
                onMouseEnter={isHoveringSubMenu3}
                onMouseLeave={notHoveringSubMenu3}
              >
                About
              </AniLink>
              <ul className="submenu">
                <li>
                  <AniLink fade to="/faq/">
                    FAQ
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/blog/">
                    Articles
                  </AniLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end flex-auto">
          <a
            href="tel:619-543-9999"
            className="text-white hover:text-primary-300 font-semibold lg:mr-5 xl:mr-10 hidden lg:block"
          >
            Call or Text (619) 543-9999
          </a>
          <div className="hidden lg:inline-flex items-center">
            <ButtonSolid
              as="button"
              modal="modal-contact"
              text="Contact"
              className="min-w-[142px]"
            />
          </div>

          <div className="lg:hidden" ref={node}>
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <ul id="navigation-mobile" className="mb-20">
                <li className="mb-7">
                  <Accordion title="Services" className="submenu-parent">
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        All Services
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Weddings
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Social Events
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Corporate
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Food Truck
                      </AniLink>
                    </li>
                  </Accordion>
                </li>
                <li className="mb-7">
                  <AniLink
                    fade
                    to="#"
                    onKeyDown={clickHandler}
                    onClick={clickHandler}
                  >
                    Menus
                  </AniLink>
                </li>
                <li className="mb-7">
                  <Accordion title="About" className="submenu-parent">
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Our Company
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        FAQs
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Careers
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="#"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        Blog
                      </AniLink>
                    </li>
                  </Accordion>
                </li>
              </ul>

              <div className="flex justify-center space-x-3 mb-12">
                <a
                  href="https://www.facebook.com/flavorchefcatering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white md:text-white bg-primary-600 hover:bg-primary-600 no-underline"
                >
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a
                  href="https://www.instagram.com/flavorchefcatering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white md:text-white bg-primary-600 hover:bg-primary-600  no-underline"
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
              </div>

              <div className="flex justify-center">
                <ButtonSolid as="button" modal="modal-contact" text="Contact" />
              </div>
            </OffCanvas>
          </div>
        </div>
      </div>
    </StyledMainNav>
  );
};
export default MainNav;
