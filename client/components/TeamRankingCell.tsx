import styles from "../styles/TeamRankingCell.module.sass";

const TeamRankingCell = ({ team }) => {
	return (
		<>
			{!!team && (
				<span className="team-wrapper">
					<span>{team.area}</span>
					<span>{team.team}</span>
				</span>
			)}
		</>
	);
};
export default TeamRankingCell;
