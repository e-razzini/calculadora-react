import React from "react";
import "../css/main.css";

export default  (props) => {

    return (
        <button className="btn btn-primary button-cal my-1 mx-2"
         onClick={e => props.click &&  props.click(props.numero)}
        >
            {props.numero}
        </button>
    )
}
