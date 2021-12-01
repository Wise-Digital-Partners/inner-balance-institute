import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
// import { differenceInDays, formatDistance, format } from "date-fns";
// import AuthorList from "./AuthorList";
import PortableText from "./portableText";
import styled from "@emotion/styled";
import tw from "twin.macro";

import RecentBlogPosts from "../Repeating/RecentBlogPosts";

const StyledContent = styled.div`
  p,
  span,
  li {
    ${tw`text-base md:text-xl`}
  }
  ul {
    ${tw`list-disc pl-6 mb-8`}
  }
`;

function BlogPost(props) {
  const {
    _rawBody,
    // authors,
    categories,
    title,
    mainImage,
    // publishedAt,
  } = props;
  return (
    <article className="pt-24 md:pt-40">
      <div className="container">
        <div>
          {categories && (
            <div>
              <ul>
                {categories.slice(0, 1).map((category) => (
                  <li
                    className="font-bold text-sm tracking-[0.03em] text-gray-600/50 uppercase mb-1.5"
                    key={category._id}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <header className="mb-8 md:mb-10">
            <h1>{title}</h1>
          </header>

          {mainImage && mainImage.asset && (
            <div className="text-center mb-12 md:mb-20">
              <GatsbyImage
                image={props.mainImage.asset.gatsbyImageData}
                alt={props.mainImage.alt}
              />
            </div>
          )}

          <StyledContent className="max-w-[955px] mx-auto mb-20 md:mb-36">
            {_rawBody && <PortableText blocks={_rawBody} />}
          </StyledContent>
        </div>
        {/* <aside> */}
        {/* {publishedAt && (
            <div>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? formatDistance(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "MMMM Mo, yyyy")}
            </div>
          )} */}
        {/* {authors && <AuthorList items={authors} title="Authors" />} */}
        {/* </aside> */}
      </div>
      <div className="mt-10">
        <RecentBlogPosts heading={false} className="mb-16 md:mb-32" />
      </div>
    </article>
  );
}

export default BlogPost;
