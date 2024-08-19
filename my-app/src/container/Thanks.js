import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Thanks.css";

export default function Thanks() {
    return (
        <div>
            <h1 className="thanks">
                Item added to Wardrobe!
            </h1>
            <div className="container">
                <div className="vertical-center">
                    <Link to="/add">
                        <button className="resubmit">Submit Another</button>
                    </Link><br/>
                    <Link to="/">
                        <button className="resubmit">Back Home</button>
                    </Link>
                </div>   
            </div>
        </div>
    );
}