import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { IconPhone, IconAward, IconLogout } from "@tabler/icons"

import { Nav, Navbar, Container } from "react-bootstrap"
import { fetchToken } from "../api/posts"
import { getCurrentUser, logout } from "../api/users"

const Header = ({ siteTitle }) => {
  const user = getCurrentUser()
  return (
    <React.Fragment>
      <Navbar>
        <Container fluid="xl">
          <Navbar.Brand className="navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            Grievance redressal system
          </Navbar.Brand>
          <Nav className="flex-row order-md-last h-100 align-items-center">
            <Nav.Item bsPrefix="top-nav" className="d-md-flex d-none me-3">
              <div className="btn-list">
                {user ? (
                  <Link
                    className="btn btn-sm btn-outline-white"
                    onClick={logout}
                    to="/"
                  >
                    <IconLogout size={24} />
                    Logout
                  </Link>
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
