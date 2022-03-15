import React from 'react'
import { graphql } from 'gatsby'
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

// Get Wordpress posts
// Change limit to set max number of posts returned from query
export const query = graphql`
  query MyQuery {
    wpPage(slug: { eq: "sample-page" }) {
      id
      uri
      title
      date
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
      slug
      template {
        templateName
      }
      content
    }
  }
`

const IndexPage = (props) => {
  const { data: { wpPage } } = props

  const featuredImage = {
    data: wpPage.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: wpPage.featuredImage?.node?.alt || ``,
  }

  // Replace with relevant keywords for your site (for SEO)
  return (
    <Layout>
      <h1>{ wpPage.title }</h1>
      {/* if we have a featured image for this post let's display it */}
      {featuredImage?.data && (
        <GatsbyImage
          image={featuredImage.data}
          alt={featuredImage.alt}
          style={{ marginBottom: 50 }}
        />
      )}
      <div className="content">
        {parse(wpPage.content)}
      </div>
    </Layout>
  )
}

export default IndexPage
