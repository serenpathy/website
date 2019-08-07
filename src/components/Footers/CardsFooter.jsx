/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container className="container-lg">
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  Serenpathy OÜ . Sepapaja 6, Tallinn 15551, Estonia
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">

                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Terms of services . Privacy Policy
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
