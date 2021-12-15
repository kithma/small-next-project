import Link from "next/link";
import styles from "./Events.module.css";

const EventItem = ({ id, title, image, date, location }) => {
	const formattedDate = new Date(date).toLocaleDateString('et',
		{
			day: "numeric",
			month: "long",
			year:"numeric"
		}
	);
	const formattedAddress = location.replace(', ', '\n');
	const url = `events/${id}`;

	return <li className={styles.item}>
		<img src={`/${image}`} alt="" />
		<div className={styles.content}>
			<div>
				<h2>{title}</h2>
				<div>
					<time>{formattedDate}</time>
				</div>
				<div>
					<address>{formattedAddress}</address>
				</div>
			</div>
			<div>
				<Link href={url}>Explore Event</Link>
			</div>
		</div>
	</li>
}

export default EventItem;