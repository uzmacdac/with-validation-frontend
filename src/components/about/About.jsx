import React from 'react'

function About() {
  
  return (
    <> 
    <div>About Us  <br />
      <section id="team" class="team">

<h1 class="heading"><br/> Our Team</h1>

<div class="row">

<div class="card">
  <div class="image">
    <img src={require("../about/uzma.jpg")}/>
  </div>
  <div class="info">
    <h4>Uzma Khan</h4>
    <h4>Full Stack-Web Developer</h4>
   
  </div>
</div>

<div class="card">
  <div class="image">
    <img  src={require("../about/ashok.jpeg")}/>
  </div>
  <div class="info">
    <h4>Ashok D Pate</h4>
    <h4>Full Stack-Web Developer</h4>
    
  </div>
</div>

<div class="card">
  <div class="image">
    <img src={require("../about/vishal.jpeg")} alt=""/>
  </div>
  <div class="info">
    <h4>Vishal Kamble</h4>
    <h4>Full Stack-Web Developer</h4>
    
  </div>
</div>
<div class="card">
  <div class="image">
    <img src={require("../about/akshay.jpeg")} alt=""/>
  </div>
  <div class="info">
    <h4>Akashy Chorge</h4>
    <h4>Full stack-Web Developer</h4>
    
  </div>
</div>
<div class="card">
  <div class="image">
    <img src={require("../about/sandeep.jpeg")} alt=""/>
  </div>
  <div class="info">
    <h4>Sandeep Singh</h4>
    <h4>Full stack-Web Developer</h4>
    
  </div>
</div>
</div>
</section>

    </div>
    </>
  )
}

export default About