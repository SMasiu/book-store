import React from 'react';
import '../../shared-css/login-form.css';
import Button from '../button/button';
import Box from '../box/box';
import {Link} from 'react-router-dom';
import './register-content.css';

const RegisterContent = () => {

    const handleRegister = () => { }

    return (
        <section className="login-wrapper">
            <div className="login-section-1">

                <h1>Register</h1>

                <input className="inp-secondary" placeholder="email"/>

                <input className="inp-secondary" placeholder="nick"/>

                <input className="inp-secondary" placeholder="password" type="password"/>

                <input className="inp-secondary" placeholder="confirm password" type="password"/>

                <footer className="form-footer">
                    <div onClick={handleRegister}>
                        <Button>Register</Button>
                    </div>
                </footer>

                <div className="devider">or</div>

                <div className="redirect-wrapper">

                    <Link to="/login">
                        <Button>Login here</Button>
                    </Link>
                    
                </div>

                <aside className="img-wrapper">
                    <div className="inner-image-wrapper">
                        <div className="img-w-reg-1">
                            <Box>
                                <img src="write.jpeg" alt="login" />
                            </Box>
                        </div>
                        <div className="img-w-reg-2">
                            <Box>
                                <img src="vote.jpg" alt="login" />
                            </Box>
                        </div>
                        <div className="img-w-reg-3">
                            <Box>
                                <img src="read.jpeg" alt="login" />
                            </Box>
                        </div>
                    </div>
                </aside>

            </div>
        </section>
    )
}

export default RegisterContent;