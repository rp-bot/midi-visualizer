import React from "react";
import {
	BsFillPlayFill,
	BsFillStopFill,
	BsFillRecordFill,
} from "react-icons/bs";

const PianoRollControl = () => {
	return (
		<div className="justify-self-center self-center grid grid-cols-3 gap-2 ">
			<button className="col-span-1 justify-self-center self-center">
				<BsFillPlayFill size={40} className=" hover:text-green-500" />
			</button>
			<button className="col-span-1 justify-self-center self-center">
				<BsFillStopFill size={40} className="hover:text-yellow-400" />
			</button>
			<button className="col-span-1 justify-self-center self-center">
				<BsFillRecordFill size={40} className="hover:text-red-500" />
			</button>
		</div>
	);
};

export default PianoRollControl;
