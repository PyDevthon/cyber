import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import './App.css';
import iss_logo from './iss_logo.png';
import layer4 from './layer_4.png';
import consumex from './consumex.png';
import bars from './bars.png';
import iss_black from './iss_logo_black.png';
import bars_black from './bars_black.png';
import {mapOptions} from './constants.js';
import series1 from './new_circle1.png';
import series2 from './new_circle2.png';
import series3 from './new_circle3.png';
import gear2 from './medium_gear.png';
import gear3 from './large_gear.png';
import award_image from './awards.png';
import iss_logo_big from './iss_logo_big.png';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { SocialIcon } from 'react-social-icons';
import CountUp from 'react-countup';
import AOS from 'aos';

AOS.init()

class App extends Component {
  render() {
    return ( <Router>
      <div>
        <Route exact path="/" component={HomeLoader} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/workshop" component={Workshop} />
        <Route exact path="/awards" component = {Awards}/>
        <Route exact path="/register" component = {Register}/>
      </div>
    </Router>
    )
  }
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

const AboutUs = () => {
  return <div className='full-div whitebg'>
  <div class='container'>
    <NavBar iss={iss_black} bars={bars_black}></NavBar>
    <div class='container mt-5'>
    <div className='row mb-5'>
    <div className='col'>
    <CountUp end={5} suffix='+' className='font-color-white display-2 explain-text' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text'>CYBER SECURITY EVENTS</div>
    </div>
    <div className='col'>
    <CountUp end={10}  suffix='+' className='font-color-white display-2 explain-text' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text'>WORKSHOPS</div>
    </div>
    <div className='col'>
    <CountUp end={1500} suffix='+' className='font-color-white display-2 explain-text' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text'>ATTENDIES</div>
    </div>
    <div className='col'>
    <CountUp end={10} suffix='+' className='font-color-white display-2 explain-text' duration={3}/>
    <div className='font-color-white explain-text font-weight-bold about-text'>COUNTRIES</div>
    </div>
    </div>
    <h1 className='main-text-font'>About Consumex.</h1>
    <p className='explain-text'>As a professional conference organizer, Consumex Productions business is to convey high-value information that is undoubtedly relevant for the end-users. Our platform offers real-world solutions to critical business challenges and our subjects have been widely researched and logically programmed.<br></br><br></br>
Our Speakers and contributors are top-level chiefs and pioneers in their fields, who wish to take part in significant discussion with representatives on vital industry issues and trends. Our insight banks contain best practice case studies, extensive technical briefings and data rich recordings; empowering broad learning and benchmarking opportunities.<br></br><br></br>

Consumex Productions aims to be the most dynamic and professional corporate event and conference organisers, showing innovation in approach to business by consistently delivering exceptional standards across all areas of our service. By doing so, we provide reliability to our customers and encouraging our employees to realise both personal and professional objectives.</p></div>
    </div>
    <Menu></Menu>
  </div>
}

const Contact = () =>{
  return  <div className='full-div whitebg'>
  <div className="container">
  <NavBar iss={iss_black} bars={bars_black}></NavBar>
  <div class="container">
  <div class="row ml-5 mt-5">
    <div class="col-sm">
    <h4 className='explain-text'>
      <b>#30, Bella vista,
Apoorva Layout, Nagarabhavi,<br></br>
Bangalore – 560 072.</b>
      </h4>
      <p className='explain-text'>+91 761 925 6751
enquiry@consumex-productions.com</p>
    </div>
    <div class="col-sm">
    <p className='explain-text'>
      <b>SHARE THE INFORMATION 
SECURITY STORY WITH 
YOUR FRIENDS</b>
      </p>
      <span className="m-3"><SocialIcon url="http://twitter.com/jaketrent" /></span>
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

const LoadingBar = ({ color, className }) => (
  <div className = "d-flex justify-content-center mt-5">
  <PacmanLoader color={color}  sizeUnit={"px"}  size={50}/>
  </div>
);

class HomeLoader extends React.Component{
  constructor(){
    super()
    this.state = {
      'isLoading':true
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
}

  render(){
    return(
      this.state.isLoading ? <LoadingScreen></LoadingScreen> : <Home></Home>
    )
  }
}

const LoadingScreen =() => {
  return(
    <div className='loading-container whitebg'>
    <div className="container whitebg">
    <div className="row">
        <div className="col-lg-6 loading-margin-top-img">
        <img src={iss_logo_big} className='loading-logo load-img'></img>
        </div>
        <div className="col-lg-6 loading-margin-top-text">
        <div className='load-text'>
        <p className='loading-text-font'><b>Consumex Productions Presentes</b></p>
      <h2 className='loading-text-font'><b>Information Security Series & Cyber Sercurity Workshop</b></h2>
      </div>
        </div>
    </div>
    <LoadingBar color='#000000'></LoadingBar>
  </div>
  </div>
  )
}

const Home = () => {
  return (
    <div className='container'>
    <div>
    <NavBar iss={iss_logo} bars={bars}></NavBar>
    </div>
    <div className="container-fluid top">
  <div className="row">
      <div className="col-lg-6">
      <LandingText></LandingText>
      </div>
      <div className="col-lg-6">
      <LogoAnimation></LogoAnimation>
      </div>
  </div>
</div>
<Menu></Menu>
    </div>
  );
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

const LandingText = () => {
  return <div className='container'>
  <h1 className='main-text-font color-white'>4th edition Information Security Summit.</h1>
  <p className='mt-5 explain-text color-grey'>The 4th edition of the Information  Security Symposium under the Consumex Cyber Security Series will take place in April at the ... This private gathering is hosting Information and Information Security Heads of various organizations across India for a 2 day conference discussing the latest trends, experiences, insights and expectations in the realm of cyber security.</p>
  </div>
}

const LogoAnimation = () => {
  return <div className='parent'>
  {/* <img src={circle} className='image1' alt='circle'></img> */}
  <img src={layer4} className = 'image2' alt = 'layer4'></img>
  <img src={consumex} className = 'image3' alt = 'consumex'></img>
  </div>
}

const Menu = () => {
  return <div id="menu_model" className="modal fade" tabIndex="-1" role="menu" aria-labelledby="myModalLabel" aria-hidden="true">
<div className="modal-dialog slideInDown animated modal-full">
 <div className="modal-content">
   <div className="container">
 <NavBar iss={iss_black} bars={bars_black}></NavBar>
 <div className='container menu-list'>
 <ol className='menu-list-counter'>
 <li><span className='main-text-font cool-link'><a href="/" className='small pl-5'>Home</a></span></li>
<li><span className='main-text-font cool-link'><a href="/series" className='small pl-5'>Series</a></span></li>
<li ><span className='main-text-font cool-link'><a href="#" className='small pl-5'>Speakers</a></span></li>
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

const Series = () => {
  return <div className='full-div darkbg'>
  <div className='container'>
  <NavBar iss={iss_logo} bars={bars}></NavBar>
  <SeriesContent></SeriesContent>
  </div>
  <Menu></Menu>
  </div>
}


const Workshop = () =>{
  return (
    <div className='container'>
    <div>
    <NavBar iss={iss_logo} bars={bars}></NavBar>
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
  <p className='mt-5 explain-text color-grey'>A day workshop on NIST Cyber Security Framework is being presented at the same venue on the ... and the ... lead by Mr Balaji Venkateshwar as the workshop leader. 
  This workshop offers 2 day interactive session by a leading Cyber Security Researcher, course materials and a certificate of attendance with follow up assistance after the course. <br></br><br></br>

This is a paid experience. <b>Click here</b> to register or know more details on the same. </p>
  </div>
}

const GearAnimation = () => {
  return <div className='gear-parent'>
  <img src={gear2}  className='gear1' alt='gear1'></img>
  <img src={gear3} className='gear3'  alt = 'gear3'></img>
  <img src={gear2} className='gear2' alt = 'gear2'></img>
  </div>
}

class SeriesContent extends Component {
  render() {
      return (
        <div className='container'>
             <div  className='center-screen' data-aos='slide-up'  data-aos-duration="1000">
        <img src={series1} className='mb-5 rotate-image' alt='series1'></img>
        <h1 className='color-white main-text-font'>Concluded</h1>
      <p className='color-white explain-text-font'>Recent - Information Security Summit - 3rd edition & Indian CISO awards, New Delhi, India – 13th April 2018,<br></br> held under the patronage of Ministry of Electronics and Information Technology (MeitY)<br></br><br></br>
<b>Request post event report.</b></p>
<div class="d-flex justify-content-center mb-5">
  <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
  <span class="text ml-1">Scroll down</span>
</div>
    </div>
    <div id = "second_div" className="center-screen"  data-aos='slide-up'  data-aos-duration="1000">
        <img src={series2} alt='series1' className='mb-5 rotate-image'></img>
        <h1 className='color-white main-text-font'>Upcoming</h1>
      <p className='color-white explain-text-font'>Information Security Summit & Indian CISO Awards – 5th edition
October, Hyderabad<br></br>
<b>View details</b>
<br></br><br></br>
Information Security Summit & Indian CISO Awards – 6th edition
October, Bangalore.<br></br>
<b>View details</b>
<br></br><br></br>
CISO – CIO Summit & Awards – 7th edition
November, Colombo, Sri Lanka.<br></br>
<b>View details</b> </p>
<div class="d-flex justify-content-center mb-5">
  <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
  <span class="text ml-1">Scroll down</span>
</div>
        </div>
    <div id="third_div"className="center-screen"  data-aos='slide-up'  data-aos-duration="1000">
        <img src={series3} alt='series1' className='mb-5 rotate-image'></img>
        <h1 className='color-white main-text-font'>Workshop</h1>
      <p className='color-white explain-text-font'>NIST Cyber Security Framework – Workshop – Hyderabad - October.<br></br>
<b>View details</b>
<br></br><br></br>
Cyber Security Dashboard – Workshop - Bangalore - October. <br></br>
<b>View details</b></p>
        </div>
    </div>
 )
      }}


const AwardsText = () => {
  return <div className='container'>
  <h1 className='main-text-font color-white'>Indain CISO Awards.</h1>
  <p className='mt-5 explain-text color-grey'>The Indian CISO Awards 2019 will honour individuals who have significantly contributed to the overall development of Information Security programs within their organizations. 
  We believe this recognition will further boost their efforts in the future to enable digital transformation, and motivate many to take note and follow suit.
Nominate for the 4th edition summit awards here.</p>
  </div>
}

const AwardsAnimation = () => {
  return (
    <div className='cotainer ml-5'>
    <img src={award_image} className='awards-image img-jump' alt='awards'></img>
    </div>
  )

}
const Awards = () => {
  return (
    <div className='container'>
    <div>
    <NavBar iss={iss_logo} bars={bars}></NavBar>
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

const initialState = {
  'optionsRadios':'',
  'name':'',
  'designation': '',
  'company':'',
  'phone':'',
  'mail':'',
  'comment':'',
  'showMessage':false
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
      <NavBar iss={iss_black} bars={bars_black}></NavBar>
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

export default App;
