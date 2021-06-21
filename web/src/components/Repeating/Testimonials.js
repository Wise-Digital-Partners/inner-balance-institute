import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BgImage } from "gbimage-bridge";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  .slick-list {
    ${tw`overflow-visible`}
  }
  .slick-prev,
  .slick-next {
    ${tw`h-12 w-12 bg-white hover:bg-primary-600 border border-solid border-primary-600 rounded-full`}
    i {
      ${tw`text-2xl text-primary-600`}
    }
    &:hover {
      i {
        ${tw`text-white`}
      }
    }
  }
  .slick-prev {
    ${tw`left-8!`}
  }
  .slick-next {
    ${tw`right-8!`}
  }
  .slick-slide > div {
    ${tw`mx-1.5 md:mx-14`}
  }
`;

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      background: file(
        relativePath: {
          eq: "repeating/Testimonials/1.0 Background desktop.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      quote: file(
        relativePath: {
          eq: "repeating/Testimonials/2.0 Testimonial - Quote.svg"
        }
      ) {
        publicURL
      }
      facebook: file(
        relativePath: { eq: "repeating/Testimonials/Facebook-Logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 125, quality: 100)
        }
      }
    }
  `);

  const testimonials = [
    {
      quote:
        "This is the place to go! Dr. Tim knows his stuff! I had been dealing with back pain from my military service with the Marines. It was something I was accepting as my future until I visited this place. I feel so much better and I am not even finished just yet. I definitely have an increased quality of life!",
      name: "Robert J.",
      platform: data.facebook.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "This is the place to go! Dr. Tim knows his stuff! I had been dealing with back pain from my military service with the Marines. It was something I was accepting as my future until I visited this place. I feel so much better and I am not even finished just yet. I definitely have an increased quality of life!",
      name: "Robert J.",
      platform: data.facebook.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "This is the place to go! Dr. Tim knows his stuff! I had been dealing with back pain from my military service with the Marines. It was something I was accepting as my future until I visited this place. I feel so much better and I am not even finished just yet. I definitely have an increased quality of life!",
      name: "Robert J.",
      platform: data.facebook.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <BgImage
      image={data.background.childImageSharp.gatsbyImageData}
      className={`pt-16 md:pt-10 pb-16 md:pb-28 ${
        className || "mb-20 md:mb-32"
      }`}
    >
      <div className="container">
        <header className="mb-8 md:mb-8 text-center hidden md:block">
          <HeadingTag>Our Patients Love Us</HeadingTag>
        </header>
        <StyledSlider className="relative">
          <Slider>
            {testimonials.map((testimonial, i) => {
              return (
                <div
                  className="bg-white rounded-3xl shadow-3xl py-12 px-6 md:px-10 lg:px-24"
                  key={i}
                >
                  <img
                    src={data.quote.publicURL}
                    alt="quote"
                    className="mx-auto mb-6 md:mb-10"
                  />
                  <blockquote className="text-center">
                    <q className="text-base md:text-xl before:hidden">
                      {testimonial.quote}
                    </q>
                    <footer className="mt-6 md:mt-10">
                      <span>
                        <cite className="text-gray-900 font-body font-bold not-italic">
                          {testimonial.name}
                        </cite>
                        <GatsbyImage
                          image={testimonial.platform}
                          alt="facebook logo"
                          className="mt-2 mx-auto"
                        />
                      </span>
                    </footer>
                  </blockquote>
                </div>
              );
            })}
          </Slider>
        </StyledSlider>
      </div>
    </BgImage>
  );
};

export default Testimonial;
