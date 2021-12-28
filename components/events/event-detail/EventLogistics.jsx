import AddressIcon from '../../../public/icons/address-icon';
import DateIcon from '../../../public/icons/date-icon';
import LogisticsItem from './LogisticsItem';
import styles from './EventLogistics.module.css';
import Image from "next/image";

const EventLogistics = ({ date, address, image, imageAlt }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  console.log(address,"address")
  const addressText = address.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt={imageAlt} width={340} height={340}/>
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
