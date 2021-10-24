import React from "react"
import { Row, Card, Col } from "react-bootstrap"
import { IconCalendarEvent, IconCalendarTime, IconUser } from "@tabler/icons"
import { format, parseJSON } from "date-fns"
import { Link } from "gatsby"

function PostsList({ posts }) {
  return (
    <>
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
                        <h4>{post.subject}</h4>
                      </Link>
                    </Col>

                    {/* <Col xs="auto" className="cursor-pointer">
                      <IconDotsVertical />
                    </Col> */}
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
                        <span>{format(parseJSON(post.modified), "p PP")}</span>
                      </Col>
                    ) : (
                      <></>
                    )}

                    <Col xs="auto" className="text-muted">
                      <IconUser />
                      <span className="text-capitalize">
                        {" "}
                        {post.authorName}
                      </span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
    </>
  )
}

export default PostsList
