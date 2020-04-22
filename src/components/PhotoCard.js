import React from "react"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import "./photoCard.scss"

export default ({ image, imageAlt, title, text, className, ...attrs }) => (
  <div className={`photo-card ${className || ""}`} {...attrs}>
    <Row className="h-100 flex-column flex-nowrap flex-lg-row" noGutters>
      <Col lg="auto" className="photo-card__img-wrapper px-0">
        <Img
          className="photo-card__img"
          fluid={image}
          alt={imageAlt || title}
        />
      </Col>

      <Col className="photo-card__text-wrapper px-0">
        <div className="p-4 d-flex flex-column justify-content-center h-100 overflow-hidden">
          {title && <p className="photo-card__title h4 mb-3">{title}</p>}

          {text && <p className="photo-card__text text-muted mb-0">{text}</p>}
        </div>
      </Col>
    </Row>
  </div>
)

export const PhotoImage = graphql`
  fragment PhotoImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
