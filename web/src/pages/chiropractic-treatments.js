import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonUnderline from "../components/Button/ButtonUnderline";

const Page = ({ data }) => {
  const services = [
    {
      image: data.chiropracticCare.childImageSharp.gatsbyImageData,
      heading: "Chiropractic Care",
      text: "We offer one of the most complete and comprehensive initial examinations available. Our goal is to discover the underlying root cause of your suffering plus customize effective treatment solutions for lasting and permanent relief.",
      link: "/chiropractic-care-san-diego/",
    },
    {
      image: data.spinalDecompression.childImageSharp.gatsbyImageData,
      heading: "Spinal Decompression",
      text: "Consider our newest, non-invasive and non-surgical spinal treatment for your back pain! No surgery means more savings, less medical bills and a quick recovery time. At Inner Balance Institute, we have the latest spinal decompression technology available.",
      link: "/spinal-decompression-therapy-san-diego/",
    },
    {
      image: data.physiotherapy.childImageSharp.gatsbyImageData,
      heading: "Physiotherapy",
      text: "We provide exceptional guidance in developing a tailored program for your alignment. Together, we will give your body the attention it needs to recuperate from your injuries, so you can continue to maintain an active lifestyle.",
      link: "/physiotherapy-san-diego/",
    },
    {
      image: data.massageTherapy.childImageSharp.gatsbyImageData,
      heading: "Massage Therapy",
      text: "Relieve pain, rehabilitate injury, and reduce stress at the same time with massage therapy. Whether you need to recover or relieve muscle tension, we can help. Schedule massage therapy with our board certified doctor of chiropractic and promote overall wellness.",
      link: "/massage-therapy-san-diego/",
    },
  ];

  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="Chiropractic Treatments San Diego | Inner Balance"
        description="Our chiropractic treatments includes helping with auto accident injuries, spinal decompression therapy, and more. Call us if you're suffering from pain today!"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-primary-100 pt-24 md:pt-36 pb-8 md:pb-10">
        <div className="container">
          <header className="max-w-3xl">
            <h1>Our Specialized Treatments</h1>
            <p className="text-primary-900 text-lg md:text-xl mb-0">
              Our chiropractors offer effective and non-surgical treatments,
              from injury rehabilitation to ongoing care.
            </p>
          </header>
        </div>
      </section>

      <section className="pt-10 mb-20 md:mb-32">
        <div className="container">
          {services.map((service, i) => {
            return (
              <div
                className="grid md:grid-cols-2 items-center gap-y-10 md:gap-y-18 md:gap-x-10 lg:gap-x-20 mb-12 md:mb-20"
                key={i}
              >
                <div className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
                  <GatsbyImage image={service.image} alt={service.heading} />
                </div>
                <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
                  <h2 className="text-mobile-4xl md:text-4xl mb-4">
                    {service.heading}
                  </h2>
                  <p>{service.text}</p>
                  <ButtonUnderline href={service.link} text="Learn More" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    chiropracticCare: file(
      relativePath: { eq: "treatments/1.0 treatment hub chiro.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    spinalDecompression: file(
      relativePath: { eq: "treatments/2.0 treatment hub spinal .jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    physiotherapy: file(
      relativePath: { eq: "treatments/3.0 treatment hub physiotherapy.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    massageTherapy: file(
      relativePath: { eq: "treatments/4.0 treatment hub massage.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
