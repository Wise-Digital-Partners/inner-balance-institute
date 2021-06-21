import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Header from "../Header/Header";

const WhyUs = ({ className, headingLevel, heading }) => {
  const data = useStaticQuery(graphql`
    {
      experience: file(
        relativePath: { eq: "repeating/Why Us/1.0 icon - experience.svg" }
      ) {
        publicURL
      }
      quality: file(
        relativePath: { eq: "repeating/Why Us/2.0 icon - quality.svg" }
      ) {
        publicURL
      }
      integrity: file(
        relativePath: { eq: "repeating/Why Us/3.0 icon - Integrity.svg" }
      ) {
        publicURL
      }
      holistic: file(
        relativePath: { eq: "repeating/Why Us/4.0 icon - Holistic.svg" }
      ) {
        publicURL
      }
      customized: file(
        relativePath: { eq: "repeating/Why Us/5.0 icon - Customized.svg" }
      ) {
        publicURL
      }
      organized: file(
        relativePath: { eq: "repeating/Why Us/6.0 icon - Organized.svg" }
      ) {
        publicURL
      }
    }
  `);

  const content = [
    {
      icon: data.experience.publicURL,
      heading: "Experience",
      text: "We have 24 years of extensive chiropractic experience you can count on.",
    },
    {
      icon: data.quality.publicURL,
      heading: "Quality",
      text: "Our patients get the best care in a brand-new office and state of the art equipment.",
    },
    {
      icon: data.integrity.publicURL,
      heading: "Integrity",
      text: "We never hide behind jargon and you get transparent, reliable care always.",
    },
    {
      icon: data.holistic.publicURL,
      heading: "Holistic",
      text: "We don’t just align and relieve pain. We teach you to listen to your body.",
    },
    {
      icon: data.customized.publicURL,
      heading: "Customized",
      text: "Your care plan is suited to your body’s specific needs for maximum relief and improvement.",
    },
    {
      icon: data.organized.publicURL,
      heading: "Organized",
      text: "We keep it smooth from your initial consultation to your long-term chiropractic care.",
    },
  ];

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <Header
          headingLevel={headingLevel || "h2"}
          heading={heading || "Why Choose Our Chiropractors"}
          subtext=""
          subtextSize=""
          textAlignment="md:mx-auto md:text-center"
          textMaxWidth="max-w-3xl"
          textMargin="mb-14 md:mb-20"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-16 gap-x-10 md:gap-x-10">
          {content.map((content, i) => {
            return (
              <div key={i}>
                <div className="mb-2">
                  <img src={content.icon} alt={content.heading} />
                </div>
                <p className="font-bold text-primary-900 mb-4">
                  {content.heading}
                </p>
                <p className="text-sm md:text-lg mb-0">{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

WhyUs.propTypes = {
  className: PropTypes.string,
  headingLevel: PropTypes.string,
};

export default WhyUs;
