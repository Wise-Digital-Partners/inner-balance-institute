import React from "react";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreviewList from "../components/Blog/BlogPostList";
// import BlogPostFeaturedList from "../components/Blog/BlogPostFeaturedList";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import CallToAction from "../components/Repeating/CTA";

export const query = graphql`
  {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          categories {
            _id
            title
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout headerStyle="overlap">
      <SearchEngineOptimization
        title="Chiropractic Blog & Articles | Inner Balance Institute"
        description="Follow our blog for expert chiropractic advice and discussion of methods from the team at Inner Balance Institute."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="pt-24 md:pt-40 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-12 md:mb-18">
            <h1>Blog</h1>
          </header>
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreviewList nodes={postNodes} />
          )}
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default ArchivePage;
