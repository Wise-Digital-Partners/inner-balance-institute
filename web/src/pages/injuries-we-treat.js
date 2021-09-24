import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonUnderline from "../components/Button/ButtonUnderline";

const Page = ({ data }) => {
  const services = [
    {
      image: data.autoAccidents.childImageSharp.gatsbyImageData,
      heading: "Auto Accidents",
      text: "Let our experts in treatment and insurance processing guide you back to wellness. We take most patients on a lien basis. This means there is no out-of-pocket expense to you. Our treatment is smooth, interruption-free, and seamless so that you can concentrate on your recovery!",
      link: "/car-accident-chiropractor/",
    },
    {
      image: data.sciatica.childImageSharp.gatsbyImageData,
      heading: "Sciatica",
      text: "Sciatica or sciatic pain may originate in the lower back, travel through the buttock or down the large sciatic nerve in the back of each leg. Sciatica is a symptom of an underlying medical condition and is not considered a medical diagnosis. Are you suffering from sciatic pain? Our chiropractors can help.",
      link: "/sciatica-chiropractor/",
    },
    {
      image: data.backPain.childImageSharp.gatsbyImageData,
      heading: "Back Pain",
      text: "Back pain is one of the most common reasons why people call in sick or miss work. Using non-surgical techniques, our board-certified chiropractors treat back pain to improve stability and provide mobility for your everyday motions.",
      link: "/back-pain-chiropractor/",
    },
    {
      image: data.shoulderPain.childImageSharp.gatsbyImageData,
      heading: "Shoulder Pain",
      text: "Shoulder pain has an overall negative impact on your quality of life. It can make it difficult for you to do your job properly, interrupt your sleep patterns, and affect your ability to enjoy the things you love. Alleviate pain and discomfort with a tailored treatment plan for shoulder pain.",
      link: "/shoulder-pain-chiropractor/",
    },
    {
      image: data.spinalStenosis.childImageSharp.gatsbyImageData,
      heading: "Spinal Stenosis",
      text: "As we age and grow older, there can be a tendency for the spinal bones to thicken in certain areas. This can choke off the spinal nerve, or even worse, the spinal cord. Find relief from spinal stenosis with a safe, natural, and effective approach.",
      link: "/spinal-stenosis-chiropractor/",
    },
    {
      image: data.herniatedBulgingDiscs.childImageSharp.gatsbyImageData,
      heading: "Herniated & Bulging Discs",
      text: "Also referred to as slipped or ruptured discs, this condition can cause extreme pain. It’s important to treat herniated and bulging discs with proper chiropractic technique and care. We help restore core and muscle strength and improve mobility with the right treatment plan.",
      link: "/herniated-bulging-discs-chiropractor/",
    },
  ];

  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="Injuries We Treat | San Diego Chiropractor | Inner Balance"
        description="Get natural, non-invasive treatement for injuries due to auto accidents, sciatica, back and shoulder pain, spinal stenosis and herniated and bulging discs."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-primary-100 pt-24 md:pt-36 pb-8 md:pb-10">
        <div className="container">
          <header className="max-w-3xl">
            <h1>Injuries We Treat</h1>
            <p className="text-primary-900 text-lg md:text-xl mb-0">
              We treat more than just back or neck pain! We offer customized
              natural, non-invasive therapies, and functional exercise for the
              following injuries.
            </p>
          </header>
        </div>
      </section>

      <section className="pt-10 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-18 md:gap-x-10 lg:gap-x-20">
            {services.map((service, i) => {
              return (
                <div className="group relative" key={i}>
                  <div className="relative mb-5">
                    <GatsbyImage image={service.image} alt={service.heading} />
                    <div className="absolute w-full h-full left-0 top-0 bg-primary-300/50 opacity-0 md:group-hover:opacity-100 transition-all duration-300 ease-linear"></div>
                  </div>
                  <h2 className="text-mobile-4xl md:text-4xl mb-4">
                    {service.heading}
                  </h2>
                  <p>{service.text}</p>
                  <ButtonUnderline href={service.link} text="Learn More" />
                  <AniLink fade to={service.link}>
                    <span className="absolute top-0 left-0 h-full w-full z-10"></span>
                  </AniLink>
                </div>
              );
            })}
          </div>
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
    autoAccidents: file(
      relativePath: { eq: "injuries/1.0 Inj - hub - auto.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    sciatica: file(
      relativePath: { eq: "injuries/2.0 Inj - hub - sciatica new.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    backPain: file(
      relativePath: { eq: "injuries/3.0 Inj - hub - backpain.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    shoulderPain: file(
      relativePath: { eq: "injuries/4.0 Inj - hub - shoulder.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    spinalStenosis: file(
      relativePath: { eq: "injuries/5.0 Inj - hub - spinal.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    herniatedBulgingDiscs: file(
      relativePath: { eq: "injuries/6.0 Inj - hub - hernia.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
