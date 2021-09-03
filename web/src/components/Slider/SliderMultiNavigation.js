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

  /* .slick-dots {
    ${tw`left-0 top-0 text-left h-0 flex! flex-col justify-center h-full z-20`}
    li {
      ${tw`w-full mb-5`}
      button {
        ${tw`text-lg text-white font-bold text-left transition-all duration-300 ease-linear`}
      }
      &.slick-active {
        button {
          ${tw`text-primary-300`}
        }
      }
    }
    button {
      ${tw`w-full absolute top-0`}
    }
  } */
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

  handleBeforeChange = (next) => {
    this.setState({ currentSlide: next });
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
      dots: false,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      afterChange: this.handleAfterChange,
      beforeChange: this.handleBeforeChange,
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
      responsive: [
        {
          breakpoint: 1023,
          settings: {
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

    const HeadingTag = this.props.headingTag;

    return (
      <StyledSlider>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-14 items-center relative">
          <div className="lg:col-start-1 lg:col-span-3 relative h-full hidden lg:block">
            <div className="bg-primary-900 rounded-r-6xl h-full w-100vw absolute top-0 right-0 z-20"></div>
            <ul className="left-0 top-0 text-left h-full flex flex-col justify-center relative z-20 pr-4">
              {this.props.slides.map((slide, i) => {
                return (
                  <li className="w-full mb-5" key={i}>
                    <button
                      className={`text-lg text-white font-bold text-left transition-all duration-300 ease-linear ${
                        this.state.currentSlide === i
                          ? "text-primary-300"
                          : "text-white"
                      }`}
                      onClick={(e) => this.slider1.slickGoTo(i)}
                      onKeyDown={(e) => this.slider1.slickGoTo(i)}
                    >
                      {slide.heading}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-end-13 lg:col-span-9 lg:pt-8 lg:pb-14">
            <header className="mb-5 lg:mb-16">
              <HeadingTag>
                Specialized Treatments From Our Chiropractors
              </HeadingTag>
            </header>
            <div className="relative">
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
                          <GatsbyImage
                            image={slide.image}
                            alt={slide.heading}
                          />
                        </div>
                        <div className="lg:pt-4 xl:pt-7 lg:px-10 xl:px-20 lg:col-end-13 lg:col-span-7">
                          <h3 className="text-mobile-3xl lg:text-3xl normal-case lg:uppercase">
                            {slide.heading}
                          </h3>
                          <p className="text-sm lg:text-lg">{slide.text}</p>
                          <ButtonUnderline
                            href={slide.link}
                            text="Learn More"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slick>

              <div className="flex justify-end items-center space-x-2 lg:absolute right-0 bottom-0 lg:mr-10 xl:mr-20 mt-8 lg:mt-0">
                <button
                  onClick={this.prevSlide}
                  className={`focus:outline-none w-12 h-12 rounded-full flex justify-center items-center border bg-white hover:bg-primary-600 hover:text-white ${
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
                  className={`focus:outline-none w-12 h-12 rounded-full flex justify-center items-center border bg-white hover:bg-primary-600 hover:text-white ${
                    this.state.currentSlide + 1 === this.props.slides.length
                      ? "text-gray-300 border-gray-300 pointer-events-none"
                      : "text-primary-600 border-primary-600"
                  }`}
                >
                  <i className="fal fa-arrow-right text-2xl focus:no-underline"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </StyledSlider>
    );
  }
}
