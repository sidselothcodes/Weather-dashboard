import React from "react";
import { MdAddBox, MdKeyboardArrowDown, MdWaterDrop,MdKeyboardArrowLeft, MdKeyboardArrowRight  } from 'react-icons/md';
import { BsDot, BsToggle2Off, BsSunrise, BsSunset, BsSun, BsThreeDots } from 'react-icons/bs';
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb';
import { FiNavigation, FiSun, FiCloud } from 'react-icons/fi';
import { CiTempHigh } from 'react-icons/ci';
import { LuCloudRain } from 'react-icons/lu';
import { RiRainyFill } from 'react-icons/ri';
import {CgLoadbar} from 'react-icons/cg';
import chart from './LineChart.jpg';
import humid from './humidity.jpg';
import sky from './skyscraper-img.jpg';
import windy from "./wind.jpg";
import prec from "./precipitation .jpg";
import uv from "./uv-index.jpg";
import feeling from './feels.jpg';
import rainy from './rain.jpg';


function App(props) {
  return (
    <div>
      <div className="card">
        <div className="right">
            <div className="big_box">
                <div className="navbar">
                <p className = "hours-title"> Upcoming hours</p>
                <p className = "small_box1"> 
                <div className="small_box1_text">
                Rain precipitation <MdKeyboardArrowDown />
                </div>
                </p>
                <p className = "small_box2">
                    <div className="small_box2_text">
                     Next days <MdKeyboardArrowRight/>
                     </div>
                </p>
                </div>
            
                <div className="pod">
                   <p className= "timing">
                        <span>Now</span>
                        <span>11:00</span>
                        <span>12:00</span>
                        <span>13:00</span>
                        <span>14:00</span>
                        <span>15:00</span>
                        <span>16:00</span>
                        <span>17:00</span>
                   </p>
                   <p className = "weather-symbols"> 
                       <span><FiSun/></span>
                       <span><FiSun/></span>
                       <span><FiCloud/></span>
                       <span><FiCloud/></span>
                       <span><FiSun/></span>
                       <span><FiCloud/></span>
                       <span><FiCloud/></span>
                       <span><FiSun/></span>
                   </p>
                   <p className= "temp-symbols"> 
                       <span>27° </span>
                       <span>28°</span> 
                       <span>28°</span> 
                       <span>29°</span>
                       <span>30°</span> 
                       <span>29°</span> 
                       <span>29° </span>
                       <span>28°</span>               
                    </p>
                    <div className="chart-box">
                <img className="chart-container" src= {chart} alt="linechart_img" />
                </div>
            </div>
            <div className = "table">
               <p>More details of today's weather</p>
            </div>
            <div className="card1">
              <div className = "top1">
                 <p className = "type1">Humidity <MdWaterDrop className="icon1"/></p>
                 <h3 className="middle1">82% <span style={{fontSize:12}}>bad</span></h3> 
                 <img className = "bottom1" src={humid}  />
              </div>   
           </div>

           <div className="card2">
           <div className = "top1">
                 <p className = "type1">UV index <BsSun className="icon1"/></p>
                 <h3 className="middle1"> 4 <span style={{fontSize:12}}>medium</span></h3>
                 <img className = "bottom1" src={uv}  />
              </div>   
           </div>

           <div className="card3">
           <div className = "top1">
                 <p className = "type1">Feels like<CiTempHigh className="icon1"/></p>
                 <h2 className="middle1">30°</h2> 
                 <img className = "bottom1" src={feeling}  />
              </div>   
           </div>
           <div className="card4">
           <img className ="bottom2" src={windy} />
           </div>
           <div className="card5">
           <div className = "top1">
                 <p className = "type1">Precipitation <LuCloudRain className="icon1"/></p>
                 <h3 className="middle1">1.4 cm </h3> 
                 <img className = "bottom1" src={prec}  />
              </div>   
           </div>
           <div className="card6">
           <div className = "top1">
                 <p className = "type1">Chance of rain<RiRainyFill className="icon1"/></p>
                 <h2 className="middle1">42%</h2> 
                 <img className = "bottom1" src={rainy}  />
              </div>   
           </div>
                
        </div>

        <div className="name1">
            <h4 className="name-tag">{props.name}</h4>
            <p className="info-tag">{props.info}</p>
        </div>
        
        <div className = "profile-cage">
            <BsThreeDots className="three-dots"/>
        <img className = "profile-img" src={props.img} alt="" />
        </div>
    
        
        </div>

        <div className="add_box_icon-container">
            <MdAddBox className="add_box_icon" />
            <CgLoadbar className="bar_icon" />
            <BsDot className="dot_icon" />
            <BsDot className="dot_icon" />
            <TbTemperatureCelsius className="celsius_icon" />
            <BsToggle2Off className="toggle_icon" />
            <TbTemperatureFahrenheit className="f_icon" />
        </div>
            
        <div className="left">
          <p className="info"> <FiNavigation className="nav_icon"/>{props.city}<BsSunrise className="sunrise_icon"/> {props.time1}</p>
          <p className="info">{props.email} <BsSunset className="sunset_icon"/> {props.time2}</p>
        </div>

        <div>
            <p className = "temp-icon"><MdKeyboardArrowLeft className= "left-key-icon"/> {props.temp}<MdKeyboardArrowRight className="right-key-icon"/></p>
            <p className= "sun-icon" > <BsSun /> {props.weather}</p>
        </div>
         
         <div className = "background-img">
         <img className="skyscraper-img" src={sky} alt="avatar_img" />
         </div>
      </div>
    </div>
  );
}

export default App;
