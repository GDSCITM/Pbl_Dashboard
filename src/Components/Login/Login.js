import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
        <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5 bg-danger rounded-circle">
        <img src="./Image.svg"
          className="img-fluid " alt = "test"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          

        <div class="d-flex flex-row align-items-center justify-content-center my-4">
            <p class="lead fw-normal text-center fs-2 ">Log  in</p>

        </div>

          {/*  Email input*/}
          <div className="form-outline mb-4">
            <label className="form-label fs-6" for="form3Example3">Username</label>
            <input type="email" id="form3Example3" className="form-control form-control-lg border-dark"
              placeholder="Enter a valid email address" />
          </div>

          {/*  Password input  */}
          <div className="form-outline mb-3">
            <label className="form-label fs-6" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" className="form-control form-control-lg border-dark"
              placeholder="Enter password" />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/*  Checkbox  */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2 rounded-circle border-dark" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="w-100 btn btn-primary btn-lg px-auto"
              >Sign in</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-primary">Register</a></p>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>


          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-5">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-3">
            <i className="fa-brands fa-google"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-3">
              <i className="fa fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-3">
            <i class="fa-brands fa-linkedin fa-lg"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        
    </div>
  )
}

export default Login