import React from "react"
import Slider from "react-slick"

import "./photoSwiper.scss"

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  centerMode: true,
  centerPadding: "-8px",
}

export default ({ children, ...attrs }) => (
  <Slider className="photo-swiper" {...settings} {...attrs}>
    {children}
  </Slider>
)
