import { IconMoodSad } from '@tabler/icons'
import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { getMyPosts, Post } from '../../api/posts'
import PostsList from './PostsList'

function MyPosts() {

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
            <div className="text-center">
              <IconMoodSad
                style={{
                  height: "100%",
                  width: "100px",
                  textAlign: "center",
                }}
              />
            </div>
            <div>You don't created any Grievances yet.</div>
          </div>
        )}
      </Row>
    )
}

export default MyPosts
