import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div className="container">
			<div className="row bg-dark text-white fs-1 m-3 p-1 text-center">
				<div className="col-md ">
					<i className="fa-regular fa-clock"></i>
				</div>
				<div className="col-md">{props.milCen}</div>
				<div className="col-md">{props.milDec}</div>
				<div className="col-md">{props.mil}</div>
				<div className="col-md">{props.cen}</div>
				<div className="col-md">{props.dec}</div>
				<div className="col-md">{props.un}</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	milCen: PropTypes.number,
	milDec: PropTypes.number,
	mil: PropTypes.number,
	cen: PropTypes.number,
	dec: PropTypes.number,
	un: PropTypes.number,
};

export default SecondsCounter;
