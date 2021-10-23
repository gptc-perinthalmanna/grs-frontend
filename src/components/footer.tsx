import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
  IconHeart,
  IconLogin,
  IconRegistered,
} from "@tabler/icons"
import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Footer = (): React.ReactElement => {
  return (
    <footer className="footer footer-dark d-print-none">
      <Container fluid="xl">
        <Row className="border-bottom pb-3">
          <Col
            md={3}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url('https://www.gptcperinthalmanna.in/wp-content/login-logo.png')",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></Col>
          <Col md={3}>
            <h3>Help and Legal</h3>
            <ul className="/">
              <li className="list-unstyled">
                <Link to="/">Right To Information</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/">Online Grievience</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h3>Legal</h3>
            <ul className="">
              <li className="list-unstyled">
                <Link to="/">Right To Information</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/">Online Grievience</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h3>Authentication</h3>
            <Row className="pb-3">
              <Col>
                <div className="btn-list">
                  <Link className="btn btn-sm btn-outline-white" to="/">
                    <IconLogin size={24} />
                    Login
                  </Link>
                  <Link className="btn btn-sm btn-outline-white" to="/">
                    <IconRegistered size={24} />
                    Sign Up
                  </Link>
                </div>
              </Col>
            </Row>
            <h3>Social</h3>
            <Row>
              <Col xs="auto" className="mb-3">
                <Link
                  to="/"
                  className="btn btn-primary btn-icon pr-3"
                  aria-label="Button"
                >
                  <IconBrandTelegram />
                </Link>
              </Col>
              <Col xs="auto" className="mb-3">
                <Link
                  to="/"
                  className="btn btn-facebook btn-icon mh-3"
                  aria-label="Button"
                >
                  <IconBrandFacebook />
                </Link>
              </Col>
              <Col xs="auto" className="mb-3">
                <Link
                  to="/"
                  className="btn btn-instagram btn-icon pr-3"
                  aria-label="Button"
                >
                  <IconBrandInstagram />
                </Link>
              </Col>
              <Col xs="auto" className="mb-3"></Col>
            </Row>
          </Col>
        </Row>
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
