import { getEventById, getFeaturedEvents } from "../../utils/api-utils";
import EventSummary from "../../components/events/event-detail/EventSummary";
import EventLogistics from "../../components/events/event-detail/EventLogistics";
import EventContent from "../../components/events/event-detail/EventContent";
import Head from "next/head";

const EventPage = ({ event }) => {
	return (<div>
		{event &&
			<>
				<Head><title>{event.title}</title></Head>
				<EventSummary title={event.title}/>
				<EventLogistics
					date={event.date}
					address={event.location}
					image={event.image}
					imageAlt={event.title}
				/>
				<EventContent />
				<p>{event.description}</p>
			</> }
	</div>)
}

export default EventPage;

export const getStaticProps = async (context) => {

	const event = await getEventById(context.params.eventId);

	if (!event)
		return {
			notFound : true
		}

	return {
		props: {
			event
		},
		revalidate: 600
	}
};

export const getStaticPaths = async () => {
	const events = await getFeaturedEvents();
	const paths = events.map(event => ({params:{eventId:event.id}}));

	return {
		paths,
		fallback: true,
	}
}