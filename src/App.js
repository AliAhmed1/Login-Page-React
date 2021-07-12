import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="loader">Loading Your Experience</div>}>
        <div>
          <p className="steps"><b>Step 1 of 3 </b><b style={{ paddingLeft: 10 }}>.</b> <span style={{ paddingLeft: 10 }}>.</span>  <span style={{ paddingLeft: 10 }}>.</span></p>
        </div>
        <div className="formhere">
          <div>
            <h1>Let's set up your account</h1>
            <p>Already have an account? <span ><a href="!#" style={{ paddingLeft: 4, textDecoration: "none", color: "blue" }}><b> Sign in </b></a></span></p>
          </div>
          <form>
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Email address" />
            <select id="user" name="I would describe my user type as">
              <option>I would describe my user type as</option>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </select>
            <div>
              <input type="password" name="password" autocomplete="current-password" required="" id="id_password" placeholder="Password" />
              <span className="fas fa-eye"></span>
            </div>
            <p>Minimum 8 characters</p>
            <input type="submit" value="Next" />
            <p style={{ marginTop: 50 }}>By clicking the "Next" Button, You agree to creating a free account, and to
              <span><a href="!#" style={{ padding: 4, textDecoration: "none", color: "blue" }}><b>Terms of Service</b> </a></span>
              and <span><a href="!#" style={{ padding: 4, textDecoration: "none", color: "blue" }}><b>Privacy policy</b></a></span></p>
          </form>
        </div>
        <div className="displaytext">
          <h1>Dummy Heading</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ab
            sed iure non rerum pariatur velit excepturi accusantium, dignissimos
          </p>
        </div>
        <div className="bottombuttons">
          <button> Made in InVision</button>
        </div>

        <div className="bottomIcons"> 
        <button className="fab fa-facebook-messenger"><p id="comment">comment</p></button>
        <button className="fas fa-search"><p id="search">search</p></button>
        <button className="fas fa-code"><p id="inspect">inspect</p></button>
        <button className="fas fa-border-all"><p id="screen">screen</p></button>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
