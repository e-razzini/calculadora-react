import React  from "react";
import "../css/display.css";

export default (props) => {
    return (
        <div className="w-100 text-white display-full p-2 border border-secondary mb-3 rounded">
           {props.value}
        </div>
    )
}