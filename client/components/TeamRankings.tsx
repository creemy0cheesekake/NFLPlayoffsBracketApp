import styles from "../styles/DragDropBox.module.sass";
import { Draggable, Droppable } from "react-beautiful-dnd";

const DragDropBox = ({ teams, rank }) => {
	const team = teams[rank];
	return (
		<Droppable droppableId={"rankings-" + rank}>
			{provided => (
				<div
					className={styles.container}
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					{!!team && (
						<Draggable
							draggableId={team.team + "-draggableId"}
							index={team.seed}
						>
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
					)}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};
export default DragDropBox;
