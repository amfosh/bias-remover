import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const Home = () => (
    <div>

        <Row className="m-4">
            <Col>1 of 3</Col>
            <Col xs={6}>2 of 3 (wider)</Col>
        </Row>
    </div>
)