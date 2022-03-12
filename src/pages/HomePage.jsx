import { Link } from "react-router-dom";

const LoginPage = (props) => {
    return(
        <>
        <h1>Home Page</h1>
        <ol>
            <li><Link to="/login">Login Page</Link></li>
            <li><Link to="/about">About Page</Link></li> 
        </ol>
        </>
    );
}

export default LoginPage;