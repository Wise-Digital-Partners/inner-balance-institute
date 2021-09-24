import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const StyledModal = styled.div`
  .modal {
    &.is-open {
      ${tw`block`}
    }
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmpopUp 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmpopOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    .content-wrapper,
    .overlay {
      will-change: transform;
    }
  }
  @keyframes mmfadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes mmfadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes mmpopUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes mmpopOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }
`;

function closedPopup() {
  var date, expires;
  date = new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();

  document.cookie = "closedPopup=true" + expires + ";";
}

const Modal = () => {
  const data = useStaticQuery(graphql`
    {
      popup: file(relativePath: { eq: "global/popup-special.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 827)
        }
      }
    }
  `);

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-promo"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30 outline-none"
          tabIndex="-1"
        >
          <div
            className="relative content-wrapper bg-secondary-600 w-full overflow-auto max-w-[827px] my-auto mx-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="border border-white rounded-6xl absolute top-0 bottom-0 right-0 left-0 z-10 m-6"></div>
            <div className="flex justify-end items-center pt-2 px-3">
              <button onClick={closedPopup}>
                <i
                  className="close fal fa-times text-4xl text-white hover:text-white cursor-pointer transition-all duration-300 ease-linear"
                  data-modal-close
                ></i>
              </button>
            </div>

            <div className="pt-3 px-12 md:px-20 pb-5 relative z-10">
              <header className="text-center mb-8 md:mb-20">
                <p className="heading-one text-white mb-2">Special!</p>
                <p className="font-heading text-2xl md:text-3xl font-bold uppercase text-primary-900 mb-3">
                  Pay just $57 for your initial exam.
                </p>
                <p className="md:text-lg text-black mb-0">
                  We’re welcoming new and returning patients in need of a
                  consultation. You’ll get that, plus digital x-rays and a
                  complete follow-up care plan. Schedule your appointment today!
                </p>
              </header>

              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-20 lg:space-x-40 mb-8 md:-mb-32">
                <ButtonGhost
                  href="tel:619-543-9999"
                  text="Call or Text (619) 543-9999"
                  className="w-full md:w-auto md:bg-transparent md:border-white md:text-white"
                />
                <ButtonSolid
                  as="button"
                  modal="modal-contact"
                  text="Get Started"
                  className="w-full md:w-auto bg-primary-600 md:bg-secondary-600"
                />
              </div>
            </div>

            <div className="hidden md:block">
              <GatsbyImage
                image={data.popup.childImageSharp.gatsbyImageData}
                alt="Promo popup"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
