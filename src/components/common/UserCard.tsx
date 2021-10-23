import React from "react"
import { Row, Col } from "react-bootstrap"
import { BasicUser, getUserFromId } from "../../api/users"

const errorUser: BasicUser = {
  key: "error_key",
  username: "User Not Found",
  first_name: "Unknown",
  last_name: "User",
  avatar: "https://avatarfiles.alphacoders.com/105/thumb-1920-105223.jpg",
  designation: "Unknown",
  type: "student",
  gender: "male",
}

function UserCard({ userId }) {
  const [user, setUser] = React.useState<BasicUser>(null)

  const getData = React.useCallback(async () => {
    getUserFromId(userId)
    const _user = await getUserFromId(userId)
    if (_user) {
      setUser(_user)
    } else {
      setUser(errorUser)
    }
  }, [])

  React.useEffect(() => {
    getData()
  }, [])

  
  if (!user) {
    return (
      <Row>
        <Col sm="auto">
          <div className="skeleton-avatar"></div>
        </Col>
        <Col>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </Col>
      </Row>
    )
  }

  return (
    <Row className="align-items-center">
      <Col sm="auto">
        <div className="avatar avatar-md avatar-rounded" style={{backgroundImage: `url(${user.avatar})`}} />
      </Col>
      <Col>
        <Row>
          <Col><strong>{`${user.first_name} ${user.last_name}`}</strong></Col>
        </Row>
        <Row>
          <Col>{capitalizeFirstLetter(user.type)}</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default UserCard

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

