import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Card, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeCarousal from "../components/specific/HomeCarousal"
import AnnouncementTicker from "../components/specific/AnnouncementTicker"
import TendersList from "../components/specific/TendersList"
import { Icon3dCubeSphere, IconMail, IconPhone } from "@tabler/icons"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container fluid="xl" className="page-body">
      <Row className="row-deck row-cards">
        {/* Home Slider */}
        <Col lg="8">
          <Card>
            <Card.Body>
              <HomeCarousal />
            </Card.Body>
          </Card>
        </Col>
        {/* Announcements */}
        <Col lg="4">
          <Card>
            <Card.Body>
              <Card.Title>Announcements</Card.Title>
              <AnnouncementTicker />
            </Card.Body>
          </Card>
        </Col>
        {/* Mission */}
        <Col md="6" lg="3">
          <Card>
            <Card.Body>
              <Card.Title>Mission</Card.Title>
              <p>
                Impart quality technical education and skills to develop
                engineering professionals to meet the needs of industry and
                society. Facilitate professional interactions between industry
                and engineers and to promote innovation and entrepreneurship
                Inculcate moral values and life ethics in engineering
                professionals to serve the society.{" "}
              </p>
            </Card.Body>
          </Card>
        </Col>
        {/* Vision */}
        <Col md="6" lg="3">
          <Card>
            <Card.Body>
              <Card.Title>Vision</Card.Title>
              <p>
                To be a centre of excellence to mould technically competent
                engineers for industry expertise and social development.
              </p>
            </Card.Body>
          </Card>
        </Col>
        {/* About  */}
        <Col md="12" lg="6">
          <Card>
            <Card.Body>
              <Card.Title>About GPTC Perinthalmanna</Card.Title>
              <p>
                Government Polytechnic College Perinthalmanna is one of the
                leading institutions of its kind in Kerala. Academically and
                otherwise its position in the state is unchallenged. Activities
                focusing on the result enhancement and the overall development
                of the students to make them excel in their respective fields
                are remarkable. The college has a rich tradition to look back.
                The present is praiseworthy, so the future has to be envisioned
                in the light of the glorious past and the meritorious present
              </p>
            </Card.Body>
          </Card>
        </Col>
        {/* Principals message  */}
        <Col xl="6" lg="6" md="12">
          <Card>
            <Card.Body>
              <Row>
                <Col md="6" sm="12">
                  <div className="text-center px-0 mb-2">
                    <StaticImage
                      src="../images/principal.jpeg"
                      alt="Principal Photo"
                      className="w-100"
                      style={{ maxWidth: "300px" }}
                    />
                    <h3 className="m-0">Pradeep M</h3>
                    <div className="text-muted">Principal</div>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <Card.Title>Principals Message</Card.Title>
                  The college is responsible and competent for the development
                  of technical education and has tried to retain its glory by
                  implementing schemes to achieve academic excellence and
                  improving administrative performance. Our various programmes
                  and initiatives includes formation of various academic
                  committees, prompt utilization of government funds,
                  enhancement of infrastructure and other facilities and various
                  activities to boost the academic performance of students and
                  staff.
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Tender and Qoutations */}
        <Col md="12" lg="6">
          <Card>
            <Card.Body>
              <Card.Title>Tenders and Quotations</Card.Title>
              <TendersList />
            </Card.Body>
          </Card>
        </Col>
        {/* Image Gallery */}
        <Col lg="6">
          <Card>
            <Card.Body>
              <Link to="/other/album">
                <Card.Title>Image Gallery </Card.Title>{" "}
              </Link>
              <HomeCarousal />
            </Card.Body>
          </Card>
        </Col>
        {/* Partnerships */}
        <Col lg="6">
          <Card>
            <Card.Body>
              <Card.Title>Partnerships</Card.Title>
              <Row className="row-deck row-cards">
                <div className="col-md-6">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-blue text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                            <Icon3dCubeSphere />
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            Softibuy Pvt Ltd
                          </div>
                          <div className="text-muted">
                            Kinfra Info Park, Kakkanad, Kerala, India
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-blue text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                            <Icon3dCubeSphere />
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            Coronus Steel Pvt Ltd
                          </div>
                          <div className="text-muted">Bangalore, India</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-blue text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                            <Icon3dCubeSphere />
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            ICT Kerala Pvt Ltd
                          </div>
                          <div className="text-muted">
                            Kozhikode, Kerala, India.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-blue text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                            <Icon3dCubeSphere />
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            CAD CENTER Educational Enterprices Ltd.
                          </div>
                          <div className="text-muted">
                            MG Road, Cochin, Kerala, India
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
