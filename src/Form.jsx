import React from "react";
import { useState } from "react";

function Form({ data }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        usernameError: true,
        passwordError: true,
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    /**
     *
     * @param {event} e
     */
    let handleSubmit = (e) => {
        e.preventDefault();
        if (username == data.username && password == data.password) {
            setIsLoggedIn(true);
        } else {
            setErrors({
                usernameError: username == data.username,
                passwordError: password == data.password,
            });
        }
    };
    return (
        <>
            {isLoggedIn && <div className="container">Welcome {data.name} !</div>}
            {!isLoggedIn && (
                <form className="login_form" action="#" method="post">
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}
                        value={username}
                    />
                    {!errors.usernameError && (
                        <div className="error">Invalid username</div>
                    )}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    {!errors.passwordError && (
                        <div className="error">Invalid password</div>
                    )}
                    <button type="submit" onClick={(e) => handleSubmit(e)}>
                        Login
                    </button>
                </form>
            )}
        </>
    );
}

export default Form;
