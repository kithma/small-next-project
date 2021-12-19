import styles from "./Events.module.css";
import Button from "../shared/Button";
import DateIcon from "../../public/icons/date-icon";
import AddressIcon from "../../public/icons/address-icon";
import ArrowRightIcon from "../../public/icons/arrow-right-icon";

const EventItem = ({ id, title, image, date, location }) => {
	const formattedDate = new Date(date).toLocaleDateString('en-US',
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
			<div className={styles.summary}>
				<h2>{title}</h2>
				<div className={styles.date}>
					<DateIcon/>
					<time>{formattedDate}</time>
				</div>
				<div className={styles.address}>
					<AddressIcon/>
					<address>{formattedAddress}</address>
				</div>
			</div>
			<div className={styles.actions}>
				<Button
					link={url}
				>
					<span>Explore Event</span>
					<span className={styles.icon}><ArrowRightIcon/></span>
				</Button>
			</div>
		</div>
	</li>
}

export default EventItem;