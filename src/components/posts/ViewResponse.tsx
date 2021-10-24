import React, { useRef, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { Response } from "../../api/posts"
import { formatDistanceToNow, parseJSON } from "date-fns"
import { IconClock } from "@tabler/icons"
import { BasicUser, getUserFromId } from "../../api/users"
import draftToHtml from "draftjs-to-html"

function ViewResponse({
  response,
  author,
  change,
}: {
  response: Response
  author: string
  change: JSX.Element
}) {
  const html = draftToHtml(JSON.parse(response.content))
  const [user, setUser] = React.useState<BasicUser>(null)

  const getData = React.useCallback(async () => {
    getUserFromId(response.author)
    const _user = await getUserFromId(response.author)
    if (_user) {
      setUser(_user)
    }
  }, [])

  React.useEffect(() => {
    getData()
  }, [])

  const date = formatDistanceToNow(parseJSON(response.published), {
    addSuffix: true,
  })

  const Badge = () => {
    if (user.key === author) {
      return <div className="badge bg-pink">Author</div>
    }
    if (user.type === "staff") {
      return <div className="badge bg-purple">{user.type}</div>
    }
    return <></>
  }

  return (
    <Row>
      <Col sm="12">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Col>
      {change}
      <Col>
        <div className="d-flex align-items-center">
          {user ? (
            <span
              className="avatar me-3 rounded"
              style={{ backgroundImage: `url(${user.avatar}` }}
            />
          ) : (
            <div className="skeleton-avatar mr-2" />
          )}
          <div>
            {user ? (
              <div>
                <strong>
                  {user.first_name} {user.last_name}
                </strong>{" "}
                <Badge />{" "}
              </div>
            ) : (
              <div className="skeleton-line" />
            )}
            <div className="text-muted">{date}</div>
          </div>
          <div className="ms-auto">
            {/* <div className="text-muted">
            <IconClock />
          </div> */}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ViewResponse
