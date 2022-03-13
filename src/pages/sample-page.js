import React from 'react'
import { graphql } from 'gatsby'
import parse from "html-react-parser"

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
          uri
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

  // Replace with relevant keywords for your site (for SEO)
  return (
    <>
      <h1>{ wpPage.title }</h1>
      <div className="content">
        {parse(wpPage.content)}
      </div>
    </>
  )
}

export default IndexPage
