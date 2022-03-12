import { Link } from 'react-router-dom';
import './css/LoginPage.css';

const LoginPage = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`UserName : ${e.target.email.value} Password : ${e.target.password.value}`);
    }

    return(
        <div className="loginForm" >
            <div className="col-md-6 col-sm-12">
                <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email </label>
                        <input type="email" className="form-control" placeholder="Email" name="email" required/>
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" name="password" required/>
                    </div>

                    <button type="submit" className="btn btn-black">Login</button>
                    <Link to="/register"><button type="submit" className="btn btn-secondary">Register</button></Link>
                </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;