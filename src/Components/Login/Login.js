import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";


function Login() {

  // taken from previous project (
  const [Data, setData] = useState(null);
  

  useEffect(() => {
    // Replace 'API_ENDPOINT' with your actual API endpoint
    const apiUrl = 'API_ENDPOINT';

    // Using Axios (if installed)
    // axios.get(apiUrl)
    //   .then(response => {
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

    // Using the Fetch API
    fetch(apiUrl)
      .then(response => response.json())
      .then(Data => {
        setData(Data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
// )


  // another way of writing api logic ,depends on the api end point ,on how it works
  const createUser = async() => {
    // write the api logic 
  } 




  // setmail use state  {
  const [email, setemail] = useState("Roll no./Email Address")
  

  // password & eye function {
  const [password, setPassword] = useState("Enter Password");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-regular fa-eye-slash");

  const handleToggle = () => {
    if (type === "password") {
      setIcon("fa-regular fa-eye");
      setType("text");
    } else {
      setIcon("fa-regular fa-eye-slash");
      setType("password");
    }
  };



  return (
    <div>
      <section className="vh-100">
        {/* container  */}
        <div className="container-fluid h-custom">



          {/* container 1st */}
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">




              {/* image  */}
              <div className="pos rounded-circle">
                {/* comment it to remove circle */}
                <img
                  src="./Image.svg"
                  className="img-fluid position-start-10"
                  alt="test"
                />
              </div>
            </div>




            {/* container 2 */}
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              


              {/* form element in a container  */}
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center mb-3">
                  <p className="lead fw-normal text-center fs-3">Log in</p>
                </div>




                {/*  Email input*/}
                <div className="form-outline mb-4">
                  <label className="form-label fs-6" htmlFor="form3Example3">
                    Username
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg border-dark rounded-pill"
                    placeholder= {email}
                    onChange={(event) => setemail(event.target.value)}
                  />
                </div>




                {/*  Password input  */}
                <div className="form-outline mb-3 flex">
                  <label className="form-label fs-6" htmlFor="form3Example4">
                    Password
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type={type}
                      id="form3Example4"
                      className="form-control form-control-lg border-custom"
                      placeholder={password}
                      onChange={(event) => setPassword(event.target.value)}
                      autoComplete="current-password"
                    />
                    <span
                      className="input-group-text border-dark rounded-end-pill bg-white"
                      onClick={handleToggle}
                    >
                      <i className={`${icon}`} />
                    </span>
                  </div>
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
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>




                {/* sign in button  */}
                <div className="text-center text-lg-start mt-2 pt-2">
                  <button
                    type="button"
                    className="w-100 btn btn-dark btn-lg px-auto rounded-pill"
                    onClick = {createUser}
                  >
                    Sign in
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
