import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {
    Alert
} from 'reactstrap';

const Register = () => {

    //! buat state
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const [error, setError] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
        setError('')
    }
    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
        setError('')

    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        setError('')

    }

    const registerKlik = () => {
        const data = {
            username: username,
            email: email,
            password: password
        }

        axios.post('http://localhost:3010/register', data)
            .then(result => {
                if (result) {
                    if (result.data) {
                        setUsername('')
                        setEmail('')
                        setPassword('')
                        setAlert(result.data.message)
                        setTimeout(() => {
                            setAlert('')
                        }, 3000);
                    }
                }
            })
            .catch(e => {
                setError(e.response.data.message);
            })
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card border-primary mb-3" style={{ maxWidth: "18rem;" }}>
                            <div className="card-header">Register Account</div>
                            <div className="card-body text-secondary">
                                {
                                    error && (
                                        <Alert color="danger" className="text-center">
                                            {error}
                                        </Alert>
                                    )
                                }
                                {
                                    alert && (
                                        <Alert color="success" className="text-center">
                                            {alert}
                                        </Alert>
                                    )
                                }
                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control" placeholder="username" type="text" value={username} onChange={onChangeUsername} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" placeholder="Email" type="text" value={email} onChange={onChangeEmail} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" placeholder="password" type="password" value={password} onChange={onChangePassword} />
                                </div>
                                <div className="text-center">
                                    <p className="small">Have an Account ? <Link to="/">Login</Link>
                                    </p>
                                </div>
                                <button className="btn btn-md btn-primary btn-block" onClick={registerKlik}>Register now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;