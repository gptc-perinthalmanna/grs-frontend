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
import RegisterStudent from "../../components/auth/RegisterStudent"
import RegisterStaff from "../../components/auth/RegisterStaff"
import Logo from "../../components/auth/Logo"

function registerPage() {
  const [loading, setLoading] = useState(() => false)
  return (
    <div>
      <Seo title="Register" />
      <div className="page page-top">
        <Container className="container py-4" style={{ maxWidth: "800px" }}>
         <Logo />
          <Card className="card-md">
            <Card.Header>
              <h1 className="text-center mt-2">Register</h1>
              <hr />
            </Card.Header>
            <Card.Body>
            <RegisterNormal setLoading={setLoading} />
              {/* <Tabs
                defaultActiveKey="student"
                id="uncontrolled-tab-example"
                className="mb-3 nav-fill"
              >
                <Tab eventKey="student" title="Student">
                  <RegisterStudent setLoading={setLoading} />
                </Tab>
                <Tab eventKey="staff" title="Staff">
                  <RegisterStaff setLoading={setLoading} />
                </Tab>
                <Tab eventKey="other" title="Other">
                  <RegisterNormal setLoading={setLoading} />
                </Tab>
              </Tabs> */}
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
