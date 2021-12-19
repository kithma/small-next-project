import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/events/event-detail/EventSummary";
import EventLogistics from "../../components/events/event-detail/EventLogistics";
import EventContent from "../../components/events/event-detail/EventContent";

const EventPage = () => {
	const router = useRouter();
	const event = getEventById(router.query.eventId);
	console.log(event);
	return (<div>
		{event ?
			<>
				<EventSummary title={event.title}/>
				<EventLogistics
					date={event.date}
					address={event.location}
					image={event.image}
					imageAlt={event.title}
				/>
				<EventContent />
				<p>{event.description}</p>
			</> :
			<p> No  event found </p>
		}
	</div>)
}

export default EventPage;