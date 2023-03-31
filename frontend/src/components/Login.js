import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password, "566777");
      const { data } = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      localStorage.setItem("user", data.user.isAdmin);
      console.log(data.user);
      navigate("/homepage");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section class="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <form action="" onSubmit={handleSubmit}>
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Sign in</h3>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      class="form-control form-control-lg"
                      placeholder="Email"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      class="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>

                  <div class="form-check d-flex justify-content-start mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3">
                      Remember password
                    </label>
                  </div>

                  <button
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
