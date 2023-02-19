import styles from "./MeetupDetails.module.css";

interface MeetupDetailsProps {
  id: string;
  title: string;
  description: string;
  image: string;
  address: string;
}

const MeetupDetails = (props: MeetupDetailsProps) => {
  return (
    <section className={styles.detail}>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetails;
