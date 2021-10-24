import React, { useState, useEffect } from "react"
import { Container, Row, Card, Col, Button } from "react-bootstrap"
import {
  IconAccessPoint,
  IconArrowBack,
  IconCalendarEvent,
  IconCalendarTime,
  IconDotsVertical,
  IconMoodSad,
  IconPlus,
  IconUser,
} from "@tabler/icons"
import { format, parseJSON } from "date-fns"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { getMyPosts, Post } from "../../api/posts"
import { Link } from "gatsby"
import PageHeader from "../../components/PageHeader"

const MyPostsPage = () => {
  const [posts, setPosts] = useState<Post[]>(() => null)
  const [page, setPage] = useState<{
    lastKey: string
    count: number
  }>(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  const fetchPosts = async (key = null) => {
    const { data } = await getMyPosts(key)
    setPosts(data.posts)
    setPage({
      lastKey: data.last_key,
      count: data.count,
    })
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  async function handleLoadMore() {
    setLoadingMore(true)
    const { data } = await getMyPosts(page.lastKey)
    setPosts([...posts, ...data.posts])
    setPage({
      lastKey: data.last_key,
      count: page.count + data.count,
    })
    setLoadingMore(false)
  }
  return (
    <Layout>
      <Seo title="My Grievances" />
      <Container fluid="xl" className="page-body">
        <PageHeader
          title="Grievance Cell"
          preTitle="Dashboard"
          SecondaryButton={null}
          PrimaryButton={
            <Link to="/posts/new-post">
              <Button className="d-none d-sm-inline-block">
                <IconPlus />
                New Grievance
              </Button>
              <Button className="d-sm-none btn-icon">
                <IconPlus />
              </Button>
            </Link>
          }
        />

        <Row className="row-deck row-cards">
          {loading && (
            <div>
              <div
                style={{ height: "100px" }}
                className="skeleton-image mb-3"
              ></div>
              <div
                style={{ height: "100px" }}
                className="skeleton-image mb-3"
              ></div>
              <div
                style={{ height: "100px" }}
                className="skeleton-image mb-3"
              ></div>
            </div>
          )}
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
                          <Link to={`/posts/${post.key}/`}>
                            <h4>
                              {post.subject}
                            </h4>
                          </Link>
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
                        {post.responses && (
                          <Col xs="auto">
                            <div className="badge bg-green-lt text-capitalize">
                              {post.responses.length} Responses
                            </div>
                          </Col>
                        )}
                          <Col xs="auto" className="text-muted">
                          <IconCalendarEvent />
                          <span>
                            {" "}
                            Posted : {format(parseJSON(post.published), "p PP")}
                          </span>
                        </Col>
                        {post.modified.slice(0, -5) !==
                        post.published.slice(0, -5) ? (
                          <Col xs="auto" className="text-muted">
                            <IconCalendarTime /> Updated :{" "}
                            <span>
                              {format(parseJSON(post.modified), "p PP")}
                            </span>
                          </Col>
                        ) : (
                          <></>
                        )}
                      

                        <Col xs="auto" className="text-muted">
                          <IconUser />
                          <span> {post.authorName}</span>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}

          {page && page.lastKey && !loadingMore ? (
            <Button onClick={handleLoadMore}>Load More</Button>
          ) : null}
          {loadingMore && (
            <div
              style={{ height: "100px" }}
              className="skeleton-image mb-3"
            ></div>
          )}
          {!loadingMore && !posts && !loading && (
            <div className="text-center my-4">
              <div className="text-center" >

              <IconMoodSad style={{
                      height: "100%",
                      width: "100px",
                      textAlign: "center",
                    }} />
              </div>
              <div>No Greivances found in DB</div>
            </div>
          )}
        </Row>
      </Container>
    </Layout>
  )
}

export default MyPostsPage
