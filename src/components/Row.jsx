import React from "react";
import Box from "./Box";
import { STAFF } from "../constants/constants";

const Row = ({ keynum }) => {
	return STAFF.map((beat) => {
		return (
			<div className="">
				<Box beat={beat} />
			</div>
		);
	});
};

export default Row;
