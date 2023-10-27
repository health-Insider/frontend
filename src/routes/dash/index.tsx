import './index.css'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

function bars(s,c,t){
    var steps = document.getElementById("steps_prog")
    var calories = document.getElementById("calories_prog")
    var time = document.getElementById("time_prog")
    steps.style.background = "radial-gradient(closest-side, #000000 79%, transparent 80% 100%),conic-gradient(#5E65FF " + s + "%, #000000 0)"
    calories.style.background = "radial-gradient(closest-side, #000000 79%, transparent 80% 100%),conic-gradient(#FF5252 " + c + "%, #000000 0)"
    time.style.background = "radial-gradient(closest-side, #000000 79%, transparent 80% 100%),conic-gradient(#A5FF9D " + t + "%, #000000 0)"
    document.getElementById("circles")?.classList.remove("disabled")
}
export default function Dash() {
    
    return (
        <>
            <div id="app">
                <h1>Dashboard</h1>
                <div id="main">
                    <div id="circles" className="disabled">
                        <div className="progress_bar" id="steps_prog">
                            <div className="progress_bar" id="calories_prog">
                                <div className="progress_bar" id="time_prog">
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="cards_cont">
                        <div className='card' id="steps">
                            <h3>Steps</h3>
                            <h2>6900</h2>
                        </div>
                        <div className='card' id="calories">
                            <h3>Calories</h3>
                            <h2>420</h2>
                        </div>
                        <div className='card' id="time">
                            <h3>Time</h3>
                            <h2>01:09:00</h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}