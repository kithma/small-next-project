import Link from "next/link";
import styles from "./Layouts.module.css";
	
const MainHeader = () => {
	return <header className={styles.header}>
		<div className={styles.logo}>
			<Link href="/">Next Events</Link>
		</div>
		<nav className={styles.navigation}>
			<ul>
				<li>
					<Link  href="/events">Browse all Events</Link>
				</li>
			</ul>
		</nav>
	</header>
}

export default MainHeader