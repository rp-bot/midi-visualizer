import React, { useState } from "react";
import {
	BsFillPlayFill,
	BsFillStopFill,
	BsFillRecordFill,
	BsFillTrashFill,
} from "react-icons/bs";

const PianoRollControl = ({ melodyRef }) => {
	// const [midiSequence, setMidiSequence] = useState([])
	const handlePlay = async () => {
		const response = await fetch("api/melody_handler");
		const sequence = await response.json();
		melodyRef = sequence;
		console.log(melodyRef.NOTE_SEQUENCE);
	};
	const handleStop = () => {};
	const deleteSequence = () => {};
	return (
		<>
			<div className="justify-self-center self-center grid grid-cols-3 gap-2 ">
				<button
					className="col-span-1 justify-self-center self-center"
					onClick={handlePlay}
				>
					<BsFillPlayFill
						size={40}
						className=" hover:text-green-500"
					/>
				</button>
				<button
					className="col-span-1 justify-self-center self-center"
					onClick={handleStop}
				>
					<BsFillStopFill
						size={40}
						className="hover:text-yellow-400"
					/>
				</button>
				<button className="col-span-1 justify-self-center self-center">
					<BsFillRecordFill
						size={40}
						className="hover:text-red-500"
					/>
				</button>
			</div>
			<button
				className="col-span-1 col-start-4 px-2 justify-self-center self-center hover:text-red-500"
				onClick={deleteSequence}
			>
				<BsFillTrashFill size={20} />
			</button>
		</>
	);
};

export default PianoRollControl;
