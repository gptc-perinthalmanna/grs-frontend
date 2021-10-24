import React, { useState, useEffect } from "react"
import { Container, Row, Button } from "react-bootstrap"
import {
  IconList,
  IconMoodSad,
  IconPlus,
} from "@tabler/icons"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { adminRoles, getMyPosts, Post } from "../../api/posts"
import { Link } from "gatsby"
import PageHeader from "../../components/PageHeader"
import PostsList from "../../components/posts/PostsList"
import { getCurrentUser } from "../../api/users"

const MyPostsPage = () => {
  const isAdmin = adminRoles.includes(getCurrentUser().type)
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
          SecondaryButton={isAdmin ? <Link to="/posts/all-posts">
          <Button className="d-none d-sm-inline-block">
            <IconList />
            All Grievances
          </Button>
          <Button className="d-sm-none btn-icon">
            <IconPlus />
          </Button>
        </Link> : null}
          PrimaryButton={
            <Link to="/posts/new-post">
              <Button className="d-none btn-secondary d-sm-inline-block">
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
          <PostsList posts={posts} />

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
              <div>You don't created any Grievances yet.</div>
            </div>
          )}
        </Row>
      </Container>
    </Layout>
  )
}

export default MyPostsPage
