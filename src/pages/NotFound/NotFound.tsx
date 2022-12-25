import React from "react";
import classes from './NotFound.module.css'
const NotFound = () => {
    return (
        <div className={classes.notfound_style}>
            <h1> oops! </h1>
            <h2> 404 </h2>
            <h3> page not found </h3>
        </div>
    )
};

export default NotFound;