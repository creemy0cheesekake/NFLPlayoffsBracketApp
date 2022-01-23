import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.sass";
import DragDropBox from "./../components/DragDropBox";
import TeamRankings from "./../components/TeamRankings";

// TODO: create component that shows playoff bracket
const Home = () => {
	// if components arent mounted by the time the dnd elements are rendered, they wont work
	const [componentsMounted, setComponentsMounted] = useState(false);
	useEffect(() => setComponentsMounted(true));
	const handleDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		console.log("hi");
	};
	return (
		<>
			<main className={styles.main}>
				{componentsMounted ? (
					<DragDropContext onDragEnd={handleDragEnd}>
						<DragDropBox />
						<TeamRankings />
					</DragDropContext>
				) : (
					<Loading show />
				)}
			</main>
		</>
	);
};

export default Home;
