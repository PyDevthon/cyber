import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import './App.css';
import iss_logo from './iss_logo.png';
import circle from './circle.png';
import layer4 from './layer_4.png';
import consumex from './consumex.png';
import bars from './bars.png';
import iss_black from './iss_logo_black.png';
import bars_black from './bars_black.png';
import {mapOptions} from './constants.js';
import series1 from './series_1.png';
import series2 from './series_2.png';
import series3 from './series_3.png';
import gear2 from './medium_gear.png';
import gear3 from './large_gear.png';
import award_imgae from './awards.png';
import AOS from 'aos';

AOS.init()

class App extends Component {
  render() {
    return ( <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/workshop" component={Workshop} />
        <Route exact path="/awards" component = {Awards}/>
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
  return <div className='full-div blackbg'>
  <div class='container'>
    <NavBar iss={iss_logo} bars={bars}></NavBar>
    <div class='container top'>
    <h1 className='main-text-font color-white'>About Consumex.</h1>
    <p className='explain-text color-grey'>As a professional conference organizer, Consumex Productions business is to convey high-value information that is undoubtedly relevant for the end-users. Our platform offers real-world solutions to critical business challenges and our subjects have been widely researched and logically programmed.<br></br><br></br>
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
      <p className='explain-text'>
      <b>Ground Floor, Sanjana Arcade, 
        Near Mini Vidhana Soudha,
        Karkala – 574 104.</b>
      </p>
      <p className='explain-text'>+91 961 138 3802
enquiry@consumex-productions.com</p>
    </div>
    <div class="col-sm">
    <p className='explain-text'>
      <b>#30, Bella vista,
Apoorva Layout, Nagarabhavi,
Bangalore – 560 072.</b>
      </p>
      <p className='explain-text'>+91 761 925 6751
enquiry@consumex-productions.com</p>
    </div>
    <div class="col-sm">
    <p className='explain-text'>
      <b>SHARE THE INFORMATION 
SECURITY STORY WITH 
YOUR FRIENDS</b>
      </p>
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
const Home = () =>{
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

export default App;

const NavBar = ({iss, bars}) =>{
    return <nav className="navbar navbar-expand-xl">
    <ul className="navbar-nav">
      <li className="nav-item">
        <img src={iss} alt='iss_logo' className='img-fluid logo'></img>
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
  <img src={circle} className='image1' alt='circle'></img>
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
<li ><span className='main-text-font cool-link'><a href="#" className='small pl-5'>Register</a></span></li>
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
  <DemoCarousel></DemoCarousel>
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

class DemoCarousel extends Component {
  render() {
      return (
        <div className='container mt-5'>
             <div  data-aos='slide-up' data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease-in-out" className='center-screen'>
        <img src={series1} className='mb-5' alt='series1'></img>
        <h1 className='color-white main-text-font'>Concluded</h1>
      <p className='color-white explain-text-font'>Recent - Information Security Summit - 3rd edition & Indian CISO awards, New Delhi, India – 13th April 2018,<br></br> held under the patronage of Ministry of Electronics and Information Technology (MeitY)<br></br><br></br>
<b>Request post event report.</b></p>
        <div class="arrow bounce">
  <span className="fa fa-arrow-down fa-2x color-white"></span>
</div>
    </div>
    <div id = "second_div" className="center-screen" data-aos='slide-up' data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out">
        <img src={series2} alt='series1' className='mb-5'></img>
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
        </div>
        <div class="arrow bounce">
  <span className="fa fa-arrow-down fa-2x color-white"></span>
</div>
    <div id="third_div"className="center-screen" data-aos='slide-up' data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out">
        <img src={series3} alt='series1' className='mb-5'></img>
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
      <h1>Hello</h1>
      </div>
  </div>
</div>
<Menu></Menu>
    </div>
  )
}