import React from "react";
import { graphql } from "gatsby";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";

const Page = ({ data }) => {
  const faqs = [
    {
      question: "What is chiropractic care?",
      answer: (
        <>
          <p>
            Chiropractic is a natural, drug-free approach to health care
            management that focuses on the structure and function of the spinal
            column and nervous system and their effect on general health.
          </p>
          <p>
            Doctors of Chiropractic – often referred to as chiropractors or
            chiropractic physicians – are licensed primary health care
            professionals who practice a hands-on approach to health care,
            including patient examination, diagnosis, and treatment for various
            conditions.
          </p>
          <p>
            Chiropractors have broad diagnostic skills and are also trained to
            recommend therapeutic and rehabilitative exercises and provide
            nutritional, dietary, and lifestyle counseling.
          </p>
          <p>
            Chiropractic care is regarded as the safest and most scientifically
            advanced form of complementary health care. It is the
            fastest-growing and second-largest primary health care profession in
            the world.
          </p>
        </>
      ),
    },
    {
      question: "What should I do if I was in a motor vehicle accident?",
      answer: (
        <>
          <p>
            The average motor vehicle accident can age the human spine by 10
            years. If you’re in an accident, it is of the utmost importance to
            get to a health care professional and get checked out. Despite
            popular belief, there is no correlation between vehicle damage and
            the amount of human injury sustained in a motor vehicle accident.
          </p>
          <p>
            Often, even when there is little or no damage to the vehicle, there
            may still be serious injuries sustained, such as whiplash and other
            soft tissue injuries. With this in mind, it is critical to get a
            chiropractic spinal check-up and physical exam as soon as possible.
          </p>
          <p>
            Early care offers the best opportunity for optimal healing and
            recovery. At Inner Balance, we offer same-day appointments. We will
            file paperwork for your insurance company and work with your
            attorney to ensure you get the care you deserve.
          </p>
        </>
      ),
    },
    {
      question: "What is an adjustment?",
      answer: (
        <>
          <p>
            The key to chiropractic care is the spinal adjustment. It’s the
            primary tool used to treat subluxations (misaligned vertebrae) to
            restore proper alignment, biomechanical function, and proper nervous
            system function.
          </p>
          <p>
            During a typical adjustment, the chiropractor will place the patient
            in specific positions to treat particular areas of your body. Often,
            you will be positioned lying face down, lying face up, or lying on
            your side on a specially designed, padded chiropractic table.
          </p>
          <p>
            The chiropractor will use his hands to apply a controlled and
            specific motion to correct the subluxation. There is often a popping
            sound associated with chiropractic adjustments. The sound is
            entirely normal and expected.
          </p>
        </>
      ),
    },
    {
      question: "What does it mean when I hear a popping sound?",
      answer: (
        <>
          <p>
            Often with an adjustment, you may hear an audible ‘pop.’ The noise
            is caused by a change of pressure within the joint. As the
            adjustment is performed, gas bubbles are released. A joint capsule
            surrounds most joints, and that capsule contains lubricating fluid,
            so your joints can glide smoothly.
          </p>
          <p>
            If you don’t hear a ‘pop,’ it doesn’t mean your treatment was
            unsuccessful. An adjustment can be very therapeutic and provide
            benefits regardless if you hear a ‘pop’ or not.
          </p>
        </>
      ),
    },
    {
      question: "Does it hurt to get an adjustment?",
      answer: (
        <>
          <p>
            Generally not. Suppose you are especially tight in an area being
            adjusted. In that case, the release may be a tad more uncomfortable
            than others but tends to be followed by an incredible feeling of
            relief. We remind patients that this can be very similar to starting
            a new exercise – the soft tissues may be sore for a day or so due to
            the new activity.
          </p>
        </>
      ),
    },
    {
      question: "Will I experience any uncomfortable pain after an adjustment?",
      answer: (
        <>
          <p>
            Typically, no. Occasionally, patients may experience some local
            soreness or aching in the muscles or spinal joints after receiving
            an adjustment. It is entirely normal. Sometimes these tissues have
            not moved for years, and it takes time for them to get used to the
            increased motion. When this does occur, it generally tends to appear
            immediately or within the first few hours following treatment. It
            rarely lasts longer than 24 – 48 hours (if it does, please contact
            us for assistance).
          </p>
          <p>
            If you like, you can place an ice pack on the affected area AS
            DIRECTED BY YOUR PHYSICIAN, which can help reduce the soreness and
            help speed the recovery process.
          </p>
        </>
      ),
    },
    {
      question: "How long will it take for me to get better?",
      answer: (
        <>
          <p>
            Recovery varies from patient to patient, and the degree and type of
            injury one has sustained. It also depends on your current state of
            health. People with chronic health difficulties heal slower. A
            significant factor in healing time is how well you take care of
            yourself during the healing process:
          </p>

          <ul className="list-disc ml-8 mb-6">
            <li>How well do you eat?</li>
            <li>Do you get sufficient sleep each night?</li>
            <li>Do you exercise regularly?</li>
            <li>How efficiently do you manage your stress?</li>
            <li>Do you drink enough water daily?</li>
            <li>Do you maintain a positive mental attitude?</li>
          </ul>

          <p>
            Many other factors can play a role in how fast patients recover from
            their injuries, such as previous injuries to the same area and the
            age of the patient. While this is only a partial list of factors
            that may affect healing, one can see that the time it takes to heal
            can vary greatly from one individual to another.
          </p>
          <p>
            With all this being said, the healing process progresses through
            three phases:
          </p>
          <h3>Healing Phase 1</h3>
          <p>
            The first phase is the inflammatory phase and is marked by
            stretching and tearing of the soft tissue (muscles, tendons,
            ligaments, etc.) that supports the spine. This phase consists of
            pain, swelling, redness, warmth, and decreased range of motion (ROM)
            and usually lasts around 72 hours.
          </p>

          <h3>Healing Phase 2</h3>
          <p>
            The second phase is the repair and regeneration phase, where the
            body begins to mend the injured area. Your body does this naturally
            by filling in damaged areas with scar tissue in an attempt to
            stabilize them.
          </p>

          <h3>Healing Phase 3</h3>
          <p>
            The third and final phase is known as the remodeling phase. This
            important phase may take up to 12 months or longer to complete. The
            remodeling phase is characterized by the body’s attempt to
            reorganize the disorganized scar tissue laid down during the repair
            and regeneration phase. In other words, the body is attempting to
            make scar tissue come as close in quality to the original tissue as
            possible.
          </p>
          <p>
            Maximum scar tissue formation is not possible before 12 months, and
            the original strength is not regained for quite some time after.
            These healed injury areas are weaker than the original tissue and
            therefore more predisposed to stiffness, spasm, chronic pain, and
            re-injury.
          </p>
          <p>
            During all three phases of healing, chiropractic care is essential
            for optimal healing of the injured tissues, to reduce pain and
            spasm, and to reduce the likelihood of future chronic pain and
            dysfunction.
          </p>
        </>
      ),
    },
    {
      question: "Will my insurance cover my care at Inner Balance Institute?",
      answer: (
        <>
          <p>
            We accept most major insurance companies and can provide a bill when
            necessary.
          </p>
        </>
      ),
    },
    {
      question: "What does the initial appointment consist of?",
      answer: (
        <>
          <p>
            The initial exam at Inner Balance Institute is a comprehensive exam
            to evaluate the patient. It consists of a patient interview,
            postural and gait analysis, physical exam, digital nerve scans, and
            digital x-rays.
          </p>
        </>
      ),
    },
  ];
  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="FAQ | Best San Diego Chiropractor | Inner Balance Institute"
        description="You have questions. We have answers. Learn more about chiropractic care and treatments in our FAQ."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={false}
        imageMaxHeight="max-h-[480px]"
        heading="FAQs"
        subtext="You have questions. We have answers."
        textMaxWidth="max-w-4xl"
        className="bg-primary-100"
      />

      <section className="bg-white pt-16 md:pt-20 md:pt-24 mb-20 md:mb-32">
        <div className="container">
          <Accordion
            allowZeroExpanded={true}
            className="border-t border-solid border-black border-opacity-30"
          >
            {faqs.map((faq, i) => {
              return (
                <div key={i}>
                  <AccordionItem
                    className="border-b border-solid border-black border-opacity-30 pt-6 pb-5"
                    uuid={i}
                  >
                    <AccordionItemButton className="flex items-center focus:outline-none">
                      <AccordionItemState>
                        {(state) => {
                          const icon = state.expanded ? "fa-minus" : "fa-plus";
                          return (
                            <i
                              className={`fal ${icon} text-xl text-primary-600 mr-5`}
                            ></i>
                          );
                        }}
                      </AccordionItemState>

                      <p className="font-heading text-lg font-bold text-black mb-0">
                        {faq.question}
                      </p>
                    </AccordionItemButton>
                    <AccordionItemPanel className="pt-4 pl-10 animate-fadeIn">
                      <p className="mb-0">{faq.answer}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
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
    heroStacked: file(relativePath: { eq: "faq/1.0 FAQ Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
