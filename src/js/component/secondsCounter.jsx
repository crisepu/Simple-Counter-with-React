import React from "react";
import PropType from "prop-types";

const SecondsCounter = (props) => {

    
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<i className="fa-regular fa-hourglass"></i>
					<span>{props.digit}</span>
				</div>
			</div>
		</div>
	);
};

export default SecondsCounter;
