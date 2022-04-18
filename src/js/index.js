import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/secondsCounter.jsx";

import "../styles/index.css";

let un = 0;
let dec = 0;
let cen = 0;
let mil = 0;
let milDec = 0;
let milCen = 0;

setInterval(function () {
	if (un > 9) {
		dec = dec + 1;
		un = 0;
	}
	if (dec > 9) {
		cen = cen + 1;
		dec = 0;
	}
	if (cen > 9) {
		mil = mil + 1;
		cen = 0;
	}
	if (mil > 9) {
		milDec = milDec + 1;
		mil = 0;
	}
	if (milDec > 9) {
		milCen = milCen + 1;
		milDec = 0;
	}

	ReactDOM.render(
		<SecondsCounter
			un={un}
			dec={dec}
			cen={cen}
			mil={mil}
			milDec={milDec}
			milCen={milCen}
		/>,
		document.querySelector("#app")
	);
	un = un + 1;
}, 1000);
