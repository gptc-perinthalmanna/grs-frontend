import React, { useState, useEffect } from "react"
import { Container, Row, Card, Col, Button } from "react-bootstrap"
import {
  IconAccessPoint,
  IconArrowBack,
  IconCalendarEvent,
  IconCalendarTime,
  IconDotsVertical,
  IconPlus,
  IconUser,
} from "@tabler/icons"
import { format, parseJSON } from "date-fns"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getMyPosts, Post } from "../api/posts"
import { capitalizeFirstLetter } from "../utils/func"
import { Link } from "gatsby"

const MyPostsPage = () => {
  const [posts, setPosts] = useState<Post[]>(() => null)
  const fetchPosts = async () => {
    const { data } = await getMyPosts()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Layout>
      <Seo title="My Grievances" />
      <Container fluid="xl" className="page-body">
        <div className="page-header mb-4">
          <Row className="align-items-center">
            <Col>
              <div className="page-pretitle">Grievance Cell</div>
              <h2 className="page-title">My Grievances</h2>
            </Col>
            <Col className="col-auto ms-auto">
              <div className="btn-list">
                <Link to="/new-post" className="d-none d-sm-inline-block">
                  <IconPlus />
                  New Grievance
                </Link>
                <Button className="d-sm-none btn-icon">
                  <IconPlus />
                </Button>
                <Button href="" className="d-none d-sm-inline-block">
                  <IconArrowBack />
                  Back to Dashboard
                </Button>
                <Button href="" className="d-sm-none btn-icon">
                  <IconArrowBack />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="row-deck row-cards">
          {posts &&
            posts.map(post => {
              return (
                <Col key={post.key} lg="12">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col xs="auto">
                          <p className="text-muted">
                            {post.key.slice(0, 3)}**{post.key.slice(-5)}
                          </p>
                        </Col>
                        <Col>
                          <h4>{post.subject}</h4>
                        </Col>
                        <Col xs="auto" className="cursor-pointer">
                          <IconDotsVertical />
                        </Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col xs="auto">
                          <div className="badge bg-blue text-capitalize">
                            {post.status}
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="badge bg-green-lt text-capitalize">
                            {post.responses.length} Responses
                          </div>
                        </Col>
                        <Col xs="auto" className="text-muted">
                          <IconCalendarTime />
                          <span>
                            {" "} Updated : {" "}
                            {format(parseJSON(post.modified), "p PP")}
                          </span>
                        </Col>
                        <Col xs="auto" className="text-muted">
                          <IconCalendarEvent />
                          <span>
                            {" "} Posted : {" "}
                            {format(parseJSON(post.published), "p PP")}
                          </span>
                        </Col>

                        <Col xs="auto" className="text-muted">
                          <IconUser />
                          <span>
                            {" "}{post.authorName}
                          </span>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
        </Row>
      </Container>
    </Layout>
  )
}

export default MyPostsPage
