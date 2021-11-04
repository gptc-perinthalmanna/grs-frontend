import React, { useState } from "react"
import { Form, Col, Row } from "react-bootstrap"
import { register_custom } from "../../api/users"
import RegisterSuccess from "./RegisterSuccess"

function RegisterStudent({ setLoading }) {
  const [error, setError] = useState<string>(null)
  const [show, setShow] = useState(() => false)
  const [registred, setRegisterd] = useState(false)
  const [form, setForm] = useState({
    id: "",
    password: "",
    verify_password: "",
    account_type: "student",
  })

  if (registred) {
    return <RegisterSuccess />
  }

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    if (form.password !== form.verify_password) {
      setError("Passwords do not match")
    } else {
      await register_custom(form)
      setRegisterd(true)
    }
    setLoading(false)
  }

  return (
    <div>
      <div>
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
          <Row className="justify-content-end">
            <Col md="6" style={{ maxWidth: "350px" }}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="username"
                  type="text"
                  placeholder="Enter username"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
            </Col>
            <Col md="6" style={{ maxWidth: "350px" }}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Account Type</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="account_type"
                  type="text"
                  disabled
                  value="student"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="repeat_password"
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default RegisterStudent
