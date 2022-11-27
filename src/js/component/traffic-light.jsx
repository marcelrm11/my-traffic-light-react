import React, { useState } from "react";

function TrafficLight() {
    const [color, setColor] = useState('red');
    let next = color === "red" ? "green" : color === "orange" ? "red" : "orange";
    const [purple, setPurple] = useState(false);

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="traffic-stick"></div>
            <div className="traffic-body">
                <div 
                    className={"traffic-light red-off " + (color === "red" && "red-on")} 
                    onClick={() => setColor("red")}>
                </div>
                <div 
                    className={"traffic-light orange-off " + (color === "orange" && "orange-on")} 
                    onClick={() => setColor("orange")}>
                </div>
                <div 
                    className={"traffic-light green-off " + (color === "green" && "green-on")} 
                    onClick={() => setColor("green")}>
                </div>
                { purple && 
                <div 
                    className={"traffic-light purple-off " + (color === "purple" && "purple-on")} 
                    onClick={() => setColor("purple")}>
                </div> }
            </div>
            <button className="button-17 mt-4" role="button" onClick={() => setColor(next)}>SWITCH</button>
            <button className="button-17 mt-4" role="button" onClick={() => setPurple(!purple)}>Toggle Purple</button>
        </div>
    )
}

export default TrafficLight;