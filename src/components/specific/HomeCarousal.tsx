import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Carousel } from "react-bootstrap"

const DATA: Img[] = [
  {
    title: "This is a Title",
    subTitle: "This is a Subtitle",
    imageUri: "../images/image1.jpg",
    imageAlt: "Carousal Image 1",
    local: true,
    imageComponent: <StaticImage src="../../images/image1.jpg" alt="" />,
  },
  {
    title: "This is a Title",
    subTitle: "This is a Subtitle",
    imageUri: "../images/image2.jpg",
    imageAlt: "Carousal Image 1",
    local: true,
    imageComponent: <StaticImage src="../../images/image2.jpg" alt="" />,
  },
  {
    title: "This is a Title",
    subTitle: "This is a Subtitle",
    imageUri: "../images/image3.jpg",
    imageAlt: "Carousal Image 1",
    local: true,
    imageComponent: <StaticImage src="../../images/image3.jpg" alt="" />,
  },
  {
    title: "This is a Title",
    subTitle: "This is a Subtitle",
    imageUri: "../images/image4.jpg",
    imageAlt: "Carousal Image 1",
    local: true,
    imageComponent: <StaticImage src="../../images/image4.jpg" alt="" />,
  },
  {
    title: "This is a Title",
    subTitle: "This is a Subtitle",
    imageUri: "../images/image5.jpg",
    imageAlt: "Carousal Image 1",
    local: true,
    imageComponent: <StaticImage src="../../images/image5.jpg" alt="" />,
  },
  {
    title: "This is a Title",
    subTitle: "This is a Subtitle",
    imageUri:
      "https://images.unsplash.com/photo-1511782846297-947487389478?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Carousal Image 1",
    local: false,
  },
]

type Img = {
  title?: string
  subTitle?: string
  imageUri: string
  imageAlt: string
  local: boolean
  imageComponent?: JSX.Element
}

function HomeCarousal({
  images = DATA,
}: {
  images?: Img[]
}): React.ReactElement {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          {image.local ? (
            image.imageComponent
          ) : (
            <img src={image.imageUri} alt={image.imageAlt} />
          )}
          <Carousel.Caption>
            {image.title && <h3>{image.title}</h3>}
            {image.subTitle && <p>{image.subTitle}</p>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default HomeCarousal
