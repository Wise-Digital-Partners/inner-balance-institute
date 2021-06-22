import React, { Component } from "react";
// import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ButtonUnderline from "../Button/ButtonUnderline";

const StyledSlider = styled.div`
  ${tw`relative`}
  .slick-list,
  .slick-slider {
    ${tw`lg:overflow-visible`}
  }
  .slick-prev,
  .slick-next {
    ${tw`h-20 w-20 bg-transparent border border-solid border-opacity-40 rounded-full`}
    i {
      ${tw`text-base`}
    }
    &:hover {
      ${tw`border-opacity-100`}
    }
  }
  .slick-dots {
    ${tw`left-0 top-0 text-left h-0 flex! flex-col h-full z-20`}
    transform: translateX(-35%);
    li {
      ${tw`w-60 mb-5`}
      &:before {
        ${tw`text-lg text-white font-bold transition-all duration-300 ease-linear`}
      }
      &:first-of-type {
        &:before {
          content: "Chiropractic Care";
        }
      }
      &:nth-of-type(2) {
        &:before {
          content: "Spinal Decompression";
        }
      }
      &:nth-of-type(3) {
        &:before {
          content: "Physiotherapy";
        }
      }
      &:nth-of-type(4) {
        &:before {
          content: "Massage Therapy";
        }
      }
      &.slick-active {
        &:before {
          ${tw`text-primary-300`}
        }
      }
    }
    button {
      ${tw`w-full absolute top-0`}
    }
  }
  .slider-nav {
    ${tw`lg:hidden! pr-32 md:pr-96`}
    .slick-list,
    .slick-slider {
      ${tw`overflow-visible`}
    }
    /* .gatsby-image-wrapper {
      ${tw`transform scale-75 transition-all duration-300 ease-linear`}
    }
    .slick-active {
      .gatsby-image-wrapper {
        ${tw`scale-100`}
      }
    } */
  }
`;
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  handleAfterChange = (index) => {
    this.setState({
      currentSlide: index,
    });
  };

  nextSlide = () => {
    this.state.nav2.slickNext();
  };
  prevSlide = () => {
    this.state.nav2.slickPrev();
  };

  render() {
    const sliderSettings = {
      arrows: false,
      dots: true,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      afterChange: this.handleAfterChange,
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            dots: false,
            fade: true,
          },
        },
      ],
    };
    const imageSliderSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
    };

    const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    return (
      <StyledSlider>
        <Slick className="slider-nav mb-4 -mx-4" {...imageSliderSettings}>
          {this.props.slides.map((slide, i) => {
            return (
              <div key={i}>
                <GatsbyImage
                  image={slide.image}
                  alt={slide.heading}
                  className="mr-2.5"
                />
              </div>
            );
          })}
        </Slick>

        {/* <div className="flex lg:hidden items-center justify-end relative -top-7 -mb-4">
              <div className="text-sm font-heading font-bold tracking-wider">
                <span className="text-black">
                  {"0"}
                  {this.state.currentSlide + 1}
                </span>
                / <span className="text-black text-opacity-20">{"05"}</span>
              </div>
            </div> */}

        <Slick {...sliderSettings}>
          {this.props.slides.map((slide, i) => {
            return (
              <div className="" key={i}>
                <div className="grid lg:grid-cols-12 gap-y-4">
                  <div className="lg:col-start-1 lg:col-span-5 hidden lg:block">
                    <GatsbyImage image={slide.image} alt={slide.heading} />
                  </div>
                  <div className="lg:pt-4 xl:pt-7 lg:px-10 xl:px-20 lg:col-end-13 lg:col-span-7">
                    <h3 className="text-mobile-3xl lg:text-3xl normal-case lg:uppercase">
                      {slide.heading}
                    </h3>
                    <p className="text-sm lg:text-lg">{slide.text}</p>
                    <ButtonUnderline href={slide.link} text="Learn More" />
                  </div>
                </div>
              </div>
            );
          })}
        </Slick>

        <div className="flex justify-end items-center space-x-2 lg:absolute right-0 bottom-0 lg:mr-10 xl:mr-20 mt-8 lg:mt-0">
          <button
            onClick={this.prevSlide}
            className={`focus:outline-none w-12 h-12 rounded-full flex justify-center items-center border  bg-white hover:bg-primary-600 hover:text-white ${
              this.state.currentSlide + 1 === 1
                ? "text-gray-300 border-gray-300 pointer-events-none"
                : "text-primary-600 border-primary-600"
            }`}
          >
            <i className="fal fa-arrow-left text-2xl focus:no-underline"></i>
          </button>

          {/* <div className="text-sm font-heading font-bold tracking-wider mx-8">
                <span className="text-black">
                  {"0"}
                  {this.state.currentSlide + 1}
                </span>
                {" / "}
                <span className="text-black text-opacity-20">{"04"}</span>
              </div> */}

          <button
            onClick={this.nextSlide}
            className={`focus:outline-none w-12 h-12 rounded-full flex justify-center items-center border  bg-white hover:bg-primary-600 hover:text-white ${
              this.state.currentSlide + 1 === slides.length
                ? "text-gray-300 border-gray-300 pointer-events-none"
                : "text-primary-600 border-primary-600"
            }`}
          >
            <i className="fal fa-arrow-right text-2xl focus:no-underline"></i>
          </button>
        </div>
      </StyledSlider>
    );
  }
}
