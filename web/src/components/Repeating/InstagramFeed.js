// import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

// const InstagramFeed = ({ className }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       instagram: allInstaNode(
//         sort: { fields: timestamp, order: DESC }
//         limit: 4
//       ) {
//         edges {
//           node {
//             id
//             likes
//             comments
//             mediaType
//             localFile {
//               childImageSharp {
//                 fluid(maxWidth: 400, quality: 100) {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

// return (
//   <section className={`${className}`}>
//     <div className="container">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//         {data.instagram.edges.map(({ node }) => {
//           const { id, likes, comments, localFile } = node;
//           return (
//             <InstagramPost
//               href={`https://www.instagram.com/p/${id}/`}
//               target="_blank"
//               rel="noopener noreferrer"
//               key={id}
//             >
//               <div className="overlay"></div>
//               <GatsbyImage
//                 className="h-full"
//                 image={localFile.childImageSharp.fluid}
//               />
//               <div className="content">
//                 <span className="post-details">
//                   <i className="fas fa-heart"></i> {likes == null ? 0 : likes}
//                 </span>
//                 <span className="post-details">
//                   <i className="fas fa-comment"></i>{" "}
//                   {comments == null ? 0 : comments}
//                 </span>
//               </div>
//             </InstagramPost>
//           );
//         })}
//       </div>
//     </div>
//   </section>
// );
// };

// export default InstagramFeed;
