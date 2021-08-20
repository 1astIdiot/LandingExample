import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

interface ImageProps {
  src?: string;
  alt: string;
  publicUrl?: string;
}

const Image: React.FC<ImageProps> = (props) => {
  const {
    src,
    alt,
    publicUrl,
    ...rest
  } = props;

  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  `);

  const match: {
    node: FileNode;
  } = useMemo(
    () => data.images.edges.find(({ node }: { node: FileNode }) => src === node.relativePath),
    [data, src]
  );

  if (publicUrl) {
    return <img src={publicUrl} alt={alt} {...rest} />;
  }

  const image = match?.node && getImage(match.node);

  if (!image) return null;

  return <GatsbyImage image={image} alt={alt} {...rest} />;
};

export default Image;
