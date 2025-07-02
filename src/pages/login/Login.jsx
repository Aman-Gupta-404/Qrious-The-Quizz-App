import { useState } from "react";
import loginImage from "../../assets/login.png";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} />
      </div>
      <div className="login-right">
        <div className="login-header">
          <h1>Login</h1>
          <p>Start your quizzing journey now!</p>
        </div>
        <div className="login-form">
          <div className="login-form-inp">
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="login-form-inp">
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="login-form-inp">
            <button>Submit</button>
          </div>
          <div className="login-form-inp">
            <p>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
