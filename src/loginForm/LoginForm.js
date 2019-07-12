import React from 'react';
import './LoginForm.scss';

function LoginForm() {
    return (
        <>
            <form id="login-form" action="#" method="post">
                <fieldset className="button-top">
                    <label id="label" htmlFor="login">Email</label>
                    <input className="inputForm" type="text" id="login" name="login"/>
                    <div className="clearForm"/>
                    <label id="label" htmlFor="password">Password</label>
                    <input className="inputForm" type="password" id="password" name="password"/>
                    <div className="clearForm"/>Sign in with Google
                    <br/>
                    <input type="submit" className="button" name="commit"
                           value="Log in"/>
                </fieldset>
            </form>

        </>
    )
}


export default LoginForm;
