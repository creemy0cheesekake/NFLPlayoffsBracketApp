import React, { useState, useEffect } from "react";
import {
	DragDropContext,
	DraggableLocation,
	DropResult,
} from "react-beautiful-dnd";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.sass";
import DragDropBox from "./../components/DragDropBox";
import TeamRankings from "./../components/TeamRankings";

import { Team } from "../lib/types";

// TODO: create component that shows playoff bracket
const Home = () => {
	// if components arent mounted by the time the dnd elements are rendered, they wont work
	const [teamsDragDropBox, setTeamsDragDropBox] = useState<Team[]>([
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
	]);
	const [teamRankings, setTeamRankings] = useState<Team | null>();
	const [componentsMounted, setComponentsMounted] = useState(false);
	useEffect(() => setComponentsMounted(true), []);
	const handleDragEnd = ({ destination, source }: DropResult) => {
		if (!destination) return;
		if (destination.droppableId === source.droppableId) return;
		// checks whether element is being dragged from the box to the rankings or from the rankings to the box through the draggableId
		if (source.droppableId === "dragDrop") {
			// droppableId is formatted as either "dragDrop" or "rankings-<SEED>"
			const seed = destination.droppableId.slice(-1);
			console.log(seed);
		}
	};
	return (
		<>
			<main className={styles.main}>
				{componentsMounted ? (
					<DragDropContext onDragEnd={handleDragEnd}>
						<DragDropBox teams={teamsDragDropBox} />
						<TeamRankings team={teamRankings} rank={1} />
					</DragDropContext>
				) : (
					<Loading show />
				)}
			</main>
		</>
	);
};

export default Home;
