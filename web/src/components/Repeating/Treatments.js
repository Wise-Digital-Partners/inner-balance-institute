import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
// import tw from "twin.macro";

import Slider from "../Slider/SliderMultiNavigation";

const StyledSlider = styled.div``;

const Treatments = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      chiropractic: file(
        relativePath: { eq: "repeating/Treatments/Chiropractic.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 100)
        }
      }
      massageTherapy: file(
        relativePath: { eq: "repeating/Treatments/Massage Therapy-new.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 100)
        }
      }
      phisiotherapy: file(
        relativePath: { eq: "repeating/Treatments/Phisiotherapy.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 100)
        }
      }
      spinalDecompression: file(
        relativePath: { eq: "repeating/Treatments/Spinal-Decompression.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 100)
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
      text: "Consider our newest, non-invasive, and non-surgical spinal treatment for your back pain!",
      link: "/spinal-decompression-therapy-san-diego/",
      image: data.spinalDecompression.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Physiotherapy",
      text: "We provide exceptional guidance in developing a tailored program for your alignment.",
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
    <section className={`${className || "mb-24 lg:mb-32"}`}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-14 items-center relative">
          <div className="lg:col-start-1 lg:col-span-3 bg-primary-900 rounded-r-6xl h-full w-100vw absolute right-0 z-20 hidden lg:block"></div>
          <div className="lg:col-end-13 lg:col-span-9 lg:pt-8 lg:pb-14">
            <header className="mb-5 lg:mb-16">
              <HeadingTag>Our Specialized Treatments</HeadingTag>
            </header>
            <StyledSlider className="relative">
              <Slider slides={treatments} />
            </StyledSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
