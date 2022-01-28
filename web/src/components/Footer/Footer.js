import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import ModalContact from "../Modal/ModalContact";
// import ModalPromo from "../Modal/ModalPromo";

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
      logo: file(relativePath: { eq: "global/logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 188)
        }
      }
      nestLogo: file(relativePath: { eq: "global/Nest Logo.svg" }) {
        publicURL
      }
    }
  `);

  const social = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/inner-balance-institute/about/",
      icon: (
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M5.22114 22.4705V7.6271H.290883v14.8434H5.22114zM2.75665 5.59927c1.71927 0 2.78943-1.13979 2.78943-2.56416C5.51405 1.57862 4.47598.470459 2.78927.470459 1.10283.470459 0 1.57864 0 3.03511c0 1.42443 1.0699 2.56416 2.72446 2.56416H2.75665zM7.95002 22.4705h4.93028v-8.2893c0-.4436.032-.8868.1622-1.2039.3564-.8864 1.1677-1.8044 2.5296-1.8044 1.7841 0 2.4978 1.3612 2.4978 3.3566v7.9409h4.9299v-8.5111c0-4.55928-2.4323-6.68068-5.6761-6.68068-2.6597 0-3.8275 1.48769-4.4762 2.50094h.0329V7.62679H7.95013c.0647 1.39282 0 14.84341 0 14.84341l-.00011.0003z"
              className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path
                className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
                transform="translate(0 .470703)"
                d="M0 0h23v22H0z"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/innerbalancesdc?lang=en",
      icon: (
        <svg
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M23.9999 2.83976c-.6684 1.01983-1.4883 1.88918-2.4598 2.60806.0096.1928.0143.41072.0143.65374 0 1.35031-.1919 2.70225-.5757 4.05584-.3838 1.3536-.97 2.6492-1.7587 3.8868-.7888 1.2377-1.7283 2.3342-2.8186 3.2894-1.0903.9553-2.4009 1.7169-3.9317 2.285-1.5309.5681-3.17161.8521-4.92211.8521-2.73196 0-5.24782-.7566-7.54759-2.2698.408182.0466.799662.0699 1.17444.0699 2.28233 0 4.32081-.7212 6.11546-2.1636-1.06415-.02-2.01718-.3561-2.85908-1.0082-.84191-.6521-1.42128-1.4853-1.73813-2.4997.31318.0612.62229.0918.92731.0918.43907 0 .8711-.0588 1.2961-.1763-1.13565-.2333-2.07776-.8136-2.82635-1.7408C1.34119 9.84686.966913 8.7767.966913 7.56358v-.06252c.697067.39595 1.440597.60656 2.230587.63184-.67275-.4601-1.20614-1.0601-1.60016-1.79998-.39406-.73988-.59108-1.54056-.59108-2.40204 0-.90857.22192-1.75462.66578-2.53816 1.235 1.55476 2.73145 2.79738 4.48936 3.72784 1.75794.93048 3.64388 1.44724 5.6578 1.55028-.0859-.36724-.1289-.75047-.1291-1.1497 0-1.39394.4809-2.58417 1.4426-3.57068.9617-.986504 2.1219-1.479757 3.4807-1.479757 1.4226 0 2.6209.531407 3.5948 1.594217 1.1128-.22612 2.1547-.63511 3.1257-1.226977-.3741 1.207867-1.095 2.139657-2.1626 2.795357.9813-.11962 1.9241-.38414 2.8285-.79354h.0001z"
              className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path
                className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
                transform="translate(0 .470703)"
                d="M0 0h24v20H0z"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Yelp",
      href: "https://www.yelp.com/biz/inner-balance-institute-san-diego-2",
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M21.1097 18.697c-.141.969-2.1173 3.4845-3.027 3.8475-.3128.1207-.6098.0937-.8513-.09-.1522-.1208-.3127-.3675-2.445-3.828l-.633-1.0313c-.246-.3712-.1995-.8595.1058-1.2307.297-.3593.7305-.492 1.1092-.348.0195.012 1.5975.5272 1.5975.5272 3.5858 1.1798 3.7035 1.2263 3.8558 1.3395.2265.1875.3322.4763.285.8123l.003.0015zm-7.1873-5.2658c-.258-.387-.2497-.8437.012-1.1565l.996-1.3597c2.1878-2.98427 2.3123-3.14102 2.4608-3.24602.2542-.17175.57-.18.8707-.0315.867.42225 2.6213 3.02702 2.7263 4.02752v.0352c.0315.3398-.1058.6173-.3435.7853-.1643.1057-.3165.1642-4.3943 1.1565-.6442.1642-1.0042.2542-1.215.3285l.027-.0315c-.402.1207-.8512-.0743-1.1092-.4763l-.0308-.0315zm-2.508-1.5465c-.1912.0585-.7852.2423-1.51573-.9375 0 0-4.9335-7.76172-5.04675-8.00022-.0705-.26925.012-.5745.25425-.8205.73425-.762 4.7145-1.875002 5.75773-1.620752.3398.09.5745.30075.6563.605252.0622.336.5467 7.53525.6172 9.14852.0668 1.3792-.5272 1.5667-.723 1.6252zm.6525 7.8908c-.012 3.7732-.0195 3.9022-.0817 4.0822-.1013.2775-.3435.4688-.6795.5273-.9608.1642-3.96453-.945-4.59378-1.6875-.12075-.1643-.195-.3285-.21075-.4958-.01629-.1166.00007-.2355.04725-.3435.07425-.195.18-.348 2.87925-3.5115l.79273-.9412c.2738-.348.75-.453 1.1993-.2738.4372.1643.7072.5393.6757.945v1.68l-.0285.0188zm-8.18398-2.4143c-.29325-.0075-.55875-.1875-.71475-.4807-.1095-.2145-.1875-.5663-.2385-.9998-.1365-1.3005.0315-3.2655.42225-3.8865.18-.285.44925-.4372.7425-.426.195 0 .37125.0585 4.23075 1.6485l1.12875.4493c.4065.1522.65628.57.63298 1.0507-.0315.465-.30073.8243-.69523.93l-1.60575.5115c-3.5895 1.1565-3.711 1.1835-3.8985 1.1678l-.0045.0352zm14.97678 7.1055h-.0038l-.0037.0038.0075-.0038z"
              className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path
                className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
                transform="translate(0 .470703)"
                d="M0 0h24v24H0z"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/InnerBalanceInstitute/",
      icon: (
        <svg
          width="12"
          height="25"
          viewBox="0 0 12 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M3.06916 24.4707V13.2092H.00586V9.15453h3.0633V5.6913c0-2.72143 1.80951-5.220597 5.97899-5.220597 1.68815 0 2.93645.15732 2.93645.15732l-.0983 3.786387s-1.2731-.01205-2.66236-.01205c-1.50358 0-1.74447.67356-1.74447 1.7915v2.96067h4.52633l-.197 4.05467H7.47947v11.2615H3.06916z"
              className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path
                className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
                transform="translate(0 .470703)"
                d="M0 0h12v24H0z"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Google My Business",
      href: "https://g.co/kgs/FMnUUZ",
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group"
        >
          <path
            d="M20 6.9707c0 1.37-1.12 2.5-2.5 2.5s-2.5-1.13-2.5-2.5c0 1.37-1.12 2.5-2.5 2.5s-2.5-1.13-2.5-2.5c0 1.37-1.12 2.5-2.5 2.5s-2.5-1.13-2.5-2.5c0 1.37-1.12 2.5-2.5 2.5s-2.5-1.13-2.5-2.5l1.39-5.42S1.68.470703 2.7.470703h14.6c1.02 0 1.31 1.079997 1.31 1.079997l1.39 5.42zm-1 3.7v7.8c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-7.8a3.960903 3.960903 0 002.07957.2588c.70385-.1021 1.36722-.3918 1.92043-.8388.69.55 1.56.88 2.5.88.95 0 1.82-.33 2.5-.88.69.55 1.56.88 2.5.88.95 0 1.82-.33 2.5-.88.68.55 1.56.88 2.5.88.53 0 1.04-.11 1.5-.3zm-2 5.13c0-.2 0-.41-.05-.63l-.03-.16h-2.97v1.17h1.81c-.06.22-.14.44-.31.62-.33.33-.78.51-1.26.51-.5 0-.99-.21-1.35-.56-.69-.71-.69-1.86.02-2.58.69-.7 1.83-.7 2.55-.03l.14.13.84-.85-.16-.14c-.56-.52-1.3-.81-2.08-.81h-.01c-.81 0-1.57.31-2.14.87-.59.58-.92 1.34-.92 2.13 0 .8.31 1.54.88 2.09.594.5798 1.39.9061 2.22.91h.02c.8 0 1.51-.29 2.03-.8.47-.48.77-1.2.77-1.87z"
            className="fill-current text-white group-hover:text-primary-300 transition-colors duration-300 ease-linear"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <footer className="bg-primary-900 pt-16 lg:pt-22 pb-10 lg:pb-6 md:mt-1 text-center lg:text-left">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-24 lg:space-y-0 lg:space-x-6 mb-20 lg:mb-20">
            <div>
              <AniLink fade to="/">
                <GatsbyImage
                  image={data.logo.childImageSharp.gatsbyImageData}
                  width="188"
                  alt="Inner Balance Institute Logo"
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
                        className="text-sm no-underline font-semibold text-primary-600 md:text-white hover:text-primary-300"
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
                    className="text-sm no-underline font-semibold text-primary-600 md:text-white hover:text-primary-300"
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
                        href="https://www.doterra.com/US/en/site/ibi"
                        target="_blank"
                        rel="noreferrer"
                        className="font-body font-bold tracking-wide uppercase text-sm font-semibold text-primary-600 md:text-white hover:text-primary-300"
                      >
                        doTerra
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
                  <div>{item.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
      {/* <ModalPromo /> */}
    </>
  );
};

export default Footer;
