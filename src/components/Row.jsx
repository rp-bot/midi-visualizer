import React from "react";
import Box from "./Box";
import { STAFF } from "../constants/constants";

const Row = ({ keynum, bgshade, notesRef }) => {
	return (
		<>
			<div
				className={`h-5 text-sm grid grid-cols-16 grid-flow-row ${bgshade}`}
			>
				{STAFF.map((beatnum, index) => {
					return (
						<Box
							key={index}
							beat={beatnum}
							keynum={keynum}
							ref={notesRef}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Row;
