import { Row, Col, Container } from "react-bootstrap";
import CartCheckout from "./CartCheckout";
import CartDetail from "./CartDetail";

export const Cart = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1
                        className="text-capitalize fw-semibold py-5 mt-5 text-center"
                        style={{ fontSize: "3.125rem" }}
                    >
                        your cart
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col lg={8} xs>
                    <Row className="border-bottom py-2 text-uppercase text-muted">
                        <Col lg={5} xs>
                            <span>product</span>
                        </Col>
                        <Col lg={2} xs>
                            <span>price</span>
                        </Col>
                        <Col lg={2} xs>
                            <span>quantity</span>
                        </Col>
                        <Col lg={2} xs>
                            <span>total</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <CartDetail />
                </Col>

                <CartCheckout />
            </Row>
        </Container>
    );
};
