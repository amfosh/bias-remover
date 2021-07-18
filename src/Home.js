import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Input } from './components/Input';
import './index.css'

export const Home = () => (
    <div>

        <Row className="m-4">
            <Col>1 of 3</Col>
            <Col xs={6}><Input/></Col>
        </Row>
    </div>
)