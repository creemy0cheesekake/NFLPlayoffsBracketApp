import styles from "../styles/Loading.module.sass";

const Loading = ({ show }) => {
	return show ? (
		<div className={styles.loading}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	) : null;
};

export default Loading;
