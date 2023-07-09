import React from 'react'
import './SignIn.css';
import { useHistory } from 'react-router-dom';
function SignIn() {
    const history = useHistory();
    return (
        <div>



            <div id="card">
                <div id="card-content">
                    <div id="card-title">
                        <h2>LOGIN</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form method="post" class="form">
                        <label for="user-email" className="la-email" >
                            &nbsp;Email
                        </label>
                        <input id="user-email" className="form-content" type="email" name="email" autocomplete="on" required />
                        <div className="form-border"></div>
                        <label for="user-password" className="la-pass" >&nbsp;Password
                        </label>
                        <input id="user-password" className="form-content" type="password" name="password" required />
                        <div className="form-border"></div>
                        <a href="#">
                            <legend id="forgot-pass">Forgot password?</legend>
                        </a>
                        <input onClick={() => history.push('/Dashboard')} id="submit-btn" type="submit" name="submit" value="LOGIN" />
                        <a href="/SignUp" onClick={() => history.push('/SignUp')} id="signup">Don't have account yet?</a>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SignIn;

