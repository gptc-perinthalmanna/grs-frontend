import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Card, Col, Form, Button, Container, Row, Alert } from "react-bootstrap"
import { login } from "../api/users"
import Logo from "../components/auth/Logo"
import Seo from "../components/seo"

function loginPage() {
  const [error, setError] = useState<string>(null)
  const [loading, setLoading] = useState(() => false)
  const [show, setShow] = useState(() => false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.target)
    try {
      await login(fd)
      window.location.href = "/"
    } catch ({ response }) {
      setShow(true)
      if (response && response.status === 422) {
        console.log(response.data.detail.msg)
      }
      if (response && response.status === 401) {
        setError(response.data.detail)
      } else setError("An unknown error occured.")

      setLoading(false)
    }
  }

  return (
    <div>
      <Seo title="Login" />
      <div className="page page-center">
        <Container className="container-tight py-4">
          <Logo />
          <Card className="card-md">
            <Card.Body>
              <div>
                <h1 className="text-center mt-2">Login</h1>
                {show && (
                  <div
                    className="alert alert-important alert-danger alert-dismissible"
                    role="alert"
                  >
                    <div className="d-flex">
                      <div>{error}</div>
                    </div>
                    <b
                      className="btn-close btn-close-white"
                      data-bs-dismiss="alert"
                      aria-label="close"
                      onClick={() => setShow(false)}
                    ></b>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      name="username"
                      type="text"
                      placeholder="Enter username"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </div>
            </Card.Body>
            {loading && (
              <div className="progress progress-sm">
                <div className="progress-bar progress-bar-indeterminate"></div>
              </div>
            )}
          </Card>
          <Row className="align-items-center justify-content-center mt-3">
            <Col xs="auto">
              <Link to="/register">Register new account</Link>
            </Col>
            {/* <Col xs="auto">
              <Link to="/register">Forgot Password</Link>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default loginPage
