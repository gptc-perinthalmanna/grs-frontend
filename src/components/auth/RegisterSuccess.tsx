import React from 'react'
import { IconCircleCheck } from '@tabler/icons'
import { Col, Row } from 'react-bootstrap'

function RegisterSuccess() {
    return (
        <>
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
        </>
    )
}

export default RegisterSuccess
