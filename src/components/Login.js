import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {
    Alert
} from 'reactstrap';

const Login = () => {

    //! buat state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    //* Validation for token is available, cannot access the login page
    const token = localStorage.getItem('tkn')
    if (token) {
        return <Redirect to="/dashboard" />
    }

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
        setError('')
    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        setError('')
    }

    const submitLogin = () => {
        const data = {
            username: username,
            password: password
        }
        // console.log(data);

        axios.post('http://localhost:3010/login', data)
            .then(result => {
                if (result) {
                    localStorage.setItem('tkn', result.data.token)
                    setRedirect(true)
                }
            })
            .catch(e => {
                setError(e.response.data.message);
            })
    }

    return (
        <Fragment>
            {
                redirect && (
                    < Redirect to="/dashboard" />
                )
            }
            <div style={{ marginTop: "20px" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card border-primary mb-3" style={{ maxWidth: "18rem;" }}>
                                <div className="card-header">Please Sign In</div>
                                <div className="card-body text-secondary">
                                    {
                                        error && (
                                            <Alert color="danger" className="text-center">
                                                {error}
                                            </Alert>
                                        )
                                    }
                                    <div className="form-group">
                                        <label>Username or Email</label>
                                        <input className="form-control" placeholder="username or email" type="text" value={username} onChange={onChangeUsername} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" placeholder="password" type="password" value={password} onChange={onChangePassword} />
                                    </div>
                                    <div className="text-center">
                                        <p className="small">Don't have an account ? <Link to="/register"> Create One</Link>
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-md btn-primary btn-block" onClick={submitLogin}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;