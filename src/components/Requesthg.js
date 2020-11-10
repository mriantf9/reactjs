import React, { Component, Fragment, useState } from 'react';
import NavbarComp from './NavbarComp';
import { Redirect, Link } from 'react-router-dom';
import {
    Container, Row, Button, Modal,
    ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap';

const Requesthg = (props) => {
    const token = localStorage.getItem('tkn')
    const uname = localStorage.getItem('user')
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [selectUname, setSelectUname] = useState(uname);
    const [selectENM, setSelectENM] = useState('');
    const [selectNode, setSelectNode] = useState('');


    //* need condition for access dashboard
    if (!token) {
        return <Redirect to="/" />
    }
    const onChangeENM = (e) => {
        const value = e.target.value
        setSelectENM(value)
        // setError('')
    }
    const onChangeNode = (e) => {
        const value = e.target.value
        setSelectNode(value)
        // setError('')
    }

    const onChangeUser = (e) => {
        const value = e.target.value
        setSelectUname(value)
    }



    return (
        <Fragment >
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
                                    <Input type="text" name="user" size="sm" readOnly value={selectUname} onChange={onChangeUser} />
                                    <label>ENM</label>
                                    <Input type="select" name="enm" size="sm" value={selectENM} onChange={onChangeENM}>
                                    </Input>
                                    <label>Select Node</label>
                                    <Input type="text" name="node" size="sm" value={selectNode} onChange={onChangeNode} required={true} />
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

        </Fragment>

    )
}

export default Requesthg