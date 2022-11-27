import React, { useState } from "react";

function TrafficLight() {
    const [color, setColor] = useState('');

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
            </div>
        </div>
    )
}

export default TrafficLight;