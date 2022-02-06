import React from "react";
import { Team } from "../lib/types";
import styles from "../styles/TeamRankings.module.sass";
import TeamRankingCell from "./TeamRankingCell";

const TeamRankingsContainer = ({ teams }) => {
	return (
		<div className={styles.container}>
			{teams.map((team: Team, i: number) => (
				<React.Fragment key={i}>
					<TeamRankingCell team={team} i={i} />
					<div className={styles.rankingsCells}>{i + 1}</div>
				</React.Fragment>
			))}
		</div>
	);
};
export default TeamRankingsContainer;
