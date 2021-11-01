import React, { useEffect, useState } from "react"
import { Container, Row, Card, Col, Button } from "react-bootstrap"
import { IconPlus, IconTrash } from "@tabler/icons"
import { format, parseJSON } from "date-fns"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ViewPost from "../../components/posts/ViewPost"
import ViewResponses from "../../components/posts/ViewResponse"
import NewResponse from "../../components/posts/NewResponse"
import UserCard from "../../components/common/UserCard"
import { adminRoles, deletePost, getPost, Post } from "../../api/posts"
import PageHeader from "../../components/PageHeader"
import { getCurrentUser } from "../../api/users"
import PostStatus from "../../components/posts/fragments/PostStatus"
import { navigate } from "gatsby"
import PostPriority from "../../components/posts/fragments/PostPriority"


const SkeltonLine = () => <div className="skeleton-line"></div>

const ViewPostPage = ({ params }) => {
  // Check user is Admin
  const isAdmin = adminRoles.includes(getCurrentUser()?.type)

  const [post, setPost] = useState<Post>(() => null)
  const [newResponseShow, setNewResponseShow] = useState(false)
  const post_id = params.postId
  const fetchPost = async () => {
    const { data } = await getPost(post_id)
    setPost(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  const handleNewResponseSuccess = e => fetchPost()

  const handleDelete = async () => {
    try {
      const res = await deletePost(post_id)
      navigate("/dashboard")
    } catch (error) {}
  }

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
      <Seo title={`Grievance - ${post_id?.slice(0, 5)}...`} />
      <Container fluid="xl" className="page-body">
        <PageHeader
          preTitle="Dashboard / View Grievances"
          title={`${post_id?.slice(0, 5)}***${post_id?.slice(-5)}`}
          PrimaryButton={
            <>
              <Button
                onClick={() => setNewResponseShow(true)}
                className="d-none d-sm-inline-block"
              >
                <IconPlus />
                New Response
              </Button>
              <Button
                onClick={() => setNewResponseShow(true)}
                className="d-sm-none btn-icon"
              >
                <IconPlus />
              </Button>
            </>
          }
        />

        <Row className="row-deck row-cards">
          <Col md="7" lg="8">
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
              <Col sm="12" className={newResponseShow ? "" : "d-none"}>
                <Card>
                  <Card.Body>
                    <NewResponse
                      postId={post_id}
                      close={() => setNewResponseShow(false)}
                      success={handleNewResponseSuccess}
                    />
                  </Card.Body>
                </Card>
              </Col>

              {post &&
                post.responses &&
                post.responses.map(response => {
                  let HrChange = () => <div></div>
                  if (response.statusChange.prev !== response.statusChange.to) {
                    HrChange = () => (
                      <div className="hr-text hr-text-right mt-1 mb-2">
                        <span>
                          Status changed from{" "}
                          <span className="text-danger">
                            {response.statusChange.prev}
                          </span>{" "}
                          to{" "}
                          <span className="text-success">
                            {response.statusChange.to}
                          </span>
                        </span>
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
                              change={<HrChange />}
                              author={post.author}
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                      {/* <HrChange /> */}
                    </React.Fragment>
                  )
                })}
            </Row>
          </Col>
          <Col md="5" lg="4" className="h-100">
            <Row className="row-deck row-cards">
              <Col xs="12">
                <Card>
                  <Card.Body>
                    <Row>
                      <Col sm="12">
                        <h3>Id</h3>
                        <p>{post_id}</p>
                      </Col>
                      <Col sm="12">
                        <h3>Status</h3>
                        <PostStatus status={post?.status} />
                      </Col>
                      <Col sm="12">
                        <h3>Priority</h3>
                       <PostPriority priority={post?.priority} />
                      </Col>
                      <Col sm="12">
                        <h3>Posted on</h3>
                        {post ? (
                          <p>{format(parseJSON(post.published), "p PPPP")}</p>
                        ) : (
                          <SkeltonLine />
                        )}
                      </Col>
                      <Col sm="12">
                        <h3>Posted by</h3>
                        {post && <UserCard userId={post.author} />}
                      </Col>
                      <Col sm="12">
                        <hr />
                        <span className="badge bg-orange"></span>
                        <span className="badge bg-yellow"></span>
                        <span className="badge bg-lime"></span>
                        {post && post.responses && (
                          <p>Total {post.responses.length} Responses.</p>
                        )}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {isAdmin && (
                <Col xs="12">
                  <Card>
                    <Card.Body>
                      <Button
                        onClick={handleDelete}
                        className="btn-sm btn-danger"
                      >
                        <IconTrash />
                        Delete this Grievance
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ViewPostPage
