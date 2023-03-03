import React from "react";
import Box from "./Box";
import { STAFF } from "../constants/constants";

const Row = ({ keynum }) => {
	return (
		<>
			<div className="h-5 text-sm grid grid-cols-16 grid-flow-row">
				{STAFF.map((beatnum, index) => {
					return <Box key={index} beat={beatnum} keynum={keynum} />;
				})}
			</div>
		</>
	);
};

export default Row;
