import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';




if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [user, setUser] = useState({
        isLoggedIn: false
    });
    const style = {
        width: "300px",
        border: "1px solid #f8793f",
        borderRadius: "20px",
        background: "white",
        padding: "10px",
        marginTop: "20px"
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const login = {
                    isLoggedIn: true,
                    email: email,
                    name: displayName
                }
                setUser(login)
                setLoggedInUser(login)
                history.replace(from)
            }).catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-4  offset-12 mt-5">
                    <input onClick={handleLogin} style={style} type="button" value="Login With Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;