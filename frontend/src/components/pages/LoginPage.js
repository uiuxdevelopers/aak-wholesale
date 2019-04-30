import React from "react";
import { Link } from "react-router-dom";



const LoginPage = () => (
    <div class="ui  container"> 
        <form class="ui form">
            <div class="field">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div class="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="password" />
            </div> 
            <button class="ui button primary" type="submit">Login</button>
        </form>
    </div>
)


export default LoginPage;
