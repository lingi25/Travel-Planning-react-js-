import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {

  return (
    <>

      <div className="start text-center">
        <h2>*Signup to get exciting offers!!</h2>
      </div>
      <div className="wrapper">
        <div className="inner-warpper text-center">
          <h2 className="title">Signup</h2>
          <form action="" id="formvalidate">
            <div className="input-group">

              <input className="form-control" name="userName" id="userName" type="text" placeholder="User Name" autoComplete="off" />
              <span className="lighting"></span>
            </div>
            <div className="input-group">

              <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="Password" autoComplete="off" />
              <span className="lighting"></span>
            </div>

            <div className="input-group">

              <input className="form-control" name="userPassword" id="confirmPassword" type="password" placeholder="Confirm Password" autoComplete="off" />
              <span className="lighting"></span>
            </div>

            <div className="input-group">

              <input className="form-control" name="number" id="number" type="text" placeholder="Mobile number" autoComplete="off" />
              <span className="lighting"></span>

            </div>
            <div className="input-group">

              <input className="form-control" name="email" id="email" type="text" placeholder="Email" autoComplete="off" />
              <span className="lighting"></span>
            </div>

            <button type="submit" id="Signup">Signup</button>
            <div className="clearfix supporter">
              <div className="pull-left remember-me">
                <input id="rememberMe" type="checkbox" />
                <label htmlFor="rememberMe">I agree </label>
              </div>
              <Link className="forgot pull-right " to="/">Terms and Conditions</Link>
            </div>
          </form>
        </div>
        <div className="signup-wrapper text-center">
          <Link to="/Login">Already have an accout? <span className="text-primary">Login</span></Link>
        </div>
      </div>
    </>
  )
}

export default Signup;
