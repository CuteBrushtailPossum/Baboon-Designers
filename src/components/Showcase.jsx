import React from "react";
import house6 from '../images/house6.jpg'
import house5 from '../images/house5.2.jpg'
import house4 from '../images/house4.jpg'
import house3 from '../images/house3.jpg'
import house2 from '../images/HOUSE2.jpg'
import house1 from '../images/house1.jpg'
function Showcase() {
    return(
        <div id="showcase">
        <h2>showcase</h2>
        <hr/>
        <div class="images">
            <img src={house6}/>
            <img src={house2}/>
            <img src={house3}/>
            <img src={house4}/>
            <img src={house5}/>
            <img src={house1}/>
        </div>
    </div>
    )
}
export default Showcase

