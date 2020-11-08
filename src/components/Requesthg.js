import React, { Component, useState } from 'react';
import NavbarComp from './NavbarComp';
import { Redirect, Link } from 'react-router-dom';
import {
    Container, Row, Button, Modal,
    ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap';

const Requesthg = (props) => {
    const token = localStorage.getItem('tkn')
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    //* need condition for access dashboard
    if (!token) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <NavbarComp /><br />
            <Container>
                <div className="container">
                    <h2>Request Hygiene Check</h2>
                    <Button color="success" onClick={toggle} size="sm">Add Request</Button>
                    <div className="row">
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Request Job</ModalHeader>
                            <ModalBody>
                                <label>User</label>
                                <Input type="text" name="user" size="sm" readOnly />
                                <label>ENM</label>
                                <Input type="select" name="enm" size="sm" readOnly>

                                </Input>
                                <label>Select Node</label>
                                <Input type="text" name="user" size="sm" readOnly />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={toggle}>Create Job</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Requesthg