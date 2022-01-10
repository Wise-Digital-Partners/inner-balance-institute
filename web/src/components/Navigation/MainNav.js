import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import styled from "@emotion/styled";
import tw from "twin.macro";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import Accordion from "./Accordion";

const StyledMainNav = styled.nav`
  &[data-fixed="true"] {
    /* ${tw`fixed top-0 left-0 w-full bg-primary-800 z-50`} */
    ${tw`bg-primary-800`}
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
        ${tw`font-body text-sm uppercase font-bold no-underline pb-8`}
        &:hover {
          ${tw`text-primary-300`}
        }
      }
    }
  }

  #navigation-mobile {
    > li {
      > a,
      button {
        ${tw`font-body text-xl text-white hover:text-white font-bold uppercase no-underline text-left focus:outline-none transition-colors duration-300 ease-linear`}
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
      darkLogo: file(relativePath: { eq: "global/logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 188, placeholder: NONE)
        }
      }
      lightLogo: file(relativePath: { eq: "global/logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 188, placeholder: NONE)
        }
      }
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  const navigation = {
    injuries: [
      {
        name: "All Injuries",
        href: "/injuries-we-treat/",
      },
      {
        name: "Auto Accident",
        href: "/car-accident-chiropractor/",
      },
      {
        name: "Sciatica",
        href: "/sciatica-chiropractor/",
      },
      {
        name: "Back Pain",
        href: "/back-pain-chiropractor/",
      },
      {
        name: "Shoulder Pain",
        href: "/shoulder-pain-chiropractor/",
      },
      {
        name: "Spinal Stenosis",
        href: "/spinal-stenosis-chiropractor/",
      },
      {
        name: "Herniated or Bulging Discs",
        href: "/herniated-bulging-discs-chiropractor/",
      },
    ],
    treatments: [
      {
        name: "All Treatments",
        href: "/chiropractic-treatments/",
      },
      {
        name: "Chiropractic Care",
        href: "/chiropractic-care-san-diego/",
      },
      {
        name: "Spinal Decompression Therapy",
        href: "/spinal-decompression-therapy-san-diego/",
      },
      {
        name: "Physiotherapy",
        href: "/physiotherapy-san-diego/",
      },
      {
        name: "Massage Therapy",
        href: "/massage-therapy-san-diego/",
      },
    ],
    about: [
      {
        name: "About Us",
        href: "/about/",
      },
      {
        name: "FAQ",
        href: "/faq/",
      },
      {
        name: "Articles",
        href: "/blog/",
      },
    ],
  };

  return (
    <StyledMainNav
      id="main-navigation"
      className={`py-2.5 lg:py-4 w-full bg-primary-800 transition duration-300 ease-linear ${
        headerStyle === "overlap-hero" && "lg:bg-transparent"
      } ${headerStyle === "overlap" && "lg:bg-primary-800"} ${
        headerHasBorder &&
        "border-b border-solid border-white border-opacity-40"
      } ${
        offcanvasOpen
          ? "bg-white rounded-none"
          : "rounded-b-4xl lg:rounded-b-8xl"
      } ${className}`}
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
          <a href="tel:619-543-9999">
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
              <GatsbyImage
                image={initialLogo}
                alt="Inner Balance Institute Logo"
                className="w-[112px] md:w-[188px]"
              />
            </div>
            <div className="logo-fixed hidden">
              <GatsbyImage
                image={stickyLogo}
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
              className={`group relative ${subMenuHovering1 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/injuries-we-treat/"
                onMouseEnter={isHoveringSubMenu1}
                onMouseLeave={notHoveringSubMenu1}
              >
                Injuries We Treat
              </AniLink>
              <ul className="absolute flex flex-col space-y-0.5 w-auto bg-primary-800 shadow-3xl rounded-3xl pt-4 pb-8 px-6 opacity-0 invisible z-10 transform -translate-x-10 translate-y-8 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:visible group-hover:translate-y-4">
                {navigation.injuries.slice(1).map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative text-sm uppercase font-bold text-white hover:text-primary-300 no-underline"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li
              className={`group relative ${subMenuHovering2 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/chiropractic-treatments/"
                onMouseEnter={isHoveringSubMenu2}
                onMouseLeave={notHoveringSubMenu2}
              >
                Treatments
              </AniLink>
              <ul className="absolute flex flex-col space-y-0.5 w-auto bg-primary-800 shadow-3xl rounded-3xl pt-4 pb-8 px-6 opacity-0 invisible z-10 transform -translate-x-10 translate-y-8 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:visible group-hover:translate-y-4">
                {navigation.treatments.slice(1).map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative text-sm uppercase font-bold text-white hover:text-primary-300 no-underline"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li
              className={`group relative ${subMenuHovering3 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/about/"
                onMouseEnter={isHoveringSubMenu3}
                onMouseLeave={notHoveringSubMenu3}
              >
                About
              </AniLink>
              <ul className="absolute flex flex-col space-y-0.5 w-auto bg-primary-800 shadow-3xl rounded-3xl pt-4 pb-8 px-6 opacity-0 invisible z-10 transform -translate-x-10 translate-y-8 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:visible group-hover:translate-y-4">
                {navigation.about.map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative text-sm uppercase font-bold text-white hover:text-primary-300 no-underline"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
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
              <ul
                id="navigation-mobile"
                className="flex flex-col space-y-7 mb-20"
              >
                <li className="flex justify-center text-center">
                  <Accordion
                    title="Injuries We Treat"
                    className="submenu-parent"
                  >
                    {navigation.injuries.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          className="font-body text-white font-semibold no-underline"
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </Accordion>
                </li>
                <li className="flex justify-center text-center">
                  <Accordion title="Treatments" className="submenu-parent">
                    {navigation.treatments.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          className="font-body text-white font-semibold no-underline"
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </Accordion>
                </li>
                <li className="flex justify-center text-center">
                  <Accordion title="About" className="submenu-parent">
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <AniLink
                          fade
                          to={item.href}
                          className="font-body text-white font-semibold no-underline"
                          onKeyDown={clickHandler}
                          onClick={clickHandler}
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </Accordion>
                </li>
              </ul>

              <div className="grid gap-y-4">
                <ButtonGhost
                  href="tel:619-543-9999"
                  text="Call or Text (619) 543-9999"
                />
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
