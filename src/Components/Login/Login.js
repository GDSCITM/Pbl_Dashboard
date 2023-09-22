import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <section className="vh-100">

      {/* image  */}
        <div className="rounded-circle pos">
          <img src="./Image.svg" className="img-fluid pos-img " alt="test" />
        </div>
      {/* container  */}
        <div className="container-fluid h-custom">
        {/* container 1st */}
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">

            </div>

          {/* container 2 */}
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

            {/* form element in a container  */}

            <form>
              <div class="d-flex flex-row align-items-center justify-content-center my-4">
                <p class="lead fw-normal text-center fs-3 ">Log in</p>
              </div>

              {/*  Email input*/}
              <div className="form-outline mb-4">
                <label className="form-label fs-6" for="form3Example3">
                  Username
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg border-dark rounded-border"
                  placeholder="Enter a valid email address"
                />
              </div>


              {/*  Password input  */}
              <div className="form-outline mb-3">
                <label className="form-label fs-6" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg border-dark rounded-border"
                  placeholder="Enter password"
                />
              </div>

              {/*  Checkbox  */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2 rounded-circle border-dark rounded-border"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>


              {/* sign in button  */}
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="w-100 btn btn-dark btn-lg px-auto rounded-border"
                >
                  Sign in
                </button>


              {/* register */}
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-primary p-2">
                    Register
                  </a>
                </p>
              </div>


              {/* sign in with */}
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-5">Sign in with</p>
                <button
                  type="button"
                  className="btn btn-dark btn-floating mx-3 rounded-circle"
                >
                  <i className="fa-brands fa-google"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-dark btn-floating mx-3 rounded-circle"
                >
                  <i className="fa fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-dark btn-floating mx-3 rounded-circle"
                >
                  <i class="fa-brands fa-linkedin fa-lg"></i>
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
