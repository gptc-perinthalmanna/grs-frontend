import React from "react"
import Layout from "../../components/layout"
import { Container, Row, Col, Card } from "react-bootstrap"
import Seo from "../../components/seo"
import Title from "../../components/title"
import { StaticImage } from "gatsby-plugin-image"

const DATA = [
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=1",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=2",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=3",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=4",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=15",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=14",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=13",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=12",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=11",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=111",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=112",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=133",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=144",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=132",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=121",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=321",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=3221",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=211",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=114",
  },
  {
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero possimus voluptatem laboriosam perspiciatis quaerat, animi doloribus ratione vitae fugiat repellat vero in aperiam distinctio esse ab excepturi consectetur dolorum.",
    date: "3 Days ago",
    imageUri: "https://picsum.photos/700/500?random=1244",
  },
]

function AlbumPage() {
  const images = DATA

  return (
    <Layout>
      <Seo title="Home" />
      <Container fluid="xl" className="page-body">
        <Title title="Image Gallery" />
        <Row className="row-deck row-cards">
          {images.map((image, key) => (
            <Col key={key} sm="6" lg="4">
              <Card className="card-sm">
                <a href="#" className="d-block">
                  <img
                    src={image.imageUri}
                    alt="Sample Image"
                    className="card-img-top"
                  />
                </a>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div>
                      <div>{image.title}</div>
                    </div>
                    <div className=" text-muted ms-auto">{image.date}</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default AlbumPage
