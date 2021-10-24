import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { IconMoodSad, IconPlus } from "@tabler/icons"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { adminRoles, getAllPosts, Post, PostPriority, PostStatus } from "../../api/posts"
import { Link, navigate } from "gatsby"
import PageHeader from "../../components/PageHeader"
import PostsList from "../../components/posts/PostsList"
import { getCurrentUser } from "../../api/users"

interface PostQuery {
  priority?: string
  status?: string
}

const AllPostsPage = () => {

  adminRoles.includes(getCurrentUser().type) ? "" : navigate("/dashboard")

  const [posts, setPosts] = useState<Post[]>(() => null)
  const [page, setPage] = useState<{
    lastKey: string
    count: number
  }>(null)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [filter, setFilter] = useState<PostQuery>({priority: null, status: null})

  const fetchPosts = async (query: PostQuery = {}, key = null) => {
    setLoading(true)
    // Removing null value keys
    let _query = {}
    if (query.priority) _query['priority'] = query.priority
    if (query.status) _query['status'] = query.status

    const { data } = await getAllPosts(_query, key)
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
    const { data } = await getAllPosts(filter, page.lastKey)
    setPosts([...posts, ...data.posts])
    setPage({
      lastKey: data.last_key,
      count: page.count + data.count,
    })
    setLoadingMore(false)
  }

  function handleFilterPriority(e) {
    setFilter({...filter, priority: e})
    fetchPosts(filter)
  }

  function handleFilterStatus(e) {
    setFilter({...filter, status:e})
    fetchPosts(filter)
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
        <Row>
          <Col xs="3">
            <div className="subheader mb-2">Status</div>
            <div className="mb-3">
              {Object.values(PostStatus).map(elm => (
                <label
                  key={elm}
                  onClick={() => handleFilterStatus(elm)}
                  className="form-check mb-1"
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    value={elm}
                    name="status"
                  />
                  <span className="form-check-label text-capitalize">
                    {elm}
                  </span>
                </label>
              ))}
            </div>
            <div className="subheader mb-2">Priority</div>
            <div className="mb-3">
              {Object.values(PostPriority).map(elm => (
                <label
                  key={elm}
                  onClick={() => handleFilterPriority(elm)}
                  className="form-check mb-1"
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    value={elm}
                    name="priority"
                  />
                  <span className="form-check-label text-capitalize">
                    {elm}
                  </span>
                </label>
              ))}
            </div>
            <Button
              className="btn-sm btn-secondary"
              onClick={() => {
                setFilter({priority: null, status: null})
                fetchPosts()
              }}
            >
              Clear Filters
            </Button>
          </Col>
          <Col xs="9">
            <Row className="row-deck row-cards">
              {loading ? (
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
              ) : (
                <PostsList posts={posts} />
              )}

              {page && page.lastKey && !loadingMore ? (
                <Button className="mx-auto" style={{maxWidth: '300px'}} onClick={handleLoadMore}>Load More</Button>
              ) : null}
              {loadingMore && (
                <div
                  style={{ height: "100px" }}
                  className="skeleton-image mb-3"
                ></div>
              )}
              {!loadingMore && posts && posts.length < 1 && !loading && (
                <div className="text-center my-4">
                  <div className="text-center">
                    <IconMoodSad
                      style={{
                        height: "100%",
                        width: "100px",
                        textAlign: "center",
                      }}
                    />
                  </div>
                  <div>No Greivances found in DB</div>
                </div>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AllPostsPage
