import React, { Component } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HttpsRedirect from 'react-https-redirect';


// Router 
import { BrowserRouter as Router, Route } from "react-router-dom";

// Externam Modules 
import GoogleMapReact from 'google-map-react';
import { SocialIcon } from 'react-social-icons';
import CountUp from 'react-countup';

// images 
import iss_logo_white from './iss_logo_white.png';
import iss_logo_black from './iss_logo_black.png';
import bars_white from './bars_white.png';
import bars_black from './bars_black.png';
import s_lopa from './lopa.png';
import s_jaspreet from './jaspreet.png';
import s_prateek from './prateek.png';
import s_rakshith from './rakshith.png';
import s_ranjan from './ranjan.png';
import s_souurab from './souurab.png';
import s_subhajit from './subhajit.png';
import s_vikas from './vikas.png';
import s_puneet from './puneet.png';
import s_anil from './anil.png';
import s_patrick from './patrick.png';
import s_indranil from './indranil.png';
import s_ninad from './ninad.png';
import s_himanshu from './himanshu.png';
import s_sridhar from './sridhar.png'
import s_anis from './anis.png'
import s_ravinder from './ravinder.png'
import main from './main.png';
import main_logo from './main_logo.png';
import india_core from './india_core.png';
import trade_briefs from './trade_briefs.png';

import series_circle_1 from './series_circle_1.png';
import series_circle_2 from './series_circle_2.png';
import series_circle_3 from './series_circle_3.png';

import medium_gear from './medium_gear.png';
import large_gear from './large_gear.png';

import award_image from './awards.png';


// constants
import {mapOptions, initialState, landingTextheading, landingTextpara, seriesMainHeader, seriesMainpara1,
  seriesMainpara2, seriesConcludedpara1, seriesConcludedpara2, seriesUpcomingpara1, seriesUpcomingpara2, seriesUpcomingpara3, seiresWorkshoppara1, seiresWorkshoppara2,
  workshopPara1, awardsMainpara1, aboutManinpara1, aboutManinpara2, aboutManinpara3
} from './constants.js';

const Cube = () => {
  return <canvas id ='canvasOne' width="600" height="520"></canvas>
}



 
// you can just wrap your entire app to redirect it to the equivalent https version
// for example:
// http://example.com/    =>    https://example.com/
 
// you can also use a "disabled" prop to dinamically disable it
// <HttpsRedirect disabled={...}>
 
class HttpsApp extends React.Component {
 
  render() {
    return (
      <HttpsRedirect><App /></HttpsRedirect>
    );
  }
}

// Router 
class App extends Component {
  render() {
    return  <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/partners" component={Construction} />
        <Route exact path="/awards" component = {Awards}/>
        <Route exact path="/register" component = {Register}/>
        <Route exact path="/speaker" component = {Speakers}/>
      </div>
    </Router>
    
  }
}

const Construction = () => (
  <div className='container'>
  <NavBar iss={iss_logo_white} bars={bars_white}></NavBar>
{/* <div className='justify-content-center d-flex text-white' style={{marginTop:"25%"}}>

</div> */}
  <h3 style = {{textAlign: 'center'}} className='color-white mt-5 mb-5 loading-text-font'>Supported by</h3>
  <div className='container d-flex justify-content-center'>
  <img src={main_logo} alt='main-logo'></img>
  </div>
  <h3 style = {{textAlign: 'center'}} className='color-white mt-5 mb-5 loading-text-font mt-5'>Media Partners</h3>
  <div className='container d-flex justify-content-center'>
  <img src={india_core} alt='p1' ></img>
  <img src={trade_briefs} alt='p2' className='ml-5'></img>
  </div>
  <Menu></Menu>
  </div>
);

const NavBar = ({iss, bars}) =>{
  return <nav className="navbar navbar-expand-xl">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="/"><img src={iss} alt='iss_logo' className='img-fluid logo'></img></a>
    </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <li className = 'nav-item'>
    <button className = 'menu-button' data-toggle="modal" data-target="#menu_model">
   <img src = {bars} alt='bars' className = 'img-fluid logo'></img>
</button>
    </li>
    </ul>
</nav>   
}

const Menu = () => {
  return <div id="menu_model" className="modal fade" tabIndex="-1" role="menu" aria-labelledby="myModalLabel" aria-hidden="true">
<div className="modal-dialog slideInDown animated modal-full">
 <div className="modal-content">
   <div className="container">
 <NavBar iss={iss_logo_black} bars={bars_black}></NavBar>
 <div className='container menu-list'>
 <ol className='menu-list-counter'>
 <li><span className='main-text-font cool-link'><a href="/" className='small pl-5'>Home</a></span></li>
 <li><span className='main-text-font cool-link'><a href="/series" className='small pl-5'>Series</a></span></li>
 <li ><span className='main-text-font cool-link'><a href="/speaker" className='small pl-5'>Speakers</a></span></li>
<li ><span className='main-text-font cool-link'><a href="/partners" className='small pl-5'>Partners</a></span></li>
<li ><span className='main-text-font cool-link'><a href="/awards" className='small pl-5'>Awards</a></span></li>
<li ><span className='main-text-font cool-link'><a href="/about" className='small pl-5'>About</a></span></li>
<li ><span className='main-text-font cool-link'><a href="/register" className='small pl-5'>Register</a></span></li>
<li ><span className='main-text-font cool-link'><a href="/contact" className='small pl-5'>Contact</a></span></li> 
 </ol>
 </div>
   </div>
 </div>
</div>
</div>
}
// Home Page
const Home = () => {
  return (
    <div className='container'>
    <div>
    <NavBar iss={iss_logo_white} bars={bars_white}></NavBar>
    </div>
    <div className="container-fluid top" style = {{"marginTop": "80px"}}>
  <div className="row">
      <div className="col-lg-6">
      <LandingText></LandingText>
      </div>
      <div className="col-lg-6" style = {{"marginTop": "30px"}}>
      <Cube></Cube>
      </div>
  </div>
</div>
<Menu></Menu>
    </div>
  );
}

const LandingText = () => {
  return <div className='container'>
  <span className = 'color-white mr-4'>Supported By: </span><img alt= 'logo' className = 'mb-5' src={main}></img>
  <h1 className='main-text-font color-white'>{landingTextheading}</h1>
  <p className='mt-5 explain-text color-grey'>{landingTextpara}</p>
  </div>
}


// Series
const Series = () => {
  return <div className='full-div darkbg'>
  <div className='container'>
  <NavBar iss={iss_logo_white} bars={bars_white}></NavBar>
  <SeriesContent></SeriesContent>
  </div>
  <Menu></Menu>
  </div>
}

const SeriesContent =() => {
  return (
    <div id="demo" className="carousel slide " data-ride="carousel" data-interval = {false}>
  <ul className="carousel-indicators custom-carousel">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
  </ul>

  <div className="carousel-inner">
  <div className="carousel-item active">
  <div  className='container custom-carousel-container'>
  <h1 className='main-text-font color-white'>{seriesMainHeader}</h1>
    <p className='explain-text color-grey mt-5'>{seriesMainpara1}<br></br><br></br>
    {seriesMainpara2}</p>
    </div>
    </div>
    <div className="carousel-item">
    <div  className='center-screen'>
        <img src={series_circle_1} className='mb-5 rotate-image' alt='series1'></img>
        <h1 className='color-white main-text-font'>Concluded</h1>
      <p className='color-white explain-text-font'>{seriesConcludedpara1}<br></br>{seriesConcludedpara2}.<br></br><br></br>
      <a href='https://cpinfosec.com' target='_blank'><b>Know More</b></a>
</p>
    </div>
    </div>
    <div className="carousel-item">
    <div id = "second_div" className="center-screen">
        <img src={series_circle_2} alt='series1' className='mb-5 rotate-image'></img>
        <h1 className='color-white main-text-font'>Upcoming</h1>
      <p className='color-white explain-text-font'>{seriesUpcomingpara1}<br></br>
      <a href='/register'><b>Know details</b></a>
<br></br><br></br>
{seriesUpcomingpara3}<br></br>
<a href='/register'><b>Know details</b></a></p>
        </div>
    </div>
    <div className="carousel-item">
    <div id="third_div"className="center-screen">
        <img src={series_circle_3} alt='series1' className='mb-5 rotate-image'></img>
        <h1 className='color-white main-text-font'>Workshop</h1>
      <p className='color-white explain-text-font'>{seiresWorkshoppara1}<br></br>
      <a href='/register'><b>Know details</b></a>
<br></br><br></br>
{seiresWorkshoppara2}<br></br>
      <a href='/register'><b>Know details</b></a></p>
        </div>
    </div>
  </div>
  <div>
  {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a> */}
</div>
</div>
  )
}
const Speakers = () => {
  return (
  <div className='container'>
  <div>
  <NavBar iss={iss_logo_white} bars={bars_white}></NavBar>
  </div>
  <div id="demo" className="carousel slide " data-ride="carousel" data-interval = {false}>
  <ul className="carousel-indicators custom-carousel">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
  <div className="carousel-item active">
  <div class="card-deck mt-5">
  <div class="card darkbg">
  <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_sridhar} style = {{"width":"60%"}} alt="Card"/>
      <p class="font-weight-bold pt-2">Sridhar Govardhan</p>
      <small class="card-text">
CISO, <br></br>
Wipro Limited
</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_lopa} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Dr. Lopa Mudraa Basuu</p>
      <small class="card-text"> Global Leader, Cyber Security Governance, Risk & Compliance Nissan Motor Corporation</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_rakshith} style = {{"width":"60%"}} alt="Card"/>
      <p class="font-weight-bold pt-2">Rakshit Tandon</p>
      <small class="card-text">Cyber Security Expert <br></br>& 
TedX speaker</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_subhajit} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Subhajit Deb</p>
      <small class="card-text"> CISO,<br></br>
Dr. Reddy’s Laboratory</small>
    </div>
  </div>
</div>
<div class="card-deck mt-4">
<div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_prateek} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Prateek Mishra</p>
      <small class="card-text">CISO, <br></br>
IDBI Federal Life Insurance</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_jaspreet} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Jaspreet Singh</p>
      <small class="card-text">Partner – Cyber Security | 
Africa, India & Middle East (AIM) | 
Advisory Services, Ernst & Young</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_puneet} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Adv. Puneet Bhasin</p>
      <small class="card-text">Cyber Law Expert, Owner - Cyberjure Legal Consulting</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_ranjan} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Ranjan Revandkar</p>
      <small class="card-text">Head Information Security, <br></br>
Sun Pharma</small>
    </div>
  </div>
</div>
  </div>
  <div className="carousel-item">
  <div class="card-deck mt-5">
    <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_vikas} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Vikas Arora</p>
      <small class="card-text">Vice President - Global Security & IT, 
Toluna</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_souurab} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Sourabh Tiwari</p>
      <small class="card-text">CIO, <br></br>
Meril Life</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_anil} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Anil Chiplunkar</p>
      <small class="card-text">Associate Director -  <br></br>
Information Security,<br></br>Sciformix Technologies Pvt Ltd.</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_patrick} style = {{"width":"60%"}} alt="Card"/>
      <p class="font-weight-bold pt-2">Patrick Pitchappa</p>
      <small class="card-text">Head Information Security, <br></br>
BNP Paribas ISPL</small>
    </div>
  </div>
  </div> 
  <div class="card-deck mt-4">
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_indranil} style = {{"width":"60%"}} alt="Card"/>
      <p class="font-weight-bold pt-2">Indranil Chatterjee</p>
      <small class="card-text">GM Security & Compliance, <br></br>
Reliance Jio Infocomm</small>
    </div>
  </div>
   <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_ninad} style = {{"width":"60%"}} alt="Card"/>
      <p class="font-weight-bold pt-2">Ninad Dhavse</p>
      <small class="card-text">National Stock Exchange(NSE),
Leader IT Risk & Compliance
</small>
    </div>
  </div>
  <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_himanshu} style = {{"width":"60%"}} alt="Card"/>
      <p class="font-weight-bold pt-2">Himanshu Gaur</p>
      <small class="card-text">Lead Consultant Cyber Security,<br></br>
TCL
</small>
    </div>
  </div>
  <div class="card darkbg">
  <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_anis} style = {{"width":"60%"}} alt="Card"/>
      <p class="font-weight-bold pt-2">Anis Pankhania</p>
      <small class="card-text">Head – Security Compliance <br></br>& Data Privacy, <br></br>Vodafone Idea
</small>
    </div>
  </div>
  </div>
  </div>
  <div className="carousel-item">
  <div class="card-deck mt-5">
    <div class="card darkbg">
    <div class="card-body text-center text-white">
    <img class="card-img-top" src={s_ravinder} style = {{"width":"60%"}}alt="Card"/>
      <p class="font-weight-bold pt-2">Ravinder Arora</p>
      <small class="card-text"> Head Information Security, <br></br>IRIS Software </small>
    </div>
  </div>
  <div class="card darkbg">
  </div>
  <div class="card darkbg">
  </div>
  <div class="card darkbg">
  </div>
  </div> 
  <div class="card-deck mt-4">
  <div class="card darkbg">
  </div>
   <div class="card darkbg">
  </div>
  <div class="card darkbg">
  </div>
  <div class="card darkbg">
  </div>
  </div>
  </div>
  </div>
  </div>
  <Menu></Menu>
  </div>
  )
}

// Workshop
const Workshop = () =>{
  return (
    <div className='container'>
    <div>
    <NavBar iss={iss_logo_white} bars={bars_white}></NavBar>
    </div>
    <div className="container-fluid top">
  <div className="row">
      <div className="col-lg-6">
     <WorkshopText></WorkshopText>
      </div>
      <div className="col-lg-6">
      <GearAnimation></GearAnimation>
      </div>
  </div>
</div>
<Menu></Menu>
    </div>
  );
}

const WorkshopText = () => {
  return <div className='container'>
  <h1 className='main-text-font color-white'>Workshop</h1>
  <p className='mt-5 explain-text color-grey'>{workshopPara1}<br></br><br></br>
This is a paid experience. <a style = {{color:"white"}} href='/register'><b>Click Here</b></a> to register or know more details on the same. </p>
  </div>
}

const GearAnimation = () => {
  return <div className='gear-parent'>
  <img src={medium_gear}  className='gear1' alt='gear1'></img>
  <img src={large_gear} className='gear3'  alt = 'gear3'></img>
  <img src={medium_gear} className='gear2' alt = 'gear2'></img>
  </div>
}

// Awards
const Awards = () => {
  return (
    <div className='container'>
    <div>
    <NavBar iss={iss_logo_white} bars={bars_white}></NavBar>
    </div>
    <div className="container-fluid top">
  <div className="row">
      <div className="col-lg-6">
      <AwardsText></AwardsText>
      </div>
      <div className="col-lg-6">
<AwardsAnimation></AwardsAnimation>
      </div>
  </div>
  <AwardsModal></AwardsModal>
</div>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnVisibilityChange
draggable
pauseOnHover
/>
<Menu></Menu>
    </div>
  )
}

class AwardsModal extends React.Component {
  constructor(){
    super()
    this.state = {
    "source":"Awards",  
    "name":"",
    "designation":"",
    "company":"",
    "phone": "",
    "mail": "",
    "industrysector":"",
    "turnover": "",
    "city": "",
    "initiative": "",
    "security": "",
    "experiance": "",
    "qualify": ""
  }
    this.handleChange = this.handleChange.bind(this)
    this.sendMail = this.sendMail.bind(this)
    this.notify = this.notify.bind(this)
    this.validate = this.validate.bind(this)
  }
  validate(){
    let validForm = true;
    ['name', 'designation', 'company', 'phone', 'mail', 'industrysector', 'turnover', 'city', 'initiative', 'security', 'experiance', 'qualify'].forEach(element => {
      if (this.state[element] === '') {
        validForm= false
      } 
    })
    return validForm
  }
  notify (){
    toast.success("Thank You! Your Response has been noted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
      });
  }
  handleChange(event){
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value.replace(/\n|\r/g, ' ');
    const name = event.target.name
    this.setState({[name]: value})
  }
  sendMail(event){
    event.preventDefault()
    if (!this.validate()){
      toast.warn('Please fill all the fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        });
        return 
    }
    toast.info('Processing', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
      // https://consumex-mail.herokuapp.com/mail/
    fetch('https://consumex-mail.herokuapp.com/mail/', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(this.state), // body data type must match "Content-Type" header
  }).then((response)=> {
    this.setState({"name":"",
    "designation":"",
    "company":"",
    "phone": "",
    "mail": "",
    "industrysector":"",
    "turnover": "",
    "city": "",
    "initiative": "",
    "security": "",
    "experiance": "",
    "qualify": ""
  })
    this.notify()
  }).catch((error) => {
    toast.error('Something Went Wrong, Please contact Support!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
  })
  }
 render () {
 return (
<div class="modal" id="myModal">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h4 class="modal-title">CISO AWARDS</h4>
       <button type="button" class="close" data-dismiss="modal">&times;</button>
     </div>

     <div class="modal-body">
     <form method="post" action="">
    <div className="form-group">
      <label htmlFor="InputName" className='explain-text'><b>FULL NAME</b></label>
      <input type="text" className="form-control input-custom" id="InputName" name="name"  value={this.state.name} onChange={this.handleChange}></input>
    </div>
    <div className="form-group">
      <label htmlFor="InputDesgination" className='explain-text'><b>DESIGNATION</b></label>
      <input type="text" className="form-control input-custom" id="InputDesgination" name="designation" value={this.state.designation} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputCompanyName" className='explain-text'><b>COMPANY NAME</b></label>
      <input type="text" className="form-control input-custom" id="InputCompanyName" name="company" value={this.state.company} onChange={this.handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="InputPhone" className='explain-text'><b>MOBILE</b></label>
      <input type="tel" className="form-control input-custom" id="InputPhone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputEmail1" className='explain-text'><b>EMAIL</b></label>
      <input type="email" className="form-control input-custom" id="InputEmail1" name="mail" value={this.state.mail} onChange={this.handleChange}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="InputEmail1" className='explain-text'><b>INDUSTRY SECTOR</b></label>
      <input type="text" className="form-control input-custom" id="InputIndustrySector" name="industrysector" value={this.state.industrysector} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputTurnover" className='explain-text'><b>COMPANY TURNOVER <small>(in crores)</small></b></label>
      <input type="text" className="form-control input-custom" id="InputTurnover" name="turnover" value={this.state.turnover} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputTurnover" className='explain-text'><b>CITY</b></label>
      <input type="text" className="form-control input-custom" id="InputCity" name="city" value={this.state.city} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputComment" className='explain-text'><b>List any 3 security initiatives taken by your organization in the last 6 months
<small> (Provide comprehensive details to qualify)</small></b></label>
      <textarea className="form-control input-custom" rows="5" id="InputInitiative" name='initiative' onChange={this.handleChange} value={this.state.initiative}></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="InputComment" className='explain-text'><b>How are you ensuring complete security of your organization?
<small> (Elaborate the same.)</small></b></label>
      <textarea className="form-control input-custom" rows="5" id="InputSecurity" name='security' onChange={this.handleChange} value={this.state.security}></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="InputTurnover" className='explain-text'><b>Please mention your total years of experience in the field of Information Security:
</b></label>
      <input type="text" className="form-control input-custom" id="InputExperiance" name="experiance" value={this.state.experiance} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputComment" className='explain-text'><b>Why do you think you qualify for the award?</b></label>
      <textarea className="form-control input-custom" rows="5" id="InputQualify" name='qualify' onChange={this.handleChange} value={this.state.qualify}></textarea>
    </div>
  <button type="submit" className="btn btn-dark mb-5" onClick={this.sendMail}>Submit</button>
    </form>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
     </div>

   </div>
 </div>
</div>
 )
}
}

const AwardsText = () => {
  return <div className='container'>
  <h1 className='main-text-font color-white'>Indian CISO Awards.</h1>
  <p className='mt-5 explain-text color-grey'>{awardsMainpara1} Nominate for the 4th edition summit <a  data-toggle="modal" data-target="#myModal"> <bold className='text-white' style={{fontWeight:'bolder'}}>here</bold>
</a></p>
  </div>
}

const AwardsAnimation = () => {
  return (
    <div className='cotainer ml-5'>
    <img src={award_image} className='awards-image' alt='awards'></img>
    </div>
  )

}

//About Us
const AboutUs = () => {
  return <div className='full-div whitebg'>
  <div class='container'>
    <NavBar iss={iss_logo_black} bars={bars_black}></NavBar>
    <div class='container mt-5'>
    <h1 className='main-text-font' style={{"marginBottom":"30px"}}>About Consumex.</h1>
    <p className='explain-text'>{aboutManinpara1}<br></br><br></br>
{aboutManinpara2}<br></br><br></br>
{aboutManinpara3}</p></div>
 <div className='row' style={{"marginTop":"50px"}}>
    <div className='col'>
    <CountUp end={5} suffix='+' className='font-color-white display-4 explain-text font-weight-bold d-flex justify-content-center'  duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text d-flex justify-content-center' style ={{"marginTop":"5px"}}><small><strong>SECURITY EVENTS</strong></small></div>
    </div>
    <div className='col'>
    <CountUp end={10}  suffix='+' className='font-color-white display-4 explain-text font-weight-bold d-flex justify-content-center' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text d-flex justify-content-center ' style ={{"marginTop":"5px"}}><small><strong>WORKSHOPS</strong></small></div>
    </div>
    <div className='col'>
    <CountUp end={1500} suffix='+' className='font-color-white display-4 explain-text font-weight-bold d-flex justify-content-center' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text d-flex justify-content-center' style ={{"marginTop":"5px"}}><small><strong>ATTENDEES</strong></small></div>
    </div>
    <div className='col'>
    <CountUp end={10} suffix='+' className='font-color-white display-4 explain-text font-weight-bold d-flex justify-content-center' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text d-flex justify-content-center' style ={{"marginTop":"5px"}}><small><strong>COUNTRIES</strong></small></div>
    </div>
    </div>
    </div>
    <Menu></Menu>
  </div>
}

class Register extends React.Component {
  constructor (){
    super()
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.sendMail = this.sendMail.bind(this)
    this.notify = this.notify.bind(this)
    this.validate = this.validate.bind(this)
  }

  notify (){
    toast.success("Thank You! Your Response has been noted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
      });
  }
  handleChange(event){
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value.replace(/\n|\r/g, ' ');
    const name = event.target.name
    this.setState({[name]: value})
  }

  validate(){
    let validForm = true;
    ['optionsRadios', 'name', 'designation', 'company', 'phone', 'mail'].forEach(element => {
      if (this.state[element] === '') {
        validForm= false
      } 
    })
    return validForm
  }
  sendMail(event){
    event.preventDefault()
    if (!this.validate()){
      toast.warn('Please fill the following Full Name, Designation, Company, Phone, Email and I Want Option', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        });
        return 
    }
    toast.info('Processing', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
    fetch('https://consumex-mail.herokuapp.com/mail/', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state), // body data type must match "Content-Type" header
  }).then((response)=> {
    this.setState(initialState)
    this.notify()
  }).catch((error) => {
    toast.error('Something Went Wrong, Please contact Support!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
  })
  }
  render(){
  return(
    <div className='register-container whitebg pb-5'>
      <div className='container'>
      <div>
      <NavBar iss={iss_logo_black} bars={bars_black}></NavBar>
      </div>
      <div className="container-fluid mt-5">
    <div className="row">
        <div className="col-lg-6">
        <div>
    <form method="post" action="">
    <div className="form-group">
      <label htmlFor="InputName" className='explain-text'><b>FULL NAME</b></label>
      <input type="text" className="form-control input-custom" id="InputName" name="name"  value={this.state.name} onChange={this.handleChange} ></input>
    </div>
    <div className="form-group">
      <label htmlFor="InputDesgination" className='explain-text'><b>DESIGNATION</b></label>
      <input type="text" className="form-control input-custom" id="InputDesgination" name="designation" value={this.state.designation} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputCompanyName" className='explain-text'><b>COMPANY NAME</b></label>
      <input type="text" className="form-control input-custom" id="InputCompanyName" name="company" value={this.state.company} onChange={this.handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="InputPhone" className='explain-text'><b>MOBILE</b></label>
      <input type="tel" className="form-control input-custom" id="InputPhone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputEmail1" className='explain-text'><b>EMAIL</b></label>
      <input type="email" className="form-control input-custom" id="InputEmail1" name="mail" value={this.state.mail} onChange={this.handleChange}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
  <fieldset className="form-group">
    <label><span className='explain-text'><b>I WANT</b></span></label>
    <div className="form-check">
      <label className="form-check-label">
        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" onChange={this.handleChange}/>
        <span className='explain-text'><b>to attend as a delegate for the conference</b></span>
      </label>
    </div>
    <div className="form-check">
    <label className="form-check-label">
        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" onChange={this.handleChange}/>
        <span className='explain-text'><b>to attend the WORKSHOP after the conference</b></span>
      </label>
    </div>
    <div className="form-check">
    <label className="form-check-label">
        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3"  onChange={this.handleChange}/>
        <span className='explain-text'><b>to know more about sponsorship details</b></span>
      </label>
    </div>
    <div className="form-check">
    <label className="form-check-label">
        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios5" value="option4"  onChange={this.handleChange}/>
        <span className='explain-text'><b>to speak at the event</b></span>
      </label>
    </div>
    <div className="form-check">
    <label className="form-check-label">
        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios5" value="option5"  onChange={this.handleChange}/>
        <span className='explain-text'><b>to be a media partner</b></span>
      </label>
    </div>
    <div className="form-check">
    <label className="form-check-label">
        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios7" value="option7"  onChange={this.handleChange}/>
        <span className='explain-text'><b>other details</b></span>
      </label>
    </div>
    </fieldset>
    <div className="form-group">
      <label htmlFor="InputComment" className='explain-text'><b>COMMENTS</b></label>
      <textarea className="form-control input-custom" rows="5" id="commenttext" name='comment' onChange={this.handleChange} value={this.state.comment}></textarea>
    </div>
  <button type="submit" className="btn btn-dark mb-5" onClick={this.sendMail}>Submit</button>
    </form>
    </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnVisibilityChange
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
        </div>
    </div>
  </div>
  <Menu></Menu>
      </div>
      </div>
    );
}}


const Contact = () =>{
  return  <div className='full-div whitebg'>
  <div className="container">
  <NavBar iss={iss_logo_black} bars={bars_black}></NavBar>
  <div class="container">
  <div class="row ml-5 mt-5">
    <div class="col-sm">
    <h4 className='explain-text'>
      <b>#30, Bella vista,
Apoorva Layout, Nagarabhavi,<br></br>
Bangalore – 560 072.</b>
      </h4>
      <p className='explain-text'>
enquiry@consumex-productions.com</p>
    </div>
  </div>
</div>
<div class="mt-5">
<ConsumexMap></ConsumexMap>
</div>
  </div>
  <Menu></Menu>
  </div>
}

class ConsumexMap extends Component {
  static defaultProps = {
    center: {
      lat: 12.960750,
      lng: 77.508270
    },
    zoom: 15,
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBPm09E3r5-V6AvN9AgcEFK9xXx34-u2sg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={mapOptions}
        >
        </GoogleMapReact>
      </div>
    );
  }
}







export default HttpsApp;
