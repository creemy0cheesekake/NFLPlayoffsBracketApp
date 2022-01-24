import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
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
			team: "Patriots1",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots2",
			seed: 2,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots3",
			seed: 3,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots4",
			seed: 4,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots5",
			seed: 5,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots6",
			seed: 6,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots7",
			seed: 7,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots8",
			seed: 8,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots9",
			seed: 9,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots10",
			seed: 10,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots11",
			seed: 11,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots12",
			seed: 12,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots13",
			seed: 13,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots14",
			seed: 14,
			logo: "patriots-logo",
		},
	]);
	const [teamRankings, setTeamRankings] = useState<Team[]>(Array(14));
	const [componentsMounted, setComponentsMounted] = useState(false);
	useEffect(() => setComponentsMounted(true), []);
	const handleDragEnd = ({ destination, source }: DropResult) => {
		if (!destination) return;
		if (destination.droppableId === source.droppableId) return;
		// checks whether element is being dragged from the box to the rankings or from the rankings to the box through the draggableId
		if (source.droppableId === "dragDrop") {
			// droppableId is formatted as either "dragDrop" or "rankings-<SEED>"
			let newRankings = [...teamRankings];
			// this will take the place of the element that existed in that spot if there was one
			const OldElement: Team | undefined = newRankings.splice(
				1,
				1,
				teamsDragDropBox.splice(source.index, 1)[0]
			)[0];
			if (OldElement)
				setTeamsDragDropBox([...teamsDragDropBox].concat([OldElement]));
			setTeamRankings(newRankings);
			console.log(teamRankings);
		}
	};
	return (
		<>
			<main className={styles.main}>
				{componentsMounted ? (
					<DragDropContext onDragEnd={handleDragEnd}>
						<DragDropBox teams={teamsDragDropBox} />
						<TeamRankings teams={teamRankings} rank={1} />
					</DragDropContext>
				) : (
					<Loading show />
				)}
			</main>
		</>
	);
};

export default Home;
