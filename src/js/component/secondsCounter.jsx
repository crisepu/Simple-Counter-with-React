import React from "react";
import PropType from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<span>
						<i className="fa-regular fa-hourglass"></i>
					</span>
					<span>{props.milCen}</span>
					<span>{props.milDec}</span>
					<span>{props.mil}</span>
					<span>{props.cen}</span>
					<span>{props.dec}</span>
					<span>{props.un}</span>
				</div>
			</div>
		</div>
	);
};

export default SecondsCounter;
