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
  &:before {
    content: "";
    ${tw`absolute left-0 w-full h-full bg-white transform -translate-x-full z-10`}
  }
  .slick-list,
  .slick-slider {
    ${tw`md:overflow-visible`}
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
    ${tw`left-0 top-0 text-left h-0 flex! flex-col z-20`}
    transform: translateX(-35%);
    li {
      ${tw`w-full w-full mb-5`}
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
    ${tw`md:hidden!`}
    .slick-list {
      ${tw`pr-24`}
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
          breakpoint: 768,
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

    return (
      <StyledSlider>
        <Slick className="slider-nav mb-8" {...imageSliderSettings}>
          {this.props.slides.map((slide, i) => {
            return (
              <div key={i}>
                <GatsbyImage image={slide.image} alt={slide.heading} />
              </div>
            );
          })}
        </Slick>

        {/* <div className="flex md:hidden items-center justify-end relative -top-7 -mb-4">
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
                <div className="grid md:grid-cols-12 gap-y-4">
                  <div className="md:col-start-1 md:col-span-5 hidden md:block">
                    <GatsbyImage image={slide.image} alt={slide.heading} />
                  </div>
                  <div className="md:pt-4 lg:pt-7 md:px-10 lg:px-20 md:col-end-13 md:col-span-7">
                    <h3 className="text-mobile-3xl md:text-3xl normal-case md:uppercase">
                      {slide.heading}
                    </h3>
                    <p className="text-sm md:text-lg">{slide.text}</p>
                    <ButtonUnderline href={slide.link} text="Learn More" />
                  </div>
                </div>
              </div>
            );
          })}
        </Slick>

        <div className="flex justify-end items-center space-x-2 md:absolute right-0 bottom-0 md:mr-10 lg:mr-20 mt-8 md:mt-0">
          <button
            onClick={this.prevSlide}
            className="focus:outline-none w-12 h-12 rounded-full flex justify-center items-center border border-primary-600 bg-white hover:bg-primary-600 text-primary-600 hover:text-white"
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
            className="focus:outline-none w-12 h-12 rounded-full flex justify-center items-center border border-primary-600 bg-white hover:bg-primary-600 text-primary-600 hover:text-white"
          >
            <i className="fal fa-arrow-right text-2xl focus:no-underline"></i>
          </button>
        </div>
      </StyledSlider>
    );
  }
}
