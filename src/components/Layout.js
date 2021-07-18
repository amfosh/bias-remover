import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container className='m-6'>
        {props.children}
    </Container>
)