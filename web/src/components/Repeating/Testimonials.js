import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BgImage } from "gbimage-bridge";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  .slick-track {
    ${tw`flex items-center`}
  }
  .slick-list {
    ${tw`overflow-visible`}
  }
  .slick-prev,
  .slick-next {
    ${tw`h-12 w-12 bg-white hover:bg-primary-600 border border-solid border-primary-700 rounded-full`}
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
          gatsbyImageData(layout: FULL_WIDTH)
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
          gatsbyImageData(layout: FIXED, width: 125)
        }
      }
      google: file(relativePath: { eq: "reviews/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 110)
        }
      }
      yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 84)
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
        "Dr. Shannahan is the BEST chiropractor. I got into a major car accident and was severely injured, including my back and neck. Dr. Shannahan was the reason why I was able to recover from my injuries. He truly cares about his patients and takes the time to individualize a treatment plan. His hands-on approach to health care, including patient examination, diagnosis, and treatment, put me on a path to recovery. If it wasn't for him, I don't know how I would have been able to recover. His service was EXCELLENT, and I highly recommend him to anyone.",
      name: "Michelle.",
      platform: data.google.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "Dr. Tim and the Inner Balance Institute saved my life! I CANNOT say enough good about this place. When I was in need, Dr. Tim was there, and he is caring and passionate about what he does. I injured myself from a fall and was walking crooked and,after refusing back surgery options, I began another healing route. Dr. Tim, in one visit, helped alleviate some of the worst pain I've ever experienced in my life. Through more visits, I was slowly but surely able to walk straight again and get out of a crooked mess. Thank you, Dr. Tim and staff, for the hospitality, the dedication, the caring tones in your voices. You all were really there for me when I was experiencing horrible pain. Because of your continued care and a healthy lifestyle, I can walk upright and even run for a while. Thank you, thank you, thank you.",
      name: "Price C.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <BgImage
      image={data.background.childImageSharp.gatsbyImageData}
      className={`overflow-hidden pt-16 md:pt-10 pb-16 md:pb-28 ${
        className || "mb-20 md:mb-32"
      }`}
    >
      <div className="container">
        <header className="max-w-2xl mx-auto mb-8 md:mb-8 text-center hidden md:block">
          <HeadingTag>
            What’s To Love About Your Top Chiro in San Diego
          </HeadingTag>
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
