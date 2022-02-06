import styles from "../styles/TeamRankings.module.sass";
import { Team } from "../lib/types";
import { useDrop } from "react-dnd";
import { useContext, useEffect } from "react";
import { Context } from "../contexts/context";

const TeamRankingCell = ({ team, i }) => {
	const {
		setTeamsDragDropBox,
		teamsDragDropBox,
		setTeamRankings,
		teamRankings,
	}: any = useContext(Context);
	const insertTeamIntoRankings = (
		index: number,
		val: Team,
		currentTeamRankings: Team[]
	) => {
		console.log(currentTeamRankings);
		let rankings: Team[] = [...currentTeamRankings];
		rankings[index] = val;
		console.log(rankings);
		setTeamRankings(rankings);
		console.log(teamRankings);
	};
	const [{ isOver }, dropRef] = useDrop(() => ({
		accept: "team-item",
		drop: (item: Team) => {
			setTeamsDragDropBox(
				teamsDragDropBox.filter(
					(teamItem: Team) => teamItem.seed !== item.seed
				)
			);
			insertTeamIntoRankings(i, item, teamRankings);
		},
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	// useEffect(() => console.log(teamRankings), [teamRankings]);

	return (
		<div
			ref={dropRef}
			className={styles.rankingsCells}
			style={{ filter: isOver ? "grayscale(0.3)" : "brightness(1)" }}
		>
			{!!team && (
				<span className="team-wrapper">
					<span>{team.area}</span>
					<span>{team.team}</span>
				</span>
			)}
		</div>
	);
};
export default TeamRankingCell;
