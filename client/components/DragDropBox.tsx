import { useState } from "react";
import styles from "../styles/DragDropBox.module.sass";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Team } from "../lib/types";
import { v4 } from "uuid";

const DragDropBox = () => {
	const [teams, setTeams] = useState<Team[]>([
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
		{
			area: "New England ",
			team: "Patriots",
			seed: 1,
			logo: "patriots-logo",
		},
	]);
	return (
		<Droppable droppableId={"d"}>
			{provided => (
				<div
					className={styles.container}
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					{teams.map((team, i) => (
						<Draggable draggableId={i + "-draggableId"} index={i}>
							{provided => (
								<div
									key={team.team}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									ref={provided.innerRef}
								>
									<span className={styles.areaName}>
										{team.area}
									</span>
									<span className={styles.teamName}>
										{team.team}
									</span>
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};
export default DragDropBox;
