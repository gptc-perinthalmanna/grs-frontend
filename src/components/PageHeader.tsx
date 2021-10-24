import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import { IconArrowBack } from "@tabler/icons"
import { Link } from "gatsby"

const SecondaryButtonDefault = (
  <Link to="/dashboard">
    <Button className="d-none btn-secondary d-sm-inline-block">
      <IconArrowBack />
      Back to Dashboard
    </Button>
    <Button className="d-sm-none btn-icon">
      <IconArrowBack />
    </Button>
  </Link>
)

function PageHeader({
  preTitle = "Dashboard",
  title,
  PrimaryButton = null,
  SecondaryButton = SecondaryButtonDefault,
}: {
  preTitle?: string
  title: string
  PrimaryButton?: JSX.Element
  SecondaryButton?: JSX.Element
}) {
  return (
    <div className="page-header mb-4">
      <Row className="align-items-center">
        <Col>
          <div className="page-pretitle">{preTitle}</div>
          <h2 className="page-title">{title}</h2>
        </Col>
        <Col className="col-auto ms-auto">
          <div className="btn-list">
            {PrimaryButton && PrimaryButton}
            {SecondaryButton}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PageHeader
