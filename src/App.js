import React, { Component } from 'react';
import './App.css';

// Router 
import { BrowserRouter as Router, Route } from "react-router-dom";

// Externam Modules 
import GoogleMapReact from 'google-map-react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { SocialIcon } from 'react-social-icons';
import CountUp from 'react-countup';

// images 
import iss_logo_white from './iss_logo_white.png';
import iss_logo_black from './iss_logo_black.png';
import bars_white from './bars_white.png';
import bars_black from './bars_black.png';
import logo_circle from './logo_circle.png';
import powered_by from './powered_by.png';

import series_circle_1 from './series_circle_1.png';
import series_circle_2 from './series_circle_2.png';
import series_circle_3 from './series_circle_3.png';

import medium_gear from './medium_gear.png';
import large_gear from './large_gear.png';

import award_image from './awards.png';
import iss_logo_start_up from './iss_logo_start_up.png';

// constants
import {mapOptions, initialState, loadingTextheading, loadingTextpara, landingTextheading, landingTextpara, seriesMainHeader, seriesMainpara1,
  seriesMainpara2, seriesConcludedpara1, seriesConcludedpara2, seriesUpcomingpara1, seriesUpcomingpara2, seriesUpcomingpara3, seiresWorkshoppara1, seiresWorkshoppara2,
  workshopPara1, awardsMainpara1, aboutManinpara1, aboutManinpara2, aboutManinpara3
} from './constants.js';

const Cube = () => {
  return <canvas id ='canvasOne' width="600" height="520"></canvas>
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
        <Route exact path="/workshop" component={Workshop} />
        <Route exact path="/awards" component = {Awards}/>
        <Route exact path="/register" component = {Register}/>
      </div>
    </Router>
    
  }
}


// Home Screen with StartUp Page
class HomeLoader extends React.Component{
  constructor(){
    super()
    this.state = {
      'isLoading':true
    }
  }
  render(){
    return(
      <Home></Home>
    )
  }
}

const LoadingBar = ({ color, className }) => (
  <div className = "d-flex justify-content-center mt-5 ml-5">
  <ScaleLoader color={color}  sizeUnit={"px"}  size={50}/>
  </div>
);

const LoadingScreen =() => {
  return(
    <div className='loading-container whitebg'>
    <div className="container whitebg">
    <div className="row">
        <div className="col-lg-6 loading-margin-top-img">
        <img src={iss_logo_start_up} className='loading-logo load-img' alt='loading-logo'></img>
        </div>
        <div className="col-lg-6 loading-margin-top-text">
        <div className='load-text'>
        <p className='loading-text-font'><b> {loadingTextheading} </b></p>
      <h2 className='loading-text-font'><b>{loadingTextpara}</b></h2>
      </div>
        </div>
    </div>
    <LoadingBar color='#000000'></LoadingBar>
  </div>
  </div>
  )
}

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
<li ><span className='main-text-font cool-link'><a href="/workshop" className='small pl-5'>Workshop</a></span></li>
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
    <div className="container-fluid top" style = {{"marginTop": "120px"}}>
  <div className="row">
      <div className="col-lg-6">
      <LandingText></LandingText>
      </div>
      <div className="col-lg-6" style = {{"marginTop": "-70px"}}>
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
  <h1 className='main-text-font color-white'>{landingTextheading}</h1>
  <p className='mt-5 explain-text color-grey'>{landingTextpara}</p>
  </div>
}

const LogoAnimation = () => {
  return <div className='parent'>
  {/* <img src={circle} className='image1' alt='circle'></img> */}
  <img src={logo_circle} className = 'image2' alt = 'layer4'></img>
  <img src={powered_by} className = 'image3' alt = 'consumex'></img>
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
      <p className='color-white explain-text-font'>{seriesConcludedpara1}<br></br>{seriesConcludedpara2}<br></br><br></br>
<b>Request post event report.</b></p>
    </div>
    </div>
    <div className="carousel-item">
    <div id = "second_div" className="center-screen">
        <img src={series_circle_2} alt='series1' className='mb-5 rotate-image'></img>
        <h1 className='color-white main-text-font'>Upcoming</h1>
      <p className='color-white explain-text-font'>{seriesUpcomingpara1}<br></br>
<b>View details</b>
<br></br><br></br>
{seriesUpcomingpara2}<br></br>
<b>View details</b>
<br></br><br></br>
{seriesUpcomingpara3}<br></br>
<b>View details</b> </p>
        </div>
    </div>
    <div className="carousel-item">
    <div id="third_div"className="center-screen">
        <img src={series_circle_3} alt='series1' className='mb-5 rotate-image'></img>
        <h1 className='color-white main-text-font'>Workshop</h1>
      <p className='color-white explain-text-font'>{seiresWorkshoppara1}<br></br>
<b>View details</b>
<br></br><br></br>
{seiresWorkshoppara2}<br></br>
<b>View details</b></p>
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
This is a paid experience. <b>Click here</b> to register or know more details on the same. </p>
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
</div>
<Menu></Menu>
    </div>
  )
}
const AwardsText = () => {
  return <div className='container'>
  <h1 className='main-text-font color-white'>Indain CISO Awards.</h1>
  <p className='mt-5 explain-text color-grey'>{awardsMainpara1}</p>
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
    <div className='font-color-white explain-text font-weight-bold about-text d-flex justify-content-center' style ={{"marginTop":"5px"}}><small><strong>CYBER SECURITY EVENTS</strong></small></div>
    </div>
    <div className='col'>
    <CountUp end={10}  suffix='+' className='font-color-white display-4 explain-text font-weight-bold d-flex justify-content-center' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text d-flex justify-content-center ' style ={{"marginTop":"5px"}}><small><strong>WORKSHOPS</strong></small></div>
    </div>
    <div className='col'>
    <CountUp end={1500} suffix='+' className='font-color-white display-4 explain-text font-weight-bold d-flex justify-content-center' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text d-flex justify-content-center' style ={{"marginTop":"5px"}}><small><strong>ATTENDIES</strong></small></div>
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

  }
  handleChange(event){
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name
    this.setState({[name]: value})
  }

  sendMail(event){
    event.preventDefault()
    fetch('http://127.0.0.1:5000/mail', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(this.state), // body data type must match "Content-Type" header
  }).then((response)=> {
    this.setState(initialState)
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
      <label htmlFor="InputName" className='explain-text'><b>YOUR NAME</b></label>
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
      <label htmlFor="InputPhone" className='explain-text'><b>PHONE</b></label>
      <input type="tel" className="form-control input-custom" id="InputPhone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
    </div>
    <div className="form-group">
      <label htmlFor="InputEmail1" className='explain-text'><b>EMAIL</b></label>
      <input type="email" className="form-control input-custom" id="InputEmail1" name="mail" value={this.state.mail} onChange={this.handleChange}/>
      <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
    </div>
  <fieldset className="form-group">
    <label><span className='explain-text'><b>I WANT TO</b></span></label>
    <div className="form-check">
      <label className="form-check-label">
        <input type="radio" className="form-check-input" name="optionsRadio" id="optionsRadios1" value="option1" onChange={this.handleChange}/>
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
        <span className='explain-text'><b>sponsorship details</b></span>
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
        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios6" value="option6"  onChange={this.handleChange}/>
        <span className='explain-text'><b>sponsorship details</b></span>
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
    <span className='explain-text'>
        <p><b>For award nominations, please click here.</b></p><br></br>
        <p><b>For delegate – conference- questionnaires, please click here.</b></p><br></br>
        </span>
    </div>
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
    <div class="col-sm">
    <p className='explain-text'>
      <b>SHARE THE INFORMATION 
SECURITY STORY WITH 
YOUR FRIENDS</b>
      </p>
      <span className="m-3"><SocialIcon network="twitter" bgColor="#ff5a01"/></span>
      <span className="m-3"><SocialIcon url="http://facebook.com/jaketrent" /></span>
      <span className="m-3"><SocialIcon url="http://linkedin.com/jaketrent" /></span>
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
      lat: 12.971599,
      lng: 77.594566
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







export default App;
