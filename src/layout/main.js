import React from "react"
import About from "../intro/About"


function Main() {
    return (
        <div className="base">
            <div className="browser">
                <div>X</div>
                <div>Y</div>
                <div>Z</div>
            </div>
            
            <div className="main">
            <div className="nav">
                NAV
            </div>
            <div className="content">
                <About/>
            content
            </div>
            </div>
            
        </div>
    )
}

export default Main