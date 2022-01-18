import Loading from "../components/Loading";
import styles from "../styles/Home.module.sass";

const Home = () => {
	return (
		<main className={styles.main}>
			<Loading show />
		</main>
	);
};

export default Home;
