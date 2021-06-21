import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  // const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  // const citiesClickHandler = () => {
  //   setCityDropdownOpen(!cityDropdownOpen);
  // };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Logo - Light.png" }) {
        publicURL
      }
      nestLogo: file(relativePath: { eq: "global/Nest Logo.svg" }) {
        publicURL
      }
      linkedin: file(
        relativePath: { eq: "global/1.0 Footer - Icon - in.svg" }
      ) {
        publicURL
      }
      twitter: file(relativePath: { eq: "global/2.0 Footer - Icon - Tw.svg" }) {
        publicURL
      }
      facebook: file(
        relativePath: { eq: "global/3.0 Footer - Icon - Fb.svg" }
      ) {
        publicURL
      }
      yelp: file(relativePath: { eq: "global/4.0 Footer - Icon - Yelp.svg" }) {
        publicURL
      }
      gmb: file(relativePath: { eq: "global/5.0 Footer - Icon - GMB.svg" }) {
        publicURL
      }
    }
  `);

  const social = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/inner-balance-institute/about/",
      icon: data.linkedin.publicURL,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/innerbalancesdc?lang=en",
      icon: data.twitter.publicURL,
    },
    {
      name: "Yelp",
      href: "https://www.yelp.com/biz/inner-balance-institute-san-diego-2",
      icon: data.yelp.publicURL,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/InnerBalanceInstitute/",
      icon: data.linkedin.publicURL,
    },
    {
      name: "Google My Business",
      href: "https://g.co/kgs/FMnUUZ",
      icon: data.gmb.publicURL,
    },
  ];

  return (
    <>
      <footer className="bg-primary-900 pt-16 lg:pt-22 pb-10 lg:pb-6 md:mt-1 text-center lg:text-left">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-24 lg:space-y-0 lg:space-x-6 mb-20 lg:mb-20">
            <div>
              <AniLink fade to="/">
                <img
                  src={data.logo.publicURL}
                  alt="Inner Balance Institute Logo"
                  width="188"
                  className="mx-auto lg:mx-0 w-[170px] md:w-[188px]"
                />
              </AniLink>
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-7 lg:space-y-0 lg:space-x-8">
                <div>
                  <div className="font-body font-bold tracking-wide uppercase text-sm font-semibold text-white mb-2.5 md:mb-3">
                    Contact
                  </div>

                  <ul>
                    <li>
                      <a
                        href="tel:619-543-9999"
                        className="text-sm no-underline font-semibold text-primary-600 md:text-white"
                      >
                        (619) 543-9999
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border-r border-primary-100 border-opacity-30 h-auto w-px hidden lg:block"></div>

                <div>
                  <div className="font-body font-bold tracking-wide uppercase text-sm font-semibold text-white mb-2.5 md:mb-3">
                    Address
                  </div>

                  <a
                    href="https://goo.gl/maps/nTTAXtA4BzxvFiNQ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm no-underline md:font-semibold text-white hover:text-white"
                  >
                    <address className="not-italic">
                      1764 San Diego Ave <br />
                      Suite #140 <br />
                      San Diego, CA 92110
                    </address>
                  </a>
                </div>

                <div className="border-r border-primary-100 border-opacity-30 h-auto w-px hidden lg:block"></div>

                <div>
                  <div className="font-body font-bold tracking-wide uppercase text-sm font-semibold text-white mb-2.5 md:mb-3">
                    Hours
                  </div>

                  <div className="flex justify-center md:justify-start space-x-3">
                    <div className="text-sm text-left text-white">
                      Mon, Wed
                      <br /> Tue, Thur
                      <br /> Fri
                    </div>
                    <div className="text-sm text-left text-white">
                      9-5:30PM
                      <br /> 10-6PM
                      <br /> 9-1PM
                    </div>
                  </div>
                </div>

                <div className="border-r border-primary-100 border-opacity-30 h-auto w-px hidden lg:block"></div>

                <div>
                  <div className="font-body font-bold tracking-wide uppercase text-sm font-semibold text-white mb-2.5 md:mb-3">
                    Shop
                  </div>
                  <ul className="flex flex-col space-y-1.5">
                    <li>
                      <a
                        href="# "
                        target="_blank"
                        className="font-body font-bold tracking-wide uppercase text-sm font-semibold text-primary-600 md:text-white"
                      >
                        Do-Terra
                      </a>
                    </li>
                    <li>
                      <a
                        href="# "
                        target="_blank"
                        className="font-body font-bold tracking-wide uppercase text-sm font-semibold text-primary-600 md:text-white"
                      >
                        Metagenics
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-30"></div>

          <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-items-center lg:justify-between items-center pt-10 lg:pt-8">
            <div className="lg:flex lg:items-center order-2 lg:order-1">
              <ul className="flex items-center flex-row flex-wrap lg:space-x-1 justify-center lg:justify-start">
                <li className="text-sm font-semibold text-white text-opacity-70 w-full lg:w-auto">
                  © {getYear()} Inner Balance Institute
                </li>

                <div className="text-sm font-semibold text-white text-opacity-70">
                  |
                </div>

                <div className="justify-center lg:justify-start w-full lg:w-auto">
                  <li className="text-sm">
                    <AniLink
                      fade
                      to="/privacy-policy/"
                      className="font-semibold text-white hover:text-white text-opacity-70 hover:text-opacity-100 no-underline"
                    >
                      Privacy Policy
                    </AniLink>
                  </li>
                </div>

                <div className="text-sm font-semibold text-white text-opacity-70">
                  |
                </div>

                <li className="text-sm font-semibold text-white text-opacity-70">
                  <div className="flex items-center justify-center">
                    Powered by
                    <a
                      className="ml-1 no-underline"
                      href="https://www.wisedigitalpartners.com/affordable-web-design/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={data.nestLogo.publicURL} alt="NEST logo" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center lg:justify-items-start items-center space-x-5 order-1 lg:order-2 mb-10 lg:mb-0">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <img src={item.icon} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
