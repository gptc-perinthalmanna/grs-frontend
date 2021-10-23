import React, { useEffect, useState } from "react"
import { Container, Row, Card, Col, Button } from "react-bootstrap"
import { IconArrowBack, IconPlus } from "@tabler/icons"
import { format, parseJSON } from "date-fns"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ViewPost from "../components/posts/ViewPost"
import ViewResponses from "../components/posts/ViewResponse"
import NewResponse from "../components/posts/NewResponse"
import UserCard from "../components/common/UserCard"
import { getPost, Post } from "../api/posts"

const ViewPostPage = ({ post_id = "c953d139585845f5957a75afc17fd690" }) => {
  const [post, setPost] = useState<Post>(() => null)
  const [newResponseShow, setNewResponseShow] = useState(false)

  const fetchPost = async () => {
    const { data } = await getPost("c953d139585845f5957a75afc17fd690")
    setPost(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  const SkeltonLine = () => <div className="skeleton-line"></div>

  const Skelton = () => (
    <>
      <div className="skeleton-heading"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </>
  )

  return (
    <Layout>
      <Seo title="Home" />
      <Container fluid="xl" className="page-body">
        <div className="page-header mb-4">
          <Row className="align-items-center">
            <Col>
              <div className="page-pretitle">Grievance Cell</div>
              <h2 className="page-title">View Grievance / {post_id}</h2>
            </Col>
            <Col className="col-auto ms-auto">
              <div className="btn-list">
              <Button onClick={() => setNewResponseShow(true)} className="d-none d-sm-inline-block">
                  <IconPlus />
                  New Response
                </Button>
                <Button onClick={() => setNewResponseShow(true)} className="d-sm-none btn-icon">
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
          <Col lg="8">
            <Row className="row-deck row-cards">
              <Col sm="12">
                <Card>
                  <Card.Body>
                    {post ? (
                      <h1>{post.subject}</h1>
                    ) : (
                      <div className="skeleton-heading"></div>
                    )}

                    <div className="hr-text">
                      <span>Content</span>
                    </div>
                    {post ? <ViewPost post={post} /> : <Skelton />}
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="12" className={newResponseShow ? "": "d-none"}>
                <Card>
                  <Card.Body>
                    <NewResponse postId={post_id} close={() => setNewResponseShow(false)} />
                  </Card.Body>
                </Card>
              </Col>
              
              {post &&
                post.responses.map(response => {
                  let HrChange = () => <div></div>
                  if (response.statusChange.prev !== response.statusChange.to) {
                    HrChange = () => (
                      <div className="hr-text">
                        <span>{`Status changed from ${response.statusChange.prev} to ${response.statusChange.to}`}</span>
                      </div>
                    )
                  }

                  return (
                    <React.Fragment key={response.id}>
                      <Col sm="12">
                        <Card>
                          <Card.Body>
                            <ViewResponses
                              response={response}
                              author={post.author}
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                      <HrChange />
                    </React.Fragment>
                  )
                })}

              
            </Row>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Body>
                <Row>
                  <Col sm="12">
                    <h3>Status</h3>
                    {post ? <p>{post.status.toUpperCase()}</p> : <SkeltonLine />}
                  </Col>
                  <Col sm="12">
                    <h3>Priority</h3>
                    {post ? <p>{post.priority.toUpperCase()}</p> : <SkeltonLine />}
                  </Col>
                  <Col sm="12">
                    <h3>Posted on</h3>
                    {post ? <p>{format(parseJSON(post.published), 'p PPPP')}</p> : <SkeltonLine />}
                  </Col>
                  <Col sm="12">
                    <h3>Posted by</h3>
                    <UserCard userId={"dd1fbe27-504a-4e41-ad55-3df129976842"} />
                  </Col>
                  <Col sm="12">
                    <hr />
                    <span className="badge bg-orange"></span>
                    <span className="badge bg-yellow"></span>
                    <span className="badge bg-lime"></span>
                    {post && <p>Total {post.responses.length} Responses.</p>}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ViewPostPage
