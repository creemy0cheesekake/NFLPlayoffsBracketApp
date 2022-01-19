import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.sass";
import DragDropBox from "./../components/DragDropBox";
import TeamRankings from "./../components/TeamRankings";

// TODO: create component that shows playoff bracket
const Home = () => {
	const handleDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		console.log("hi");
	};
	return (
		<main className={styles.main}>
			<DragDropContext onDragEnd={handleDragEnd}>
				{/* <Loading show /> */}
				<DragDropBox />
				<TeamRankings />
			</DragDropContext>
		</main>
	);
};

export default Home;
