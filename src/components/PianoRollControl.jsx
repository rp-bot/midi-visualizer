import React, { useState, useEffect, useRef } from "react";
import {
	BsFillPlayFill,
	BsFillStopFill,
	BsFillRecordFill,
	BsFillTrashFill,
} from "react-icons/bs";
import * as Tone from "tone";

const PianoRollControl = ({ melodyRef }) => {
	const synth = useRef(null);
	const sampler = useRef(null);

	useEffect(() => {
		synth.current = new Tone.Synth().toDestination();
		sampler.current = new Tone.Sampler({
			urls: {
				A1: "A1.mp3",
				A2: "A2.mp3",
			},
			baseUrl: "https://tonejs.github.io/audio/casio/",
		}).toDestination();
	}, []);

	const handlePlay = async () => {
		const response = await fetch("api/melody_handler");
		const sequence = await response.json();
		melodyRef = sequence;
		melodyRef.NOTE_SEQUENCE.sort((a, b) => a.beat - b.beat);
		const sortedArray = melodyRef.NOTE_SEQUENCE.filter(
			(obj, index, arr) => {
				return (
					arr.findIndex(
						(t) => t.beat === obj.beat && t.note === obj.note
					) === index
				);
			}
		);

		
	};
	const handleStop = () => {};
	const deleteSequence = async () => {
		const response = await fetch("api/melody_handler", {
			method: "DELETE",
		});
		const dat = await response.json();

		console.log(dat);
	};
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
