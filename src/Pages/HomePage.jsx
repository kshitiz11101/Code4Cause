import { Grid } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <div>
        
         <Grid container spacing={2}>
        <Grid item xs={6} className="bg-primary text-white p-4">
          <h1 className="display-4">What is Project Name?</h1>
          <div className="about-title text-[50px]">
            <p className="about-para mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              exercitationem vitae eius nihil nam quo veritatis tenetur pariatur
              saepe sint qui necessitatibus, porro alias unde amet consequuntur
              quia? Ipsum magni suscipit at similique dolore.
            </p>
          </div>
        </Grid>
        <Grid item xs={6} className="d-flex align-items-center justify-content-center">
          <div className="right">
            <img
              className="img-fluid"
              src="https://talking-minds-frontend-two-sage.vercel.app/_next/image?url=%2Fstress.png&w=640&q=75"
              alt=""
            />
          </div>
        </Grid>
      </Grid>
<br/>
<br/>
      <div className="offer">
        <h1 className="display-4">What we offer at Project Name?</h1>
        <p className="lead" style={{ width: "35rem", marginLeft: "30rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          vitae nam quibusdam, unde quod inventore numquam rem at eos, impedit
          accusantium nulla consequuntur deserunt nobis cumque, sapiente ab hic
          doloribus tempora totam porro facere?
        </p>
        <div className="icons">
          <span>
          <img
            className="img-fluid enlarge-on-hover"
            src="https://tse4.mm.bing.net/th?id=OIP.dnKexu04rZqIRdiB1ReH0QHaHa&pid=Api&P=0&h=180"
 alt=""
          /> 
          </span>
          &ensp;
          &ensp;
         
          <img
            className="img-fluid enlarge-on-hover"
            src="https://tse3.mm.bing.net/th?id=OIP.HhsD51az1iRsFzvk1A6wjQHaF9&pid=Api&P=0&h=180"
            alt=""
            />
            &ensp;
            &ensp;
          <img
            className="img-fluid enlarge-on-hover"
            src="https://tse1.mm.bing.net/th?id=OIP.C-uNAwWkLhXdLMflGiai7wHaHa&pid=Api&P=0&h=180"
            alt=""
            />
            &ensp;
            &ensp;
          <img
            className="img-fluid enlarge-on-hover"
            src="https://tse1.mm.bing.net/th?id=OIP.CSP3ISfzi0Vm7BOjbiOJOwHaG3&pid=Api&P=0&h=180"
            alt=""
            />
            &ensp;
            &ensp;
          <img
            className="img-fluid enlarge-on-hover"
            src="https://tse2.mm.bing.net/th?id=OIP.vK97vkP8HtSIca90Lz3FjwHaHa&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="names">
          <span className="badge badge-secondary">Self Assessment Tool</span>
          <span className="badge badge-secondary">Education</span>
          <span className="badge badge-secondary">Mood Tracker</span>
          <span className="badge badge-secondary">Vent it out</span>
          <span className="badge badge-secondary">Mentorship</span>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    
    <Grid container spacing={2}>
        <Grid item xs={6} className="bg-primary text-white p-4">
          <h1 className="display-4 "  style={{marginLeft:'2rem',fontSize:'2.5rem'}}>Self Assessment Tool</h1>
          <div className="about-title text-[50px]">
            <p className="about-para mt-10" style={{marginLeft:'2rem',fontSize:'1.3rem'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              exercitationem vitae eius nihil nam quo veritatis tenetur pariatur
              saepe sint qui necessitatibus,dolore.
              <br/>

        <button color='success' 
       onClick={() => {
        window.location.href = '../Questions/SelfAssessment.jsx'; // Change the URL to your desired file path
      }}
        >Try it Out Now</button>
            </p>
          </div>
        </Grid>
        {/* &ensp; */}
        <Grid item xs={6} className="d-flex align-items-center justify-content-center">
          <div className="right">
            <img
              className="img-fluid "
              src="https://tse2.mm.bing.net/th?id=OIP.z2jcIcw367P-AS8iRDBDqQHaHb&pid=Api&P=0&h=180"
              alt=""
             style={{marginLeft:'12rem', width:'20rem'}}
            />
          </div>
        </Grid>
      </Grid>
      <br/>
      <br/>
    <Grid container spacing={2}>
        <Grid item xs={6} className="bg-primary text-white p-4">
          <h1 className="display-4 "  style={{marginLeft:'2rem',fontSize:'2.5rem'}}>Self Assessment Tool</h1>
          <div className="about-title text-[50px]">
            <p className="about-para mt-10" style={{marginLeft:'2rem',fontSize:'1.3rem'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              exercitationem vitae eius nihil nam quo veritatis tenetur pariatur
              saepe sint qui necessitatibus,dolore.
            </p>
          </div>
        </Grid>
        {/* &ensp; */}
        <Grid item xs={6} className="d-flex align-items-center justify-content-center">
          <div className="right">
            <img
              className="img-fluid "
              src="https://tse2.mm.bing.net/th?id=OIP.z2jcIcw367P-AS8iRDBDqQHaHb&pid=Api&P=0&h=180"
              alt=""
             style={{marginLeft:'12rem', width:'20rem'}}
            />
          </div>
        </Grid>
      </Grid>
    </>


   
  )
}

export default HomePage
