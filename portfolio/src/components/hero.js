import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Hero(props) {
    return(
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                    { props.title && <h1>{props.title}</h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;