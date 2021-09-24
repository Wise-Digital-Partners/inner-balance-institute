import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import WhyUs from "../components/Repeating/WhyUs";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";

const Page = ({ data }) => {
  const symptoms = [
    {
      text: "Back and neck pain",
    },
    {
      text: "Disc-related conditions such as Degenerative Disc Disease",
    },
    {
      text: "Tendonitis and tendon tears",
    },
    {
      text: "Bursitis",
    },
    {
      text: "Joint instability",
    },
    {
      text: "Arthritis",
    },
    {
      text: "Osteoarthritis",
    },
    {
      text: "Muscle weakness and tears",
    },
    {
      text: "Carpal Tunnel Syndrome",
    },
    {
      text: "Plantar Fasciitis",
    },
    {
      text: "And many more conditions",
    },
  ];
  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="Physiotherapy San Diego | Inner Balance Institute"
        description="Give your body the attention it needs. Physiotherapy, available at San Diego's Inner Balance Institute, helps you recuperate and maintain an active lifestyle."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-primary-100 rounded-b-4xl md:rounded-b-8xl md:pt-36 pb-8 md:pb-14">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-8 md:gap-x-10 lg:gap-x-20">
            <div>
              <GatsbyImage
                image={data.heroDesktop.childImageSharp.gatsbyImageData}
                alt="San Diego Physiotherapy"
                className="md:rounded-8xl -mx-4 md:mx-0"
              />
            </div>
            <div>
              <h1>San Diego Physiotherapy</h1>
              <p className="text-primary-900 md:text-lg mb-0">
                At Inner Balance Institute, our physiotherapy care can help
                restore movement and function following an injury or surgical
                procedure, such as a hip or knee replacement. We work closely
                with patients to develop a customized care plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20 mb-20 md:mb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-8 md:gap-x-10 lg:gap-x-20 relative">
            <div>
              <h2>What Physiotherapy Can Treat</h2>
              <p className="md:text-lg">
                Physiotherapy (more commonly known as physical therapy) is an
                effective treatment plan for not only injury rehabilitation and
                post-surgery recovery but the following as well:
              </p>
              <ul className="flex flex-col space-y-2">
                {symptoms.map((symptom, i) => {
                  return (
                    <li
                      key={i}
                      className="text-lg flex items-start before:min-w-[.75rem] before:h-3 before:bg-primary-300 before:rounded-full before:mr-2 before:mt-1.5"
                    >
                      {symptom.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-4 md:pt-10 md:pb-6 md:h-[677px] relative">
              <div className="bg-gray-50 rounded-l-8xl h-full w-100vw absolute top-0 z-20"></div>
              <GatsbyImage
                image={data.symptoms.childImageSharp.gatsbyImageData}
                alt="What Physiotherapy Can Treat"
                className="z-20 pl-0 md:mx-8 relative -right-6 md:w-full md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-b-4xl md:rounded-b-8xl mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-12 md:gap-x-10 lg:gap-x-20">
            <div className="order-2 md:order-1">
              <GatsbyImage
                image={data.treatment.childImageSharp.gatsbyImageData}
                alt="About Our Physiotherapy Care"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2>About Our Physiotherapy Care</h2>
              <p className="md:text-lg">
                Physiotherapy is a holistic approach that also involves a
                patient’s overall wellbeing. Your entire body, not just the
                specific area you are having trouble with, is considered in your
                treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-b-4xl md:rounded-b-8xl mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-3 md:gap-x-10 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-4">
              <h2>How It Works</h2>
            </div>
            <div className="md:col-end-13 md:col-span-8 flex flex-col space-y-10">
              <div className="flex items-start space-x-10">
                <img src={data.step01.publicURL} alt="Step 01" />
                <div>
                  <h3 className="text-mobile-3xl md:text-3xl">Schedule</h3>
                  <p className="md:text-lg mb-0">
                    Give us a call or fill out our online form to schedule an
                    initial consultation. Once your appointment is confirmed,
                    we’ll send you intake forms that you can fill out before
                    your appointment for faster check-in.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-7">
                <img src={data.step02.publicURL} alt="Step 02" />
                <div>
                  <h3 className="text-mobile-3xl md:text-3xl">Show Up</h3>
                  <p className="md:text-lg">
                    Arrive for your comprehensive chiropractic exam with our
                    board-certified doctor of chiropractic. Your exam may
                    include:
                  </p>
                  <ul className="flex flex-col space-y-2">
                    <li className="text-lg flex items-start before:min-w-[.75rem] before:h-3 before:bg-primary-300 before:rounded-full before:mr-2 before:mt-1.5">
                      Digital X-Rays
                    </li>
                    <li className="text-lg flex items-start before:min-w-[.75rem] before:h-3 before:bg-primary-300 before:rounded-full before:mr-2 before:mt-1.5">
                      Surface Electromyography and Thermography
                    </li>
                    <li className="text-lg flex items-start before:min-w-[.75rem] before:h-3 before:bg-primary-300 before:rounded-full before:mr-2 before:mt-1.5">
                      Functional Posture Assessment
                    </li>
                    <li className="text-lg flex items-start before:min-w-[.75rem] before:h-3 before:bg-primary-300 before:rounded-full before:mr-2 before:mt-1.5">
                      Neurological and Orthopedic tests
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-7">
                <img src={data.step03.publicURL} alt="Step 03" />
                <div>
                  <h3 className="text-mobile-3xl md:text-3xl">
                    Stay Consistent
                  </h3>
                  <p className="md:text-lg mb-0">
                    We set goals and expectations for your care plan. We provide
                    patients the resources they need to treat or prevent injury,
                    get aligned, and improve their quality of life!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <WhyUs heading="Why Choose Inner Balance Institute" />
      <CallToAction className="mb-16 md:mb-18" />
      <RecentBlogPosts className="mb-20 md:mb-22" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Physiotherapy.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Physiotherapy.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "physiotherapy/1.0 Hero Physiotherapy.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 570)
      }
    }
    symptoms: file(
      relativePath: { eq: "physiotherapy/2.0 Physiotherapy mosaic.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 615)
      }
    }
    treatment: file(
      relativePath: { eq: "physiotherapy/3.0 About physical T.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    step01: file(relativePath: { eq: "global/step-01.svg" }) {
      publicURL
    }
    step02: file(relativePath: { eq: "global/step-02.svg" }) {
      publicURL
    }
    step03: file(relativePath: { eq: "global/step-03.svg" }) {
      publicURL
    }
  }
`;
export default Page;
