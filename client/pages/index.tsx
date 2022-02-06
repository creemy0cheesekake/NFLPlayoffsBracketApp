import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.sass";
import DragDropBox from "./../components/DragDropBox";
import TeamRankingsContainer from "../components/TeamRankingsContainer";
import { Team } from "../lib/types";
import { Context } from "../contexts/context";

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
	const [teamRankings, setTeamRankings] = useState<Team[]>(
		Array(13).fill(null)
	);

	const [componentsMounted, setComponentsMounted] = useState(false);
	useEffect(() => setComponentsMounted(true), []);
	const contextValue = {
		teamsDragDropBox,
		setTeamsDragDropBox,
		teamRankings,
		setTeamRankings,
	};
	return (
		<>
			<main className={styles.main}>
				{componentsMounted ? (
					<Context.Provider value={contextValue}>
						<DragDropBox teams={teamsDragDropBox} />
						<TeamRankingsContainer teams={teamRankings} />
					</Context.Provider>
				) : (
					<Loading show />
				)}
			</main>
		</>
	);
};

export default Home;
