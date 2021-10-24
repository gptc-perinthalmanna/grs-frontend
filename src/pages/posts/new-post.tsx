import React from "react"
import { Container, Row, Card, Col } from "react-bootstrap"
import Layout from "../../components/layout"
import NewPostForm from "../../components/posts/NewPost"
import Seo from "../../components/seo"
import PageHeader from "../../components/PageHeader"

const NewPostPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Container fluid="xl" className="page-body">
        <PageHeader title="New Grievance" />
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
