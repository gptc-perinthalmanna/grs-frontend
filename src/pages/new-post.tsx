import * as React from "react"
import { Container, Row, Card, Col, Button } from "react-bootstrap"
import { IconArrowBack } from "@tabler/icons"
import Layout from "../components/layout"
import NewPostForm from "../components/posts/NewPost"
import Seo from "../components/seo"

const NewPostPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Container fluid="xl" className="page-body">
        <div className="page-header mb-4">
          <Row className="align-items-center">
            <Col>
              <div className="page-pretitle">Grievance Cell</div>
              <h2 className="page-title">Create New Grievance</h2>
            </Col>
            <Col className="col-auto ms-auto">
              <div className="btn-list">
                <Button
                  href=""
                  className="d-none d-sm-inline-block"
                >
                  <IconArrowBack />
                  Back to Dashboard
                </Button>
                <Button
                  href=""
                  className="d-sm-none btn-icon"
                >
                  <IconArrowBack />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="row-deck row-cards">
          <Col lg="8">
            <Card>
              <Card.Body>
                <NewPostForm />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Body>
                <h3>Try to remember while entering grievience</h3>
                <p>
                  There are several rules to follow while creating a new grievience post.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NewPostPage
