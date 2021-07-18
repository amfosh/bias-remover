import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const Input = () => (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={20} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
)