import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
// import CTAFullWidth from "../CTA/CTAFullWidth";

const CTA = ({ heading, headingLevel, subtext, className }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "repeating/CTA/1.0 CTA desktop.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`pt-16 md:pt-0 bg-primary-900 ${className || ""}`}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-y-8 items-center">
          <div className="md:pr-10 lg:pr-20 text-center md:text-left">
            <HeadingTag className="text-white mb-8">
              {heading || "Schedule An Appointment With Our Chiropractors"}
            </HeadingTag>
            <p className="text-white mb-7 text-lg md:max-w-[418px]">
              {subtext ||
                "Get to the root cause of your problems and stop the pain naturally. Schedule your appointment with Inner Balance, your top San Diego chiropractor, today!"}
            </p>
            <div className="grid md:flex flex-wrap md:flex-nowrap space-y-5 md:space-y-0 md:space-x-6">
              <ButtonSolid
                as="button"
                modal="modal-contact"
                text="Book Appointment"
                className="mx-auto md:w-full"
              />
              <ButtonGhost
                href="tel:619-543-9999"
                text={[<i className="fas fa-phone mr-2"></i>, "(619) 543-9999"]}
                className="mx-auto md:w-full"
              />
            </div>
          </div>
          <div className="lg:h-[560px] relative">
            <div className="-mx-4 md:mx-0 lg:absolute lg:left-0 lg:w-[50vw] lg:h-full">
              <GatsbyImage
                image={data.backgroundDesktop.childImageSharp.gatsbyImageData}
                alt={heading || "Schedule Your Appointment"}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
