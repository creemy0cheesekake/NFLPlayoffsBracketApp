import React from "react";
import { useDrag } from "react-dnd";

const TeamItem = ({ team }) => {
	const [, dragRef] = useDrag(() => ({
		type: "team-item",
		item: { ...team },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	return (
		<div ref={dragRef} className="team-wrapper">
			<span>{team.area}</span>
			<span>{team.team}</span>
		</div>
	);
};

export default TeamItem;
