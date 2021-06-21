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
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      massageTherapy: file(
        relativePath: { eq: "repeating/Treatments/Massage therapy.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      phisiotherapy: file(
        relativePath: { eq: "repeating/Treatments/Phisiotherapy.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      spinalDecompression: file(
        relativePath: { eq: "repeating/Treatments/Spinal-Decompression.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const treatments = [
    {
      heading: "Chiropractic Care",
      text: "We offer one of the most complete and comprehensive initial examinations available.",
      link: "#",
      image: data.chiropractic.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Spinal Decompression",
      text: "Consider our newest, non-invasive, and non-surgical spinal treatment for your back pain!",
      link: "#",
      image: data.massageTherapy.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Physiotherapy",
      text: "We provide exceptional guidance in developing a tailored program for your alignment.",
      link: "#",
      image: data.phisiotherapy.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Massage Therapy",
      text: "Relieve pain, rehabilitate an injury, and reduce stress at the same time with massage therapy.",
      link: "#",
      image: data.spinalDecompression.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-24 md:mb-32"}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-14 items-center relative">
          <div className="md:col-start-1 md:col-span-3 bg-primary-900 rounded-r-6xl h-full w-100vw absolute right-0 z-20 hidden md:block"></div>
          <div className="md:col-end-13 md:col-span-9 md:pt-8 md:pb-14">
            <header className="mb-5 md:mb-16">
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