import React from "react";
import '../container/Container.css';

export default props=>{
    return (
        <div className={props.className}>{props.children}</div>
    );
}