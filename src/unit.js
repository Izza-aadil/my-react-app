import React, {useSate} from "react";
import axios from "axios" 
 
export default function Position(props){
const [location, setLocation] = useState(false);
    function setLocation(position) {
   lon:position.coords.longitude;
   lat: position.coords.latitude;}
    

  axios
    .get(`${apiUrl}?appid=${apiKey}&units=${unit}&lat=${lat}&lon=${lon}`)
    .then(realTemperature);

function searchLocation() {
  navigator.geolocation.setLocation(getPositionWeather);
}
if (setLocation)
return (
     <div>
         <button class="btn location-btn">
                        <img src="static/location-pin.png" />
                    </button>
                    </div>
)
}  