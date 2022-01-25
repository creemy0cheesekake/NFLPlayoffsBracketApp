import styles from "../styles/TeamRankingCell.module.sass";

const TeamRankingCell = ({ teams, rank }) => {
	const team = teams[rank];
	return (
		<>
			{!!team ? (
				<>
					<span className={styles.areaName}>{team.area}</span>
					<span className={styles.teamName}>{team.team}</span>
				</>
			) : (
				<div>{teams.toString()}</div>
			)}
		</>
	);
};
export default TeamRankingCell;
