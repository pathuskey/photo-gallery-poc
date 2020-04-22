import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Container } from "reactstrap"
import PhotoCard from "../components/PhotoCard"
import PhotoSwiper from "../components/PhotoSwiper"

export default ({ data }) => {
  const photoItems = [
    {
      title: "See the Beautiful Waterfall",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem est, scelerisque vitae libero a, placerat porta orci. Nam porttitor.",
      image: data.waterfallImage.childImageSharp.fluid,
    },
    {
      title: "It's Quiet in the Forest",
      text:
        "Nulla accumsan sodales euismod. Nam pretium urna leo, sed hendrerit erat euismod ultricies. Cras nec nisi dolor. Sed vel quam risus. Nullam fermentum tristique varius. Ut ac imperdiet mauris. Integer bibendum elit id sem tristique.",
      image: data.forestImage.childImageSharp.fluid,
    },
    {
      title: "Taking a Long Walk Down a Beaten Path",
      text:
        "Nunc augue orci, tincidunt vel est ac, rutrum ultricies arcu. Nulla facilisi. Mauris est velit, sollicitudin sed interdum ac, faucibus sed nulla. Sed rutrum id ex a condimentum. Curabitur eget purus et metus molestie vestibulum quis non augue. Suspendisse dictum sollicitudin enim, ac scelerisque est porta vitae. Proin quis velit.",
      image: data.fieldImage.childImageSharp.fluid,
    },
  ]

  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container className="px-0">
        {photoItems && photoItems.length > 0 && (
          <PhotoSwiper
            style={{ height: "calc(56.25vw + 200px)", minHeight: "35rem" }}
          >
            {photoItems.map((item, i) => (
              <PhotoCard
                key={i}
                {...item}
                className="bg-white shadow-sm h-100"
              />
            ))}
          </PhotoSwiper>
        )}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    forestImage: file(relativePath: { eq: "forest.jpg" }) {
      ...PhotoImage
    }
    fieldImage: file(relativePath: { eq: "field.jpg" }) {
      ...PhotoImage
    }
    waterfallImage: file(relativePath: { eq: "waterfall.jpg" }) {
      ...PhotoImage
    }
  }
`
