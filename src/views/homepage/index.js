import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="7">
                      <h1 className="display-3 text-white">
                        Find the right mental health provider. Quicker.
                      </h1>
                      <p className="lead text-white">
                        A web platform for professional therapists featuring
                        verified reviews and the ability to book online. Find
                        the right therapist using reviews from their previous
                        clients and book them instantly.
                        <br />
                        <br />
                        <small>
                          Our product is still in development but we can notify
                          you for an early access!
                        </small>
                      </p>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-envelope" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your email address"
                            type="text"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                          <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="secondary"
                            href="#"
                          >
                            <span className="btn-inner--text">Notify Me</span>
                          </Button>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col className="order-md-2" md="5">
                      <img
                        alt="..."
                        className="img-fluid"
                        src={require("assets/img/theme/face.png")}
                      />
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid text-center">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            1
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Search Therapists
                          </h6>
                          <p className="description mt-3">
                            Find the right therapist using the advanced search
                            metrics such as qualities, location, specialities,
                            etc.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            2
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Book a therapist
                          </h6>
                          <p className="description mt-3">
                            Setting up a short call with the therapist before
                            you see them. Then book an appointment with them.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-3">
                            3
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Review the experience
                          </h6>
                          <p className="description mt-3">
                            Your review counts! Help others who are looking for
                            therapists find the right therapists with your
                            review.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="12">
                  <h1>Features</h1>
                  <p>
                    To help you find the right therapist the easiest and
                    quickest we are developing the following the following
                    features.
                  </p>
                </Col>
                <Col className="order-md-2" md="6">
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-check-bold" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Comprehensive Search
                          </h5>
                          <p>
                            will increase chances to find the right therapist
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-check-bold" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Review Solicitation
                          </h5>
                          <p>
                            will gain potential clients’ trust from day one and
                            eliminate biases
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-check-bold" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Peer Endorsements
                          </h5>
                          <p>
                            will increase personal relationships, reputation and
                            trust
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="order-md-3" md="6">
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-check-bold" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">Online Booking</h5>
                          <p>
                            will help reduce the time spend on back and forth
                            communication.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-check-bold" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Qualitative Rating
                          </h5>
                          <p>
                            will help clients find the right therapists that fit
                            their personality and needs
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-check-bold" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Therapists Profiles
                          </h5>
                          <p>will increase visibility and easily searchable</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">
                    Are you a therapist? Claim your profile or get listed with
                    us.
                  </h2>
                  <p className="lead text-white">
                    Once you are our user you will be able to manage your
                    presence. Add your bio, specialities. Manage reivews you
                    receive from Serenpathy users. Accept bookings.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-user text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Add your profile details</h5>
                  <p className="text-white mt-3">
                    Let the clients know who you are and what your thearpy
                    approaches are. Introduce yourself with a video.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-shield text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Manage Reviews</h5>
                  <p className="text-white mt-3">
                    Reply to customer feedback directly at the same time verify
                    your clients.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-calendar text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Accpet Bookings</h5>
                  <p className="text-white mt-3">
                    Help clients connect with you in the moment they're
                    searching.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card
                    className="shadow"
                    style={{ backgroundColor: "#f9f9f9" }}
                  >
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">
                        Learn more and start getting clients
                      </h4>
                      <p className="mt-0">
                        Thanks for showing interest! We will get back to you
                        within 24hr.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-user" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-envelope" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your Email Address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-certificate" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your Degree(e.g. PhD, LCSW, LMHC, LCAT)"
                            type="text"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-location-arrow" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your Location"
                            type="text"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="primary"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
