import BlogPostPreview from "./BlogPostPreviewList";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

function BlogPostList(props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 lg:gap-x-10 gap-y-8 md:gap-y-12">
      {props.title}
      {props.nodes &&
        props.nodes.map((node) => (
          <div key={node.id}>
            <BlogPostPreview {...node} isInList />
          </div>
        ))}
      {props.browseMoreHref && (
        <div>
          <AniLink fade to={props.browseMoreHref}>
            Browse more
          </AniLink>
        </div>
      )}
    </div>
  );
}

BlogPostList.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostList;
