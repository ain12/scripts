import React from "react";
import { StyledP } from "../styles.js";

const Line = (props) => {
    return (
        <div>
            <StyledP isCurrent={props.isCurrent}>{props.line}</StyledP>
        </div>
    )
}

export default Line;