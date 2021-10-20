import React from 'react';
import './About.css'
import manager from '../../Images/manager/as.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div id='About' className='About-us'>

<div className='about  my-5'>
<h1 className='background p-5'><marquee behavior="" direction=""><h2 className='text-primary fw-bold'>About Us:</h2></marquee></h1>
        <h1><u>Contact US:</u></h1>
        <h1>Manager Information:</h1>
        <img className='manager' src={manager} alt="" />

       <h3>Name:Md.Ashikur Rahman</h3>
       <h3>phone:01717693872</h3>
       <Link className=' fw-bold'>E-mail:ashikur35-2627@diu.edu.bd</Link>
       <h3>Fax:+44 870 711 3311</h3>
</div>

            
<form class=" row g-3 container mt-5">
  {/* form use */}
  <h1 className='text-primary'><u>Give Your Infomation Here:</u></h1>
    
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder='Email'/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder='password'/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Dhaka</option>
      <option>Chittagong</option>
      <option>Rangpur</option>
      <option>Khulna</option>
      <option>Barisal</option>
      <option>Mymensignh</option>
      <option>Rajshahi</option>
      <option>Shylet</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  {/* button use */}
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Send</button>
  </div>
</form>
</div>
    );
};

export default About;