import { useState } from "react";
import styles from "../styles/DragDropBox.module.sass";

import { Team } from "../lib/types";

const DragDropBox = () => {
	const [teams, setTeams] = useState<Team[]>([]);
	return (
		<div className={styles.container}>
			{teams.map(team => (
				<div key={team.team}>
					<span className={styles.areaName}>{team.area}</span>
					<span className={styles.teamName}>{team.team}</span>
				</div>
			))}
		</div>
	);
};

export default DragDropBox;
