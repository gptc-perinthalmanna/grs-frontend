import { Link } from 'gatsby'
import React, {useState} from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { change_password, getCurrentUser, login } from '../../api/users'
import Seo from '../../components/seo'

function PasswordChangePage() {
    const [error, setError] = useState<string>(null)
  const [loading, setLoading] = useState(() => false)
  const [show, setShow] = useState(() => false)
  const user = getCurrentUser()
  const [form, setForm] = useState(() => ({
      username: user.username,
      password: "",
      new_password: "",
      repeat_password: "",
  }))

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
        await change_password(form)
        let fd = new FormData()
        fd.append('username', form.username)
        fd.append('password', form.new_password)
        await login(fd)
      window.location.href = "/"
    } catch ({ response }) {
      setShow(true)
      if (response && response.status === 422) {
        console.log(response.data.detail.msg)
      }
      if (response && response.status === 406) {
        setError(response.data.detail)
      } else setError("An unknown error occured.")

      setLoading(false)
    }
  }

  function handleChange(e) {
    let _form = form
    _form[e.target.name] = e.target.value
    setForm(_form)
  }

  return (
    <div>
      <Seo title="Change your password" />
      <div className="page page-center">
        <Container className="container-tight py-4">
          <div className="text-center mb-4">
            <img
              src="/logo.png"
              style={{ filter: "invert(50%)" }}
              height={56}
              alt=""
            />
          </div>
          <Card className="card-md">
            <Card.Body>
              <div className='mb-2 pb-2'>
                <h1 className="text-center my-2">Change your password</h1>
                {show && (
                  <div
                    className="alert alert-important alert-danger alert-dismissible"
                    role="alert"
                  >
                    <div className="d-flex">
                      <div>{error}</div>
                    </div>
                    <b
                      className="btn-close btn-close-white"
                      data-bs-dismiss="alert"
                      aria-label="close"
                      onClick={() => setShow(false)}
                    ></b>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Enter username"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formNewPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      name="new_password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="RepeatPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                      name="repeat_password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Change Password
                  </Button>
                </Form>
              </div>
            </Card.Body>
            {loading && (
              <div className="progress progress-sm">
                <div className="progress-bar progress-bar-indeterminate"></div>
              </div>
            )}
          </Card>
        </Container>
      </div>
    </div>
  )
}

export default PasswordChangePage
