import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="d-flex justify-content-center">
      {/* Login */}
      <aside className="p-3">
        <div className="card">
          <article className="card-body">
            <h4 className="card-title mb-4 mt-1">Sign in</h4>
            <form onSubmit={onLogin}>
              <div className="form-group mb-4">
                <label>Your username</label>
                <input
                  name=""
                  className="form-control"
                  placeholder="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <label>Your password</label>
                <input
                  className="form-control"
                  placeholder="******"
                  type="password"
                  onChange={(e) => setSecret(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </form>
          </article>
        </div>
      </aside>
  
      {/* Signup */}
      <aside className="p-3">
        <div className="card">
          <article className="card-body">
            <h4 className="card-title mb-4 mt-1">Sign up</h4>
            <form onSubmit={onSignup}>
              <div className="form-group mb-3">
                <label>Your username</label>
                <input
                  name=""
                  className="form-control mt-2"
                  placeholder="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Your password</label>
                <input
                  className="form-control mt-2"
                  placeholder="******"
                  type="password"
                  onChange={(e) => setSecret(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Your Email</label>
                <input
                  className="form-control mt-2"
                  placeholder="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>First name</label>
                <input
                  className="form-control mt-2"
                  placeholder="first name"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Last name</label>
                <input
                  className="form-control mt-2"
                  placeholder="last name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign up
                </button>
              </div>
            </form>
          </article>
        </div>
      </aside>
    </div>
  );
  }  

export default AuthPage;
