import styles from "../styles/DragDropBox.module.sass";
import { Team } from "../lib/types";
import TeamItem from "./TeamItem";

const DragDropBox = ({ teams }) => {
	return (
		<div className={styles.container}>
			{teams.map((team: Team) => (
				<TeamItem team={team} key={team.seed} />
			))}
		</div>
	);
};
export default DragDropBox;
