import React, { useState } from "react"
import {
  Card,
  Col,
  Form,
  Button,
  Container,
  Row,
  ButtonGroup,
  Tabs,
  Tab,
} from "react-bootstrap"
import Seo from "../../components/seo"
import { Link, navigate } from "gatsby"
import RegisterNormal from "../../components/auth/RegisterNormal"

function registerPage() {
  const [loading, setLoading] = useState(() => false)
  return (
    <div>
      <Seo title="Register" />
      <div className="page page-center">
        <Container className="container py-4" style={{ maxWidth: "800px" }}>
          <div className="text-center mb-4">
            <img
              src="/logo.png"
              style={{ filter: "invert(50%)" }}
              height={56}
              alt="GRS Logo"
            />
          </div>
          <Card className="card-md">
            <Card.Header>
              {" "}
              <h1 className="text-center mt-2">Register</h1>
              <hr />{" "}
            </Card.Header>
            <Card.Body>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 nav-fill"
              >
                <Tab eventKey="student" title="Student"></Tab>
                <Tab eventKey="staff" title="Staff"></Tab>
                <Tab eventKey="other" title="Other">
                  <RegisterNormal setLoading={setLoading} />
                </Tab>
              </Tabs>
            </Card.Body>
            {loading && (
              <div className="progress progress-sm">
                <div className="progress-bar progress-bar-indeterminate"></div>
              </div>
            )}
          </Card>
          <Row className="align-items-center justify-content-center mt-3">
            <Col xs="auto">
              <Link to="/login">Login to your account</Link>
            </Col>
            {/* <Col xs="auto">
              <Link to="/login">Forgot Password</Link>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default registerPage
