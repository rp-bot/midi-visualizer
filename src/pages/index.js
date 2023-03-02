import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Piano from "@/components/Piano";
import Player from "@/components/Player";
import PianoRoll from "@/components/PianoRoll";

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
			<div className="max-h-[700px] overflow-scroll">
				<PianoRoll />
			</div>
			{/* <Piano /> */}
			{/* <Player /> */}
		</>
	);
}
