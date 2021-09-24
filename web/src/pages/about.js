import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  const [refStep1, inViewStep1] = useInView({ threshold: 0.5 }),
    [refStep2, inViewStep2] = useInView({ threshold: 0.5 }),
    [refStep3, inViewStep3] = useInView({ threshold: 0.5 }),
    [refStep4, inViewStep4] = useInView({ threshold: 0.5 }),
    [refStep5, inViewStep5] = useInView({ threshold: 0.5 }),
    [refStep6, inViewStep6] = useInView({ threshold: 0.5 });

  const animationStep1 = useAnimation(),
    animationMarker1 = useAnimation(),
    animationMarkerBorder1 = useAnimation(),
    animationStep2 = useAnimation(),
    animationMarker2 = useAnimation(),
    animationMarkerBorder2 = useAnimation(),
    animationStep3 = useAnimation(),
    animationMarker3 = useAnimation(),
    animationMarkerBorder3 = useAnimation(),
    animationStep4 = useAnimation(),
    animationMarker4 = useAnimation(),
    animationMarkerBorder4 = useAnimation(),
    animationStep5 = useAnimation(),
    animationMarker5 = useAnimation(),
    animationMarkerBorder5 = useAnimation(),
    animationStep6 = useAnimation(),
    animationMarker6 = useAnimation(),
    animationMarkerBorder6 = useAnimation();

  useEffect(() => {
    if (inViewStep1) {
      animationStep1.start("visible");
      animationMarker1.start("visibleMarker");
      animationMarkerBorder1.start("visibleMarkerBorder");
    }
    if (inViewStep2) {
      animationStep2.start("visible");
      animationMarker2.start("visibleMarker");
      animationMarkerBorder2.start("visibleMarkerBorder");
    }
    if (inViewStep3) {
      animationStep3.start("visible");
      animationMarker3.start("visibleMarker");
      animationMarkerBorder3.start("visibleMarkerBorder");
    }
    if (inViewStep4) {
      animationStep4.start("visible");
      animationMarker4.start("visibleMarker");
      animationMarkerBorder4.start("visibleMarkerBorder");
    }
    if (inViewStep5) {
      animationStep5.start("visible");
      animationMarker5.start("visibleMarker");
      animationMarkerBorder5.start("visibleMarkerBorder");
    }
    if (inViewStep6) {
      animationStep6.start("visible");
      animationMarker6.start("visibleMarker");
      animationMarkerBorder6.start("visibleMarkerBorder");
    }
  });

  const variants = {
    hiddenLeft: {
      opacity: 0,
      x: "-100px",
    },
    hiddenRight: {
      opacity: 0,
      x: "100px",
    },
    visible: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 1,
      },
    },
    hiddenMarker: {
      backgroundColor: "#C4C4C4",
    },
    visibleMarker: {
      backgroundColor: "#00274B",
      transition: { duration: 1, ease: "easeInOut" },
    },
    hiddenMarkerBorder: {
      opacity: 0,
      width: "0rem",
      height: "0rem",
    },
    visibleMarkerBorder: {
      opacity: 1,
      width: "1.5rem",
      height: "1.5rem",
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="About Inner Balance Institute | San Diego Chiropractor"
        description="At Inner Balance Institute, we provide natural, non-invasive therapies and functional exercise as an alternative to surgery and drug-related approaches."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-primary-100 rounded-b-4xl md:rounded-b-8xl md:pt-36 pb-8 md:pb-14">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-8 md:gap-x-10 lg:gap-x-20">
            <div className="order-2 md:order-1">
              <h1>About Inner Balance Institute</h1>
              <p className="text-primary-900 md:text-lg mb-0">
                At Inner Balance Institute, we provide natural, non-invasive
                therapies and functional exercise as an alternative to surgery
                and drug-related approaches. Get to know our team, how our
                practice started, and what makes us unique.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.heroDesktop.childImageSharp.gatsbyImageData}
                alt="About Inner Balance Institute"
                className="md:rounded-8xl -mx-4 md:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-20 md:pt-32 mb-20 md:mb-44">
        <div className="container">
          <header className="text-center mb-12 md:mb-16">
            <h2>Awards</h2>
          </header>
          <div className="flex items-center justify-center space-x-6 md:space-x-8 lg:space-x-14">
            <GatsbyImage
              image={data.award1.childImageSharp.gatsbyImageData}
              alt="Award"
              className="w-[121px]"
            />
            <GatsbyImage
              image={data.award2.childImageSharp.gatsbyImageData}
              alt="Award"
              className="w-[133px]"
            />
            <GatsbyImage
              image={data.award3.childImageSharp.gatsbyImageData}
              alt="Award"
              className="w-[122px]"
            />
            <GatsbyImage
              image={data.award4.childImageSharp.gatsbyImageData}
              alt="Award"
              className="w-[130px]"
            />
          </div>
        </div>
      </section>

      <section className="mb-20 mb-32 overflow-hidden">
        <div className="container">
          <header className="md:text-center mb-14 md:mb-26">
            <h2>Why Choose Inner Balance Institute</h2>
          </header>

          <div className="relative">
            <div className="hidden md:block w-px bg-black bg-opacity-30 h-full absolute left-0 right-0 mx-auto"></div>
            <div className="relative grid md:grid-cols-2 md:gap-x-20 lg:gap-x-32 gap-y-6 items-center mb-24 md:mb-40">
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="rounded-full w-4 h-4 absolute"
                  ref={refStep1}
                  initial="hiddenMarker"
                  animate={animationMarker1}
                  variants={variants}
                ></motion.span>
                <motion.span
                  className="border border-solid border-primary-900 rounded-full absolute"
                  ref={refStep1}
                  initial="hiddenMarkerBorder"
                  animate={animationMarkerBorder1}
                  variants={variants}
                />
              </div>
              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenLeft"
                variants={variants}
              >
                <GatsbyImage
                  image={data.whyUs1.childImageSharp.gatsbyImageData}
                  alt="Experience"
                />
              </motion.div>

              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenRight"
                variants={variants}
              >
                <img
                  src={data.whyUsIcon1.publicURL}
                  alt="Experience"
                  className="mb-5"
                />
                <h3>Experience</h3>
                <p className="md:text-lg mb-0">
                  We have 24 years of extensive chiropractic experience you can
                  count on. Inner Balance has been providing chiropractic care
                  since 1997! As your local San Diego chiropractor, we’re also
                  centrally located for easy access.
                </p>
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-20 lg:gap-x-32 gap-y-6 items-center mb-24 md:mb-40">
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="rounded-full w-4 h-4 absolute"
                  ref={refStep2}
                  initial="hiddenMarker"
                  animate={animationMarker2}
                  variants={variants}
                ></motion.span>
                <motion.span
                  className="border border-solid border-primary-900 rounded-full absolute"
                  ref={refStep2}
                  animate={animationMarkerBorder2}
                  initial="hiddenMarkerBorder"
                  variants={variants}
                />
              </div>
              <motion.div
                className="order-2 md:order-1"
                ref={refStep2}
                animate={animationStep2}
                initial="hiddenLeft"
                variants={variants}
              >
                <img
                  src={data.whyUsIcon2.publicURL}
                  alt="Quality"
                  className="mb-5"
                />
                <h3>Quality</h3>
                <p className="md:text-lg mb-0">
                  Our patients get the best care in a brand new office and state
                  of the art equipment. To provide the best care possible, we
                  offer comprehensive exams to get to the root of your pain. We
                  work with you to establish goals and to achieve maximum
                  results.
                </p>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                ref={refStep2}
                animate={animationStep2}
                initial="hiddenRight"
                variants={variants}
              >
                <GatsbyImage
                  image={data.whyUs2.childImageSharp.gatsbyImageData}
                  alt="Initial Site Meeting"
                />
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-20 lg:gap-x-32 gap-y-6 items-center mb-24 md:mb-40">
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="rounded-full w-4 h-4 absolute"
                  ref={refStep3}
                  initial="hiddenMarker"
                  animate={animationMarker3}
                  variants={variants}
                ></motion.span>
                <motion.span
                  className="border border-solid border-primary-900 rounded-full absolute"
                  ref={refStep3}
                  animate={animationMarkerBorder3}
                  initial="hiddenMarkerBorder"
                  variants={variants}
                />
              </div>
              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenLeft"
                variants={variants}
              >
                <GatsbyImage
                  image={data.whyUs3.childImageSharp.gatsbyImageData}
                  alt="Integrity"
                />
              </motion.div>
              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenRight"
                variants={variants}
              >
                <img
                  src={data.whyUsIcon3.publicURL}
                  alt="Integrity"
                  className="mb-5"
                />
                <h3>Integrity</h3>
                <p className="md:text-lg mb-0">
                  We never hide behind jargon and you get transparent, reliable
                  care always. You can count on our team to provide you with
                  honest care and the education you need. We value our patients’
                  trust and we let integrity guide our business.
                </p>
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-20 lg:gap-x-32 gap-y-6 items-center mb-24 md:mb-40">
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="rounded-full w-4 h-4 absolute"
                  ref={refStep4}
                  initial="hiddenMarker"
                  animate={animationMarker4}
                  variants={variants}
                ></motion.span>
                <motion.span
                  className="border border-solid border-primary-900 rounded-full absolute"
                  ref={refStep4}
                  animate={animationMarkerBorder4}
                  initial="hiddenMarkerBorder"
                  variants={variants}
                />
              </div>
              <motion.div
                className="order-2 md:order-1"
                ref={refStep4}
                animate={animationStep4}
                initial="hiddenLeft"
                variants={variants}
              >
                <img
                  src={data.whyUsIcon4.publicURL}
                  alt="Holistic"
                  className="mb-5"
                />
                <h3>Holistic</h3>
                <p className="md:text-lg mb-0">
                  We don’t just align and relieve pain. We teach you to listen
                  to your body. From pain relief and injury rehabilitation to
                  nutritional guidance, we aim to provide you with overall care.
                  Our goal with chiropractic care is to improve your quality of
                  life.
                </p>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                ref={refStep4}
                animate={animationStep4}
                initial="hiddenRight"
                variants={variants}
              >
                <GatsbyImage
                  image={data.whyUs4.childImageSharp.gatsbyImageData}
                  alt="Holistic"
                />
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-20 lg:gap-x-32 gap-y-6 items-center mb-24 md:mb-40">
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="rounded-full w-4 h-4 absolute"
                  ref={refStep5}
                  initial="hiddenMarker"
                  animate={animationMarker5}
                  variants={variants}
                ></motion.span>
                <motion.span
                  className="border border-solid border-primary-900 rounded-full absolute"
                  ref={refStep5}
                  animate={animationMarkerBorder5}
                  initial="hiddenMarkerBorder"
                  variants={variants}
                />
              </div>
              <motion.div
                ref={refStep5}
                animate={animationStep5}
                initial="hiddenLeft"
                variants={variants}
              >
                <GatsbyImage
                  image={data.whyUs5.childImageSharp.gatsbyImageData}
                  alt="Customized"
                />
              </motion.div>
              <motion.div
                ref={refStep5}
                animate={animationStep5}
                initial="hiddenRight"
                variants={variants}
              >
                <img
                  src={data.whyUsIcon5.publicURL}
                  alt="Customized"
                  className="mb-5"
                />
                <h3>Customized</h3>
                <p className="md:text-lg mb-0">
                  Your care plan is suited to your body’s specific needs for
                  maximum relief and improvement. We tailor your exercises,
                  nutrition, and adjustments to your unique body. Our
                  board-certified doctor of chiropractic brings a personal touch
                  to all patients.
                </p>
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-20 lg:gap-x-32 gap-y-6 items-center">
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="rounded-full w-4 h-4 absolute"
                  ref={refStep6}
                  initial="hiddenMarker"
                  animate={animationMarker6}
                  variants={variants}
                ></motion.span>
                <motion.span
                  className="border border-solid border-primary-900 rounded-full absolute"
                  ref={refStep6}
                  animate={animationMarkerBorder6}
                  initial="hiddenMarkerBorder"
                  variants={variants}
                />
              </div>
              <motion.div
                className="order-2 md:order-1"
                ref={refStep6}
                animate={animationStep6}
                initial="hiddenLeft"
                variants={variants}
              >
                <img
                  src={data.whyUsIcon6.publicURL}
                  alt="Organized"
                  className="mb-5"
                />
                <h3>Organized</h3>
                <p className="md:text-lg mb-0">
                  We keep it smooth from your initial consultation to your
                  long-term chiropractic care. Chiropractic visits can be
                  intimidating especially for those new to it. Our team is
                  dedicated to providing a seamless process and a relaxing
                  experience.
                </p>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                ref={refStep6}
                animate={animationStep6}
                initial="hiddenRight"
                variants={variants}
              >
                <GatsbyImage
                  image={data.whyUs6.childImageSharp.gatsbyImageData}
                  alt="Organized"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials className="mb-0" />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/About.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/About.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "about/1.0 Hero About.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    award1: file(relativePath: { eq: "about/3.1 Award 1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    award2: file(relativePath: { eq: "about/3.2 Award 2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    award3: file(relativePath: { eq: "about/3.3 Award 3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    award4: file(relativePath: { eq: "about/uptown-news-downtown.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whyUs1: file(relativePath: { eq: "about/4.0 Experience.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whyUs2: file(relativePath: { eq: "about/4.1 Quality.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whyUs3: file(relativePath: { eq: "about/4.2 Integrity.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whyUs4: file(relativePath: { eq: "about/4.3 Holistic.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whyUs5: file(relativePath: { eq: "about/4.4 Customized.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whyUs6: file(relativePath: { eq: "about/4.5 Organized.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whyUsIcon1: file(relativePath: { eq: "about/4.0 Icon Exp.svg" }) {
      publicURL
    }
    whyUsIcon2: file(relativePath: { eq: "about/4.1 Icon Quality.svg" }) {
      publicURL
    }
    whyUsIcon3: file(relativePath: { eq: "about/4.2 Icon Int.svg" }) {
      publicURL
    }
    whyUsIcon4: file(relativePath: { eq: "about/4.3 Icon Hol.svg" }) {
      publicURL
    }
    whyUsIcon5: file(relativePath: { eq: "about/4.4 Icon Cust.svg" }) {
      publicURL
    }
    whyUsIcon6: file(relativePath: { eq: "about/4.5 icon Org.svg" }) {
      publicURL
    }
  }
`;
export default Page;
