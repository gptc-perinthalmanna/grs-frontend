import { IconHeart } from "@tabler/icons"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Footer = (): React.ReactElement => {
  return (
    <footer className="footer footer-dark d-print-none mt-auto">
      <Container fluid="xl">
        <Row className="text-center align-items-center mt-3">
          <Col className="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                Copyright © {new Date().getFullYear()} GPTC Perinthalmanna
              </li>
              <li className="list-inline-item">All rights reserved</li>
            </ul>
          </Col>
          <Col className="col-lg-auto ms-lg-auto">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                Made with <IconHeart size={24} color="red" /> by Amjed Ali K
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
