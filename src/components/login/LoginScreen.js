import React from 'react';
import "./LoginScreen.css";
//history esta en los props de react router-dom junto con otros.
export const LoginScreen = ({history}) => {

    const handleLogin = ()=>{
        // history.push("/");
        //replace es utilizado para reemplazar todo el historial de navegación
        history.replace('/')
    }

    return (
        <div className="container-login">
            <h1>Login</h1>
            <hr/>

            <button
                className = "btn btn-primary"
                onClick={handleLogin}
            >
                Login

            </button>

        </div>
    )
}
