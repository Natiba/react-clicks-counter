import React from "react";
import "../style-sheets/Counter.css"

function Counter({ numClicks }) {
    return (
<div className="counter">
{numClicks}
</div>
    );
}

export default Counter;