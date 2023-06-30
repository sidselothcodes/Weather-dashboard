import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createRoot } from 'react-dom';

createRoot(document.getElementById('root')).render(<div>
    <App 
    name="Welcome back Isabella!"
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    city="New York, USA "
    email="Today 28 Sept "
    time1 = "07:19"
    time2 = "19:32"
    temp = "27°"
    weather = "Sunny"
    info = "Check out today's weather information" 
    />
    </div>);




