import React from "react";
import { Team } from "../lib/types";
import { useDrag } from "react-dnd";

const TeamItem = ({ team }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "team-item",
		item: { ...team },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	return (
		<div ref={drag} className="team-wrapper">
			<span>{team.area}</span>
			<span>{team.team}</span>
		</div>
	);
};

export default TeamItem;
