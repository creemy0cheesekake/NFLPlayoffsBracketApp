import styles from "../styles/DragDropBox.module.sass";
import { Team } from "../lib/types";

const DragDropBox = ({ teams }) => {
	return (
		<div className={styles.container}>
			{teams.map((team: Team, i: number) => (
				<div draggable key={i}>
					<span className={styles.areaName}>{team.area}</span>
					<span className={styles.teamName}>{team.team}</span>
				</div>
			))}
		</div>
	);
};
export default DragDropBox;
