import { useState } from "react";
import styles from "../styles/DragDropBox.module.sass";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import { Team } from "../lib/types";

const DragDropBox = ({ teams }) => {
	return (
		<Droppable droppableId={"dragDrop"}>
			{provided => (
				<div
					className={styles.container}
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					{teams.map((team: Team, i: number) => (
						<Draggable
							draggableId={i + "-draggableId"}
							index={i}
							key={i}
						>
							{provided => (
								<div
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
