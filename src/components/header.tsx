import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  IconPhone,
  IconAward,
  IconLogout,
  IconHome2,
  IconToggleLeft,
} from "@tabler/icons"

import { Nav, Navbar, Container, Row, Col } from "react-bootstrap"
// import { fetchToken } from "../api/posts"
import { getCurrentUser, logout } from "../api/users"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  let dark = false
  if (typeof window !== "undefined") {
    dark = localStorage.getItem("dark") === "true"
  }
  const handleDark = event => {
    event.preventDefault()
    if (typeof window !== "undefined") {
      localStorage.setItem("dark", !dark ? "true" : "false")
      window.location.reload()
    }
  }

  const user = getCurrentUser()
  return (
    <React.Fragment>
      <Navbar>
        <Container fluid="xl">
          <Navbar.Brand className="navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <Row className="align-items-center">
              <Col >
            <StaticImage
              src="../images/logo-transperant.png"
              placeholder="blurred"
              layout="fixed"
              width={50}
              height={50}
              alt="GPTC Pmna Logo"
            />
              </Col>
            
            <Col className="col-auto font-weight-bold fs-2">
            Grievance redressal system
            
            </Col>
            </Row>
          </Navbar.Brand>
          <Nav className="flex-row order-md-last h-100 align-items-center">
            <Nav.Item bsPrefix="top-nav" className="d-md-flex d-none me-3">
              <div className="btn-list">
                {user ? (
                  <>
                    <Link
                      className="btn btn-sm btn-outline-white"
                      to="/dashboard"
                    >
                      <IconHome2 size={24} />
                      Dashboard
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-white"
                      onClick={handleDark}
                      to="/"
                    >
                      <IconToggleLeft size={24} />
                      Switch to {dark ? "Light" : "Dark"}
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-white"
                      onClick={logout}
                      to="/"
                    >
                      <IconLogout size={24} />
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="btn  btn-sm btn-outline-white"
                      to="/register"
                    >
                      <IconPhone size={24} />
                      Register
                    </Link>
                    <Link className="btn  btn-sm btn-outline-white" to="/login">
                      <IconAward size={24} />
                      Login
                    </Link>
                  </>
                )}
              </div>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
