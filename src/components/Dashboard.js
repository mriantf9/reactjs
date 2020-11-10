import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup } from 'reactstrap';
import NavbarComp from './NavbarComp';

const Dashboard = () => {
    const token = localStorage.getItem('tkn')

    //* need condition for access dashboard
    if (!token) {
        return <Redirect to="/" />
    }


    return (
        <Fragment>
            <div>
                <NavbarComp />
                <Container>
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-3">
                                    <label>Hobby</label>
                                    <input className="form-control" />
                                </div>
                                <div className="col-sm-3">
                                    <label>Favorite food</label>
                                    <input className="form-control" />
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <Button color="primary"><FontAwesomeIcon icon={faPlus} /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div >
        </Fragment>
    )
}

export default Dashboard