import React, { useState } from "react"
import {
  Card,
  Col,
  Form,
  Button,
  Container,
  Row,
  Alert,
  Fade,
} from "react-bootstrap"
import { IconCircleCheck, IconUserPlus } from "@tabler/icons"
import { register } from "../api/users"
import Seo from "../components/seo"
import { Link } from "gatsby"

const schema = [
  "username",
  "email",
  "first_name",
  "contact_number",
  "type",
  "address",
  "state",
  "pin",
  "password",
  "repeat_password",
]

function registerPage() {
  const [error, setError] = useState<string>(null)
  const [loading, setLoading] = useState(() => false)
  const [show, setShow] = useState(() => false)
  const [form, setForm] = useState({})
  const [registred, setRegisterd] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    console.log("Submitted ", form)
    let failed = false
    schema.forEach((element: string) => {
      if (!form.hasOwnProperty(element)) {
        setShow(true)
        setError(`${element.replace("_", " ")} field is required.`)
        failed = true
        return
      }
      if (form[element].length < 4) {
        setShow(true)
        setError(`An error in value of ${element.replace("_", " ")}`)
        failed = true
        return
      }
    })

    if (failed) {
      setLoading(false)
      return
    }

    try {
      await register(form)
      setRegisterd(true)
    } catch ({ response }) {
      setShow(true)
      if (response && response.status === 422) {
        console.log(response.data.detail.msg)
        let errorTexts = ""
        response.data.detail.forEach(element => {
          errorTexts += element.msg + ". "
        })
        setError(errorTexts)
      } else if (response && response.status === 401) {
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

  if (registred)
    return (
      <div>
        <Seo title="Register" />
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
                <p className="text-center mb-0">
                  <IconCircleCheck
                    style={{
                      height: "100%",
                      width: "100px",
                      textAlign: "center",
                    }}
                    color="green"
                  />
                </p>
                <h2 className="text-center">Registered Successfully!</h2>

                <Row className="justify-content-center align-items-center">
                  <Col xs="auto">
                    <div
                      className="spinner-border text-blue"
                      role="status"
                    ></div>
                  </Col>
                  <Col xs="auto">Redirecting to Login Page.</Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    )

  return (
    <div>
      <Seo title="Register" />
      <div className="page page-center">
        <Container className="container py-4" style={{ maxWidth: "800px" }}>
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
              <div>
                <h1 className="text-center mt-2">Register</h1>
                <hr />

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
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          name="email"
                          onChange={handleChange}
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>
                      <hr />
                      <Row>
                        <Col xs="6">
                          <Form.Group className="mb-3" controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              name="first_name"
                              onChange={handleChange}
                              type="text"
                              placeholder="Enter first name"
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              name="last_name"
                              onChange={handleChange}
                              type="text"
                              placeholder="Enter last name"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          name="address"
                          onChange={handleChange}
                          type="text"
                          placeholder="Enter address"
                        />
                      </Form.Group>
                      <Row>
                        <Col xs="6">
                          <Form.Group className="mb-3" controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                              onChange={handleChange}
                              name="state"
                              type="text"
                              placeholder="Enter state"
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="pin">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                              onChange={handleChange}
                              name="pin"
                              type="number"
                              placeholder="Enter pin"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3" controlId="contact_number">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name="contact_number"
                          type="number"
                          placeholder="Enter contact number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md="6" style={{ maxWidth: "350px" }}>
                      <Form.Group className="mb-3" controlId="type">
                        <Form.Label>Account Type</Form.Label>
                        <Form.Select name="type" onChange={handleChange}>
                          <option>Select Account Type</option>
                          <option value="student">Student</option>
                          <option value="parent">Parent</option>
                          <option value="staff">Staff</option>
                        </Form.Select>
                      </Form.Group>
                      <hr />
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="repeat_password">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name="repeat_password"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          name="terms"
                          checked
                          readOnly={true}
                          type="checkbox"
                          onChange={handleChange}
                          label="I accept all terms and conditions"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row style={{ textAlign: "right" }}>
                    <Col>
                      <Button variant="primary" type="submit">
                        <IconUserPlus /> Register
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Card.Body>
            {loading && (
              <div className="progress progress-sm">
                <div className="progress-bar progress-bar-indeterminate"></div>
              </div>
            )}
          </Card>
          <Row className="align-items-center justify-content-center mt-3">
            <Col xs="auto">
              <Link to="/login">Login to your account</Link>
            </Col>
            {/* <Col xs="auto">
              <Link to="/login">Forgot Password</Link>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default registerPage
