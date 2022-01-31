import React from "react";
import { Team } from "../lib/types";
import styles from "../styles/TeamRankingsContainer.module.sass";
import TeamRankingCell from "./TeamRankingCell";

const TeamRankingsContainer = ({ teams, dropRef }) => {
	return (
		<div ref={dropRef} className={styles.container}>
			{teams.map((team: Team, i: number) => (
				<React.Fragment key={i}>
					<div className={styles.rankingsCells}>
						<TeamRankingCell team={team} />
					</div>
					<div className={styles.rankingsCells}>{i + 1}</div>
				</React.Fragment>
			))}
		</div>
	);
};
export default TeamRankingsContainer;
