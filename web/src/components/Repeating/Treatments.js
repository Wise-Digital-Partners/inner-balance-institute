import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

import Slider from "../Slider/SliderMultiNavigation";

const Treatments = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      chiropractic: file(
        relativePath: { eq: "repeating/Treatments/Chiropractic.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
      }
      massageTherapy: file(
        relativePath: { eq: "repeating/Treatments/Massage Therapy-new.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
      }
      phisiotherapy: file(
        relativePath: { eq: "repeating/Treatments/Phisiotherapy.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
      }
      spinalDecompression: file(
        relativePath: { eq: "repeating/Treatments/Spinal-Decompression.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
      }
    }
  `);

  const treatments = [
    {
      heading: "Chiropractic Care",
      text: "We offer one of the most complete and comprehensive initial examinations available.",
      link: "/chiropractic-care-san-diego/",
      image: data.chiropractic.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Spinal Decompression",
      text: "Consider our newest, non-invasive and non-surgical spinal treatment for your back pain!",
      link: "/spinal-decompression-therapy-san-diego/",
      image: data.spinalDecompression.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Physiotherapy",
      text: "Our chiropractors provide exceptional guidance in developing a tailored program for your alignment.",
      link: "/physiotherapy-san-diego/",
      image: data.phisiotherapy.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Massage Therapy",
      text: "Relieve pain, rehabilitate an injury, and reduce stress at the same time with massage therapy.",
      link: "/massage-therapy-san-diego/",
      image: data.massageTherapy.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-24 lg:mb-32 overflow-hidden"}`}>
      <div className="container">
        <Slider slides={treatments} headingTag={HeadingTag} />
      </div>
    </section>
  );
};

export default Treatments;
