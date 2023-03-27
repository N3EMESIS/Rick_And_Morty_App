import React from "react";

const ArrowLeft = ({ handleClick }) => (
    <div className="arrow-left" onClick={handleClick}>
        <span>{"<"}</span>
    </div>
);

const ArrowRight = ({ handleClick }) => (
    <div className="arrow-right" onClick={handleClick}>
        <span>{">"}</span>
    </div>
);

export { ArrowLeft, ArrowRight};