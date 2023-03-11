import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Piano from "@/components/Piano";
import Player from "@/components/Player";
import PianoRoll from "@/components/PianoRoll";
import {
	BsFillPlayFill,
	BsFillStopFill,
	BsFillRecordFill,
	BsFillTrashFill,
} from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Midi Visualizer</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="grid grid-cols-5 h-[800px] gap-4 p-10">
				<h1 className="col-span-1 col-start-2 justify-self-center self-center">
					HELLO
				</h1>
				<div className="justify-self-center self-center grid grid-cols-3 gap-2 ">
					<BsFillPlayFill
						size={40}
						className="col-span-1 justify-self-center self-center hover:text-green-500"
					/>
					<BsFillStopFill
						size={40}
						className="col-span-1 col-start-2 justify-self-center self-center hover:text-yellow-400"
					/>
					<BsFillRecordFill
						size={40}
						className="col-span-1 col-start-3 justify-self-center self-center hover:text-red-500"
					/>
				</div>
				<div className="col-span-1 col-start-4 px-2 justify-self-end self-center hover:text-red-500">
					<BsFillTrashFill size={20} />
				</div>
				<div className="col-span-3 col-start-2 justify-self-center self-center ">
					<PianoRoll />
				</div>
			</div>
			{/* <Piano /> */}
			{/* <Player /> */}
		</>
	);
}
